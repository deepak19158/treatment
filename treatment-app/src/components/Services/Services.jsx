import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    // Men's services
    {
      title: "Erectile & Ejaculation",
      subtitle: "",
      icon: "💊",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      category: "men",
    },
    {
      title: "Full Body Packages",
      subtitle: "",
      icon: "💊",
      bgColor: "bg-orange-100",
      textColor: "text-purple-600",
      category: "men",
    },
    {
      title: "Fitness, Hair & Skin",
      subtitle: "",
      icon: "💙",
      bgColor: "bg-cyan-100",
      textColor: "text-cyan-600",
      category: "men",
    },
    // Women's services
    {
      title: "Sexual Health",
      subtitle: "",
      icon: "🧴",
      bgColor: "bg-gray-100",
      textColor: "text-gray-700",
      category: "women",
    },
    {
      title: "Full Body Packages",
      subtitle: "",
      icon: "💊",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      category: "women",
    },
    {
      title: "Fitness, Hair & Skin",
      subtitle: "",
      icon: "🧴",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
      category: "women",
    },
  ];

  const menServices = services.filter((service) => service.category === "men");
  const womenServices = services.filter(
    (service) => service.category === "women"
  );

  const handleServiceClick = (category, serviceTitle) => {
    navigate(`/packages/${category}/${encodeURIComponent(serviceTitle)}`);
  };

  const ServiceRow = ({ services, category }) => (
    <div className="space-y-2">
      <div className="flex items-center">
        <div className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium inline-block">
          {category === "men" ? "For Him" : "For Her"}
        </div>
      </div>
      <div className="flex gap-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="group cursor-pointer transition-all duration-300 hover:scale-105 w-[280px] md:w-auto"
            onClick={() => handleServiceClick(service.category, service.title)}
          >
            <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div
                className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center text-2xl`}
              >
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-medium ${service.textColor}`}>
                  {service.title.split(" ").map((word, i) => (
                    <span key={i}>
                      {word === "sex" ||
                      word === "anxiety" ||
                      word === "skin" ||
                      word === "hair" ||
                      word === "Wegovy®" ? (
                        <span className="font-semibold">{word}</span>
                      ) : (
                        word
                      )}
                      {i < service.title.split(" ").length - 1 ? " " : ""}
                    </span>
                  ))}
                </h3>
                {service.subtitle && (
                  <p className="text-sm text-orange-600 bg-orange-200 px-2 py-1 rounded-full inline-block mt-1">
                    {service.subtitle}
                  </p>
                )}
              </div>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:bg-gray-800 transition-colors">
                →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto overflow-x-auto pb-4 px-4">
      <div className="min-w-min space-y-6">
        <ServiceRow services={menServices} category="men" />
        <ServiceRow services={womenServices} category="women" />
      </div>
    </div>
  );
};

export default Services;
