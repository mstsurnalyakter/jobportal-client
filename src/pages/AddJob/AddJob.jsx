import { MdAlarmAdd } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import DynamicTitle from "../../components/DynamicTitle";
import { useNavigate } from "react-router-dom";


const AddJob = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [postingDate] = useState(new Date());
  const [deadline, setDeadline] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      image: "",
      jobTitle: "",
      minSalary: "",
      maxSalary: "",
      jobCategory: "",
      jobDescription: "",
    },
  });

  const watched = watch();

  const url = "https://jobportal-server-ochre.vercel.app/add-jobs";

  const { mutateAsync, isLoading: posting } = useMutation({
    mutationKey: ["addJob"],
    mutationFn: async (jobInfo) => {
      try {
        const { data } = await axios.post(url, jobInfo, { withCredentials: true });

        if (data.insertedId) {
          toast.success("Job posted successfully");
          navigate("/my-jobs");
        }
        return data;
      } catch (error) {
        toast.error(error.message);
      }
    },

  });

  const onSubmit = async (data) => {
    const {
      image,
      jobTitle,
      minSalary,
      maxSalary,
      jobCategory,
      jobDescription,
    } = data;

    const jobInfo = {
      image,
      jobTitle,
      minSalary,
      maxSalary,
      jobCategory,
      postingDate,
      deadline,
      jobDescription,
      jobApplicantsNumber: 0,
      user: {
        email: user?.email,
        name: user?.displayName,
      },
    };

    try {
      await mutateAsync(jobInfo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <DynamicTitle pageTitle="Post a Job" />

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
        <header className="p-6 border-b">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white rounded-lg">
              <MdAlarmAdd size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Create a new job post</h1>
              <p className="text-sm text-gray-500">Publish a clear, attractive job to reach the right candidates.</p>
            </div>
          </div>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Job Title</label>
              <input {...register("jobTitle", { required: true })} className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#00a26e]" placeholder="Senior Frontend Developer" />
              {errors.jobTitle && <p className="text-xs text-red-500 mt-1">Job title is required</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Image URL</label>
                <input {...register("image")} className="w-full p-3 border rounded-md" placeholder="https://..." />
                <p className="text-xs text-gray-400 mt-1">Optional — will show in the job card preview.</p>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <select {...register("jobCategory", { required: true })} className="w-full p-3 border rounded-md">
                  <option value="">Choose a category</option>
                  <option value="On Site">On Site</option>
                  <option value="Remote">Remote</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
                {errors.jobCategory && <p className="text-xs text-red-500 mt-1">Please select a category</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Minimum Salary</label>
                <input {...register("minSalary", { required: true })} type="number" className="w-full p-3 border rounded-md" placeholder="35000" />
                {errors.minSalary && <p className="text-xs text-red-500 mt-1">Provide minimum salary</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Maximum Salary</label>
                <input {...register("maxSalary", { required: true })} type="number" className="w-full p-3 border rounded-md" placeholder="60000" />
                {errors.maxSalary && <p className="text-xs text-red-500 mt-1">Provide maximum salary</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Posting Date</label>
                <input readOnly value={new Date(postingDate).toLocaleDateString()} className="w-full p-3 border rounded-md bg-gray-50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Deadline</label>
                <DatePicker selected={deadline} onChange={(d) => setDeadline(d)} className="w-full p-3 border rounded-md" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <textarea {...register("jobDescription", { required: true })} rows={6} className="w-full p-3 border rounded-md" placeholder="Describe the role, responsibilities and requirements." />
              {errors.jobDescription && <p className="text-xs text-red-500 mt-1">Description is required</p>}
            </div>
          </div>

          {/* Right column - preview & publish */}
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="p-4 border rounded-lg bg-gray-50 dark:bg-slate-800">
                <div className="h-36 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                  {watched.image ? (
                    <img src={watched.image} alt="job" className="object-cover w-full h-full" />
                  ) : (
                    <div className="text-sm text-gray-400">No image</div>
                  )}
                </div>

                <h3 className="mt-3 font-semibold text-lg">{watched.jobTitle || "Job Title Preview"}</h3>
                <p className="text-sm text-gray-500">{watched.jobCategory || "Category"} • ${watched.minSalary || "-"} - ${watched.maxSalary || "-"}</p>
                <p className="mt-2 text-xs text-gray-400">Deadline: {deadline.toLocaleDateString()}</p>
              </div>

              <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
                <h4 className="font-medium mb-2">Publish</h4>
                <p className="text-xs text-gray-500 mb-3">Preview your job and publish it when it&apos;s ready.</p>
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 px-4 py-2 bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white rounded-md shadow">{posting ? 'Posting...' : 'Publish'}</button>
                  <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-3 py-2 border rounded-md">Preview</button>
                </div>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
