import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Example data structure for package details
const packageDetailsData = {
  men: {
    "Erectile & Ejaculation": {
      "Premature Ejaculation Panel": {
        title: "Premature Ejaculation Panel",
        description:
          "For males who ejaculate too early during sexual activity.",
        price: "₹1999",
        tests: [
          {
            name: "Serum Testosterone",
            description:
              "Low testosterone may reduce control over ejaculation.",
          },
          {
            name: "Prolactin",
            description: "High levels may reduce dopamine, worsening control.",
          },
          {
            name: "TSH",
            description:
              "Thyroid imbalance can cause hyperexcitability or weakness.",
          },
          {
            name: "Vitamin B12",
            description: "Supports nervous system control during arousal.",
          },
          {
            name: "Fasting Sugar (FBS)",
            description: "Uncontrolled blood sugar affects nerve function.",
          },
          {
            name: "Serum Magnesium (Optional)",
            description: "Nerve-muscle balance related to ejaculation timing.",
          },
        ],
        benefits: [
          "Identifies hormonal and metabolic causes of premature ejaculation.",
          "Guides targeted therapy for better control.",
        ],
      },
      "Erectile Dysfunction Panel": {
        title: "Erectile Dysfunction Panel",
        description:
          "For those struggling with getting or maintaining an erection.",
        price: "₹2499",
        tests: [
          {
            name: "Total & Free Testosterone",
            description: "Core hormone for erection strength.",
          },
          {
            name: "LH & FSH",
            description: "Hormonal signaling from brain to testicles.",
          },
          {
            name: "Prolactin",
            description: "High levels inhibit testosterone production.",
          },
          {
            name: "TSH",
            description: "Thyroid issues affect erection quality.",
          },
          {
            name: "HbA1c or FBS",
            description: "Diabetes affects penile blood flow.",
          },
          {
            name: "Lipid Profile",
            description: "Poor lipid levels reduce penile blood supply.",
          },
        ],
        benefits: [
          "Comprehensive hormone and metabolic screening for ED.",
          "Helps identify treatable causes of erectile issues.",
        ],
      },
      "Nightfall / Nocturnal Emission Panel": {
        title: "Nightfall / Nocturnal Emission Panel",
        description: "For men experiencing frequent nightfall or fatigue.",
        price: "₹1799",
        tests: [
          {
            name: "CBC",
            description: "Detects weakness, anemia or infection.",
          },
          {
            name: "Vitamin B12",
            description: "Important for brain and nerve balance.",
          },
          {
            name: "Vitamin D3",
            description: "Low levels reduce testosterone function.",
          },
          {
            name: "Serum Testosterone",
            description: "Measures male sexual strength.",
          },
          {
            name: "TSH",
            description: "Thyroid issues may worsen sensitivity.",
          },
          {
            name: "Urine Routine",
            description: "Detects urinary tract or prostate infections.",
          },
        ],
        benefits: [
          "Detects nutritional, hormonal, or infection-related causes of nightfall.",
          "Supports holistic management of symptoms.",
        ],
      },
      "Low Libido / Hormonal Imbalance Panel": {
        title: "Low Libido / Hormonal Imbalance Panel",
        description: "For men with low sexual desire or unexplained tiredness.",
        price: "₹2299",
        tests: [
          {
            name: "Total & Free Testosterone",
            description: "Key hormone behind sexual drive.",
          },
          { name: "Prolactin", description: "High prolactin lowers libido." },
          {
            name: "DHEA-S",
            description: "Supports energy and libido via adrenal system.",
          },
          {
            name: "TSH, Free T3 & T4",
            description: "Thyroid dysfunction affects hormones.",
          },
          {
            name: "Vitamin D3",
            description: "Boosts testosterone conversion.",
          },
          {
            name: "Cortisol (optional)",
            description: "Stress hormone; high levels reduce libido.",
          },
        ],
        benefits: [
          "Covers all major hormonal and metabolic causes of low libido.",
          "Enables personalized hormone balancing.",
        ],
      },
      "Delayed Ejaculation Panel": {
        title: "Delayed Ejaculation Panel",
        description:
          "For men who are unable to ejaculate or need excessive time.",
        price: "₹2199",
        tests: [
          {
            name: "Testosterone",
            description: "Essential for ejaculation and libido.",
          },
          {
            name: "Prolactin",
            description: "Affects satisfaction and brain feedback.",
          },
          {
            name: "LH & FSH",
            description: "Check for poor testicular hormone control.",
          },
          {
            name: "FBS / HbA1c",
            description: "Diabetes can reduce sensation.",
          },
          {
            name: "TSH",
            description: "Impacts energy levels and responsiveness.",
          },
          {
            name: "Vitamin B12 + Nerve Screening",
            description: "Delayed signals in nerves.",
          },
        ],
        benefits: [
          "Identifies hormonal, metabolic, and nerve-related causes of delayed ejaculation.",
          "Guides effective treatment strategies.",
        ],
      },
      "Complete Male Sexual Wellness Panel": {
        title: "Complete Male Sexual Wellness Panel",
        description:
          "Covers all male sexual issues: erection, desire, ejaculation, fertility.",
        price: "₹3999",
        tests: [
          {
            name: "Total & Free Testosterone",
            description: "Sexual strength, desire, and stamina.",
          },
          { name: "LH, FSH", description: "Pituitary-testes communication." },
          { name: "Prolactin", description: "Libido inhibitor when high." },
          {
            name: "TSH, Free T3, T4",
            description: "Thyroid's role in sexual health.",
          },
          {
            name: "Vitamin D3 & B12",
            description: "Energy, mood, and nerve health.",
          },
          {
            name: "HbA1c, FBS",
            description: "Diabetes affecting sexual function.",
          },
          {
            name: "Lipid Profile",
            description: "Blood flow and erection quality.",
          },
          {
            name: "CBC, Urine Routine",
            description: "General health and infections.",
          },
          {
            name: "Semen Analysis (Optional)",
            description: "Sperm count, volume, motility.",
          },
        ],
        benefits: [
          "All-in-one screening for male sexual health.",
          "Ideal for comprehensive evaluation and planning.",
        ],
      },
    },
    "Fitness, Hair & Skin": {
      "Obese/Overweight Panel": {
        title: "Obese / Overweight Male Panel",
        description:
          "Purpose: Fat loss, hormone check, thyroid/dietary imbalance.",
        price: "₹2499",
        tests: [
          {
            name: "Fasting Blood Sugar & HbA1c",
            description: "Checks for diabetes and blood sugar control.",
          },
          {
            name: "Lipid Profile",
            description: "Assesses cholesterol and fat metabolism.",
          },
          { name: "TSH", description: "Screens for thyroid imbalance." },
          {
            name: "Testosterone (Total & Free)",
            description: "Evaluates male hormone status.",
          },
          {
            name: "Liver Function Test",
            description: "Checks liver health, important for metabolism.",
          },
          {
            name: "Vitamin D3, B12",
            description: "Detects common deficiencies affecting metabolism.",
          },
          {
            name: "Insulin (Fasting)",
            description: "Assesses insulin resistance and fat loss barriers.",
          },
        ],
        benefits: [
          "Helps identify metabolic or hormonal barriers to fat loss.",
        ],
      },
      "Very Thin/Weak Male Panel": {
        title: "Very Thin / Weak Male Panel",
        description: "Purpose: Mass gain, energy deficit, hormonal weakness.",
        price: "₹2499",
        tests: [
          {
            name: "CBC",
            description: "Detects anemia or infection affecting energy.",
          },
          {
            name: "Testosterone (Total)",
            description: "Checks for hormonal weakness.",
          },
          {
            name: "DHEAS, SHBG",
            description: "Assesses adrenal and binding hormone status.",
          },
          {
            name: "Ferritin & Iron Profile",
            description: "Detects iron deficiency affecting strength.",
          },
          {
            name: "Vitamin D3 & B12",
            description: "Checks for nutrient deficiencies.",
          },
          { name: "TSH", description: "Screens for thyroid issues." },
          {
            name: "Cortisol (AM)",
            description: "Assesses stress hormone impact on weight.",
          },
        ],
        benefits: [
          "Detects hormonal or nutrient deficiencies hindering weight gain.",
        ],
      },
      "Muscle Building/Strength Panel": {
        title: "Muscle Building / Strength Male Panel",
        description: "Purpose: Bodybuilders & gym athletes.",
        price: "₹2999",
        tests: [
          {
            name: "Testosterone (Total & Free)",
            description: "Key anabolic hormone for muscle growth.",
          },
          {
            name: "LH, FSH",
            description: "Regulates testicular hormone production.",
          },
          {
            name: "Creatine Kinase",
            description: "Monitors muscle breakdown and overtraining.",
          },
          {
            name: "Cortisol",
            description: "Stress hormone, high levels hinder muscle gain.",
          },
          { name: "DHEAS", description: "Supports muscle and energy." },
          {
            name: "CRP",
            description: "Inflammation marker, checks for overtraining.",
          },
          {
            name: "Vitamin D3",
            description: "Supports muscle and bone health.",
          },
          {
            name: "Electrolytes",
            description: "Essential for muscle contraction.",
          },
          { name: "LFT", description: "Liver health for metabolism." },
        ],
        benefits: ["Monitors anabolic-hormonal levels & overtraining risk."],
      },
      "AOD-on Goal-Based Panel": {
        title: "Add-On Goal-Based Panels (For All Genders)",
        description: "Purpose: Custom panels for specific fitness goals.",
        price: "₹1499+",
        tests: [
          {
            name: "Muscle Gain",
            description: "Creatine Kinase, Testosterone, CK-MM",
          },
          { name: "Fat Loss", description: "Insulin, Cortisol, SHBG" },
          {
            name: "Vegan Deficiency",
            description: "Iron, Ferritin, Calcium, B12, D3",
          },
          {
            name: "Recovery/Fatigue",
            description: "CRP, CK, Cortisol, Magnesium",
          },
          { name: "Stress/Sleep", description: "Cortisol, TSH, D3" },
          {
            name: "Hair/Skin",
            description: "DHEAS, Testosterone, Zinc, B12",
          },
        ],
        benefits: [
          "Customizable panels for muscle gain, fat loss, vegan deficiency, recovery, stress, and hair/skin health.",
        ],
      },
      "Hair Loss & Hair Concern": {
        title: "Hair Loss / Hair Concerns: Male",
        description: "Symptoms: Receding hairline, bald patches.",
        price: "₹1999",
        tests: [
          {
            name: "DHT",
            description: "Key hormone in male pattern baldness.",
          },
          {
            name: "Testosterone",
            description: "Hormonal influence on hair loss.",
          },
          {
            name: "Ferritin",
            description: "Iron stores, low levels cause hair fall.",
          },
          {
            name: "Vitamin D3, B12",
            description: "Deficiencies linked to hair loss.",
          },
          {
            name: "TSH",
            description: "Thyroid dysfunction can cause hair loss.",
          },
        ],
        benefits: [
          "Helps identify hormonal, nutritional, or thyroid causes of hair loss in men.",
        ],
      },
      "Skin & Acne Panel": {
        title: "Skin & Acne Issues: Male",
        description: "Symptoms: Oily skin, acne, pigmentation.",
        price: "₹1999",
        tests: [
          {
            name: "Testosterone",
            description: "High levels can worsen acne.",
          },
          { name: "DHEAS", description: "Adrenal hormone, can affect skin." },
          { name: "Zinc", description: "Deficiency linked to acne." },
          { name: "Vitamin D3", description: "Supports skin health." },
          {
            name: "Blood Glucose",
            description: "High sugar can worsen acne.",
          },
        ],
        benefits: [
          "Identifies hormonal and nutritional causes of skin and acne issues in men.",
        ],
      },
    },
    // ... Add other services here ...
  },
  women: {
    "Sexual Health": {
      "Female Fertility Evaluation Panel": {
        title: "Female Fertility Evaluation Panel",
        description:
          "Symptoms: Irregular or absent periods, difficulty conceiving despite 1 year of trying, pain during periods or intercourse, history of pelvic infections, excessive hair, acne, or weight gain.",
        price: "₹2999",
        tests: [
          {
            name: "FSH",
            description: "Evaluates ovarian reserve and pituitary signals.",
          },
          {
            name: "LH",
            description: "Assesses ovulation and pituitary function.",
          },
          {
            name: "Prolactin",
            description: "Detects hormonal imbalances affecting fertility.",
          },
          { name: "AMH", description: "Measures ovarian reserve." },
          {
            name: "TSH",
            description: "Checks for thyroid-related fertility issues.",
          },
          {
            name: "Estradiol",
            description: "Assesses ovarian function and estrogen levels.",
          },
          { name: "Progesterone", description: "Confirms ovulation." },
          {
            name: "Pelvic Ultrasound",
            description: "Evaluates ovaries and uterus.",
          },
          { name: "HSG", description: "Checks for fallopian tube blockage." },
          {
            name: "TORCH",
            description: "Screens for infections affecting fertility.",
          },
          {
            name: "Chlamydia/Gonorrhea PCR",
            description: "Detects tubal damage and inflammation.",
          },
          {
            name: "Testosterone",
            description: "Screens for hyperandrogenism.",
          },
          {
            name: "DHEAS",
            description: "Assesses adrenal contribution to androgen excess.",
          },
        ],
        benefits: [
          "Evaluates ovarian reserve, pituitary signals, ovulation, and hormonal imbalances.",
          "HSG checks fallopian tube blockage; Ultrasound evaluates ovaries and uterus.",
          "Infection screening helps detect tubal damage and inflammation.",
        ],
      },
      "Female Sexual Dysfunction Evaluation Panel": {
        title: "Female Sexual Dysfunction Evaluation Panel",
        description:
          "Symptoms: Low sexual desire, vaginal dryness, pain during sex, difficulty achieving orgasm, recurrent infections.",
        price: "₹2499",
        tests: [
          {
            name: "Testosterone (Total & Free)",
            description: "Evaluates hormonal status for desire/arousal.",
          },
          { name: "SHBG", description: "Assesses bioavailable testosterone." },
          {
            name: "Estradiol",
            description: "Estrogen status for vaginal health.",
          },
          { name: "FSH", description: "Pituitary function." },
          { name: "LH", description: "Pituitary function." },
          {
            name: "Prolactin",
            description: "Detects hormonal causes for low desire.",
          },
          { name: "Vaginal swab", description: "Detects infections." },
          { name: "Pap smear", description: "Screens for cervical health." },
          {
            name: "pH test",
            description: "Assesses vaginal pH changes related to discomfort.",
          },
        ],
        benefits: [
          "Evaluates hormonal status and causes for low desire or arousal.",
          "Detects infections and vaginal pH changes related to discomfort.",
        ],
      },
      "PCOS / Hormonal Imbalance Panel": {
        title: "PCOS / Hormonal Imbalance Panel",
        description:
          "Symptoms: Irregular cycles, acne, facial hair, weight gain.",
        price: "₹2199",
        tests: [
          {
            name: "LH",
            description: "Detects PCOS and ovulatory dysfunction.",
          },
          { name: "FSH", description: "Assesses pituitary-ovarian axis." },
          {
            name: "Prolactin",
            description: "Screens for hormonal imbalances.",
          },
          {
            name: "AMH",
            description: "Measures ovarian reserve and PCOS risk.",
          },
          { name: "TSH", description: "Checks for thyroid dysfunction." },
          { name: "Testosterone", description: "Detects hyperandrogenism." },
          { name: "DHEAS", description: "Assesses adrenal androgen excess." },
          { name: "Insulin", description: "Detects insulin resistance." },
          {
            name: "USG Pelvis",
            description: "Confirms PCOS and ovarian morphology.",
          },
        ],
        benefits: [
          "Detects PCOS, insulin resistance, hyperandrogenism, and hormonal imbalances.",
        ],
      },
      "Vaginal Infection & Discharge Panel": {
        title: "Vaginal Infection & Discharge Panel",
        description:
          "Symptoms: Foul vaginal discharge, itching, or burning; pain or bleeding during sex.",
        price: "₹1499",
        tests: [
          {
            name: "Vaginal swab",
            description: "Confirms infection (fungal, bacterial, viral).",
          },
          { name: "KOH mount", description: "Detects fungal infection." },
          { name: "Pap smear", description: "Screens for cervical issues." },
          { name: "pH test", description: "Assesses vaginal pH." },
          { name: "HPV DNA", description: "Detects viral infection." },
          {
            name: "Urine Culture",
            description: "Detects urinary tract infection.",
          },
        ],
        benefits: [
          "Confirms infection (fungal, bacterial, viral), inflammation, or cervical issues.",
        ],
      },
      "Thyroid & Prolactin Panel": {
        title: "Thyroid & Prolactin Panel",
        description:
          "Symptoms: Irregular menstruation, breast discharge without pregnancy, fatigue, hair fall, mood changes.",
        price: "₹1299",
        tests: [
          { name: "TSH", description: "Identifies thyroid disorders." },
          { name: "Free T3", description: "Thyroid hormone status." },
          { name: "Free T4", description: "Thyroid hormone status." },
          { name: "Prolactin", description: "Detects hyperprolactinemia." },
          { name: "Vitamin D", description: "Assesses vitamin D status." },
          { name: "Iron Profile", description: "Detects iron deficiency." },
        ],
        benefits: [
          "Identifies thyroid disorders, hyperprolactinemia, and related symptoms.",
        ],
      },
      "Menopause or Premature Ovarian Failure Panel": {
        title: "Menopause or Premature Ovarian Failure Panel",
        description:
          "Symptoms: Hot flashes, night sweats, no menstruation (especially age <40), vaginal dryness.",
        price: "₹1999",
        tests: [
          {
            name: "FSH",
            description: "Detects menopause and ovarian reserve status.",
          },
          {
            name: "LH",
            description: "Detects menopause and ovarian reserve status.",
          },
          { name: "Estradiol", description: "Assesses estrogen deficiency." },
          { name: "AMH", description: "Measures ovarian reserve." },
          { name: "Pap smear", description: "Screens for cervical health." },
        ],
        benefits: [
          "Detects menopause, estrogen deficiency, and ovarian reserve status.",
        ],
      },
    },
    "Fitness, Hair & Skin": {
      "Obese/Overweight Panel": {
        title: "Obese / Overweight Female Panel",
        description: "Purpose: Fat loss, PCOS screening, metabolic balance.",
        price: "₹2499",
        tests: [
          {
            name: "Fasting Blood Sugar, HbA1c, Lipid Profile",
            description: "Checks for diabetes and cholesterol issues.",
          },
          {
            name: "TSH, Insulin",
            description: "Screens for thyroid and insulin resistance.",
          },
          {
            name: "Testosterone, DHEAS",
            description: "Evaluates androgen excess (PCOS).",
          },
          {
            name: "LH, FSH, Prolactin",
            description: "Hormonal balance and PCOS screening.",
          },
          {
            name: "Vitamin D3, B12, Ferritin",
            description: "Detects common deficiencies affecting metabolism.",
          },
        ],
        benefits: [
          "Checks for PCOS or insulin resistance that may affect weight loss.",
        ],
      },
      "Very Thin/Weak Male Panel": {
        title: "Very Thin / Weak Female Panel",
        description: "Purpose: Nutritional deficiency & energy restoration.",
        price: "₹2499",
        tests: [
          {
            name: "CBC, TSH, Estrogen, FSH, LH",
            description: "Screens for anemia and hormonal weakness.",
          },
          {
            name: "Iron Profile, Ferritin",
            description: "Detects iron deficiency.",
          },
          {
            name: "Vitamin D3 & B12, Cortisol",
            description: "Checks for nutrient and stress hormone issues.",
          },
        ],
        benefits: [
          "Assesses anemia, hormonal weakness & nutritional deficits.",
        ],
      },
      "Toning/Lean Muscle Gain Female Panel": {
        title: "Toning / Lean Muscle Gain Female Panel",
        description: "Purpose: Lean fitness or athletic tone.",
        price: "₹2999",
        tests: [
          {
            name: "Estrogen, LH, FSH, Testosterone",
            description: "Hormonal support for muscle tone.",
          },
          {
            name: "Vitamin D3, B12, Ferritin, Creatinine",
            description: "Nutritional and muscle health markers.",
          },
          {
            name: "CRP, Electrolytes",
            description: "Inflammation and hydration status.",
          },
        ],
        benefits: ["Reviews nutrition, inflammation, and lean muscle markers."],
      },
      "AOD-on Goal-Based Panel": {
        title: "Add-On Goal-Based Panels (For All Genders)",
        description: "Purpose: Custom panels for specific fitness goals.",
        price: "₹1499+",
        tests: [
          {
            name: "Muscle Gain",
            description: "Creatine Kinase, Testosterone, CK-MM",
          },
          { name: "Fat Loss", description: "Insulin, Cortisol, SHBG" },
          {
            name: "Vegan Deficiency",
            description: "Iron, Ferritin, Calcium, B12, D3",
          },
          {
            name: "Recovery/Fatigue",
            description: "CRP, CK, Cortisol, Magnesium",
          },
          { name: "Stress/Sleep", description: "Cortisol, TSH, D3" },
          {
            name: "Hair/Skin",
            description: "DHEAS, Testosterone, Zinc, B12",
          },
        ],
        benefits: [
          "Customizable panels for muscle gain, fat loss, vegan deficiency, recovery, stress, and hair/skin health.",
        ],
      },
      "Hair Loss & Hair Concern": {
        title: "Hair Loss / Hair Concerns: Female",
        description: "Symptoms: Excessive hair fall, thinning hair.",
        price: "₹1999",
        tests: [
          {
            name: "Ferritin",
            description: "Iron stores, low levels cause hair fall.",
          },
          { name: "DHEAS", description: "Adrenal hormone, can affect hair." },
          {
            name: "TSH",
            description: "Thyroid dysfunction can cause hair loss.",
          },
          {
            name: "Vitamin B12/D3",
            description: "Deficiencies linked to hair loss.",
          },
          {
            name: "ANA (if autoimmune)",
            description: "Screens for autoimmune hair loss.",
          },
        ],
        benefits: [
          "Helps identify hormonal, nutritional, or autoimmune causes of hair loss in women.",
        ],
      },
      "Skin & Acne Panel": {
        title: "Skin & Acne Issues: Female",
        description: "Symptoms: Acne, melasma, dry or pigmented skin.",
        price: "₹1999",
        tests: [
          {
            name: "Testosterone, LH, FSH, TSH",
            description: "Hormonal causes of skin issues.",
          },
          {
            name: "Vitamin D3/B12, Iron",
            description: "Nutritional deficiencies affecting skin.",
          },
          { name: "Blood Sugar", description: "High sugar can worsen acne." },
        ],
        benefits: [
          "Identifies hormonal and nutritional causes of skin and acne issues in women.",
        ],
      },
    },
    // ... Add other services here ...
  },
};

const PackageDetails = () => {
  const { category, service, packageName } = useParams();
  const navigate = useNavigate();
  const decodedService = decodeURIComponent(service);
  const decodedPackageName = decodeURIComponent(packageName);
  console.log(category, service, packageName);
  const selectedPackage =
    packageDetailsData[category]?.[decodedService]?.[decodedPackageName];

  if (!selectedPackage) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Package not found</h1>
        <p className="text-gray-600 mt-2">
          The requested package could not be found. Please check back later or
          contact support.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Package Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {selectedPackage.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          {selectedPackage.description}
        </p>
        <div className="text-2xl font-bold text-green-600">
          {selectedPackage.price}
        </div>
      </div>

      {/* Tests Included */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Tests Included
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {selectedPackage.tests.map((test, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold text-gray-900 mb-1">{test.name}</h3>
              <p className="text-gray-600 text-sm">{test.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Package Benefits
        </h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {selectedPackage.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Button */}
      <div className="mt-8">
        <button
          onClick={() => {
            navigate(
              `/book-package/${category}/${encodeURIComponent(
                service
              )}/${encodeURIComponent(packageName)}`
            );
          }}
          className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors w-full md:w-auto"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;
