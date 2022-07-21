import useLetras from "../hooks/useLetras"
import Spiner from "./Spiner"

const Letra = () => {

    const {letra, cargando} = useLetras()
  return (

    cargando ? <Spiner/> :
    <div className="letra">
      <p> {letra}</p>
       </div>
  )
}

export default Letra
