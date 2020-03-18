import React from 'react';

function Search() {
    return (
        <div className="container">
            <br></br>
            <form action="/search.php">
                Search:&nbsp; 
                <input type="text" placeholder="Name" name="search"></input>
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;
