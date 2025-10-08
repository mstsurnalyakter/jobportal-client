import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo2 from '/logo2.png'
import { AiFillTwitterCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-10 bg-gradient-to-r from-[#042e1b] via-[#003a2f] to-[#062b2b] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img className="w-12" src={logo2} alt="" />
            <div>
              <h3 className="text-xl font-bold">Job Portal</h3>
              <p className="text-sm text-gray-200">Find talent. Find opportunity.</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-200">We help companies hire faster and candidates find meaningful roles. Trusted by startups and enterprises worldwide.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Useful Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">News</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/all-jobs">All Jobs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-200">987 Andre Plain Suit High Street 838</p>
          <p className="text-sm text-gray-200">Lake Chestertown, USA</p>
          <p className="text-sm text-gray-200 mt-2">Phone: <a className="text-white font-medium" href="tel:+6599887733">+65 9988 7733</a></p>
          <p className="text-sm text-gray-200">Email: <a className="text-white font-medium" href="mailto:jobportal@gmail.com">jobportal@gmail.com</a></p>
          <div className="mt-4 flex items-center gap-3">
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00a26e] hover:to-[#00d08f] transition" href="https://github.com/mstsurnalyakter" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00a26e] hover:to-[#00d08f] transition" href="https://twitter.com/mstsurnalyakter" target="_blank" rel="noreferrer">
              <AiFillTwitterCircle />
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00a26e] hover:to-[#00d08f] transition" href="https://www.linkedin.com/in/mst-surnaly-akter/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-sm text-gray-200">Get weekly updates on new jobs and articles.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Your email" className="flex-1 px-3 py-2 rounded-md bg-white/10 border border-transparent focus:border-white/20" />
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#00a26e] to-[#00d08f]">Subscribe</button>
          </form>
          <div className="mt-4 text-xs text-gray-300">By subscribing you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>.</div>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-white/10 pt-6 text-sm text-center text-gray-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Job Portal — All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:underline">Terms</Link>
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
