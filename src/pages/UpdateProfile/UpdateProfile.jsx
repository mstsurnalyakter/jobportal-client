
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import DynamicTitle from "../../components/DynamicTitle";
import { useState } from "react";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useAuth();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(user?.photoURL || "");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      fullName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
    },
  });

  const photoURL = watch("photoURL");

  // update preview when photo URL changes
  if (photoURL !== preview) setPreview(photoURL || user?.photoURL || "");

  const onSubmit = async (data) => {
    const { fullName, photoURL } = data;
    if (!fullName) {
      toast.error("Please provide your full name");
      return;
    }

    try {
      await updateUserProfile(fullName, photoURL);
      setUser((u) => ({ ...u, displayName: fullName, photoURL }));
      toast.success("Profile updated successfully");
      navigate("/profile");
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <DynamicTitle pageTitle="Update Profile" />

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Left preview */}
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-900 shadow">
              <img
                src={preview || "/logo2.png"}
                alt="avatar preview"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">{user?.displayName || "Unnamed"}</h3>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <p className="mt-3 text-xs text-gray-400 text-center">Tip: paste an image URL or upload via your account to show a profile image.</p>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Edit your profile</h2>
            <p className="text-sm text-gray-500 mb-6">Keep your profile up to date so employers can find you faster.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Full name</label>
                  <input
                    {...register("fullName")}
                    className="w-full p-3 rounded-md border focus:ring-2 focus:ring-[#00a26e]"
                    placeholder="Full name"
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email (read only)</label>
                  <input
                    {...register("email")}
                    readOnly
                    className="w-full p-3 rounded-md border bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Photo URL</label>
                <input
                  {...register("photoURL")}
                  className="w-full p-3 rounded-md border"
                  placeholder="https://..."
                />
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" className="px-5 py-3 bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white rounded-md shadow">Save changes</button>
                <button type="button" onClick={() => {
                  // reset preview to current user photo
                  setPreview(user?.photoURL || "");
                }} className="px-4 py-3 border rounded-md">Reset preview</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
