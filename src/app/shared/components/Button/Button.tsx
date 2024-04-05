import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'src/app/shared/utils/mergeClasses';

const buttonVariants = cva('', {
  variants: {
    variant: {
      default: '',
      hover: 'hover:bg-[purple-500]',
      active: 'active:bg-purple-500',
      focus:
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, variant, ...others }) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...others}>
      Button
    </button>
  );
};

export { Button, buttonVariants };
