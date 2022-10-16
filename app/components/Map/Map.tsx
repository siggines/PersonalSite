import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuaWVsanNhZGxlciIsImEiOiJjbDliamdlY20wOW94M3ZwbDdnMWtkaGtmIn0.z46HCzYrHvVdxHpmr481_w";

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/danieljsadler/cl9bjmyq7008c14pit08adow0",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    map.current.on("move", (e) => {
      setLng(e.target.getCenter().lng);
      setLat(e.target.getCenter().lat);
      setZoom(e.target.getZoom());
    });
  });

  return (
    <div>
      <div className="bg-black flex justify-items-start z-1 absolute m-2 text-white">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="h-screen w-screen" />
    </div>
  );
};
