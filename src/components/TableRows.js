import React from 'react';

function TableRows(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    )
}

export default TableRows;

