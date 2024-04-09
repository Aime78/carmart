import Google from '@/shared/assets/icons/google.svg';
import logo from '@/shared/assets/icons/logo.svg';
import AuthModal from '@/shared/components/AuthModal/AuthModal';
import { Button } from '@/shared/components/Button';
import Checkbox from '@/shared/components/Checkbox/Checkbox';
import TextField from '@/shared/components/TextField/TextField';
import AuthLayout from '@/shared/layout/AuthLayout/AuthLayout';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Image from 'next/image';
const page = () => {
  return (
    <AuthLayout>
      <AuthModal>
        <Image src={logo} alt="logo" className="mb-6" />
        <div className="min-w-[300px]">
          <div className="mb-4">
            <h1 className="text-xl 2xl:text-2xl font-semibold">Login</h1>
            <p className="text-violet-800 text-sm ">to get started</p>
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
          <div className="mb-2">
            <TextField
              variant="default"
              placeholder="password"
              className="pl-[30px] text-sm"
              icon={
                <i className="absolute bottom-[6px] pl-2">
                  <HttpsOutlinedIcon className="text-violet-700 text-[16px]" />
                </i>
              }
              postIcon={
                <i className="absolute right-[6px] bottom-[6px] pl-2 cursor-pointer">
                  <RemoveRedEyeOutlinedIcon className="text-violet-700 text-[16px]" />
                </i>
              }
            />
          </div>
          <span className="text-purple-500 font-inter text-xs font-medium mb-4 block cursor-pointer">
            Forgot Password?
          </span>

          <Checkbox
            id="remember-me"
            label="Remember me"
            className="mb-2 text-sm"
          />

          <Button variant="primary" className="w-full mb-2 text-sm">
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
              New User?
              <span className="text-purple-500 font-inter font-medium cursor-pointer ml-2">
                Register
              </span>
            </span>
          </div>
        </div>
      </AuthModal>
    </AuthLayout>
  );
};

export default page;
