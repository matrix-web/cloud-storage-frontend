import { CloudUploadOutlined } from '@ant-design/icons';
import styles from '@/styles/Home.module.scss';
import { Button, Upload, UploadFile, notification } from 'antd';
import { FC, useState } from 'react';
import * as Api from '@/api';

export const UploadButton: FC = (): JSX.Element => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      const file = await Api.files.uploadFile(options);
      setFileList([]);
    } catch (err) {
      notification.error({
        message: 'Ошибка!',
        description: 'Не удалось загрузить файл',
        duration: 2,
      });
    }
  };

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      className={styles.upload}>
      <Button type="primary" icon={<CloudUploadOutlined />} size="large">
        Загрузить файл
      </Button>
    </Upload>
  );
};
