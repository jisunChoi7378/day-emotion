const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden sm:flex sm:items-center sm:flex-row sm:gap-10 text-2xl text-outline font-semibold justify-center mb-8">
      {children}
    </div>
  );
};

export default Header;
