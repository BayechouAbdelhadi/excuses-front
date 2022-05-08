import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Excuse from "../../types/excuse";

const excuses: Excuse[] = [];

export const excusesSlice = createSlice({
    name: "exucuses",
    initialState: {
        excuses: excuses,
        lastSelectedCode: -1
    },
    reducers: {
        setExcuses: (state, action: PayloadAction<Excuse[]>) => {
            state.excuses = action.payload
        },
        setLastSelected: (state, action: PayloadAction<number>) =>{
            state.lastSelectedCode = action.payload
        }
    }
});

export const {
    setExcuses,
} = excusesSlice.actions;

export default excusesSlice.reducer;