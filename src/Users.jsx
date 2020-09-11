import React from 'react';


function Users ({ persons }) {

    const sortColumns = (column) => {

       

    }

    return (

        <table>
            <thead>
                <tr>
                    <th onClick={ () => { sortColumns('id')} }>ID</th>
                    <th onClick={ () => { sortColumns('firstName')} }>FirstName</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    )
}

export default Users;