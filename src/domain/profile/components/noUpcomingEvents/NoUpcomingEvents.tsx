import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Icon from '../../../../common/components/icon/Icon';
import envelopeWithStars from '../../../../assets/icons/svg/envelopeWithStars.svg';

const NoUpcomingEvents: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('profile.noupcomingevents.hero.header')}</h1>
      <p>Tänne ilmaantuvat sinulle lähetetyt tapahtumakutsut.</p>
      <Icon src={envelopeWithStars} alt="Envelope with stars" />
      <p>
        Pääset myös ilmoittautumaan tapahtumiin ja perumaan ilmoittautumisesi
        mikäli et jostain syystä pääsekään tapahtumaan.
      </p>
    </div>
  );
};

export default NoUpcomingEvents;
