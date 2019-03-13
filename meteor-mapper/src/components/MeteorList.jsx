import React from 'react';
import Meteor from './Meteor';

const MeteorList = ({ meteors }) => {
    return (

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Year</th>
                    <th>Mass(grams)</th>
                    <th>Lat</th>
                    <th>Lon</th>
                </tr>
            </thead>
            <tbody>
                {meteors.map(meteor => {
                    return <Meteor key={meteor.id} meteor={meteor} />
                })}
            </tbody>
        </table>
    )
}

export default MeteorList;