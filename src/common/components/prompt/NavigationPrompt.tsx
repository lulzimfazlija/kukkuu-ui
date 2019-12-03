import * as React from 'react';
import { Prompt } from 'react-router-dom';

interface NavigationPropmtProps {
  isHalfFilling: boolean;
  warningMessage?: string;
}

const NavigationPropmt: React.FunctionComponent<NavigationPropmtProps> = ({
  isHalfFilling,
  warningMessage,
}) => {
  const isPromptExisted = !window.onbeforeunload;

  if (isHalfFilling && isPromptExisted !== null) {
    window.onbeforeunload = () => true;
  } else {
    window.onbeforeunload = null;
  }

  return isPromptExisted ? (
    <Prompt
      when={isHalfFilling}
      message={warningMessage || 'Are you sure to leave?'}
    />
  ) : null;
};

export default NavigationPropmt;
