export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--line)] bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-[var(--ink-soft)] text-center sm:text-left">
        © {currentYear} Diego Escurra. Desarrollado con React y Tailwind CSS.
      </div>
    </footer>
  )
}
