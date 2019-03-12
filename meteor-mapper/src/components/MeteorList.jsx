import React from 'react';

const MeteorList = ({meteors}) => {
    return <ul>
        {meteors.map(meteor => {
            return <li key={meteor.id}>{meteor.name}</li>
        })}
    </ul>
}

export default MeteorList;