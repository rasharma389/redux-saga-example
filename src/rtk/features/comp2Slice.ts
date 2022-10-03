import { createAction, createSlice } from "@reduxjs/toolkit";

interface IComp2State {
    teachers: Array<string>;
}

export const initialState: IComp2State = {
    teachers: []
}

export const getTeachers = createAction(
    "comp2/getTeachers"
  );

export const comp2Slice = createSlice({
    name: 'comp1',
    initialState: initialState,
    reducers: {
        setTeachers: (state, action) => {
            state.teachers = action.payload;
        }
    }
});


export const {
    setTeachers
} = comp2Slice.actions;

export default comp2Slice.reducer;