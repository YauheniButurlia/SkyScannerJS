import React from 'react';
import {Marker} from 'react-native-maps';

export class CustomMarker extends Marker {
    shouldComponentUpdate(prevProps) {
        return false;
    }
}