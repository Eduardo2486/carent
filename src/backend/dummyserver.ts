import carsJson from '../db/cars.json';
import commentsJson from '../db/comments.json';
import postsJson from '../db/posts.json';
import usersJson from '../db/users.json';

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

interface User {
    "id": Number,
    "name": String,
    "username": String,
    "email": String,
    "address": {
        "street": String,
        "suite": String,
        "city": String,
        "zipcode": String,
        "geo": {
            "lat": String,
            "lng": String
        }
    },
    "phone": String,
    "website": String,
    "company": {
        "name": String,
        "catchPhrase": String,
        "bs": String
        }
}

const allCars: Cars[] = carsJson;

export const getCarsByPage: Function = (page: number):Cars[]=>{
    return carsJson.slice(page*10, page*10+10);
}


export const getAllCars: Function = ():Cars[]=>{
    return carsJson;
}

export const authUserByEmailAndPassword: Function = (email: String, pass: String): User[] => {
    let user: User[] = usersJson.filter((element: User) => element.username === pass && element.email === email);
    return user;
};
