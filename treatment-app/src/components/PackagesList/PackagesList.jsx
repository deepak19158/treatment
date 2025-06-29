import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const packagesData = {
  men: {
    "Erectile & Ejaculation": [
      "Premature Ejaculation Panel",
      "Erectile Dysfunction Panel",
      "Nightfall / Nocturnal Emission Panel",
      "Low Libido / Hormonal Imbalance Panel",
      "Delayed Ejaculation Panel",
      "Complete Male Sexual Wellness Panel",
    ],
    "Full Body Packages": ["Health India Full Body", "Thyroid Full Body"],
    "Fitness, Hair & Skin": [
      "Obese/Overweight Panel",
      "Very Thin/Weak Male Panel",
      "Muscle Building/Strength Panel",
      "AOD-on Goal-Based Panel",
      "Hair Loss & Hair Concern",
      "Skin & Acne Panel",
    ],
  },
  women: {
    "Sexual Health": [
      "Female Fertility Evaluation Panel",
      "Female Sexual Dysfunction Evaluation Panel",
      "PCOS / Hormonal Imbalance Panel",
      "Vaginal Infection & Discharge Panel",
      "Thyroid & Prolactin Panel",
      "Menopause or Premature Ovarian Failure Panel",
    ],
    "Full Body Packages": ["Health India Full Body", "Thyroid Full Body"],
    "Fitness, Hair & Skin": [
      "Obese/Overweight Panel",
      "Very Thin/Weak Male Panel",
      "Toning/Lean Muscle Gain Female Panel",
      "AOD-on Goal-Based Panel",
      "Hair Loss & Hair Concern",
      "Skin & Acne Panel",
    ],
  },
};

const PackagesList = () => {
  const navigate = useNavigate();
  const { category, service } = useParams();

  const packages = packagesData[category]?.[service] || [];

  const handlePackageClick = (packageName) => {
    navigate(
      `/package/${category}/${service}/${encodeURIComponent(packageName)}`
    );
  };

  if (!packages.length) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          No Packages Found
        </h1>
        <p className="text-gray-600">
          No packages are available for this service.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Packages for {service.replace(/([A-Z])/g, " $1").trim()}
      </h1>
      <div className="space-y-4">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="cursor-pointer p-6 rounded-xl bg-gray-50 hover:bg-gray-100 shadow-sm border border-gray-200 flex items-center justify-between transition-colors"
            onClick={() => handlePackageClick(pkg)}
          >
            <span className="text-lg font-medium text-gray-800">{pkg}</span>
            <span className="text-gray-400 text-xl">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesList;
