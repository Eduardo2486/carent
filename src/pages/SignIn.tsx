import React, { ChangeEvent, useState } from 'react';
import {Link} from 'react-router-dom';

import Input from '../common/components/Forms/Input';

import logo from '../assets/jsonlogo.png';

import {authUserByEmailAndPassword} from '../backend/dummyserver';

const SignIn : React.FC = () => {

    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const signIn = () => {
        authUserByEmailAndPassword();
    };

    const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    };

    return(
        <div className="text-center mt-4" >
    
            <main className="form-signin" style={{width: "100%",maxWidth: "330px",padding: "15px",margin: "auto"}}>
                <form onSubmit={signIn}>
                    <img className="mb-4" src={logo} alt="logo" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <Input type="text" name="Email address" id="emailSignIn" placeholder="Email" inputHandler={emailHandler}/>
                    <Input type="password" name="Password" id="passwordSignIn" placeholder="Password"  inputHandler={passwordHandler}/>

                    <div className="checkbox mb-3">
                        <Link to="signup">Sign Up</Link>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>
            </main>
        </div>
    );
};


export default SignIn;