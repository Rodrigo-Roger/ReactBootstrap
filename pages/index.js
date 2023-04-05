import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import Cabecalho from "../components/Cabecalho";
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <>
      <Pagina titulo="Página 1">
      </Pagina>
        <Container>
          <h1>Hello World!</h1>
          <p>Parágrafo 1</p>
          <p>Parágrafo 2</p>
          <p>Parágrafo 3</p>
        </Container>
    </>
  )
}
