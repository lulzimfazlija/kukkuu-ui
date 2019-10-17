import React, { FunctionComponent } from 'react';

import { formatMessage } from '../../common/translation/utils';

const NotFound: FunctionComponent = () => {
  return (
    <div className="not-found">
      <p>{formatMessage('notFound.text')}</p>
    </div>
  );
};

export default NotFound;
