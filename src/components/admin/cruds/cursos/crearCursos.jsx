import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { saveCursos } from '../../services';

function CrearCursos() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [idioma, setIdioma] = useState("");
    const [dia, setDia] = useState("");
    const [horario, setHorario] = useState("");
    const [modalidad, setModalidad] = useState("");

    const inputFileRef = useRef()

    const handleSubmit = (cursosData) => {
        saveCursos(cursosData = {
            idioma: idioma,
            dia: dia,
            horario: horario,
            modalidad: modalidad,
            imagen: inputFileRef.current.files[0],
        })
            .then((response) => {
                handleClose()
                window.location.reload()

            });
    }

    return (
        <div>
            <Button type="submit" value="Enviar" onClick={handleShow}>Crear curso</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Crear un curso</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row>
                            <Form.Group controlId="idioma">
                                <Form.Label>Idioma</Form.Label>
                                <Form.Control placeholder="Nombre" name='idioma' onChange={(event) => { setIdioma(event.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="imagen">
                            <Form.Label>Seleccionar bandera</Form.Label>
                            <Form.Control type="file" ref={inputFileRef} />
                        </Form.Group>

                        <Row>
                            <Form.Group controlId="dia">
                                <Form.Label>Días de cursada</Form.Label>
                                <Form.Control placeholder="Días de cursada" name='dia' onChange={(event) => { setDia(event.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="horario">
                            <Form.Label>Horario de cursada</Form.Label>
                            <Form.Control placeholder="Horario de cursada" name='horario' onChange={(event) => { setHorario(event.target.value) }} />
                        </Form.Group>

                        <Row>
                            <Form.Group controlId="modalidad">
                                <Form.Select name='modalidad' onChange={(event) => { setModalidad(event.target.value) }}>
                                    <option>Seleccioná una modalidad</option>
                                    <option value="extensivo">Extensivo</option>
                                    <option value="intensivo">Intensivo</option>
                                    <option value="presencial">Presencial</option>
                                    <option value="virtual">Virtual</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit " onClick={handleSubmit}>Agregar curso</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CrearCursos;
