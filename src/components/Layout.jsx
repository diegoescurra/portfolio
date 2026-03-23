export const Layout = ({ children }) => {
  return (
    <main className="relative flex grow flex-col">
      <div className="overflow-hidden">
        {children}
      </div>
    </main>
  );
};
