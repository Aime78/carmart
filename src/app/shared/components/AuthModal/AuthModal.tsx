import { ReactNode } from 'react';

interface AuthModalProps {
  children: ReactNode;
}
const AuthModal = ({ children }: AuthModalProps) => {
  return (
    <div className="bg-violet-50 rounded-md md:drop-shadow-md md:pl-[30px] md:pr-[40px] md:pt-[40px] md:pb-[50px]  p-[30px]">
      {children}
    </div>
  );
};

export default AuthModal;
