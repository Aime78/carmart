interface AuthLayoutProps {
  children: React.ReactElement;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="md:bg-violet-500 md:min-h-screen md:flex md:justify-center md:items-center font-work-sans">
      {children}
    </div>
  );
};

export default AuthLayout;
