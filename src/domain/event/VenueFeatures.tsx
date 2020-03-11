import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import angleDownIcon from '../../assets/icons/svg/angleDown.svg';
import styles from '../../common/components/collapsible/collapsible.module.scss';
import Icon from '../../common/components/icon/Icon';
import { eventQuery_event_occurrences_edges_node_venue as VenueTypes } from '../api/generatedTypes/eventQuery';

interface Item {
  header: string;
  body: string;
}

interface EventFeaturesProps {
  venue: VenueTypes | undefined;
}

interface CollapsibleProps {
  item: Item;
}

const Collapsible: FunctionComponent<CollapsibleProps> = ({ item }) => {
  const [isOpen, toggleCollapsible] = React.useState(false);

  return (
    <>
      <button
        aria-expanded={isOpen}
        className={styles.header}
        onClick={() => toggleCollapsible(!isOpen)}
      >
        <div>{item.header}</div>
        <Icon src={angleDownIcon} alt={''} className={styles.arrow} />
      </button>
      {isOpen && <p>{item.body}</p>}
      <hr />
    </>
  );
};

const VenueFeatures: FunctionComponent<EventFeaturesProps> = ({ venue }) => {
  const { t } = useTranslation();

  return (
    <>
      {venue?.arrivalInstructions && (
        <Collapsible
          item={{
            header: t('venue.features.arrival.heading'),
            body: venue?.arrivalInstructions,
          }}
        />
      )}
      {venue?.accessibilityInfo && (
        <Collapsible
          item={{
            header: t('venue.features.accessibility.heading'),
            body: venue.accessibilityInfo,
          }}
        />
      )}
      {venue?.additionalInfo && (
        <Collapsible
          item={{
            header: t('venue.features.additionalInfo.heading'),
            body: venue?.additionalInfo,
          }}
        />
      )}
    </>
  );
};

export default VenueFeatures;
