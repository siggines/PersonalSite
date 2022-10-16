import { MixesTable } from "~/components/MixesTable";
export default function mixes() {
  return (
    <>
      <MixesBody />
    </>
  );
}

export function MixesBody() {
  return <MixesTable />;
}
