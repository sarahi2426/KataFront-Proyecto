import { useState, useEffect } from "react";
import { getCharacterId } from "../../services/characterService";
import './answerStyle.css'

const AnswersQuizzTres = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await getCharacterId("1");
          console.log(data)
         
          setPersonajes(data ? [data] : []);
          
        } catch (error) {
          console.error("ERROR AL TRAER INFO API", error);
        }
      };
  
      fetchData();
    }, []);
  /*const getCharacterById = async (id) => {
    try {
      const { data } = await getCharacterId(id);
      console.log(data);
      const { items } = data;
         setPersonajes(items);
    } catch (error) {
      console.log("ERROR AL TRAER INFO API");
    }
  };
  getCharacterById("4");*/
  return (
 
    <div>
    
    {personajes.map((personaje, index) => (
      <div key={index}>
       <h3>Tu personajes es : </h3>
       <h1>{personaje.name}</h1>
       <div className="d-flex p-2 bd-highlight justify-content-center align-items-center ">
       <div>
          <img src={personaje.image} alt={personaje.name} />
          </div>
        <div> 
          <h3 className="Texto-Datos">Aparacion:{personaje.affiliation}</h3>
          <h3 className="Texto-Datos" >Raza:{personaje.race}</h3>
        <p className="Texto-Info">{personaje.description}</p>
        </div>
      </div>
       </div>
         
    ))}
  </div>
  );
};

export default AnswersQuizzTres;
