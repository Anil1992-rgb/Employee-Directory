import React from 'react';

function Search(props) {
    console.log(props);
    return (
        <div className="container">
            <br></br>
            <form>
                Search:&nbsp; 
                <input type="text" placeholder="Name" name="search" onChange={e => props.handleSearch(e)}></input>
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;