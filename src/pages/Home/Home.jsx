import { useEffect , useState } from "react"
import { getCharacters } from "../../services/characterService"
import Card  from "../../components/Card/Card"
import CharacterList from "../../components/characterList/CharacterList"
import SearchBar from "../../components/SearchBar/SearchBar"
import Pagination from "../../components/Pagination/Pagination"

const Home = () => {

  const[personajes,setPersonajes] = useState ([])
  const [busqueda, setBusqueda] = useState("");
  const [page,setPage] = useState(1);

  const getInitialData = async () =>{
    try{
      const {data} = await getCharacters(busqueda, page)
      console.log(data+"variable data")
      console.log(busqueda);
      const { items} = data;
      setPersonajes (items)
      console.log (items)
    } catch (error){
      alert("ALGO FALLO EN LA PETICION")
    }
  };
  useEffect(() => {
    getInitialData();
  }, [page]);

  return (
    <div className="bg-body-tertiary">
      <SearchBar text={busqueda} setText={setBusqueda} search={()=>{
        getInitialData();
      }} />
      <Pagination page={page} setPage={setPage}/>
      <CharacterList>
        {personajes.map((personaje, index) => (
          
          //<div key={index}>
          //<img src={personaje.image} alt={personaje.name} />
          //<p>{personaje.name}</p>
          //</div>
         <Card key={index} personaje={personaje} />
          
        ))}
      </CharacterList>
    </div>
  );
}

export default Home