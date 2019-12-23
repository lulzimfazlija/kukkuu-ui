import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './homePartners.module.scss';
import cirkoIcon from '../../../assets/icons/partners/cirko.png';
import hekaIcon from '../../../assets/icons/partners/heka.png';
import hkiIcon from '../../../assets/icons/partners/hki.png';
import ilmiIcon from '../../../assets/icons/partners/ilmi.png';
import janeIcon from '../../../assets/icons/partners/jane.png';
import tansiIcon from '../../../assets/icons/partners/tansi.png';
import Icon from '../../../common/components/icon/Icon';

const HomePartners: React.FunctionComponent = props => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      <div className={styles.innerwrapper}>
        <h2>{t('home.partners.heading.text')}</h2>
        <div className={styles.partners}>
          <div className={styles.big}>
            <Icon className={styles.icon} src={janeIcon} alt="Jane icon" />
            <Icon className={styles.icon} src={hkiIcon} alt="Hki icon" />
          </div>
          <div className={styles.small}>
            <Icon className={styles.icon} src={hekaIcon} alt="Heka icon" />
            <Icon className={styles.icon} src={ilmiIcon} alt="Ilmi icon" />
            <Icon className={styles.icon} src={cirkoIcon} alt="Cirko icon" />
            <Icon className={styles.icon} src={tansiIcon} alt="Tansi icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
