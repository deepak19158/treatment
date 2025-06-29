import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services/Services";
import PackageDetails from "./components/PackageDetails/PackageDetails";
import PackagesList from "./components/PackagesList/PackagesList";
import BookPackage from "./components/BookPackage/BookPackage";
import BookConsultation from "./components/BookConsultation/BookConsultation";
import Homepage from "./components/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TreatmentDetails from "./components/TreatmentDetails/TreatmentDetails";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/packages/:category/:service"
            element={<PackagesList />}
          />
          <Route
            path="/package/:category/:service/:packageName"
            element={<PackageDetails />}
          />
          <Route
            path="/book-package/:category/:service/:packageName"
            element={<BookPackage />}
          />
          <Route
            path="/treatment/:treatmentName"
            element={<TreatmentDetails />}
          />
          <Route
            path="/book-consultation/:treatmentName?"
            element={<BookConsultation />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
