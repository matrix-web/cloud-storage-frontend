import { FC } from 'react';
import { setCookie } from 'nookies';
import styles from './Auth.module.scss';
import { Button, Form, Input, notification } from 'antd';
import { LoginFormDTO } from '@/api/dto/auth.dto';
import * as Api from '@/api';

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = (props): JSX.Element => {
  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const { token } = await Api.auth.login(values);
      notification.success({
        message: 'Успешно!',
        description: 'Переходим в админ-панель...',
        duration: 2,
      });

      setCookie(null, '_token', token, {
        path: '/',
      });

      location.href = '/dashboard';
    } catch (err) {
      console.warn('LoginForm', err);

      notification.error({
        message: 'Ошибка!',
        description: 'Неверный логин или пароль',
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.root}>
      <Form
        name="basic"
        onFinish={onSubmit}
        labelCol={{
          span: 8,
        }}>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Укажите почту',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Укажите пароль',
            },
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
