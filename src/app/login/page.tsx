import AuthModal from '@/shared/components/AuthModal/AuthModal';
import AuthLayout from '@/shared/layout/AuthLayout/AuthLayout';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import TextField from '@/shared/components/TextField/TextField';

const page = () => {
  return (
    <AuthLayout>
      <AuthModal>
        <Image src={logo} alt="logo" />
        <div>
          <h1 className='text-2xl font-semibold'>Login</h1>
          <p className='text-violet-800'>to get started</p>
          <TextField variant='default' placeholder='someone@example.com' />
        </div>
      </AuthModal>
    </AuthLayout>
  );
};

export default page;
