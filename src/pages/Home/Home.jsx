import Banner from "../../components/Banner"
import JobByCategory from "../../components/JobByCategory"
import JobProcess from "../../components/JobProcess";
import Testimonials from "../../components/Testimonials";


const Home = () => {
  return (
    <div className="space-y-20 dark:text-gray-100">
      <Banner />
      <JobByCategory />
      <JobProcess/>
      <Testimonials/>
    </div>
  );
}

export default Home