import React, { useState, useEffect, useRef } from 'react';
import { getCursos, updateCursos } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ActCursos() {
    const [cursos, setCursos] = useState([]);
    const [cursoSel, setCursoSel] = useState("");
    const [datosCurso, setDatosCurso] = useState({});

    useEffect(() => {
        async function cargaCursos() {
            const response = await getCursos();

            if (response.status === 200) {
                setCursos(response.data.cursos);
            }
        }
        cargaCursos();
    }, []);

    const handleSelCurso = (event) => {
        const selectedCurso = cursos.find((curso) => curso._id === event.target.value);
        setCursoSel(event.target.value);
        setDatosCurso(selectedCurso);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputFileRef = useRef();

    const handleSubmit = () => {
        const newIdioma = datosCurso.idioma;
        const newDia = datosCurso.dia;
        const newHorario = datosCurso.horario;
        const newModalidad = datosCurso.modalidad;
        const newImagen = inputFileRef.current?.files[0];

        const datosNuevos = {
            idioma: newIdioma,
            dia: newDia,
            horario: newHorario,
            modalidad: newModalidad,
            imagen: newImagen,
        };

        const confirmActualizar = window.confirm(`¿Estás seguro de que deseas actualizar este curso?`);

        if (confirmActualizar) {
            updateCursos(cursoSel, datosNuevos)
                .then((response) => {
                    handleClose();
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div>
            <Button type="submit" value="Enviar" onClick={handleShow}>Actualizar curso</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar un curso</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="curso">
                            <Form.Label>Seleccionar curso</Form.Label>
                            <Form.Select value={cursoSel} onChange={handleSelCurso}>
                                <option>Seleccionar un curso</option>
                                {cursos.map((curso) => (
                                    <option key={curso._id} value={curso._id}>
                                        {curso.idioma} - {curso.dia} - {curso.horario} - {curso.modalidad}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        {cursoSel && (
                            <div>
                                <Form.Group controlId="nombre">
                                    <Form.Label>Nombre del curso</Form.Label>
                                    <Form.Control defaultValue={datosCurso.idioma || ''} name='idioma' onChange={(event) => { setDatosCurso({ ...datosCurso, idioma: event.target.value }); }} />
                                </Form.Group>
                            </div>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={handleSubmit}>Actualizar curso</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ActCursos;
