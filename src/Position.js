import React from 'react';
import Weather from './Weather';

export default class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lng: 0,
            isLoaded: false
        }
    }

    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    isLoaded: true
                });
            }, (error) => {
                alert(error);
            }, {enableHighAccuracy: false, timeout: 5000, maximumAge: 20000}); 
        } else {
            alert('Your browser does not support geolocation!');
        }
    }
    render() {
        const {lat, lng, isLoaded} = this.state;
        console.log(lat, lng);
        if(isLoaded) {
        return (
            <>
                <h1>Your position is</h1>
              <p>Position: {lat.toFixed(3)}, {lng.toFixed(3)}</p>  
              <Weather lat={lat} lng={lng}/>
            </>
        )
    } else {
        return (<p>Loading...</p>)
    }
    }
}
