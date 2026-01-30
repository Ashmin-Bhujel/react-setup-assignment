import { placeData } from "../data/place-data";
import PlaceCard from "./place-card";

export default function Places() {
  return (
    <section className="places">
      <div className="places-text">
        <h1>Explore Places</h1>
        <p>
          Explore scenic view of different places from all around the world.
        </p>
      </div>

      <div className="places-grid">
        {placeData.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </section>
  );
}
