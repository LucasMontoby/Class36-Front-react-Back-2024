import React, { useState, useEffect } from 'react';
import { getCursos } from './services';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export const Cursos = () => {

    const [key, setKey] = useState('idioma');
    const [cursos, setCursos] = useState([])

    useEffect(() => {
        async function cargaCursos() {
            const response = await getCursos()

            if (response.status === 200) {
                setCursos(response.data.cursos)
            }
        }
        cargaCursos()
    }, [])

    if (!cursos.length) {
        return <div>Cargando contenido...</div>
    }

    const cursoss = cursos.reduce((acc, curso) => {
        if (!acc[curso.idioma]) {
          acc[curso.idioma] = [];
        }
        acc[curso.idioma].push(curso);
        return acc;
      }, {});


    return (
        <Container>
            {Object.entries(cursoss).map(([idioma, cursos]) => (

                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    key={idioma}
                >
                    <Tab eventKey={idioma} title={idioma}>
                    {cursos.map((curso) => (
                        <Container>
                        <Card>
                        <Card.Img src={curso.imagen} />
                            <Card.Body>
                                <Card.Title >{curso.modalidad}</Card.Title>
                                <Card.Text>
                                    {curso.dia} - {curso.horario}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>{idioma}</Card.Footer>
                        </Card>
                        </Container>
                    ))}
                    </Tab>
                </Tabs>
            ))}
        </Container >
    );
};
export default Cursos