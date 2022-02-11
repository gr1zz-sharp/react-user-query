import React, { useState } from "react";


const SearchForm = ({getUser}) => {

    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!userName){
            alert('Please Enter Username')
        }
        getUser(userName);
    }

    return(
        <div className="gitHubSearch">
            <header className="Search-header">
                <form onSubmit={e => handleSubmit(e)}>
                    <input 
                        type="text" 
                        placeholder='userame' 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} />
                </form>
            </header>
        </div>  
    );
}

export default SearchForm