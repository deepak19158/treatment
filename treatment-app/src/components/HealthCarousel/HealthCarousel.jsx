import React from "react";
import { useNavigate } from "react-router-dom";

const HealthCarousel = () => {
  const navigate = useNavigate();
  const healthIssues = [
    {
      id: 1,
      title: "Erectile Dysfunction",
      description:
        "Expert treatment for achieving and maintaining strong erections",
      image: "ed-treatment.jpg",
      alt: "Erectile Dysfunction Treatment",
      category: "men",
    },
    {
      id: 2,
      title: "Premature Ejaculation",
      description: "Professional solutions for better ejaculatory control",
      image: "pre-treatment.jpg",
      alt: "Premature Ejaculation Treatment",
      category: "men",
    },
    {
      id: 3,
      title: "Low Libido",
      description: "Effective treatments to enhance your sexual desire",
      image: "libido-treatment.jpg",
      alt: "Low Libido Treatment",
      category: "men",
    },
    {
      id: 4,
      title: "Night fall/ Noctural Emissions",
      description: "Professional guidance and treatment for managing nightfall",
      image: "vaginal-treatment.jpg",
      alt: "Nightfall Treatment",
      category: "women",
    },
    {
      id: 5,
      title: "Delayed Ejaculation",
      description: "Specialized treatment for timely and satisfying climax",
      image: "female-libido.jpg",
      alt: "Delayed Ejaculation Treatment",
      category: "women",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 px-4">
        Here is what you need to know
      </h2>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-2 min-w-min px-4">
          {healthIssues.map((issue) => (
            <div
              key={issue.id}
              className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden group"
            >
              {/* Image with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
              <img
                src={`/images/${issue.image}`}
                alt={issue.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/placeholder.jpg";
                }}
              />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
                <p className="text-sm mb-4 opacity-90">{issue.description}</p>
                <button
                  className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  onClick={() =>
                    navigate(`/treatment/${encodeURIComponent(issue.title)}`)
                  }
                >
                  Explore Treatment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthCarousel;
