import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {fetchContacts, addContact, deleteContact, updateContact} from "./operations";

const extraActions = [fetchContacts, addContact, deleteContact, updateContact];

const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
    extraReducers: builder => {
      builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addMatcher(isAnyOf(...getActions("pending")), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions("fulfilled")), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(...getActions("rejected")), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    }
});

export const contactsReducer = contactsSlice.reducer;


