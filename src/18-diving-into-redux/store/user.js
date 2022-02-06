import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
    fullName: 'Putu',
    isActive: false
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        changeFullName(state, action) {
            state.fullName = action.payload;
        },
        changeIsActive(state, action) {
            state.isActive = action.payload;
        }
    },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
