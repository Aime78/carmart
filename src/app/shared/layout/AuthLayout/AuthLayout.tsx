interface AuthLayoutProps {
  children: React.ReactElement;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="bg-violet-500 md:h-screen flex justify-center items-center font-work-sans">{children}</div>;
};

export default AuthLayout;
