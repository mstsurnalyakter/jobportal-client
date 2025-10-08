import { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic client-side validation
    if (!form.name || !form.email || !form.message) {
      toast.error('Please complete name, email and message before sending.');
      return;
    }
    setSubmitting(true);
    // simulate submit
    setTimeout(() => {
      setSubmitting(false);
      toast.success('Thanks! Your message has been received. We will get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfeef] dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in touch</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">Questions, feedback, or want to partner? Send us a message and we&apos;ll respond within 1-2 business days.</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-white dark:bg-gray-800 shadow rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="px-4 py-3 rounded-md border w-full" />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="px-4 py-3 rounded-md border w-full" />
              </div>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="px-4 py-3 rounded-md border w-full" />
              <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Your message" className="px-4 py-3 rounded-md border w-full" />

              <div className="flex items-center gap-4">
                <button type="submit" disabled={submitting} className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00a26e] to-[#00d08f] text-white px-6 py-3 rounded-md">
                  {submitting ? 'Sending...' : 'Send message'}
                </button>
                <p className="text-sm text-gray-500">Or email us at <a className="text-[#00a26e]" href="mailto:jobportal@gmail.com">jobportal@gmail.com</a></p>
              </div>
            </form>
          </section>

          <aside className="space-y-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Contact details</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">987 Andre Plain Suit High Street 838, Lake Chestertown, USA</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Phone: <a href="tel:+6599887733" className="text-[#00a26e]">+65 9988 7733</a></p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Email: <a href="mailto:jobportal@gmail.com" className="text-[#00a26e]">jobportal@gmail.com</a></p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Follow us</h3>
              <div className="flex items-center gap-3 text-2xl text-gray-700 dark:text-gray-200">
                <a href="#" aria-label="Twitter"> <ion-icon name="logo-twitter"></ion-icon></a>
                <a href="#" aria-label="Github"> <ion-icon name="logo-github"></ion-icon></a>
                <a href="#" aria-label="LinkedIn"> <ion-icon name="logo-linkedin"></ion-icon></a>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Our office</h3>
              <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">Map placeholder</div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Contact;
