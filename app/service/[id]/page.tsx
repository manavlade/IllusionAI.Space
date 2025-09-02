
"use client";

import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { serviceData } from "@/utils/serviceData";

export default function ServiceDetailClient({ params }: { params: { id: string } }) {
    const service = Object.values(serviceData).find(
        (s) => s.id.toString() === params.id
    );
    if (!service) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>Service not found 🚨</p>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-black text-white pt-20 pb-10">
            {/* Background Blobs */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div
                    className={`absolute top-0 left-1/4 w-96 h-96 ${service.color.replace("from-", "bg-").split(" ")[0]
                        } rounded-full filter blur-3xl opacity-10`}
                />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-800 rounded-full filter blur-3xl opacity-10" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
                {/* Back Button */}
                <Link
                    href="/services"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Services
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-r ${service.color} text-white`}
                    >
                        <Icon className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {service.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        {service.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-12">
                        {/* Features */}
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                            <ul className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-center"
                        >
                            <Link
                                href="/contact"
                                className={`inline-block px-8 py-4 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold text-lg hover:shadow-lg transition-all`}
                            >
                                Get Started with {service.title}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}



{/* Process */ }
//  <motion.section
//  initial={{ opacity: 0, x: 20 }}
//  animate={{ opacity: 1, x: 0 }}
//  transition={{ duration: 0.5, delay: 0.3 }}
// >
//  <h2 className="text-2xl font-bold mb-6">Our Process</h2>
//  <ol className="space-y-4 border-l-2 border-gray-700 ml-4">
//      {service.process.map((step, index) => (
//          <li key={index} className="relative pl-6">
//              <div
//                  className={`absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-gradient-to-r ${service.color}`}
//              />
//              <p className="text-gray-300">{step}</p>
//          </li>
//      ))}
//  </ol>
// </motion.section>

{/* Benefits */ }

// <motion.section
// initial={{ opacity: 0, x: -20 }}
// animate={{ opacity: 1, x: 0 }}
// transition={{ duration: 0.5, delay: 0.2 }}
// >
// <h2 className="text-2xl font-bold mb-6">Business Benefits</h2>
// <ul className="space-y-4">
//     {service.benefits.map((benefit, index) => (
//         <li key={index} className="flex items-start">
//             <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
//             <span>{benefit}</span>
//         </li>
//     ))}
// </ul>
// </motion.section>


{/* Timeline & Pricing */ }
// <motion.section
//     initial={{ opacity: 0, x: 20 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.5, delay: 0.4 }}
//     className="grid grid-cols-1 md:grid-cols-2 gap-6"
// >
//     <div className="bg-gray-900 rounded-xl p-6">
//         <div className="flex items-center mb-4">
//             <Clock className="w-6 h-6 text-blue-500 mr-2" />
//             <h3 className="text-xl font-semibold">Timeline</h3>
//         </div>
//         <p>{service.timeline}</p>
//     </div>

//     <div className="bg-gray-900 rounded-xl p-6">
//         <div className="flex items-center mb-4">
//             <Users className="w-6 h-6 text-green-500 mr-2" />
//             <h3 className="text-xl font-semibold">Pricing</h3>
//         </div>
//         <p>{service.pricing}</p>
//     </div>
// </motion.section>

// export default function TermsAndConditions() {
//     return (
//         <div>
//             <h1>Terms and Conditions</h1>
//         </div>
//     );
// }