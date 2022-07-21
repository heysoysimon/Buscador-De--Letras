import { useState, createContext } from "react";
import axios from "axios";

const LetrasContext = createContext()

const LetrasProvider = ({children}) =>{

const [alerta, setAlerta] = useState('')
const [letra, setLetra] = useState('')
const  [cargando, setCargando] = useState(false)

const busquedaLetras = async (busqueda) => {
   /*  console.log(busqueda) */
   setCargando(true)
    try{
        const { artista, cancion } = busqueda
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
        const {data} = await axios(url)

    setLetra(data.lyrics)
    console.log(data)
    setAlerta('')
    
    } catch(error){
        /* console.log(error) */
        setAlerta('Cancion No Encontrada :(')
    }
    /* vueleve a false un avez que ya consuylto la api */
    setCargando(false)
}

    return(
        <LetrasContext.Provider
        value={{
            alerta,
            setAlerta,
            busquedaLetras,
            letra,
            cargando
        }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}

export default LetrasContext

