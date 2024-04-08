import cn from '@/shared/utils/mergeClasses';
import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

const textFieldVariants = cva('', {
  variants: {
    variant: {
      default:
        'block w-full border-0 py-1.5 pl-2 rounded text-violet-800 ring-1 ring-inset ring-violet-700 placeholder:text-violet-700 focus:outline-none focus:border-b-2 focus:border-purple-500 font-inter',
      hover: 'hover:bg-[purple-500]',
      active: 'active:bg-purple-500',
      focus:
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
});

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textFieldVariants> {
    }

const TextField = ({ className, variant, ...others }: TextFieldProps) => {
  return (
    <input
      className={cn(textFieldVariants({ variant, className }))}
      {...others}
    />
  );
};

export default TextField;
