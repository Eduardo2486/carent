import React from 'react';


interface InputProps{
    type: string,
    id: string,
    name: string,
    placeholder: string,
    inputHandler: React.ChangeEventHandler<HTMLInputElement>
}


const Input : React.FC<InputProps> = ({type, id, placeholder, name, inputHandler} : InputProps) => {
    return(
        <div className="form-floating">
            <input type={type} className="form-control" id={id} placeholder={placeholder} onChange={inputHandler}/>
            <label htmlFor={id}>{name}</label>
        </div>
    );
};


export default Input;