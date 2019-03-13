import React from 'react';

const Meteor = ({ meteor }) => {

    const prettyDate = new Date(meteor.year).getFullYear();
    const prettyMass = Number(meteor.mass).toFixed(0)

    return <tr>
        <td>{meteor.name}</td>
        <td>{meteor.recclass}</td>
        <td>{prettyDate}</td>
        <td>{prettyMass}</td>
        <td>{meteor.reclat}</td>
        <td>{meteor.reclong}</td>
    </tr>
}

export default Meteor;