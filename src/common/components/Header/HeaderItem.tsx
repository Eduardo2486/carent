import React from 'react';
import {Link} from 'react-router-dom';


interface HeaderItemProps{
    name: string;
}

const HeaderItem : React.FC<HeaderItemProps> = ({name}: HeaderItemProps) => {
    return(
        <li>
            <Link to={name.toLowerCase().split(" ").join("")} className="nav-link px-2 link-secondary">
                {name}
            </Link>
        </li>
    );
}

export default HeaderItem;