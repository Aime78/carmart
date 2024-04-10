import AuthModal from "@/shared/components/AuthModal/AuthModal";
import AuthLayout from "@/shared/layout/AuthLayout/AuthLayout";
import Head from 'next/head';
import Image from 'next/image';
import logo from '@/shared/assets/icons/logo.svg';
import TextField from "@/shared/components/TextField/TextField";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Button } from "@/shared/components/Button";

const NewPassword = () => {
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
            Reset your password
            </h1>
            <p className="text-violet-800 text-sm ">
            Enter a new password.
            </p>
          </div>
          <div className="mb-2">
            <TextField
              variant="default"
              placeholder="New password"
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
  )
};

export default NewPassword;
