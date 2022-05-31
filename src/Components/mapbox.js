import mapbox from 'mapbox-gl';
import {
    mapBoxAccessToken
} from "../constants";


mapbox.accessToken = mapBoxAccessToken;


const keyApp = {};

export {
    mapbox,
    keyApp
};