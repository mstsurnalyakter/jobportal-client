import React from 'react'

const logos = ['/logo.png', '/logo2.png', '/code.jfif', '/How_access_tokens_work_image.webp']

const TrustedCompanies = () => {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Trusted by top companies</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">Companies of all sizes hire through our platform.</p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6 flex-wrap">
        {logos.map((src, idx) => (
          <div key={idx} className="p-3 bg-white/80 dark:bg-gray-800/60 rounded-lg shadow-sm w-36 h-20 flex items-center justify-center">
            <img src={src} alt={`logo-${idx}`} className="max-h-12 object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustedCompanies
