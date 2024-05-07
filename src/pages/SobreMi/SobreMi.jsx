
import ImagenPortada from '../../img/Episodios-Dragon-Ball-Sin-Relleno-Orden-Cronologico.jpg'
import '../SobreMi/SobreMi.css'

const SobreMi = () => {
  return (
    <div className="Container bg-dark">
      <h1 className="Titulo">Aplicación usando la Api de Dragon Ball</h1>
      <div className='d-flex p-2 bd-highlight justify-content-center align-items-center '>
        <img className="img" src={ImagenPortada} alt="Portada" />
        <p className="Texto-Sobre-Mi">
          <span className='Hola'>Hola!</span> Mi nombre es Sarahi Cortés y estoy estudiando un cuso en React,
          esta página tiene la inteción de poner en practica los conocimientos
          adquiridos en clase. Espero sea de su agrado.
        </p>
      </div>
    </div>
  );
}

export default SobreMi