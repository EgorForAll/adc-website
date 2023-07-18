import {createReducer} from "@reduxjs/toolkit";
import { selectService } from "./actions";

const initialState = {
  selectedService: ''
}

export const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(selectService, (state, action) => {
    state.selectedService = action.payload
  });
});
