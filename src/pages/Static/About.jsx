const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfeef] dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Job Portal</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">We connect talented candidates with innovative companies. Our mission is to simplify hiring with thoughtful search, human-centered job discovery, and reliable tools for employers and applicants.</p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
            <a href="#how-we-work" className="px-6 py-3 rounded-md bg-[#00a26e] text-white font-medium">How we work</a>
            <a href="#team" className="px-6 py-3 rounded-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100">Meet the team</a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">To empower every job seeker and employer with tools that make hiring transparent, fast, and fair.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">Create the most trusted platform where talent meets opportunity, backed by data and people-first design.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Transparency</li>
              <li>Quality</li>
              <li>Empathy</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold">Trusted by companies of all sizes</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">We partner with startups and enterprises to surface talent efficiently.</p>
            </div>
            <div className="flex items-center gap-6">
              <img src={'/logo.png'} alt="company" className="w-24 opacity-80" />
              <img src={'/logo2.png'} alt="company" className="w-24 opacity-80" />
              <img src={'/test-img.webp'} alt="company" className="w-24 opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">How it works</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">A simple, three-step hiring process designed to save time and highlight the best matches.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
            <div className="w-16 h-16 bg-[#ecfdf5] dark:bg-[#042f1a] rounded-full flex items-center justify-center mx-auto text-2xl text-[#00a26e]">1</div>
            <h4 className="mt-4 font-semibold">Post a job</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Create clear, searchable listings with structured fields that attract the right candidates.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
            <div className="w-16 h-16 bg-[#ecfdf5] dark:bg-[#042f1a] rounded-full flex items-center justify-center mx-auto text-2xl text-[#00a26e]">2</div>
            <h4 className="mt-4 font-semibold">Review & shortlist</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Use filters and candidate profiles to quickly surface high-fit applicants.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
            <div className="w-16 h-16 bg-[#ecfdf5] dark:bg-[#042f1a] rounded-full flex items-center justify-center mx-auto text-2xl text-[#00a26e]">3</div>
            <h4 className="mt-4 font-semibold">Hire & onboard</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Send offers, collect e-signatures, and welcome new hires in minutes.</p>
          </div>
        </div>
      </section>

      <section id="team" className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Meet the team</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">A small, cross-functional team focused on product and people.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {['Alex','Maya','Omar','Lina'].map((name) => (
            <div key={name} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 flex items-center justify-center text-2xl">{name.charAt(0)}</div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">Product & Engineering</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#00a26e] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">Ready to find your next role or hire great talent?</h3>
          <p className="mt-3 max-w-2xl mx-auto">Join thousands of companies and candidates using Job Portal to find better matches faster.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="/registration" className="bg-white text-[#00a26e] px-6 py-3 rounded-md font-semibold">Get Started</a>
            <a href="/contact" className="border border-white px-6 py-3 rounded-md">Contact Sales</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
