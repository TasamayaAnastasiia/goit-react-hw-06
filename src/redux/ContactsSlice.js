import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'dataContacts',
    initialState: {
        items: []
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: contact,
                };
            },
        },
        deleteContact: {
            reducer(state, action) {
                state.items = state.items.filter(contact => contact.id !== action.payload);
            },
        }
    }
})
export const { deleteContact, addContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;