import React, { useState, useEffect } from 'react';
import { getCursos } from './services';
import Image from 'react-bootstrap/esm/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ActCursos from './cruds/cursos/actCursos';
import BorrarCursos from './cruds/cursos/borrarCursos';
import CrearCursos from './cruds/cursos/crearCursos';

export const AdmCursos = () => {

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
        return <div >Cargando contenido...</div>
    }

    return (
        <><Container>

            <CrearCursos />
            <ActCursos />
            <BorrarCursos />

        </Container>
            <Container>
                {cursos.map(({_id, idioma, dia, horario, imagen, modalidad }) => (

                    <ListGroup key={_id}>
                        <ListGroup.Item>
                            <div>
                                <div>Idioma</div>
                                <h3> {idioma}</h3>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div >
                                <div >Bandera</div>
                                <Image  src={process.env.PUBLIC_URL + imagen} rounded />
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div>
                                <div >Día/s de cursada</div>
                                {dia}
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div >
                                <div>Horario</div>
                                {horario}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div>
                                <div >Modalidad de cursada</div>
                                {modalidad}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </Container></>
    );
};
export default AdmCursos