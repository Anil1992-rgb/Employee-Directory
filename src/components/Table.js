import React, { useState, useEffect } from "react";
import TableRows from "./TableRows";
import API from "../utils/API";

function Table(props) {

    const [employees, setEmployees] = useState([]);

    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        if (props.searchTerm || employees.length > 0) {
            const filteredEmployees = employees.filter(employee => {
                if (employee.name.first.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                    return true;
                } else {
                    return false;
                }

            })
            setEmployees(filteredEmployees)
        } else {
            API.getEmployee()
                .then(function (res) {
                    console.log(res);
                    setEmployees(res.data.results);
                })
        }
    }, [props.searchTerm])

    //function for onClick on Name to ascend or descend 
    const handleName = () => {

        if (sorted === false) {
            let employeesCopySorted = employees.slice().sort(compare)
            setEmployees(employeesCopySorted);
            setSorted(true)

        } else {
            let employeesCopyReversed = employees.slice().reverse()
            setEmployees(employeesCopyReversed);
        }

    }

    //compare function for employees, and called above for handleName()
    function compare(a, b) {
        const namesA = a.name.last.toUpperCase();
        const namesB = b.name.last.toUpperCase();

        let comparison = 0;
        if (namesA > namesB) {
            comparison = 1;
        } else if (namesA < namesB) {
            comparison = -1;
        }
        return comparison;
    }


    return (
        <div className="container">
            <br></br>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th onClick={handleName} scope="col">Name</th>
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