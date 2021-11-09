import * as React from 'react';


const HeaderSearch:React.FC = () => {
    return(
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control" placeholder="Search for a car..." aria-label="Search"/>
        </form>
    );
}



export default React.memo(HeaderSearch);