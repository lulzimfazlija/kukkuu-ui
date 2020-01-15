import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import styles from './notFound.module.scss';
import Container from '../layout/Container';
import Icon from '../../../common/components/icon/Icon';
import adultFace from '../../../assets/icons/svg/adultFace.svg';
import Button from '../../../common/components/button/Button';

const NotFound: FunctionComponent = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <Container>
      <div className={styles.notFound}>
        <h2>404</h2>
        <Icon src={adultFace} className={styles.icon} alt="Sad adult face" />
        <p>{t('notFound.text')}</p>

        <Button onClick={() => history.push('/')}>
          {t('notFound.return.text')}
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
