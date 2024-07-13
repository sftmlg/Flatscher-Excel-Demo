import { GetStaticProps } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';

const ErrorPage404 = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1 className="h2">{t('notFound.title')}</h1>
      <p className="mt-4">
        <Trans i18nKey="notFound.description">
          <Link className="text-blue500" href="/" />
        </Trans>
      </p>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({}) => {
  return {
    props: {},
  };
};

export default ErrorPage404;
