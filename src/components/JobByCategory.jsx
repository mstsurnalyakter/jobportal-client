
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useJobs from '../hooks/useJobs';
import JobCard from "./JobCard";
import Spinner from "./Spinner";

const JobByCategory = () => {
  const {data,isLoading,refetch} = useJobs();
  if (isLoading) {
    return <div className="flex items-center justify-center mt-10">
      <Spinner/>
    </div>
  }

  return (
    <>
      <Tabs>
        <div className="">
          <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 capitalize lg:text-3xl ">
            Browse Jobs By Categories
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-100">
            Are you seeking the perfect job that aligns with your preferred work
            setup? Look no further! Our comprehensive job listings cover a
            variety of work arrangements, ensuring you find the ideal fit.
            Whether you’re interested in on-site positions, remote work, hybrid
            roles, or part-time opportunities, explore our categorized listings
            to discover your next career move.
          </p>
          <div className="flex justify-center mb-10 mt-10">
            <TabList>
              <Tab>On-Site Job</Tab>
              <Tab>Remote Job</Tab>
              <Tab>Hybrid</Tab>
              <Tab>Part-Time Job</Tab>
              <Tab>All Jobs</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {data?.length > 0 &&
                data
                  ?.filter((j) => j.jobCategory === "On Site")
                  .map((job) => <JobCard key={job?._id} job={job} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {data?.length > 0 &&
                data
                  ?.filter((j) => j.jobCategory === "Remote")
                  .map((job) => <JobCard key={job?._id} job={job} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {data?.length > 0 &&
                data
                  ?.filter((j) => j.jobCategory === "Part-Time")
                  .map((job) => <JobCard key={job?._id} job={job} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {data?.length > 0 &&
                data
                  ?.filter((j) => j.jobCategory === "Hybrid")
                  .map((job) => <JobCard key={job?._id} job={job} />)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {data?.length > 0 &&
                data.map((job) => <JobCard key={job?._id} job={job} />)}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
}



export default JobByCategory;