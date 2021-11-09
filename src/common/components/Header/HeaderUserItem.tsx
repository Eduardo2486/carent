import React from 'react';
import {Link} from 'react-router-dom';


interface HeaderUserItem{
    name:String;
}

const HeaderUserItem : React.FC<HeaderUserItem> = ({name}: HeaderUserItem) => {
    return(
        <li>
            <Link to={name.toLowerCase().split(' ').join("")} className="dropdown-item">{name}</Link>
        </li>
    );
}

export default React.memo(HeaderUserItem);