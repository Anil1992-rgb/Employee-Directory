import React, { useState, useEffect } from "react";
import TableRows from "./TableRows"
import axios from "axios";

function Table() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get(
            "http://localhost:4000/api/?results=200&nat=us"
        )
        .then(function(res) {
            console.log(res);
            setEmployees(res.data.results);
        })
    })

    



    return (
        <div className="container">
            <br></br>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone #</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}

export default Table;