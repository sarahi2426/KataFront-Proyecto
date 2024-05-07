import '../Card/characterCard.css'

const Card = (props) => {
    const {personaje} = props;
  return (
    <section className="card " style={{ width: "20rem" }}>
      <img alt="..." className="card-img-top card-image-saze" src={personaje.image} />
      <h4 className="card-title">{personaje.id}-{personaje.name}</h4>
      <div className="card-body ">
        <p className="card-text">{personaje.race}</p>
        <p>{personaje.gender}</p>
        <div className=' mb-2 d-flex'>
        <span className="dot-status" style={{
          backgroundColor:personaje.ki >= "250.000.000"?"red": "green"
        }}/>
        <p className="maxki">{personaje.ki}</p>
        </div>

      </div>
    </section>
  );
}

export default Card;