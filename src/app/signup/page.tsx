import Google from '@/shared/assets/icons/google.svg';
import logo from '@/shared/assets/icons/logo.svg';
import AuthModal from '@/shared/components/AuthModal/AuthModal';
import { Button } from '@/shared/components/Button';
import TextField from '@/shared/components/TextField/TextField';
import AuthLayout from '@/shared/layout/AuthLayout/AuthLayout';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Head from 'next/head';
import Image from 'next/image';

const Signup = () => {
  return (

    <AuthLayout>
      <AuthModal>
        <Head>
          <title>Sign up</title>
        </Head>
        <Image src={logo} alt="logo" className="mb-6" />
        <div className="min-w-[300px]">
          <div className="mb-4">
            <h1 className="text-xl 2xl:text-2xl font-semibold">Sign up</h1>
            <p className="text-violet-800 text-sm ">to get started</p>
          </div>
          <div className="mb-2">
            <TextField
              variant="default"
              placeholder="First Name"
              className="pl-[8px] text-sm "
            />
          </div>
          <div className="mb-2">
            <TextField
              variant="default"
              placeholder="Last Name"
              className="pl-[8px] text-sm "
            />
          </div>
          <div className="mb-2">
            <TextField
              variant="default"
              placeholder="Email"
              className="pl-[8px] text-sm "
            />
          </div>
          <div className="mb-2">
            <TextField
              variant="default"
              placeholder="Password"
              className="pl-[8px] text-sm"
              postIcon={
                <i className="absolute right-[6px] bottom-[6px] pl-2 cursor-pointer">
                  <RemoveRedEyeOutlinedIcon className="text-violet-700 text-[16px]" />
                </i>
              }
            />
          </div>
          <div className="mb-2">
            <TextField
              variant="default"
              placeholder="Confirm password"
              className="pl-[8px] text-sm"
              postIcon={
                <i className="absolute right-[6px] bottom-[6px] pl-2 cursor-pointer">
                  <RemoveRedEyeOutlinedIcon className="text-violet-700 text-[16px]" />
                </i>
              }
            />
          </div>

          <Button variant="primary" className="w-full mb-2 mt-4 text-sm">
            <span>Continue</span>
          </Button>
          <div className="flex justify-center">
            <span className="text-violet-800 my-4 text-sm">
              Or continue with
            </span>
          </div>
          <Button variant="secondary" className="w-full my-2 text-sm">
            <div className="grid grid-cols-3 grid-rows-1 items-center">
              <Image src={Google} alt="Google" className="w-[16px] h-[16px]" />
              <span className="block text-violet-900 font-semibold">
                Google
              </span>
            </div>
          </Button>
          <div className="text-sm">
            <span className="text-violet-800">
              Already registered?
              <span className="text-purple-500 font-inter font-medium cursor-pointer ml-2">
                Login
              </span>
            </span>
          </div>
        </div>
      </AuthModal>
    </AuthLayout>
  );
};

export default Signup;
