import React, { useState, useEffect } from "react";
import TableRows from "./TableRows";
import axios from "axios";
import API from "../utils/API";

function Table() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        API.getEmployee()
        .then(function(res) {
            console.log(res);
            setEmployees(res.data.results);
        })
    },[])

    


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
                    {employees.map(employee => <TableRows image={employee.picture.thumbnail} 
                    name={`${employee.name.first} ${employee.name.last}`}
                    phone={employee.phone}
                    email={employee.email}
                    dob={employee.dob.date}
                    />)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;