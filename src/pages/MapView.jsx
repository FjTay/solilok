import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./MapView.css";

export default function MapView() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC8zmtYopBNQqqQy0MGknJ3d9MowzhYp4g",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map({ myAdd }) {
  console.log(myAdd)
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}