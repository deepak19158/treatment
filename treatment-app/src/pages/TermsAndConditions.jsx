import React from "react";

const COMPANY_NAME = process.env.REACT_APP_COMPANY_NAME || "HIMS";
const CONTACT_EMAIL =
  process.env.REACT_APP_CONTACT_EMAIL || "help@yourdomain.com";
const CONTACT_PHONE = process.env.REACT_APP_CONTACT_PHONE || "+91 12345 67890";

const TermsAndConditions = () => (
  <div className="max-w-3xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-gray-900">
      Terms &amp; Conditions
    </h1>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      About Our Service
    </h2>
    <p className="mb-4 text-gray-700">
      {COMPANY_NAME} provides packages and information related to sexual health,
      overall health, fitness, hair, and skin. We connect users with certified
      doctors (sexologists, urologists) and lab partners for consultations and
      tests. We do not provide direct medical treatment or perform any tests
      ourselves.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Medical Disclaimer
    </h2>
    <p className="mb-4 text-gray-700">
      All information provided on our website is for informational purposes only
      and should not be considered medical advice. Consult a qualified
      healthcare professional for diagnosis and treatment of any health
      condition.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      User Responsibilities
    </h2>
    <ul className="list-disc pl-6 text-gray-700 mb-4">
      <li>
        Provide accurate and complete information when booking packages or
        consultations.
      </li>
      <li>
        Follow the advice and instructions of the healthcare professionals you
        are connected with.
      </li>
      <li>
        Use our services in accordance with all applicable laws and regulations.
      </li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Third-Party Services
    </h2>
    <p className="mb-4 text-gray-700">
      We work with certified doctors and lab partners. We are not responsible
      for the actions, advice, or services provided by these third parties. Any
      issues or disputes should be addressed directly with the respective
      provider.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Limitation of Liability
    </h2>
    <p className="mb-4 text-gray-700">
      {COMPANY_NAME} is not liable for any direct, indirect, incidental, or
      consequential damages arising from the use of our website or services.
      Your use of our platform is at your own risk.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Changes to Terms
    </h2>
    <p className="mb-4 text-gray-700">
      We may update these terms and conditions from time to time. Continued use
      of our services constitutes acceptance of the revised terms.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Contact Us
    </h2>
    <p className="mb-4 text-gray-700">
      For any questions or concerns regarding these terms, please contact us at
      {CONTACT_EMAIL} or call {CONTACT_PHONE}.
    </p>
    <p className="text-xs text-gray-500 mt-8">
      Last updated: {new Date().toLocaleDateString()}
    </p>
  </div>
);

export default TermsAndConditions;
