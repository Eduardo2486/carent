import React, { Key } from 'react';

import HeaderItem from './HeaderItem';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderUser from './HeaderUser';


const Header : React.FC = () => {

    const menu: string[] = ['Cars', 'News', 'Agents'];

    return(
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <HeaderLogo />

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {
                            menu.map((item: string, index: Key) => <HeaderItem name={item} key={index}/>)
                        }
                    </ul>
                    <HeaderSearch />
                    <HeaderUser />
                </div>
            </div>
        </header>
    );
};


export default Header;