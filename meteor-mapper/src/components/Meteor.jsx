import React from 'react';

const Meteor = ({meteor}) => {
    return <tr>
        <td>{meteor.name}</td>
        <td>{meteor.recclass}</td>
        <td>{meteor.year}</td>
        <td>{meteor.mass}</td>
        </tr>
}

export default Meteor;