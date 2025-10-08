import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";
import DynamicTitle from "../../components/DynamicTitle";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile, setUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [resumeName, setResumeName] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const { data: applied = [], isLoading } = useQuery({
    queryKey: ["profile-applied", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/applied-job?email=${user?.email}`,
        { withCredentials: true }
      );
      return data;
    },
  });

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(name, photo);
      // Update local auth user for immediate UI feedback
      setUser((u) => ({ ...u, displayName: name, photoURL: photo }));
      toast.success("Profile updated");
      setEditing(false);
    } catch (err) {
      toast.error(err.message || "Failed to update profile");
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setResumeName(file.name);
    // For now we just simulate upload
    toast.success(`Resume uploaded: ${file.name}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <DynamicTitle pageTitle="Profile" />

      <div className="bg-gradient-to-r from-white/60 via-[#f7f9fb] to-white/60 dark:from-slate-800 dark:via-slate-900 rounded-xl p-6 shadow">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left - Profile Card */}
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <img
                      src={user?.photoURL || "/logo2.png"}
                      alt={user?.displayName || "Avatar"}
                      className="w-28 h-28 rounded-full ring-4 ring-white dark:ring-slate-900 object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {user?.displayName || "Unnamed User"}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {user?.email}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link
                      to="/update-profile"
                      className="px-3 py-2 bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white rounded-md text-sm shadow"
                    >
                      Edit Profile
                    </Link>
                    <button
                      onClick={() => setEditing((s) => !s)}
                      className="px-3 py-2 border border-gray-200 dark:border-slate-700 rounded-md text-sm"
                    >
                      {editing ? "Cancel" : "Quick Edit"}
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#00a26e]">{applied?.length || 0}</p>
                    <p className="text-xs text-gray-500">Applied</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#00a26e]">0</p>
                    <p className="text-xs text-gray-500">Saved</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#00a26e]">0</p>
                    <p className="text-xs text-gray-500">Posted</p>
                  </div>
                </div>

                {editing && (
                  <form onSubmit={handleSaveProfile} className="mt-6 space-y-3">
                    <div>
                      <label className="text-xs text-gray-500">Name</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-slate-900"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Photo URL</label>
                      <input
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-slate-900"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-2 bg-[#00a26e] text-white rounded-md">Save</button>
                      <button onClick={() => setEditing(false)} type="button" className="px-3 py-2 border rounded-md">Cancel</button>
                    </div>
                  </form>
                )}

                <div className="mt-6 border-t pt-4">
                  <label className="block text-xs text-gray-500 mb-2">Resume</label>
                  <div className="flex gap-2">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeUpload}
                      className="text-sm"
                    />
                  </div>
                  {resumeName && <p className="mt-2 text-xs text-gray-500">{resumeName}</p>}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow">
                <h4 className="text-sm font-semibold mb-2">Contact</h4>
                <p className="text-sm text-gray-500">{user?.email}</p>
                <p className="text-sm text-gray-500 mt-2">Member since: {user?.metadata?.creationTime?.split(" ")[0] || "-"}</p>
              </div>
            </div>
          </aside>

          {/* Right - Tabs and content */}
          <main className="md:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Profile</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-3 py-1 rounded-md text-sm ${activeTab === "overview" ? "bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white" : "border"}`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("applied")}
                    className={`px-3 py-1 rounded-md text-sm ${activeTab === "applied" ? "bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white" : "border"}`}
                  >
                    Applied Jobs
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`px-3 py-1 rounded-md text-sm ${activeTab === "settings" ? "bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white" : "border"}`}
                  >
                    Settings
                  </button>
                </div>
              </div>

              <div className="mt-4">
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">Welcome back, <span className="font-semibold text-gray-800 dark:text-gray-100">{user?.displayName || user?.email}</span>. Here&apos;s a quick snapshot of your activity.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-md">
                        <h5 className="text-sm text-gray-500">Recent Applications</h5>
                        {isLoading ? (
                          <div className="py-6 flex justify-center"><Spinner /></div>
                        ) : (
                          <ul className="mt-3 space-y-2">
                            {applied?.slice(0, 5)?.map((j) => (
                              <li key={j._id} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#00a26e] rounded-full mt-2" />
                                <div>
                                  <p className="text-sm font-medium">{j.jobTitle}</p>
                                  <p className="text-xs text-gray-500">{new Date(j.postingDate).toLocaleDateString()}</p>
                                </div>
                              </li>
                            ))}
                            {applied?.length === 0 && <p className="text-xs text-gray-500">No recent applications</p>}
                          </ul>
                        )}
                      </div>

                      <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-md">
                        <h5 className="text-sm text-gray-500">Account</h5>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Email: {user?.email}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Display Name: {user?.displayName || "-"}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "applied" && (
                  <div className="mt-4">
                    {isLoading ? (
                      <div className="py-6 flex justify-center"><Spinner /></div>
                    ) : (
                      <div className="space-y-3">
                        {applied?.length === 0 && <p className="text-sm text-gray-500">You have not applied to any jobs yet.</p>}
                        {applied?.map((job) => (
                          <div key={job._id} className="p-4 rounded-md border dark:border-slate-700 bg-white dark:bg-slate-800">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-semibold">{job.jobTitle}</p>
                                <p className="text-xs text-gray-500">{job.user1?.name} • {job.jobCategory}</p>
                              </div>
                              <div className="text-xs text-gray-500">{new Date(job.postingDate).toLocaleDateString()}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "settings" && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Account settings are available on the Edit Profile page.</p>
                    <div className="mt-4">
                      <Link to="/update-profile" className="px-4 py-2 bg-[#00a26e] text-white rounded-md">Open Editor</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;