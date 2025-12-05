import { Briefcase, DollarSign, Globe, Layers, RefreshCw, Truck } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
      icon: <Truck className="w-6 h-6 text-pink-500" />,
      bgColor: "bg-white",
      highlight: false
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-[#C6EA65]",
      highlight: true
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      bgColor: "bg-white",
      highlight: false
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
      bgColor: "bg-white",
      highlight: false
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
      icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
      bgColor: "bg-white",
      highlight: false
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: <RefreshCw className="w-6 h-6 text-red-500" />,
      bgColor: "bg-white",
      highlight: false
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-5 my-5">
      <section className="mt-16 w-full bg-[#003B46] rounded-[2.5rem] p-8 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Services</h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 flex flex-col items-center text-center gap-4 transition-transform hover:scale-[1.02] duration-300`}
            >
              {/* Icon Bubble */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center shadow-inner mb-2">
                {/* Simulate the 3D Apple/Icon with a simple Lucide icon for now */}
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-[#003B46] min-h-[48px] flex items-center justify-center">
                {service.title}
              </h3>

              <p className={`text-sm leading-relaxed ${service.highlight ? 'text-[#003B46]/80' : 'text-gray-500'}`}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}