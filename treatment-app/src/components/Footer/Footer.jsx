import React from "react";

const COMPANY_NAME = process.env.REACT_APP_COMPANY_NAME || "HIMS";
const CONTACT_EMAIL =
  process.env.REACT_APP_CONTACT_EMAIL || "help@yourdomain.com";
const CONTACT_PHONE = process.env.REACT_APP_CONTACT_PHONE || "+91 12345 67890";

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <div className="flex-1 flex flex-col items-center md:items-start md:pl-4">
            <h3 className="font-semibold text-gray-900 mb-4 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 text-center md:text-left">
              <li>
                <a href="/privacy-policy" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="hover:text-gray-900">
                  Terms &amp; Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">
              Need Help?
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 text-center">
              <li>
                <span className="font-medium text-gray-800">Phone:</span>{" "}
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                  className="hover:text-gray-900"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-800">Email:</span>{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-gray-900"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-end md:pr-4 mt-8 md:mt-0">
            <span className="text-3xl font-extrabold tracking-widest text-gray-900">
              {COMPANY_NAME}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
