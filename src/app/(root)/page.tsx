
import { ENTERPRISE_FEATURES, FEATURES } from "./_constants";
import { Star } from "lucide-react";
import FeatureCategory from "./_components/FeatureCategory";
import FeatureItem from "./_components/FeatureItem";
import GetStartedButton from "./_components/GetStartedButton";
import NavigationHeaderNew from "./_components/NavigationHeaderNew";

function CompileBoxLandingPage() {
  return (
    <div
      className="relative min-h-screen bg-[#0a0a0f] selection:bg-blue-500/20 selection:text-blue-200"
    >
      <NavigationHeaderNew/>

      {/* Main Content */}
      <main className="relative pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <div className="relative inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-10" />
              <h1
                className="relative text-5xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r
               from-gray-100 to-gray-300 text-transparent bg-clip-text mb-8"
              >
                Welcome to <br />
                Compile-Box
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A next-generation online code editor designed to simplify your development process with advanced features and seamless collaboration.
            </p>
          </div>

          {/* Enterprise Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {ENTERPRISE_FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                  flex items-center justify-center mb-4 ring-1 ring-gray-800/60 group-hover:ring-blue-500/20"
                  >
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="text-lg font-medium text-white mb-2">{feature.label}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features Showcase */}
          <div className="relative max-w-4xl mx-auto">
            <div
              className="absolute -inset-px bg-gradient-to-r from-blue-500
             to-purple-500 rounded-2xl blur opacity-10"
            />
            <div className="relative bg-[#12121a]/90 backdrop-blur-xl rounded-2xl">
              <div
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r 
              from-transparent via-blue-500/50 to-transparent"
              />
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <div className="relative p-8 md:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-1 ring-gray-800/60 mb-6">
                    <Star className="w-8 h-8 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white mb-4">
                    Why Choose Compile-Box?
                  </h2>
                  <p className="text-gray-400 text-lg">
                    Explore features designed to optimize your coding experience.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                  <FeatureCategory label="Efficient Coding">
                    {FEATURES.coding.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>

                  <FeatureCategory label="Seamless Collaboration">
                    {FEATURES.collaboration.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>

                  <FeatureCategory label="Powerful Tools">
                    {FEATURES.tools.map((feature, idx) => (
                      <FeatureItem key={idx}>{feature}</FeatureItem>
                    ))}
                  </FeatureCategory>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                <GetStartedButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CompileBoxLandingPage;
