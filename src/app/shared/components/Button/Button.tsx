import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'src/app/shared/utils/mergeClasses';

const buttonVariants = cva('', {
  variants: {
    variant: {
      primary:
        'bg-purple-500 hover:bg-purple-400 hover:text-violet-200 text-violet-50 font-semibold p-2 rounded cursor-pointer focus:ring-1 focus:ring-purple-400 transition ease-in-out',
      secondary:
        'border-[1.5px] border-violet-600 rounded p-2 hover:bg-violet-200 transition ease-in-out',
      active: 'active:bg-purple-500',
      focus:
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({ className, variant, children, ...others }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...others}>
      {children}
    </button>
  );
};

export { Button, buttonVariants };
