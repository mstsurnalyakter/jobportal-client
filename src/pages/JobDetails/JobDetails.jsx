import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";
import  { useState } from 'react';
import axios from 'axios';
// import { useMutation } from '@tanstack/react-query';
import useAuth from "../../hooks/useAuth";
import DynamicTitle from "../../components/DynamicTitle";

const JobDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [resumeLink, setResumeLink] = useState("");


  const url = `/job/${id}`;
  const { data, isLoading, refetch, isError, error } = useQuery({
    queryKey: ["job"],
    queryFn: async () => {
      const { data } = await axiosSecure(url);
      return data;
    },
  });

const url2 = "https://jobportal-server-ochre.vercel.app/apply-job";


  const { mutateAsync } = useMutation({
    mutationKey: ["apply-job"],
    mutationFn: async (applicationData) => {
      try {
        const { data } = await axios.post(url2, applicationData);

        if (data.insertedId) {
          toast.success("Application submitted successfully!");
          refetch()
          navigate("/applied-jobs");

        }
      } catch (error) {
        toast.error(error.response.data)
      }
    },
  });

     const handleApply = async () => {
       const {
         _id,
         image,
         jobTitle,
         minSalary,
         maxSalary,
         jobCategory,
         postingDate,
         deadline,
         jobDescription,
         user: user1,
       } = data || {};
       try {
         const applicationData = {
           jobId: _id,
           userName: user?.displayName || "",
           userEmail: user?.email || "",
           resumeLink,
           image,
           jobTitle,
           minSalary,
           maxSalary,
           jobCategory,
           postingDate,
           deadline,
           jobDescription,
           user1,
         };


         await mutateAsync(applicationData);
       } catch (error) {
         console.error("Error handling application:", error);
       }
     };




  const openApplicationModal = () => {
    const isDeadlinePassed = new Date(data?.deadline) < new Date();
    const isEmployer = data?.user?.email === user?.email;

    if (isEmployer) {
      return toast.error("You are the employer of this job.");
    }

    if (isDeadlinePassed) {
      return toast.error(
        "The deadline for this job has passed. You cannot apply."
      );
    }



    Swal.fire({
      title: "Submit your Resume Link",
      html: `
      <input type="text" placeholder="Your Name" class="swal2-input" value="${user?.displayName}" readonly />
      <input type="email" placeholder="Your Email" class="swal2-input" value="${user?.email}" readonly />
      <input type="url" id="resumeLinkInput" placeholder="Enter resume link" class="swal2-input" />
    `,
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        const resumeLink = document.getElementById("resumeLinkInput").value;
        setResumeLink(resumeLink);
        if (!resumeLink) {
          Swal.showValidationMessage("Please provide a valid resume link.");
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        handleApply();
      }
    });
  };





  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    toast.error(error.message);
  }


  const {
    image,
    jobTitle,
    minSalary,
    maxSalary,
    jobCategory,
    postingDate,
    deadline,
    jobDescription,
    jobApplicantsNumber,
    user: user1,
  } = data || {};



  return (
    <div className="bg-white dark:bg-gray-900">
      <DynamicTitle pageTitle="Job Details" />

      <header className="relative h-64 md:h-80 lg:h-96">
        <img src={image} alt="" className="object-cover w-full h-full brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute left-6 right-6 bottom-6 text-white">
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-4xl font-extrabold">{jobTitle}</h1>
            <div className="mt-2 flex flex-wrap gap-3 items-center">
              <span className="px-3 py-1 rounded-full bg-white/10">{jobCategory}</span>
              <span className="px-3 py-1 rounded-full bg-white/10">{jobApplicantsNumber || 0} applicants</span>
              <span className="px-3 py-1 rounded-full bg-white/10">Deadline: {new Date(deadline).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl font-bold">{jobTitle}</h2>
                  <p className="text-sm text-gray-500">Posted on {new Date(postingDate).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">${minSalary}-{maxSalary} <span className="text-sm font-normal">/month</span></div>
                  <div className="text-sm text-gray-500">Type: {jobCategory}</div>
                </div>
              </div>

              <div className="mt-6 prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold">Job description</h3>
                <p>{jobDescription}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold mb-2">Employer</h4>
                <p className="text-sm text-gray-600">{user1?.name}</p>
                <p className="text-sm text-gray-600">{user1?.email}</p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold mb-2">Details</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Applicants:</strong> {jobApplicantsNumber}</li>
                  <li><strong>Posting Date:</strong> {new Date(postingDate).toLocaleDateString()}</li>
                  <li><strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}</li>
                  <li><strong>Category:</strong> {jobCategory}</li>
                </ul>
              </div>
            </div>

            {/* Related / similar jobs placeholder */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h4 className="font-semibold mb-3">Similar jobs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 border rounded hover:shadow-lg">Sample Job Title at Company A</div>
                <div className="p-3 border rounded hover:shadow-lg">Sample Job Title at Company B</div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="flex items-center gap-3">
                  <img src={image} alt="company" className="w-14 h-14 rounded object-cover" />
                  <div>
                    <h5 className="font-semibold">{user1?.name}</h5>
                    <p className="text-sm text-gray-500">{user1?.email}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-gray-500">Salary</div>
                  <div className="text-lg font-semibold">${minSalary}-{maxSalary} <span className="text-sm font-normal">/month</span></div>
                </div>

                <button onClick={openApplicationModal} className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white px-4 py-3 rounded-md font-semibold">Apply now</button>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h6 className="font-semibold mb-2">Need help?</h6>
                <p className="text-sm text-gray-500">Contact support at <a className="text-[#00a26e]" href="mailto:jobportal@gmail.com">jobportal@gmail.com</a></p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default JobDetails