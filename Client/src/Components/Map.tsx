import L from 'leaflet'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  return (
    <div>
        <MapContainer style={{ height: '50vh', width: '60vw' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={
                new L.Icon({      
                    iconUrl: MarkerIcon,
                    iconRetinaUrl: MarkerIcon,
                    iconSize: [25, 41],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                    shadowUrl: MarkerShadow,
                    shadowSize: [41, 41],
                })
            } position={[51.505, -0.09]}>
            </Marker>
        </MapContainer>
    </div>
  )
}
