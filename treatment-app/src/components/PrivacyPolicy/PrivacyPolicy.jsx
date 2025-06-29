import React from "react";

const PrivacyPolicy = () => (
  <div className="max-w-3xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
    <p className="mb-4 text-gray-700">
      At HIMS, your privacy is our top priority. We are committed to protecting
      your personal information and ensuring a safe, confidential experience
      when you use our services.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      What We Do
    </h2>
    <p className="mb-4 text-gray-700">
      We provide packages and treatments related to sexual health, overall
      health, fitness, hair, and skin. We also connect you with experienced
      sexologists and urologists for various sexual health issues. Please note,
      we do not provide any direct medical treatment ourselves; we connect you
      with qualified doctors and certified lab partners for consultations and
      tests.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Information Collection & Use
    </h2>
    <p className="mb-4 text-gray-700">
      We collect only the information necessary to connect you with doctors and
      certified lab partners. This may include your name, contact details,
      health concerns, and test preferences. All information is used solely for
      the purpose of providing our services and is never sold or shared with
      unauthorized third parties.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Data Security
    </h2>
    <p className="mb-4 text-gray-700">
      We maintain strict security protocols to protect your data. All personal
      and health information is stored securely and accessed only by authorized
      personnel.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Third-Party Partners
    </h2>
    <p className="mb-4 text-gray-700">
      We work with certified doctors and lab partners. Your information is
      shared with them only as needed to facilitate your consultation or lab
      test, and they are required to maintain confidentiality and comply with
      all applicable privacy laws.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Your Rights
    </h2>
    <p className="mb-4 text-gray-700">
      You have the right to access, update, or request deletion of your personal
      information at any time. To do so, please contact us at
      help@yourdomain.com.
    </p>
    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      Contact Us
    </h2>
    <p className="mb-4 text-gray-700">
      If you have any questions or concerns about our privacy practices, please
      contact us at help@yourdomain.com or call +91 12345 67890.
    </p>
    <p className="text-xs text-gray-500 mt-8">
      Last updated: {new Date().toLocaleDateString()}
    </p>
  </div>
);

export default PrivacyPolicy;
