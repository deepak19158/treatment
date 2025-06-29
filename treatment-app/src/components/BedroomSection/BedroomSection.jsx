import React from "react";

const BedroomSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white border-dashed rounded-full"></div>
        <div className="absolute top-40 right-40 w-4 h-4 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Bring out your best
          </h2>
          <h3 className="text-4xl md:text-5xl font-light text-white">
            in the bedroom
          </h3>
        </div>

        {/* Main Image with Buttons */}
        {/* <div className="flex justify-center mb-16 relative">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-b from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-64 h-64 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full flex items-center justify-center relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent rounded-full"></div>
                <span className="text-4xl">👫</span>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Get started
              </button>
            </div>
          </div>
        </div> */}

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
          {/* Left Column - Product */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-light mb-4">
              Have longer,
              <br />
              better sex with Rx
              <br />+ Climax Control
            </h3>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-purple-300 rounded-full"></div>
                <div className="w-12 h-8 bg-purple-400 rounded-full"></div>
                <div className="w-12 h-8 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <button className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
              Get started
            </button>
          </div>

          {/* Middle Column - Quiz */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-light mb-6">
              How do you want
              <br />
              to improve your
              <br />
              sex life?
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-red-600 text-white py-3 px-6 rounded-full text-left hover:bg-red-700 transition-colors">
                Get hard
              </button>
              <button className="w-full bg-red-700 text-white py-3 px-6 rounded-full text-left hover:bg-red-800 transition-colors">
                Last longer
              </button>
              <button className="w-full bg-red-800 text-white py-3 px-6 rounded-full text-left hover:bg-red-900 transition-colors">
                Staying hard
              </button>
              <button className="w-full bg-red-900 text-white py-3 px-6 rounded-full text-left hover:bg-red-950 transition-colors">
                All of the above
              </button>
            </div>
            <div className="mt-6">
              <div className="w-20 h-20 bg-gradient-to-b from-peach-200 to-peach-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">😌</span>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
            <div className="mb-6">
              <blockquote className="text-lg font-light leading-relaxed">
                "When my treatment arrived, let's just say:{" "}
                <strong>
                  my wife and I haven't had that much fun in a long time.
                </strong>{" "}
                Now, we schedule weekly date nights and get to enjoy one another
                again. <strong>I couldn't be happier with the results.</strong>"
              </blockquote>
            </div>
            <div className="text-sm opacity-80">
              <p>Patrick, 49</p>
              <p>Sildenafil Chews</p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              </div>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Get results
              </button>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-8">
          <button className="text-white/70 hover:text-white text-2xl">‹</button>
          <button className="text-white/70 hover:text-white text-2xl ml-4">
            ›
          </button>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12 text-white/60 text-xs max-w-3xl mx-auto">
          <p>
            Compounded products are not approved nor evaluated for safety,
            efficacy, or quality by the FDA. Past treatment results have not
            been independently verified. Individual results will vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BedroomSection;
