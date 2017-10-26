import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';

const MapComponent = ({text}) => <div id="text"> {text} </div>

export default class Map extends Component{
    static defaultProps = {
      center:{lat:40.7282, lng:-74.0776},
      zoom:8,
    };

    render(){
      return(
        <div id="map">
         <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >

          <MapComponent
            lat={40.7282}
            lng={-74.0776}
            text={'Swapnil Trivedi'}
          />

          </GoogleMapReact>

      </div>

      )
    }
}
