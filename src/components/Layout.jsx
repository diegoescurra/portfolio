export const Layout = ({ children }) => {
  return (
    <main className="relative flex grow flex-col bg-gray-50 ">
      <div className="overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        {children}
      </div>
    </main>
  );
};
