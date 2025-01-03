import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface Props {
  organization: string;
}

interface Country {
  _id: string;
  name: string;
  lat: number;
  long: number;
  eventsCount: number;
  average: number;
}

export default function MapForOrganization(Props: Props) {
  const [countries, setCountries] = useState<Country[]>([]);

  const fetchOrgData = async (organizationName: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/countries/country/organization/${organizationName}`
      );
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrgData(Props.organization);
      setCountries(data);
    };
    fetchData();
  }, [Props.organization]);

  return (
    <div>
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 4,
        }}
      >
        <MapContainer
          style={{ height: "50vh", width: "75vw" }}
          center={[51.505, -0.09]}
          zoom={5}
          scrollWheelZoom={true}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {countries.map(
            (country) =>
              country.lat &&
              country.long && (
                <Marker
                  key={country._id}
                  icon={
                    new L.Icon({
                      iconUrl: MarkerIcon,
                      iconRetinaUrl: MarkerIcon,
                      iconSize: [25, 41],
                      iconAnchor: [12.5, 41],
                      popupAnchor: [0, -41],
                      shadowUrl: MarkerShadow,
                      shadowSize: [41, 41],
                    })
                  }
                  position={[country.lat, country.long]}
                >
                  <Popup>
                    <div>
                      <h3>{country.name}</h3>
                      <p>Events Count: {country.eventsCount}</p>
                      <p>Average: {country.average}</p>
                    </div>
                  </Popup>
                </Marker>
              )
          )}
        </MapContainer>
      </Box>
    </div>
  );
}
