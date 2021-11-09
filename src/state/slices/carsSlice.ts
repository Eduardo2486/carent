import {ActionCreatorWithPayload, createSlice, PayloadAction, current} from '@reduxjs/toolkit';

import {getCarsByPage as getCarsByPageBackend, getAllCars} from '../../backend/dummyserver';


interface Cars{
    "Dimensions": {
        "Height": Number,
        "Length": Number,
        "Width": Number
    },
    "Engine Information": {
        "Driveline": String
        "Engine Type": String
        "Hybrid": Boolean,
        "Number of Forward Gears": Number,
        "Transmission": String,
        "Engine Statistics": {
            "Horsepower": Number,
            "Torque": Number
        }
    },
    "Fuel Information": {
        "City mpg": Number,
        "Fuel Type": String,
        "Highway mpg": Number
    },
    "Identification": {
        "Classification": String,
        "ID": String,
        "Make": String,
        "Model Year": String,
        "Year": Number
    }
}


const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars : [] as Cars[],
        currentPage: 0 as number,
        searchCars: [] as Cars[]
    },
    reducers:{
        getCarsByPage: (state) =>{
            state.currentPage =  state.currentPage + 1;
            let newCars = getCarsByPageBackend( state.currentPage);
            state.cars = state.cars.concat(newCars);
        },
        searchCar:(state, action: PayloadAction<string>) => {
            // state.searchCars = getAllCars().filter( (car: Cars) => {
            //     car[""]
            // } );
        }
    }
});

export const {getCarsByPage} = carsSlice.actions;
export default carsSlice.reducer;