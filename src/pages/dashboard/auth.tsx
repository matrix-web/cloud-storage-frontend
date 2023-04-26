import { LoginForm } from '@/components/auth/LoginForm';
import { Tabs } from 'antd';
import Head from 'next/head';
import { NextPage } from 'next/types';

const AuthPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: '50px auto' }}>
        <Tabs
          items={[
            {
              label: 'Войти',
              key: '1',
              children: <LoginForm />,
            },
            {
              label: 'Регистрация',
              key: '2',
              children: <h2>Регистрация</h2>,
            },
          ]}
        />
      </main>
    </>
  );
};

export default AuthPage;
