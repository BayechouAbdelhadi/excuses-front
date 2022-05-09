import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Excuse from "../../types/excuse";

const excuses: Excuse[] = [];

export const excusesSlice = createSlice({
    name: "exucuses",
    initialState: {
        excuses: excuses,
        selected: {
            http_code: -1,
            tag:"",
            message: ""
        }
    },
    
    reducers: {
        setExcuses: (state, action: PayloadAction<Excuse[]>) => {
            state.excuses = action.payload
        },
        selectExcuse: (state, action: PayloadAction<Excuse>) => {
            state.selected = action.payload
        }
    }
});

export const {
    setExcuses,
    selectExcuse,
} = excusesSlice.actions;

export default excusesSlice.reducer;