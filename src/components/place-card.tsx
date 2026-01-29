import { Place } from "../types";

type PlaceCardProps = {
  place: Place;
};

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <article className="place-card">
      <div className="place-card-img-wrapper">
        <img src={place.imgSrc} alt={place.description} className="place-img" />
      </div>

      <div className="place-card-body">
        <div className="place-card-header">
          <h2>{place.name}</h2>
          <p>{place.description}</p>
        </div>

        <div className="place-card-footer">
          <div className="place-card-footer-img-wrapper">
            <img
              src={place.photographerImg}
              alt=""
              className="photographer-img"
            />
          </div>
          <p>{place.capturedBy}</p>
        </div>
      </div>
    </article>
  );
}
