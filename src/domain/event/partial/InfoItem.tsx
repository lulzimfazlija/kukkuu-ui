import React, { FunctionComponent } from 'react';

import styles from './occurrenceInfo.module.scss';
import Icon from '../../../common/components/icon/Icon';

type Props = {
  className?: string;
  icon: string;
  iconAlt?: string;
  label?: string | undefined;
};

const InfoItem: FunctionComponent<Props> = ({
  className,
  icon,
  iconAlt = '',
  label = '',
}) => {
  return (
    <div className={className}>
      <Icon alt={iconAlt} className={styles.labelIcon} src={icon} />
      <div>{label}</div>
    </div>
  );
};

export default InfoItem;
