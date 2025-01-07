import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { certificates } from '../../data/certificates'
import { useState } from 'react'
import CardCertificate from '../shareds/CardCertificate';

const Certificates = () => {

 const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6;

  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const currentCertificates = certificates.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages )
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages )
  }



  return (
    <section className="py-20 relative overflow-hidden" id="habilidades">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50">
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium mb-4">
          <Award size={16} className="mr-2" /> Crecimiento Personal
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificaciones & Logros</h2>
        <p className="text-xl text-gray-600">Aprendizaje continuo y desarrollo de habilidades</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCertificates.map((cert) => (
          <CardCertificate props={cert} key={cert.title}/>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-12 gap-4">
        <button
          onClick={prevPage}
          className="p-2 rounded-full bg-white shadow-md hover:bg-indigo-50 transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <span className="text-gray-600">
          Página {currentPage + 1} de {totalPages}
        </span>
        
        <button
          onClick={nextPage}
          className="p-2 rounded-full bg-white shadow-md hover:bg-indigo-50 transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  </section>
  )
}

export default Certificates