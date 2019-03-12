import React from 'react';

const Meteor = ({ meteor }) => {

    const prettyDate = new Date(meteor.year).getFullYear();

    return <tr>
        <td>{meteor.name}</td>
        <td>{meteor.recclass}</td>
        <td>{prettyDate}</td>
        <td>{meteor.mass}</td>
    </tr>
}

export default Meteor;