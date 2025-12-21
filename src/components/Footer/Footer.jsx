import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="w-10/12 mx-auto py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Language / Country */}
          <div>
            <div className="dropdown">
              <label className="btn btn-outline rounded-full flex gap-2">
                 Bangladesh
              </label>
            </div>
          </div>

          {/* Babysits */}
          <div>
            <h6 className="footer-title text-gray-900">Babysits</h6>
            <ul className="space-y-2">
              <li><a className="link link-hover">How it works</a></li>
              <li><a className="link link-hover">Help</a></li>
              <li><a className="link link-hover">Terms & Privacy</a></li>
              <li><a className="link link-hover">Pricing</a></li>
              <li><a className="link link-hover">Company details</a></li>
              <li><a className="link link-hover">Babysits for Work</a></li>
              <li><a className="link link-hover">Community standards</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h6 className="footer-title text-gray-900">Discover</h6>
            <ul className="space-y-2">
              <li><a className="link link-hover">About us</a></li>
              <li><a className="link link-hover">Tips & Articles</a></li>
              <li><a className="link link-hover">Trust & Safety</a></li>
              <li><a className="link link-hover">Babysits shop</a></li>
              <li><a className="link link-hover">Partners</a></li>
              <li><a className="link link-hover">Babysits for Special Needs</a></li>
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h6 className="footer-title text-gray-900">Popular</h6>
            <ul className="space-y-2">
              <li><a className="link link-hover">Babysitter Dhaka</a></li>
              <li><a className="link link-hover">Babysitter Chittagong</a></li>
              <li><a className="link link-hover">Babysitter Gazipur</a></li>
              <li><a className="link link-hover">Babysitter Khulna</a></li>
              <li><a className="link link-hover">Babysitter Rangpur City</a></li>
              <li><a className="link link-hover">Babysitting jobs</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-10"></div>

        {/* Social Section */}
        <div className="text-center">
          <h4 className="font-semibold mb-6">Follow us on</h4>
          <div className="flex justify-center gap-4">
            <a className="btn btn-circle btn-outline"><FaFacebookF /></a>
            <a className="btn btn-circle btn-outline"><FaInstagram /></a>
            <a className="btn btn-circle btn-outline"><FaTiktok /></a>
            <a className="btn btn-circle btn-outline"><FaLinkedinIn /></a>
            <a className="btn btn-circle btn-outline"><FaPinterestP /></a>
            <a className="btn btn-circle btn-outline"><FaYoutube /></a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            © Babysits B.V.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
