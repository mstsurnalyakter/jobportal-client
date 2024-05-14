
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const JobProcess = () => {
  return (
    <div>
      <h2 className="text-center py-5 font-bold text-4xl">
        Our Job <span className="text-[#FF4153]">Process</span>
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* card1 */}
        <Card className="mt-6 mx-auto border-2">
          <CardBody className="flex items-center justify-center flex-col space-y-3">
            <div className="text-4xl">
              <ion-icon name="people-outline" className=""></ion-icon>
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-[#FF4153]"
            >
              Create Account
            </Typography>
            <Typography>
              Sign up and create your account on our platform. Provide necessary
              details such as your name, email address, and password to
              register.
            </Typography>
            <Link className="" to={"/all-jobs"}>
              <button className="bg-[#FF4153] px-3 flex items-center gap-2 py-2 rounded-md text-white">
                <span>Apply Job</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </Link>
          </CardBody>
        </Card>
        {/* card2 */}
        <Card className="mt-6 mx-auto border-2">
          <CardBody className="flex items-center justify-center flex-col space-y-3">
            <div className="text-4xl">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-[#FF4153]"
            >
              Search Job
            </Typography>
            <Typography>
              Explore job listings based on your preferences and requirements.
              Use our search filters to find relevant job opportunities that
              match your skills and interests.
            </Typography>
            <Link className="" to={"/all-jobs"}>
              <button className="bg-[#FF4153] flex items-center gap-2 px-3 py-2 rounded-md text-white">
                <span>Apply Job</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </Link>
          </CardBody>
        </Card>
        {/* card3 */}
        <Card className="mt-6 mx-auto border-2">
          <CardBody className="flex items-center justify-center flex-col space-y-3">
            <div className="text-4xl">
            <ion-icon name="document"></ion-icon>
            </div>
            <Typography variant="h5" color="" className="mb-2 text-[#FF4153]">
              Upload Resume
            </Typography>
            <Typography>
              Enhance your job application by uploading your resume. Make sure
              to keep your resume updated with your latest skills, experiences,
              and qualifications to attract potential employers.
            </Typography>
            <Link className="" to={"/all-jobs"}>
              <button className="bg-[#FF4153] flex items-center gap-2 px-3 py-2 rounded-md text-white">
                <span>Apply Job</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default JobProcess