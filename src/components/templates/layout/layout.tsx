import { ReactNode } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';
import { Container } from '@src/components/shared/container';

interface LayoutPropsInterface {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Header className="my-5" />
      {children}
      <Footer />
    </div>
  );
};
