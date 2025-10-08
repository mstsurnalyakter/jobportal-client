
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const JobProcess = () => {

     const data = [
       {
         icon: "people-outline",
         title: "Create Account",
         description:
           "Sign up and create your account on our platform. Provide necessary details such as your name, email address, and password to register.",
       },
       {
         icon: "search-outline",
         title: "Search Job",
         description:
           " Explore job listings based on your preferences and requirements. Use our search filters to find relevant job opportunities that match your skills and interests.",
       },
       {
         icon: "document",
         title: "Upload Resume",
         description:
           "   Enhance your job application by uploading your resume. Make sureto keep your resume updated with your latest skills, experiences, and qualifications to attract potential employers.",
       },
     ];

  return (
    <div>
      <h2 className="text-center py-5 font-extrabold text-4xl mx-9">
        Our Job <span className="text-[#00a26e]">Process</span>
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6">
        A simple, three-step flow to help you get hired faster. Clean, clear, and focused.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((cardData, idx) => (
          <motion.div
            key={cardData.icon + idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <Card className="mt-4 rounded-2xl border-0 shadow-lg hover:shadow-2xl">
              <CardBody className="flex items-start flex-col space-y-4 p-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00a26e] to-[#00d08f] text-white text-2xl shadow-inner">
                  <ion-icon name={cardData.icon}></ion-icon>
                </div>
                <Typography variant="h6" color="blue-gray" className="mb-1 text-[#00a26e] font-semibold">
                  {cardData.title}
                </Typography>
                <Typography variant="small" className="text-gray-600 dark:text-gray-300">{cardData.description}</Typography>
                <div className="mt-4 w-full flex justify-end">
                  <Link to={"/all-jobs"} className="inline-flex items-center gap-2 bg-[#00a26e] hover:bg-[#00c37f] text-white px-4 py-2 rounded-lg">
                    <span>Apply Job</span>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default JobProcess