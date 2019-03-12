import React from 'react';
import Meteor from './Meteor';

const MeteorList = ({meteors}) => {
    return <table>
        <th>Name</th><th>Class</th><th>Year</th><th>Mass</th>
        {meteors.map(meteor => {
            return <Meteor key={meteor.id}meteor={meteor}/>
        })}
    </table>
}

export default MeteorList;