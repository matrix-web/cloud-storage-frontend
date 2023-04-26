import { User } from '@/api/dto/auth.dto';
import { Button } from 'antd';
import { GetServerSidePropsContext, NextPage } from 'next';
import styles from '@/styles/Profile.module.scss';
import { checkAuth } from '@/utils/checkAuth';
import * as Api from '@/api';
import { ReactNode } from 'react';
import { Layout } from '@/layouts/HomeLayout';

interface Props {
  userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }): JSX.Element => {
  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      Api.auth.logout();
      location.href = '/';
    }
  };

  return (
    <main>
      <div className={styles.root}>
        <h1>Мой профиль</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          Полное имя: <b>{userData.fullName}</b>
        </p>
        <p>
          E-mail: <b>{userData.email}</b>
        </p>
        <Button type="primary" danger onClick={onClickLogout}>
          Выйти
        </Button>
      </div>
    </main>
  );
};

// @ts-ignore
DashboardProfilePage.getLayout = (page: ReactNode) => {
  return <Layout title="Dashboard / Профиль">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default DashboardProfilePage;
