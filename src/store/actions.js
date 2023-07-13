import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SELECT_SERVICE: 'select the service'
};

export const ActionCreator = {
  selectService: (service) => ({
    type: ActionType.SELECT_SERVICE,
    payload: service
  }),
};

export const selectService = createAction(ActionType.SELECT_SERVICE, (service) => {
  return {
    payload: service
  }
});
