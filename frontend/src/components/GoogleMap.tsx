import { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type CustomGoogleMapProps = {
  location: string;
};

const CustomGoogleMap = ({ location }: CustomGoogleMapProps) => {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCtNjhQybA5-2My1q_QWB2-v_hOGeblIjw",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            location
          )}&key=AIzaSyCtNjhQybA5-2My1q_QWB2-v_hOGeblIjw`
        );
        const { results } = response.data;
        if (results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          setCoordinates({ lat, lng });
        } else {
          console.error("No results found for the location:", location);
          setCoordinates(null); // Reset coordinates if no results found
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
        setCoordinates(null); // Reset coordinates on error
      }
    };

    fetchData();
  }, [location]); // Include location in the dependency array

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  let center;

  if (coordinates) {
    center = {
      lat: coordinates.lat,
      lng: coordinates.lng,
    };
  }

  const zoom = 15;

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
      >
        <Marker position={center!} />
      </GoogleMap>
    )
  );
};

export default CustomGoogleMap;
