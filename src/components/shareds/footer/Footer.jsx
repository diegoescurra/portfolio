export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--line)] bg-[var(--bg-surface)]">
      <div className="max-w-screen-xl mx-auto px-4 py-6 text-sm text-[var(--ink-soft)] text-center sm:text-left">
        {currentYear} Diego Escurra. Hecho con React y Tailwind CSS.
      </div>
    </footer>
  )
}
