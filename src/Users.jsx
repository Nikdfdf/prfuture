import React from 'react';


function Users ({ persons }) {

    const sortColumnss = (column) => {

       

    }

    return (

        <table>
            <thead>
                <tr>
                    <th onClick={ () => { sortColumnss('id')} }>ID</th>
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