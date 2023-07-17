import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SELECT_SERVICE: 'select the service',
  OPEN_MODAL_WINDOW: 'open modal window'
};

export const selectService = createAction(ActionType.SELECT_SERVICE, (service) => {
  return {
    payload: service
  }
});

export const openModalWindow = createAction(ActionType.OPEN_MODAL_WINDOW);
