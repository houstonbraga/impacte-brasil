import { twMerge } from 'tailwind-merge'

interface LayoutProp {
  children?: React.ReactNode;
  className?: string;
}

export const LayoutContent = ({ children, className }: LayoutProp) => {
  return <div className={twMerge('px-[120px]', className)}>{children}</div>;
};
