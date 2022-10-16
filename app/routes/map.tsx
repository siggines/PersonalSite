import { Map } from "~/components/Map/Map";

export default function mixes() {
  return (
    <>
      <MapBody />
    </>
  );
}

export function MapBody() {
  return (
    <div className="flex justify-center">
      <Map />;
    </div>
  );
}
