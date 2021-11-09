import React,{Key, MouseEvent, useEffect, useState} from 'react';

import HeaderUserItem from './HeaderUserItem';

import { useUser } from '../../hooks/useUser';

const HeaderUser : React.FC = () => {
    const menuUser:String[] = ['Profile', 'Sign Out', 'Settigns'];
    const menuGuest:String[] = ['Sign In', 'Sign Up'];

    const user = useUser();    

    const [isInfoShowed, setIsInfoShowed] = useState<Boolean>(false);
    const [displayInfo, setDisplayInfo] = useState<React.CSSProperties>({
        display: 'none'
    });


    const showInfo = (event: MouseEvent<HTMLButtonElement>): void => {
        
        setIsInfoShowed(!isInfoShowed);

        if(isInfoShowed){
            setDisplayInfo({
                display: 'block'
            });
        }else{
            setDisplayInfo({
                display: 'none'
            });
        }
    };
    
    return(
        <div className="dropdown text-end">
            <button className="btn btn-outline-secondary" onClick={showInfo} data-bs-toggle="dropdown" aria-expanded="false">
                {
                    (
                        user ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{verticalAlign:'initial', marginRight:'5px'}} fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{verticalAlign:'initial', marginRight:'5px'}} fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                                </svg>)
                    )
                    
                }
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{verticalAlign:'sub'}} fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </button>
            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={displayInfo}>
                {
                    (
                        user ? 
                            ( menuUser.map((element: String, index: Key) => <HeaderUserItem name={element} key={index}/>)) :
                            ( menuGuest.map((element: String, index: Key) => <HeaderUserItem name={element} key={index}/>)) 

                    )
                }
            </ul>
        </div>
    );
}

export default HeaderUser;