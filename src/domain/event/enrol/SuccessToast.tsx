import React, { FunctionComponent, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import styles from './successToast.module.scss';
import tada from '../../../assets/icons/svg/tada.svg';
import Icon from '../../../common/components/icon/Icon';
import { justEnrolled } from '../state/EventActions';
import { justEnrolledSelector } from '../state/EventSelectors';

const SuccessToast: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [showJustEnrolled, setShowJustEnrolled] = useState(false);
  const isJustEnrolled = useSelector(justEnrolledSelector);

  useEffect(() => {
    setShowJustEnrolled(isJustEnrolled);
  }, [isJustEnrolled]);

  return (
    <div className={styles.successToastWrapper}>
      <CSSTransition
        in={showJustEnrolled}
        timeout={{ appear: 300, enter: 300, exit: 300 }}
        classNames={{ ...styles }}
        onEntered={() =>
          setTimeout(() => {
            setShowJustEnrolled(false);
          }, 3000)
        }
        onExited={() => dispatch(justEnrolled())}
        unmountOnExit
      >
        <div
          className={styles.successToast}
          onClick={() => {
            setShowJustEnrolled(false);
          }}
        >
          <div className={styles.content}>
            <Icon src={tada} className={styles.tadaIcon} />
            <div>
              <h1>{t('enrollment.successToast.heading')}</h1>
              <p>{t('enrollment.successToast.paragraph')}</p>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
export default SuccessToast;
