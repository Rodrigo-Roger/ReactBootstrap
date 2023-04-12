import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'

const index = () => {
    const[filmes, setFilmes] = useState(['a','b'])

    useEffect(()=>{
        apiFilmes.get('/movie/popular').then(resultado =>{
            console.log(resultado.data.results)
        })
    }, [])
  return (
    <Pagina titulo='Filmes'>
        <div>a</div>

        {filmes.map(item => (
            <p>{item}</p>
        ))}
    </Pagina>
  )
}

export default index