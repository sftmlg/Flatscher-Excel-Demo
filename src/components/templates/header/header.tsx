import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export const Header = ({ className }: { className: string }) => {
  return (
    <header className={twMerge('bg-blue py-5', className)}>
      <nav className="flex items-center justify-between">
        <Link className="!text-black !no-underline" href="/" title="Flatscher Excel Demo">
          <h1>Flatscher Excel Demo</h1>
        </Link>
      </nav>
    </header>
  );
};
