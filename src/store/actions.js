import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  SELECT_THE_SERVICE: 'select the service'
};

export const selectService = createAction(ActionType.SELECT_THE_SERVICE, (service) => {
  return {
    payload: service
  };
});
