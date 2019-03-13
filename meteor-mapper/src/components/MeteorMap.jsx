import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class MeteorMap extends Component {

  state = {
    lat: 53.4808,
    lon: -2.2426,
    zoom: 1,
  }

  render() {
    const { meteors } = this.props;
    const position = [this.state.lat, this.state.lon];

    return (
      <Map id="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {meteors.map(meteor => {
          if (+meteor.reclat && +meteor.reclong) { // coerced re "0.000000"

            const prettyDate = new Date(meteor.year).getFullYear();
            const prettyMass = Number(meteor.mass).toFixed(0) + " grams";

            return (
              <Marker key={`marker${meteor.name}`} position={[meteor.reclat, meteor.reclong]}>
                <Popup>
                  <p><strong>Name:</strong> {meteor.name}</p>
                  <p><strong>Class:</strong> {meteor.recclass}</p>
                  <p><strong>Year:</strong> {prettyDate}</p>
                  <p><strong>Mass:</strong> {prettyMass}</p>
                </Popup>
              </Marker>
            )
          } else return null
        })}

      </Map>
    )
  }

}

export default MeteorMap

// TODO refactor map to reduce.