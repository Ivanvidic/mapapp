import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker from "../assets/12851222121582634796.svg";

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [14, 25],
});

const { BaseLayer } = LayersControl;

const position = [45.7893939043154, 12.592336002089194];
const position2 = [41.72093655521301, 18.953419884302637];

// BOUNDS CODE
const bounds = L.latLngBounds([position, position2]);

export function Map({ data }) {
  return (
    <MapContainer
      center={[43.825447176282665, 15.141164086153994]}
      zoom={8}
      zoomControl={false}
      style={{ minHeight: "657px", width: "100vw" }}
      minZoom={8}
      maxBounds={bounds}
      scrollWheelZoom={false}
    >
      <LayersControl>
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
        <BaseLayer name="NASA Gibs Blue Marble">
          <TileLayer
            url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
            attribution="&copy; NASA Blue Marble, image service by OpenGeo"
            maxNativeZoom={8}
          />
        </BaseLayer>
      </LayersControl>
      {data.map((ev) => (
        <Marker
          key={ev.properties.pk}
          position={[ev.geometry.coordinates[1], ev.geometry.coordinates[0]]}
          icon={myIcon}
        >
          <Popup>
            <p>Naziv objekta: {ev.properties.naziv_objekta}</p>
            <p>PS broj: {ev.properties.ps_br}</p>
            <p>E broj: {ev.properties.e_br}</p>
            <p>Tip objekta: {ev.properties.tip_objekta}</p>
            <p>Lučka kapetanija: {ev.properties.lucka_kapetanija}</p>
          </Popup>
        </Marker>
      ))}
      <ZoomControl position="bottomleft" zoomInText="+" zoomOutText="-" />
    </MapContainer>
  );
}
