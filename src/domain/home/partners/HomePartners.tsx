import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './homePartners.module.scss';
import Icon from '../../../common/components/icon/Icon';
import amosrexIcon from '../../../assets/icons/partners/amosrex.png';
import cirkoIcon from '../../../assets/icons/partners/cirko.png';
import designmuseumIcon from '../../../assets/icons/partners/designmuseum.png';
import hamhelsinkiIcon from '../../../assets/icons/partners/hamhelsinki.png';
import helIcon from '../../../assets/icons/partners/hel.png';
import helsinginkaupunginmuseoIcon from '../../../assets/icons/partners/helsinginkaupunginmuseo.png';
import helsinginkaupunginorkesteriIcon from '../../../assets/icons/partners/helsinginkaupunginorkesteri.png';
import hktIcon from '../../../assets/icons/partners/hkt.png';
import hotellijaravintolamuseoIcon from '../../../assets/icons/partners/hotellijaravintolamuseo.png';
import hurjaruuthIcon from '../../../assets/icons/partners/hurjaruuth.png';
import jaesIcon from '../../../assets/icons/partners/jaes.png';
import kansallismuseoIcon from '../../../assets/icons/partners/kansallismuseo.png';
import kansallisteatteriIcon from '../../../assets/icons/partners/kansallisteatteri.png';
import kaviIcon from '../../../assets/icons/partners/kavi.png';
import kulttuuriperintokasvatusIcon from '../../../assets/icons/partners/kulttuuriperintokasvatus.png';
import mfaIcon from '../../../assets/icons/partners/mfa.png';
import nukketeatterisampoIcon from '../../../assets/icons/partners/nukketeatterisampo.png';
import oodihelsinkiIcon from '../../../assets/icons/partners/oodihelsinki.png';
import oopperabalettiIcon from '../../../assets/icons/partners/oopperabaletti.png';
import qteatteriIcon from '../../../assets/icons/partners/qteatteri.png';
import svenskateaternIcon from '../../../assets/icons/partners/svenskateatern.png';
import tanssintaloIcon from '../../../assets/icons/partners/tanssintalo.png';
import teatteriilmioIcon from '../../../assets/icons/partners/teatteriilmio.png';
import teatterimuseoIcon from '../../../assets/icons/partners/teatterimuseo.png';
import valokuvataiteenmuseoIcon from '../../../assets/icons/partners/valokuvataiteenmuseo.png';

const HomePartners: React.FunctionComponent = props => {
  const { t } = useTranslation();

  interface Partner {
    name: string;
    icon: string;
  }

  type Props = {
    partners: Partner[];
  };

  // Name, icon file name and translation key is created from partner's domain
  // name without .fi and dash.
  // Examples:
  // teatteri-ilmio.fi -> teatteriilmio
  // hel.fi -> hel
  const mainPartnerList: Partner[] = [
    { name: 'hel', icon: helIcon },
    { name: 'jaes', icon: jaesIcon },
  ];
  const partnerList: Partner[] = [
    { name: 'amosrex', icon: amosrexIcon },
    { name: 'cirko', icon: cirkoIcon },
    { name: 'designmuseum', icon: designmuseumIcon },
    { name: 'hamhelsinki', icon: hamhelsinkiIcon },
    { name: 'helsinginkaupunginmuseo', icon: helsinginkaupunginmuseoIcon },
    {
      name: 'helsinginkaupunginorkesteri',
      icon: helsinginkaupunginorkesteriIcon,
    },
    { name: 'hkt', icon: hktIcon },
    { name: 'hotellijaravintolamuseo', icon: hotellijaravintolamuseoIcon },
    { name: 'hurjaruuth', icon: hurjaruuthIcon },
    { name: 'kansallismuseo', icon: kansallismuseoIcon },
    { name: 'kansallisteatteri', icon: kansallisteatteriIcon },
    { name: 'kavi', icon: kaviIcon },
    { name: 'kulttuuriperintokasvatus', icon: kulttuuriperintokasvatusIcon },
    { name: 'mfa', icon: mfaIcon },
    { name: 'nukketeatterisampo', icon: nukketeatterisampoIcon },
    { name: 'oodihelsinki', icon: oodihelsinkiIcon },
    { name: 'oopperabaletti', icon: oopperabalettiIcon },
    { name: 'qteatteri', icon: qteatteriIcon },
    { name: 'svenskateatern', icon: svenskateaternIcon },
    { name: 'tanssintalo', icon: tanssintaloIcon },
    { name: 'teatteriilmio', icon: teatteriilmioIcon },
    { name: 'teatterimuseo', icon: teatterimuseoIcon },
    { name: 'valokuvataiteenmuseo', icon: valokuvataiteenmuseoIcon },
  ];

  function Partners(props: Props) {
    // any is workaround for TS bug
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const partners: any = props.partners;
    const partnerItems = partners.map((partner: Partner, index: number) => (
      <Icon
        key={index}
        className={styles.icon}
        src={partner.icon}
        alt={t(`home.partners.partner.${partner.name}`)}
      />
    ));
    return partnerItems;
  }

  return (
    <section className={styles.wrapper}>
      <h2>{t('home.partners.heading.text')}</h2>
      <div className={styles.partners}>
        <div className={styles.big}>
          <Partners partners={mainPartnerList} />
        </div>
        <div className={styles.small}>
          <Partners partners={partnerList} />
          <Icon
            className={styles.icon}
            src={helsinginkaupunginorkesteriIcon}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
