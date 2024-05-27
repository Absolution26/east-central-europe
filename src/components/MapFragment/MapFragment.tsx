import { MapSide } from "../../types/MapSide";

interface Props {
  map: MapSide;
}

export const MapFragment: React.FC<Props> = ({ map }) => {
  return (
    <div className="map">
      <div className="map__border">
        <img src={map.image} alt="map" className="map__image" />
      </div>

      <p className="map__caption">{map.caption}</p>
      <p className="map__subcaption">{map.subcaption}</p>
      <div className="map__description">
        {map.description}
      </div>
    </div>
  );
};
