import {ActionCreatorWithPayload, createSlice, PayloadAction, current} from '@reduxjs/toolkit';



const userSlice = createSlice({
    name: 'users',
    initialState: {
        users : []
    },
    reducers:{
        getUser: (state) =>{
            
        }
    }
});

export const {getUser} = userSlice.actions;
export default userSlice.reducer;