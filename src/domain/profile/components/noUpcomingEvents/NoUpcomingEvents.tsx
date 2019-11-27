import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Icon from '../../../../common/components/icon/Icon';
import envelopeWithStars from '../../../../assets/icons/svg/envelopeWithStars.svg';

const NoUpcomingEvents: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('profile.noupcomingevents.hero.heading')}</h1>
      <p>{t('profile.noupcomingevents.text1')}</p>
      <Icon src={envelopeWithStars} alt="Envelope with stars" />
      <p>{t('profile.noupcomingevents.text2')}</p>
    </div>
  );
};

export default NoUpcomingEvents;
