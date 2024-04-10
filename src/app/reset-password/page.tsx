import logo from '@/shared/assets/icons/logo.svg';
import AuthModal from '@/shared/components/AuthModal/AuthModal';
import { Button } from '@/shared/components/Button';
import TextField from '@/shared/components/TextField/TextField';
import AuthLayout from '@/shared/layout/AuthLayout/AuthLayout';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Head from 'next/head';
import Image from 'next/image';

const ResetPassword = () => {
  return (
    <AuthLayout>
      <AuthModal>
        <Head>
          <title>Reset Password</title>
        </Head>
        <Image src={logo} alt="logo" className="mb-6" />
        <div className="min-w-[300px]">
          <div className="mb-6">
            <h1 className="text-xl 2xl:text-2xl font-semibold">
              Verify your identity
            </h1>
            <p className="text-violet-800 text-sm ">
              Enter the email you used to sign up.
            </p>
          </div>
          <div className="mb-2">
            <TextField
              variant="default"
              placeholder="someone@example.com"
              className="pl-[30px] text-sm "
              icon={
                <i className="absolute bottom-[6px] pl-2">
                  <EmailOutlinedIcon className="text-violet-700 text-[16px]" />
                </i>
              }
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="secondary" className="text-sm px-4">
              <span className="block text-violet-900 font-semibold">
                Cancel
              </span>
            </Button>
            <Button variant="primary" className="text-sm px-2">
              <span className="block">Continue</span>
            </Button>
          </div>
        </div>
      </AuthModal>
    </AuthLayout>
  );
};

export default ResetPassword;
