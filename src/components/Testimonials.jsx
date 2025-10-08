import img from '/test-img.webp'
import TestimonialsCard from './TestimonialsCard/TestimonialsCard';

const Testimonials = () => {
  return (
    <div className="">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
        <h2 className="text-3xl font-extrabold dark:text-gray-200">What Our Candidates Say</h2>
        <p className="text-gray-600 dark:text-gray-300">Discover the voices of success — real stories from candidates who found careers through our platform.</p>
      </div>

      <section>
        <div className="container mx-auto p-6 sm:py-12 lg:py-20 lg:flex lg:items-center lg:justify-center gap-8">
          <div className="hidden lg:flex items-center justify-center p-6 mt-4 h-72 w-1/3">
            <img src={img} alt="candidate" className="object-cover h-72 w-72 rounded-2xl shadow-xl" />
          </div>

          <div className="w-full lg:w-1/2">
           
              <TestimonialsCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials