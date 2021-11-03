import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const MapLeaflet = () => {
    const position = [21.173089, 81.285325]

    const logoIcon = new L.Icon({
        iconUrl:'../../assests/logo2.png',
        iconRetinaUrl: '../../assests/logo2.png',
        iconAnchor: [2, 2],
        popupAnchor:  [0, -2],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(50, 50),  
        className: 'border-0'
    });
    
    return (
            <div className="relative z-1">
                <div className="h-full w-full absolute"/>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-96">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={logoIcon} >
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                
            </div>
            
    )
}



export default MapLeaflet
