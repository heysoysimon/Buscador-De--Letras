import { useState } from "react"
import useLetras from "../hooks/useLetras"

const Formulario = () => {

    const {setAlerta, busquedaLetras} = useLetras()

    const [busqueda,setBusqueda] = useState({
        artista: '',
        cancion: ''
    }) 

    const hanledSubmit = e => {
        e.preventDefault()
            /* validacion del form */
        if(Object.values(busqueda).includes('')){
                setAlerta('Busque un Artista Y una Cancion')
        }
        busquedaLetras(busqueda)
        
    }

  return (
     <form 
     onSubmit={hanledSubmit}>
        <legend> busca por artista y cancion</legend>

        <div className="form-grid">
            <div>
                <label>artista</label>

                <input 
                type="text" 
                name='artista'
                placeholder='busca tu Artista'
                value={busqueda.artista}
                onChange={e => setBusqueda({
                    ...busqueda,
                    [e.target.name] : e.target.value
                })}
                />
            </div>
        <div>
        <label>cancion</label>
                <input 
                type="text" 
                name='cancion'
                placeholder='busca tu cancion'
                value={busqueda.cancion}
                onChange={e => setBusqueda({
                    ...busqueda,
                    [e.target.name] : e.target.value
                })}
                />
            </div>
            <input type="submit" value="Buscar" />
            </div>
     </form>
  )
}

export default Formulario
