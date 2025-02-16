import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { contactReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
  },
});