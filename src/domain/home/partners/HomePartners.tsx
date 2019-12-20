import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './homePartners.module.scss';
import cirkoIcon from '../../../assets/icons/partners/cirko.png';
import helsinginkaupunginorkesteriIcon from '../../../assets/icons/partners/helsinginkaupunginorkesteri.png';
import helIcon from '../../../assets/icons/partners/hel.png';
import teatteriilmioIcon from '../../../assets/icons/partners/teatteriilmio.png';
import jaesIcon from '../../../assets/icons/partners/jaes.png';
import tanssintaloIcon from '../../../assets/icons/partners/tanssintalo.png';
import Icon from '../../../common/components/icon/Icon';

const HomePartners: React.FunctionComponent = props => {
  const { t } = useTranslation();

  return (
    <section className={styles.wrapper}>
      <h2>{t('home.partners.heading.text')}</h2>
      <div className={styles.partners}>
        <div className={styles.big}>
          <Icon className={styles.icon} src={jaesIcon} alt="" />
          <Icon className={styles.icon} src={helIcon} alt="" />
        </div>
        <div className={styles.small}>
          <Icon
            className={styles.icon}
            src={helsinginkaupunginorkesteriIcon}
            alt=""
          />
          <Icon className={styles.icon} src={teatteriilmioIcon} alt="" />
          <Icon className={styles.icon} src={cirkoIcon} alt="Cirko icon" />
          <Icon className={styles.icon} src={tanssintaloIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
