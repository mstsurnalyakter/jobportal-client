const stats = [
  { label: 'Jobs Posted', value: '12.4k' },
  { label: 'Companies', value: '3.2k' },
  { label: 'Applications', value: '84k' },
  { label: 'Hires', value: '9.1k' },
]

const FeaturedStats = () => {
  return (
    <section className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/80 dark:bg-gray-800/60 p-6 rounded-2xl shadow-md text-center">
            <div className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{s.value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-300 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedStats
