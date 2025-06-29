import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const treatmentData = {
  "Erectile Dysfunction": {
    name: "Erectile Dysfunction",
    description:
      "Erectile Dysfunction (ED) is the inability to get or keep an erection firm enough for sexual intercourse. It can be caused by physical or psychological factors such as stress, anxiety, diabetes, high blood pressure, or hormonal imbalances.",
    symptoms: [
      "Difficulty getting an erection",
      "Difficulty keeping an erection",
      "Reduced sexual desire",
      "Anxiety or stress related to sexual performance",
      "Relationship issues due to sexual difficulties",
    ],
    whatCanBeDone: [
      "Lifestyle changes (healthy diet, regular exercise, quitting smoking, reducing alcohol)",
      "Managing underlying health conditions (diabetes, hypertension, heart disease)",
      "Medications (oral tablets, hormone therapy)",
      "Counseling or sex therapy for psychological causes",
      "Medical devices (vacuum pumps, penile implants) or surgery in rare cases",
    ],
  },
  "Premature Ejaculation": {
    name: "Premature Ejaculation",
    description:
      "Premature Ejaculation is when ejaculation happens sooner than a man or his partner would like during sex. It is a common and treatable condition, often caused by psychological factors, stress, or sometimes underlying health issues.",
    symptoms: [
      "Ejaculation that always or nearly always occurs within one minute of penetration",
      "Inability to delay ejaculation during intercourse",
      "Feeling distressed, frustrated, or avoiding sexual intimacy due to rapid ejaculation",
    ],
    whatCanBeDone: [
      "Behavioral techniques and exercises (start-stop, squeeze technique)",
      "Counseling or sex therapy",
      "Medications (topical anesthetics, oral medications)",
      "Treating underlying health or psychological issues",
    ],
  },
  "Low Libido": {
    name: "Low Libido",
    description:
      "Low libido refers to a reduced interest in sexual activity. It can be caused by hormonal imbalances, stress, depression, relationship issues, or certain medications.",
    symptoms: [
      "Lack of interest in sexual activity",
      "Few or no sexual thoughts or fantasies",
      "Distress or relationship problems due to low desire",
    ],
    whatCanBeDone: [
      "Addressing underlying medical or psychological causes",
      "Hormone therapy if indicated",
      "Lifestyle changes (exercise, stress reduction, improved sleep)",
      "Couples counseling or sex therapy",
    ],
  },
  "Night fall/ Noctural Emissions": {
    name: "Night fall/ Noctural Emissions",
    description:
      "Nightfall or nocturnal emissions are involuntary ejaculations during sleep, common in adolescent and young adult males. They are usually normal but can be distressing if frequent or associated with fatigue or anxiety.",
    symptoms: [
      "Involuntary ejaculation during sleep",
      "Fatigue or weakness after nightfall",
      "Anxiety or guilt about the occurrence",
      "Disturbed sleep",
    ],
    whatCanBeDone: [
      "Reassurance and education about normalcy",
      "Stress management and relaxation techniques",
      "Addressing underlying anxiety or guilt",
      "Medical evaluation if associated with other symptoms (pain, blood in semen, etc.)",
    ],
  },
  "Delayed Ejaculation": {
    name: "Delayed Ejaculation",
    description:
      "Delayed ejaculation is the difficulty or inability to ejaculate despite adequate sexual stimulation. It can be caused by psychological factors, certain medications, nerve damage, or hormonal imbalances.",
    symptoms: [
      "Prolonged time to ejaculation or inability to ejaculate",
      "Distress or frustration during sexual activity",
      "Reduced sexual satisfaction for self or partner",
    ],
    whatCanBeDone: [
      "Review and adjustment of medications if needed",
      "Treatment of underlying medical or psychological conditions",
      "Sex therapy or counseling",
      "Medical evaluation for nerve or hormonal issues",
    ],
  },
};

const TreatmentDetails = () => {
  const { treatmentName } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(treatmentName);
  const treatment = treatmentData[decodedName];

  if (!treatment) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Treatment Not Found
        </h1>
        <p className="text-gray-600">
          The requested treatment could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {treatment.name}
      </h1>
      <p className="text-lg text-gray-700 mb-6">{treatment.description}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Symptoms</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {treatment.symptoms.map((symptom, idx) => (
            <li key={idx}>{symptom}</li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          What Can Be Done?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {treatment.whatCanBeDone.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <button
          className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
          onClick={() =>
            navigate(`/book-consultation/${encodeURIComponent(treatment.name)}`)
          }
        >
          Book Consultation with Our Doctor
        </button>
      </div>
    </div>
  );
};

export default TreatmentDetails;
