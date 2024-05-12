import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const JobDetails = () => {
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();

    const url = `/job/${id}`;
     const { data, isLoading, refetch, isError, error } = useQuery({
       queryKey: ["job"],
       queryFn: async () => {
         const { data } = await axiosSecure(url);
         return data;
       },
     });

    console.log(data);

    const  {
      image,
      jobTitle,
      minSalary,
      maxSalary,
      jobCategory,
      postingDate,
      deadline,
      jobDescription,
      jobApplicantsNumber,
      user
    } = data || {}

  return (
    <div>
      <header className="">
        <div
          className="h-[350px]"
        >
            <img src={image} alt="" className="w-full h-full" />
        </div>
      </header>

      <div className="shadow-md border space-y-5 mx-auto px-8 py-8 lg:py-10 lg:px-10">
        <h2 className="text-4xl font-medium">{jobTitle}</h2>
        <div className="flex gap-3">
          <p>
            <b>Name:</b> {user?.name}
          </p>
          <p>
            <b>Email:</b> {user?.email}
          </p>
        </div>
        <p>
          <b>Applicants:</b> {jobApplicantsNumber}
        </p>
        <p>
          <b>Type:</b> {jobCategory}
        </p>
        <p>
          <b>Salary:</b> ${minSalary}-${maxSalary}
          <span className="text-sm">/month</span>
        </p>
        <p>
          <b>Posting Date:</b> {new Date(postingDate).toLocaleDateString()}
        </p>
        <p>
          <b>Deadline:</b> {new Date(deadline).toLocaleDateString()}
        </p>
        <p>
          <b>Description:</b> {jobDescription}
        </p>
        <button
          className="px-4 w-full py-2 mt-4 rounded  bg-gradient-to-r from-[#FF4153] via-purple-600 to-[#FF4153] bg-300% text-transparent animate-gradient
              duration-200 text-white cursor-pointer font-semibold"
          type="submit"
          value="Add"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default JobDetails