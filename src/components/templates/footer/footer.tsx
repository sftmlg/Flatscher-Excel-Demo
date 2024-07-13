import { Container } from '@src/components/shared/container';

export const Footer = () => {
  return (
    <footer className="border-t-color mt-10 border-t border-gray200">
      <Container className="py-8">
        <div className="text-gray-600 mt-4 text-sm">&copy; David Moling 2024</div>
      </Container>
    </footer>
  );
};
