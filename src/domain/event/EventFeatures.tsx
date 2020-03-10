import React, { FunctionComponent } from 'react';

import angleDownIcon from '../../assets/icons/svg/angleDown.svg';
import styles from '../../common/components/collapsible/collapsible.module.scss';
import Icon from '../../common/components/icon/Icon';

interface Item {
  header: string;
  body: string;
}

interface EventFeaturesProps {
  data: Item[];
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

const EventFeatures: FunctionComponent<EventFeaturesProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Collapsible key={index} item={item} />
      ))}
    </>
  );
};

export default EventFeatures;
