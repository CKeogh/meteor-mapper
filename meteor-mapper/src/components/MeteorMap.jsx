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
        <Marker key="anything" position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        {meteors.map(meteor => {
          if (meteor.reclat && meteor.reclong) {
            return <Marker key={`marker${meteor.name}`} position={[meteor.reclat, meteor.reclong]}>
              <Popup>
                <p>name: {meteor.name}</p>
                <p>class: {meteor.class}</p>
                <p>mass: {meteor.mass}</p>
                <p>year: {meteor.year}</p>
              </Popup>
            </Marker>
          } else return null
        })}

      </Map>
    )
  }

}

export default MeteorMap

// TODO refactor map to reduce.