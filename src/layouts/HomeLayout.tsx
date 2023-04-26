import { Header } from '@/components/Header';
import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface LayoutProps {
  title: string;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = (
  props,
): JSX.Element => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Header />
        <div className={styles.main}>
          <div className={styles.layout}>{children}</div>
        </div>
      </main>
    </>
  );
};
