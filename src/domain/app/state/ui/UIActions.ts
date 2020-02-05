import { createAction } from '@reduxjs/toolkit';

import { UI_ACTIONS } from './UIActionsConstants';

export const showExpiredSessionPrompt = createAction(
  UI_ACTIONS.SESSION_EXPIRED_PROMPT.SHOW
);

export const closeExpiredSessionPrompt = createAction(
  UI_ACTIONS.SESSION_EXPIRED_PROMPT.CLOSE
);
