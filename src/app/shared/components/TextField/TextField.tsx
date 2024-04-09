import cn from '@/shared/utils/mergeClasses';
import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes, ReactNode } from 'react';

const textFieldVariants = cva('', {
  variants: {
    variant: {
      default:
        'block w-full border-b-2 border-violet-700 py-1.5 pl-2 rounded text-violet-800 placeholder:text-violet-700 focus:outline-none focus:border-b-2 focus:border-purple-500 font-inter',
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
  icon?: ReactNode;
  postIcon?: ReactNode;
}

const TextField = ({
  className,
  variant,
  icon,
  postIcon,
  ...others
}: TextFieldProps) => {
  return (
    <div className='border-[0.5px] border-violet-600 rounded'>
      <div className="relative">
        {icon && icon}
        <div>
          <input
            className={cn(textFieldVariants({ variant, className }))}
            {...others}
          />
        </div>
        {postIcon && postIcon}
      </div>
    </div>
  );
};

export default TextField;
