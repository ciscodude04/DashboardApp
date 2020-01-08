// import { Alert } from 'react';
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react';

export default class Location extends React.Component {
      
                state = {
                    location: ""
                };
                getGeoLocation = () => {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const location = JSON.stringify(position)
                        this.setState({
                            location
                        });

                    },
                    error => Alert.alert(error.message), {
                        enableHighAccuracy: true,
                        timeout: 20000,
                        maximumAge: 1000
                    }
                );
            };

            render() {
                return (<div>
                    <button onClick={this.getGeoLocation}> Touch this text</button>
                   <p> {this.state.location}  </p>
                <p> Lat: {this.state.location}</p>
                   </div>
                );
            };
        }