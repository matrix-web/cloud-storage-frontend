import nookies from 'nookies';
import axios from 'axios';
import * as Api from '@/api';
import { GetServerSidePropsContext } from 'next';

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx);

  axios.defaults.headers.Authorization = 'Bearer ' + _token;

  try {
    await Api.auth.getMe();

    return {
      props: {},
    };
  } catch (err) {
    return {
      redirect: {
        desination: '/dashboard/auth',
        permanent: false,
      },
    };
  }
};
