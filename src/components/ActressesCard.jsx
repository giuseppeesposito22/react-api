export default function ActressesCard({ act }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={act.image} className="card-img-top h-50" alt={act.name}></img>
        <div className="card-body">
          <h5 className="card-title">{act.name}</h5>
          <div className="card-text">
            <div>
              <span>Anno di nascita:</span> {act.birth_year}
            </div>
            <div>
              <span> Nazionalità:</span> {act.nationality}
            </div>
            <div>
              <span> Bio:</span> {act.biography}
            </div>

            <div>
              <span>Awards:</span> {act.awards}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
