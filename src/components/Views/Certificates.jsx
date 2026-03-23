import { Award } from 'lucide-react';
import { certificates } from '../../data/certificates'
import { useState } from 'react'
import CardCertificate from '../shareds/CardCertificate';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 4)

  return (
    <section className="py-20 relative overflow-hidden" id="habilidades">
    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-emerald-50/40">
      <div className="absolute top-40 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--accent)]">
          <Award size={16} className="mr-2" /> Aprendizaje continuo
        </div>
        <h2 className="text-3xl font-bold text-[var(--ink-strong)] mb-3">Certificaciones</h2>
        <p>Respaldo tecnico complementario a la experiencia en proyectos.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedCertificates.map((cert) => (
          <CardCertificate props={cert} key={cert.title}/>
        ))}
      </div>

      {certificates.length > 4 && (
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-5 py-3 rounded-full border border-[var(--line)] bg-[var(--bg-surface)] text-[var(--ink-strong)] font-medium hover:border-[var(--accent)] transition"
          >
            {showAll ? 'Mostrar menos' : 'Mostrar todas'}
          </button>
        </div>
      )}
    </div>
  </section>
  )
}

export default Certificates
