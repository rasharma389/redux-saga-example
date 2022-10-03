import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../interfaces/utilInterface";

type StatusHolder = {
    status: Status;
    error: string | null | undefined;
}

interface ApiStatusState {
   components: {
    [key: string]: StatusHolder;
   }
}

export const initialState: ApiStatusState = {
    components: {}
}

export const apiStatusSlice = createSlice({
    name: 'apiStatus',
    initialState: initialState,
    reducers: {
        setStatus: (state, action) => {
            console.log('API STATUS : ', action.payload);
            if(!!state.components[action.payload.component]) {
                state.components[action.payload.component] = action.payload.status
            } else {
                state.components[action.payload.component] = action.payload.status
            }
        }   
    }
});

export const {
    setStatus
} = apiStatusSlice.actions;

export default apiStatusSlice.reducer;