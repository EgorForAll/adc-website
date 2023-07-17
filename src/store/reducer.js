import {createReducer} from "@reduxjs/toolkit";
import { selectService, openModalWindow } from "./actions";

const initialState = {
  selectedService: '',
  modalWindow: false
}

export const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(selectService, (state, action) => {
    state.selectedService = action.payload;
  });
  builder.addCase(openModalWindow, (state) => {
    state.modalWindow = true;
  });
});
