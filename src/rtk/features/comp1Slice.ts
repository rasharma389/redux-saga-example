import { createAction, createSlice } from "@reduxjs/toolkit";

interface IComp1State {
    students: Array<string>;
}

export const initialState: IComp1State = {
    students: []
}

export const getStudents = createAction(
    "comp1/getStudents"
  );

export const comp1Slice = createSlice({
    name: 'comp1',
    initialState: initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload;
        }
    }
});


export const {
    setStudents
} = comp1Slice.actions;

export default comp1Slice.reducer;