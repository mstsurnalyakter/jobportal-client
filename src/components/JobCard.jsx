
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const JobCard = ({job}) => {
    const {
      _id,
      jobTitle,
      userName,
      jobPostingDate,
      applicationDeadline,
      minSalary,
      maxSalary,
      jobApplicantsNumber
    } = job || {};
    console.log(job);
  return (
    <div className="w-full mx-auto max-w-sm border border-[#FF4153] px-5 py-5 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800 ">
          Post: {new Date(jobPostingDate).toLocaleDateString()}
        </span>
        <span className="text-xs font-light text-gray-800 ">
          Deadline: {new Date(applicationDeadline).toLocaleDateString()}
        </span>
      </div>

      <div>
        <h1 className="mt-2  text-lg font-semibold text-[#FF4153] ">
          {jobTitle}
        </h1>

        <p className="mt-2 text-sm font-medium text-gray-600 ">
          Salary: ${minSalary} - ${maxSalary}/month
        </p>
        <p className="mt-2 text-sm font-medium text-gray-600 ">
          applicants: {jobApplicantsNumber}
        </p>
        <p className="mt-2 text-sm font-medium text-gray-600 ">
          Author: {userName}
        </p>
      </div>
      <button className="bg-[#FF4153] text-white px-2 py-1 rounded mt-3">
        <Link to={`/job/${_id}`}>View Details</Link>
      </button>
    </div>
  );
}

JobCard.propTypes = {
  job:PropTypes.object.isRequired
}

export default JobCard