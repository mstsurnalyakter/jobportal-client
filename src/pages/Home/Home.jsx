import Banner from "../../components/Banner"
import DynamicTitle from "../../components/DynamicTitle";
import JobByCategory from "../../components/JobByCategory"
import JobProcess from "../../components/JobProcess";
import Testimonials from "../../components/Testimonials";
import TrustedCompanies from "../../components/TrustedCompanies";
import FeaturedStats from "../../components/FeaturedStats";
import Newsletter from "../../components/Newsletter";
import HeroSearch from "../../components/HeroSearch";
import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen ">
      <DynamicTitle pageTitle="Home" />

      {/* sticky thin progress bar at top */}
      <motion.div
        role="progressbar"
        aria-hidden="false"
        aria-valuemin={0}
        aria-valuemax={100}
        className="fixed left-0 right-0 top-0 h-1 z-50 bg-transparent"
        style={{ scaleX }}
      >
        <div className="h-1 w-full bg-gradient-to-r from-[#00a26e] via-[#00b27a] to-[#00d08f] shadow-md" />
      </motion.div>

      <main className="container mx-auto px-6 py-16 space-y-20">
        <section className="rounded-3xl overflow-hidden shadow-lg bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm">
          <Banner />
        </section>


        {/* New quick-win UI sections to boost trust and conversion */}
        <FeaturedStats />



        <JobByCategory />
        <JobProcess />
        <Testimonials />

        <Newsletter />


      </main>
    </div>
  );
}

export default Home