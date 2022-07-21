import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"
import Alerta from "./Alerta"
import Letra from "./Letra"
import Spiner from "./Spiner"

function AppLetras() {

  const{alerta, letra , cargando} = useLetras()
  return (
    <>
       <header> busca la letra de tus canciones favoritas!</header>
      <Formulario></Formulario>
      <main>
        {alerta ? <Alerta>{alerta}</Alerta> 
        : letra ? <Letra></Letra> :
        cargando ? <Spiner/> :
        <h2 className="text-center"> 
        Busca letras de tus artistas favoritos
        </h2>}
      </main>
    </>
  )
}

export default AppLetras
