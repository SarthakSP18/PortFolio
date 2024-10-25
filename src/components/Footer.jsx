import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/sarthak.pomane.5?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://t.me/sarthakpomane18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram size={24} />
              </a>
              <a
                href="https://www.instagram.com/sarthakpomane18/profilecard/?igsh=YmI5MnF1NWpxemcx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="www.linkedin.com/in/sarthak-pomane-4253b4259"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Thanks for visiting my Portfolio.
              </p>
              <p className="text-sm">❤️ Sarthak</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
