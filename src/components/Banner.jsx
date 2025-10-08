import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import banner1 from '../assets/images/banner/banner1.png'
import banner2 from '../assets/images/banner/banner2.jfif'
import banner3 from '../assets/images/banner/banner3.jfif'
import banner4 from '../assets/images/banner/banner4.jfif'
import banner5 from '../assets/images/banner/banner5.jfif'

const Banner = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
      >
        <SwiperSlide>
          <div
            className="min-h-[520px] bg-center bg-cover object-cover flex items-center justify-center relative"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative z-10 max-w-4xl text-center px-6">
              <div className="inline-block bg-white/85 dark:bg-gray-900/60 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <h1 className="md:text-5xl text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  Find Your Next Opportunity
                </h1>
                <p className="text-lg mt-4 text-gray-700 dark:text-gray-200">
                  Explore a wide range of job opportunities tailored to your
                  skills and interests.
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <a href="/all-jobs" className="inline-flex items-center gap-3 bg-[#00a26e] hover:bg-[#00c37f] focus:outline-none focus:ring-4 focus:ring-[#00a26e]/30 text-white px-5 py-3 rounded-lg font-medium shadow">
                    Browse Jobs
                  </a>
                  <a href="/register" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 px-4 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-200">
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-[520px] bg-center bg-cover object-cover flex items-center justify-center relative" style={{ backgroundImage: `url(${banner2})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/25" />
            <div className="relative z-10 max-w-4xl text-center px-6">
              <div className="inline-block bg-white/90 dark:bg-gray-900/60 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <h1 className="md:text-5xl text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">Advance Your Career</h1>
                <p className="text-lg mt-4 text-gray-700 dark:text-gray-200">Take the next step in your career with our extensive collection of job listings from top companies.</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <a href="/all-jobs" className="inline-flex items-center gap-3 bg-[#00a26e] hover:bg-[#00c37f] focus:outline-none focus:ring-4 focus:ring-[#00a26e]/30 text-white px-5 py-3 rounded-lg font-medium shadow">Browse Jobs</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-[520px] bg-center bg-cover object-cover flex items-center justify-center relative" style={{ backgroundImage: `url(${banner3})` }}>
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 max-w-4xl text-center px-6">
              <div className="inline-block bg-white/90 dark:bg-gray-900/60 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <h1 className="md:text-5xl text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">Discover Your Dream Job</h1>
                <p className="text-lg mt-4 text-gray-700 dark:text-gray-200">Unlock new career possibilities and find the job that aligns with your passions and aspirations.</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <a href="/all-jobs" className="inline-flex items-center gap-3 bg-[#00a26e] hover:bg-[#00c37f] focus:outline-none focus:ring-4 focus:ring-[#00a26e]/30 text-white px-5 py-3 rounded-lg font-medium shadow">Browse Jobs</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-[520px] bg-center bg-cover object-cover flex items-center justify-center relative" style={{ backgroundImage: `url(${banner4})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/25" />
            <div className="relative z-10 max-w-4xl text-center px-6">
              <div className="inline-block bg-white/90 dark:bg-gray-900/60 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <h1 className="md:text-5xl text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">Join a Thriving Community</h1>
                <p className="text-lg mt-4 text-gray-700 dark:text-gray-200">Connect with like-minded professionals and access valuable resources to propel your career forward</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <a href="/all-jobs" className="inline-flex items-center gap-3 bg-[#00a26e] hover:bg-[#00c37f] focus:outline-none focus:ring-4 focus:ring-[#00a26e]/30 text-white px-5 py-3 rounded-lg font-medium shadow">Browse Jobs</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-[520px] bg-center bg-cover object-cover flex items-center justify-center relative" style={{ backgroundImage: `url(${banner5})` }}>
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 max-w-4xl text-center px-6">
              <div className="inline-block bg-white/90 dark:bg-gray-900/60 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <h1 className="md:text-5xl text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">Empower Your Future</h1>
                <p className="text-lg mt-4 text-gray-700 dark:text-gray-200">Empower yourself with the tools and opportunities needed to succeed in today&apos;s competitive job market.</p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <a href="/all-jobs" className="inline-flex items-center gap-3 bg-[#00a26e] hover:bg-[#00c37f] focus:outline-none focus:ring-4 focus:ring-[#00a26e]/30 text-white px-5 py-3 rounded-lg font-medium shadow">Browse Jobs</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

Banner.propTypes = {}

export default Banner