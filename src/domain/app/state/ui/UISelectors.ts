import { StoreState } from '../../types/AppTypes';

export const isSessionExpiredPromptOpen = (state: StoreState) =>
  state.ui.sessionExpiredPrompt.isOpen;
