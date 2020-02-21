import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useHistory } from 'react-router';

import Icon from '../../common/components/icon/Icon';
import styles from './event.module.scss';
import PageWrapper from '../app/layout/PageWrapper';
import personIcon from '../../assets/icons/svg/person.svg';
import backIcon from '../../assets/icons/svg/arrowLeft.svg';
import EnhancedInputField from '../../common/components/form/fields/input/EnhancedInputField';
import SelectField from '../../common/components/form/fields/select/SelectField';
import Button from '../../common/components/button/Button';

interface SignupValues {
  date: string;
  time: string;
}

const Event: FunctionComponent = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const initialValues: SignupValues = {
    date: '',
    time: '',
  };

  const handleSubmit = (values: SignupValues) => {
    // TODO: Do something like querying api again new filters
    // OR filter in js.
  };

  // TODO: Get from API (all todo's are pending that)
  const selectOptions = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
  ];
  // TODO:
  const bgImageUrl =
    'https://edit.myhelsinki.fi/sites/default/files/styles/hero_image/public/2019-12/flow_festival_2019_friday_c_petri_anttila_mg_0397.jpg';
  const backgroundImageStyle = {
    backgroundImage: `url("${bgImageUrl}")`,
  };

  return (
    <>
      <div className={styles.heroWrapper} style={backgroundImageStyle}>
        <div className={styles.backButtonWrapper}>
          <Button
            aria-label={t('common.backButton.label')}
            className={styles.backButton}
            onClick={() => history.goBack()}
          >
            <Icon
              src={backIcon}
              className={styles.backButtonIcon}
              alt={t('common.backButton.label')}
            />
          </Button>
        </div>
      </div>

      <PageWrapper className={styles.wrapper} title={'event'}>
        <div className={styles.eventWrapper} role="main">
          <div className={styles.event}>
            <div className={styles.heading}>
              <h1>TODO: Tervetuloa Nalle Nappisilmän syyskonserttiin Emil!</h1>
            </div>
            <div className={styles.description}>
              TODO: Lorem ipsum description
            </div>
            <div className={styles.register}>
              <h2>{t('event.register.form.header')}</h2>

              <div className={styles.attendees}>
                <Icon src={personIcon} className={styles.icon} />
                TODO: 1 lapsi + 1 huoltaja
              </div>
              <div className={styles.signup}>
                <Formik
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
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Event;
