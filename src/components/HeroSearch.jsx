import { useState } from 'react'

const HeroSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (onSearch) onSearch({ query, location, type })
  }

  return (
    <section className="mx-auto max-w-4xl bg-white/70 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-lg">
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
        <div className="col-span-1 md:col-span-2">
          <label className="sr-only">Search jobs</label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Job title, company, or keyword"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div className="flex gap-3">
          <div className="hidden md:block">
            <label className="sr-only">Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location (optional)"
              className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 w-48 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <button type="submit" className="px-5 py-3 bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white rounded-xl shadow hover:scale-[1.01] transition">
            Search
          </button>
        </div>

        <div className="md:col-span-3 flex flex-wrap gap-2 mt-2">
          <button type="button" onClick={() => { setQuery('React Developer'); if(onSearch) onSearch({ query: 'React Developer', location, type }) }} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm">React</button>
          <button type="button" onClick={() => { setQuery('Backend Engineer'); if(onSearch) onSearch({ query: 'Backend Engineer', location, type }) }} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm">Backend</button>
          <button type="button" onClick={() => { setQuery('Remote'); setType('Remote'); if(onSearch) onSearch({ query: 'Remote', location, type: 'Remote' }) }} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm">Remote</button>
          <button type="button" onClick={() => { setQuery('Senior'); if(onSearch) onSearch({ query: 'Senior', location, type }) }} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm">Senior</button>
        </div>
      </form>
    </section>
  )
}

export default HeroSearch
