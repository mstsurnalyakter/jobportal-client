const Newsletter = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#00a26e]/10 to-[#00d08f]/10 dark:bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm shadow-lg text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Stay ahead — get job alerts</h3>
        <p className="text-gray-500 dark:text-gray-300 mt-2">Subscribe for weekly curated jobs and career tips.</p>

        <form className="mt-6 flex items-center justify-center gap-3 max-w-md mx-auto">
          <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900 text-gray-800 dark:text-gray-100" />
          <button type="submit" className="px-5 py-3 rounded-lg bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white font-semibold shadow-md">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
