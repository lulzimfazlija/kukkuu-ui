import React, { FunctionComponent } from 'react';

import angleDownIcon from '../../../assets/icons/svg/angleDown.svg';
import styles from './collapsible.module.scss';
import Icon from '../icon/Icon';

interface Item {
  header: string;
  body: string;
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

export default Collapsible;
