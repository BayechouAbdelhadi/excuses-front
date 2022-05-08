import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Excuse from "../../types/excuse";

const excuses: Excuse[] = [];

export const excusesSlice = createSlice({
    name: "exucuses",
    initialState: {
        excuses: excuses,
    },
    reducers: {
        setExcuses: (state, action: PayloadAction<Excuse[]>) => {
            state.excuses = action.payload
        },
    }   
});

export const {
    setExcuses,
} = excusesSlice.actions;

export default excusesSlice.reducer;