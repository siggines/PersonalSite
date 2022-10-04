import ReactPlayer from "react-player";
export default function mixes() {
  return (
    <>
      <MixesBody />
    </>
  );
}

export function MixesBody() {
  return (
    <div className="Gallery">
      <div className="Gallery__item Gallery__item--1">
        <ReactPlayer
          className="Gallery__vid"
          width="auto"
          url="https://soundcloud.com/djeldras/u-k-g-bass?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
      <div className="Gallery__item Gallery__item--2">
        <ReactPlayer
          className="Gallery__vid"
          width="auto"
          url="https://soundcloud.com/djeldras/riddimexp3?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
      <div className="Gallery__item Gallery__item--2">
        <ReactPlayer
          className="Gallery__vid"
          width="auto"
          url="https://soundcloud.com/djeldras/liquidjazznbass?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </div>
    </div>
  );
}
