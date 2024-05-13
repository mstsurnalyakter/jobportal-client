import Banner from "../../components/Banner"
import JobByCategory from "../../components/JobByCategory"


const Home = () => {
  return (
    <div className="space-y-20 dark:text-gray-100">
      <Banner />
      <JobByCategory />
    </div>
  );
}

export default Home