import React, { FunctionComponent, useRef, RefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import styles from './home.module.scss';
import HomePreliminaryForm from './form/HomePreliminaryForm';
import PageWrapper from '../app/layout/PageWrapper';
import HomeHero from './hero/HomeHero';
import HomeInstructions from './instructions/HomeInstructions';
import HomePartners from './partners/HomePartners';
import HomeContact from './contact/HomeContact';
import { isAuthenticatedSelector } from '../auth/state/AuthenticationSelectors';
import { profileQuery as ProfileQueryType } from '../api/generatedTypes/profileQuery';
import profileQuery from '../profile/queries/ProfileQuery';
import LoadingSpinner from '../../common/components/spinner/LoadingSpinner';
import { clearProfile, saveProfile } from '../profile/state/ProfileActions';

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery<ProfileQueryType>(profileQuery);
  const userIsAuthenticated = useSelector(isAuthenticatedSelector);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (formRef: RefObject<HTMLDivElement>) => {
    if (formRef && formRef.current) {
      window.scrollTo(0, formRef.current.offsetTop);
    }
  };

  let userHasProfile = false;

  if (loading) return <LoadingSpinner isLoading={true} />;
  if (!data || error) {
    dispatch(clearProfile());
  }
  if (data?.myProfile) {
    userHasProfile = true;
    dispatch(saveProfile(data.myProfile));
  }

  return (
    <PageWrapper containerClassName={styles.gridLayoutOverride}>
      <div
        className={classnames(styles.home, {
          userHasProfile: styles.userHasProfile,
        })}
      >
        <HomeHero
          userHasProfile={userHasProfile}
          userIsAuthenticated={userIsAuthenticated}
          scrollToForm={() => scrollToForm(formRef)}
        />
        <HomeInstructions />
        {!userHasProfile && <HomePreliminaryForm forwardRef={formRef} />}
        <HomePartners />
        <HomeContact />
      </div>
    </PageWrapper>
  );
};

export default Home;
