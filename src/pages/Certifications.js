import React, { useState } from "react";
import { Award, Download, ExternalLink, Search, X } from "lucide-react";
import Footer from "../components/Footer";

const certifications = [
  {
    title: "SQL Basics",
    image: "https://mphondlela.co.za/wp-content/uploads/2024/06/SQL-BASIC.png",
    link: "https://www.hackerrank.com/certificates/bf163d5107ad",
    category: "Database",
  },
  {
    title: "C# Basics",
    image: "https://mphondlela.co.za/wp-content/uploads/2024/06/C-bas.png",
    link: "https://www.hackerrank.com/certificates/bc2accc1cad5",
    category: "Programming",
  },
  {
    title: "Problem Solving (Intermediate)",
    image:
      "https://mphondlela.co.za/wp-content/uploads/2024/06/problem-solving-int.png",
    link: "https://www.hackerrank.com/certificates/8ae361f0aa73",
    category: "Skills",
  },
  {
    title: "Python Basics",
    image: "https://mphondlela.co.za/wp-content/uploads/2024/06/Pythonbasic.png",
    link: "https://www.hackerrank.com/certificates/fa8207d53fd0",
    category: "Programming",
  },
  {
    title: "Problem Solving (Basic)",
    image:
      "https://mphondlela.co.za/wp-content/uploads/2024/06/problem-solving-basic.png",
    link: "https://www.hackerrank.com/certificates/b89127684098",
    category: "Skills",
  },
  {
    title: "SQL Intermediate",
    image: "https://mphondlela.co.za/wp-content/uploads/2024/06/sql-int.png",
    link: "https://www.hackerrank.com/certificates/6ae54daca169",
    category: "Database",
  },
  {
    title: "Data Fundamentals",
    image: "https://mphondlela.co.za/wp-content/uploads/2024/06/data.png",
    link: "https://www.credly.com/badges/92fe8feb-ed28-4213-a865-e5e912389786/linked_in_profile",
    category: "Data",
  },
  {
    title: "Job Application Essentials",
    image: "https://mphondlela.co.za/wp-content/uploads/2024/06/job.png",
    link: "https://www.credly.com/badges/054c89df-94c8-4f3a-99e2-d4e87eff3a7a/linked_in_profile",
    category: "Professional",
  },
  {
    title: "Project Management Fundamentals",
    image: "https://mphondlela.co.za/wp-content/uploads/2024/06/ipma.png",
    link: "https://www.credly.com/badges/cdb95ecd-a8ae-46bb-ac10-b7a0cc7f2699/linked_in_profile",
    category: "Professional",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    image: "https://mphondlela.co.za/wp-content/uploads/2024/06/ai-cert.png",
    link: "https://www.credly.com/badges/897552e5-e33e-44c7-8d2b-53fd1039a215/public_url",
    category: "AI",
  },
];

const categories = [...new Set(certifications.map((cert) => cert.category))];

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = certifications.filter((cert) => {
    const matchesCategory =
      selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch = cert.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Professional Certifications
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of professional certifications and achievements
              demonstrating my commitment to continuous learning and skill
              development.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredCerts.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer"
              >
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full h-[400px] sm:h-[500px]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-2/3 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    <span className="inline-flex items-center space-x-2 text-sm text-blue-400">
                      <Award size={16} />
                      <span>{cert.category}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transcript Download */}
          <div className="text-center mt-16">
            <a
              href="https://mphondlela.co.za/wp-content/uploads/2024/06/transcript.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all group"
            >
              <Download className="group-hover:translate-y-1 transition-transform" size={20} />
              <span>Download Academic Transcript</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-lg mb-6"
            />

            <h3 className="text-2xl font-bold mb-4">{selectedCert.title}</h3>
            <p className="text-gray-400 mb-6">Category: {selectedCert.category}</p>

            <a
              href={selectedCert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <ExternalLink size={20} />
              <span>View Full Certificate</span>
            </a>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Certifications;
