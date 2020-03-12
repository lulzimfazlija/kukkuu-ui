import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { eventQuery_event_occurrences_edges_node_venue as VenueTypes } from '../api/generatedTypes/eventQuery';
import Collapsible from '../../common/components/collapsible/Collapsible';

interface EventFeaturesProps {
  venue: VenueTypes | undefined;
}

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
            header: t('venue.features.additionalInformation.heading'),
            body: venue?.additionalInfo,
          }}
        />
      )}
    </>
  );
};

export default VenueFeatures;
