
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useJobs from '../hooks/useJobs';
import JobCard from "./JobCard";
import Spinner from "./Spinner";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";
import toast from "react-hot-toast";


const JobByCategory = () => {
  const { user } = useAuth();


  const {data,isLoading} = useJobs();
  if (isLoading) {
    return <div className="flex items-center justify-center mt-10">
      <Spinner/>
    </div>
  }

    const handleUser = () => {
      if (!user) {
        toast.error("You have to log in first to view details");
        <Navigate to={"/login"} state={location?.pathname || "/"} />;
      }
    };


  return (
    <>
      <Tabs>
        <div className="">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 dark:text-gray-100 capitalize lg:text-4xl">
            Browse Jobs By Categories
          </h1>

          <p className="max-w-3xl mx-auto my-6 text-center text-gray-600 dark:text-gray-300">
            Find roles filtered by work style—on-site, remote, hybrid or part-time. Toggle a category to explore curated listings.
          </p>

          <div className="flex justify-center mb-8 mt-6">
            {/* add `tab-pill-style` so selected tab gets gradient pill + underline from CSS */}
            <TabList className="tab-pill-style flex gap-3 flex-wrap justify-center">
              <Tab className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/60 hover:scale-105 transition cursor-pointer">On-Site</Tab>
              <Tab className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/60 hover:scale-105 transition cursor-pointer">Remote</Tab>
              <Tab className="px-4 py-2 rounded-full  bg-gray-100 dark:bg-gray-800/60 hover:scale-105 transition cursor-pointer">Hybrid</Tab>
              <Tab className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/60 hover:scale-105 transition cursor-pointer">Part-Time</Tab>
              <Tab className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/60 hover:scale-105 transition cursor-pointer">All Jobs</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data?.length > 0 ? (
                data
                  ?.filter((j) => j.jobCategory === "On Site")
                  .map((job) => (
                    <JobCard key={job?._id} job={job} handleUser={handleUser} />
                  ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">No jobs available right now.</div>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data?.length > 0 ? (
                data
                  ?.filter((j) => j.jobCategory === "Remote")
                  .map((job) => (
                    <JobCard key={job?._id} job={job} handleUser={handleUser} />
                  ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">No jobs available right now.</div>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data?.length > 0 ? (
                data
                  ?.filter((j) => j.jobCategory === "Part-Time")
                  .map((job) => (
                    <JobCard key={job?._id} job={job} handleUser={handleUser} />
                  ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">No jobs available right now.</div>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data?.length > 0 ? (
                data
                  ?.filter((j) => j.jobCategory === "Hybrid")
                  .map((job) => (
                    <JobCard key={job?._id} job={job} handleUser={handleUser} />
                  ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">No jobs available right now.</div>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data?.length > 0 ? (
                data.map((job) => (
                  <JobCard key={job?._id} job={job} handleUser={handleUser} />
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-gray-500">No jobs available right now.</div>
              )}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
}



export default JobByCategory;