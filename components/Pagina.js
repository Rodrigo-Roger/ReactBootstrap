import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

const Pagina = (props) => {

  return (
    <>
      <Cabecalho />
      <div className='bg-body-tertiary py-3 text-black text-rigth mb-3 ' >
        <Container className='mb-4 pb-4 pt-4  '>
          <h1>{props.titulo}</h1>
        </Container >
      </div>
      <Container>
      {props.children}
      </Container>
      <div style={{ width: '100%' }} className=' bg-secondary position-fixed bottom-0 py-3 text-white text-center'>
        <p>Todos os direitos reservados</p>
      </div>
    </>
  )
}

export default Pagina