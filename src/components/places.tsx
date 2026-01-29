import { placeData } from "../data/place-data";
import PlaceCard from "./place-card";

export default function Places() {
  return (
    <section className="places">
      <h1>Places</h1>

      <div className="places-grid">
        {placeData.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </section>
  );
}
