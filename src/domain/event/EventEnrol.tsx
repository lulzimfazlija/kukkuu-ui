import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';

import Icon from '../../common/components/icon/Icon';
import styles from './event.module.scss';
import personIcon from '../../assets/icons/svg/person.svg';
import EnhancedInputField from '../../common/components/form/fields/input/EnhancedInputField';
import SelectField from '../../common/components/form/fields/select/SelectField';
import { eventQuery as EventQueryType } from '../api/generatedTypes/eventQuery';
import EventOccurrenceList from './EventOccurrenceList';
import EventFeatures from './EventFeatures';

interface SignupValues {
  date: string;
  time: string;
}

const EventEnrol: FunctionComponent<EventQueryType> = data => {
  const { t } = useTranslation();

  const initialValues: SignupValues = {
    date: '',
    time: '',
  };

  const handleSubmit = (values: SignupValues) => {
    // TODO: Do something like querying api again new filters
    // OR filter in js.
  };

  // TODO: Build options based on occurrences from the api
  const selectOptions = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
  ];

  if (!data?.event) return <div></div>;

  const participantsPerInvite = data.event.participantsPerInvite
    ? t(`event.participantsPerInviteEnum.${data.event.participantsPerInvite}`)
    : '';

  const eventFeaturesMock = [
    {
      header: 'Getting there',
      body: 'You find out',
    },
    {
      header: 'Accessibility',
      body: 'Do not think about it',
    },
    {
      header: 'Sanitation',
      body: 'Piss on the floor',
    },
    {
      header: 'This Additional services text is super long. Wonder why they made it so long',
      body: 'Much better stuff there',
    },
  ];

  return (
    <>
      <div className={styles.register}>
        <h2>{t('event.register.form.header')}</h2>
        <div className={styles.attendees}>
          <Icon src={personIcon} className={styles.icon} />
          {participantsPerInvite}
        </div>
        <div className={styles.signup}>
          <Formik
            key="eventPageFormKey"
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={(values: SignupValues) => {
              handleSubmit(values);
            }}
          >
            {({ handleSubmit, handleChange }) => {
              return (
                <form onSubmit={handleSubmit} id="eventPageForm">
                  <EnhancedInputField
                    className={styles.dateField}
                    id="date"
                    name="date"
                    placeholder="placeholder"
                    label="Choose date"
                    options={selectOptions}
                    component={SelectField}
                  />
                  <EnhancedInputField
                    className={styles.timeField}
                    id="time"
                    name="time"
                    placeholder="placeholdertime"
                    label="Choose time"
                    options={selectOptions}
                    component={SelectField}
                  />
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
      {data.event.occurrences.edges && (
        <EventOccurrenceList
          occurrences={data.event.occurrences}
          eventId={data.event.id}
        />
      )}
      <EventFeatures data={eventFeaturesMock} />
    </>
  );
};

export default EventEnrol;
