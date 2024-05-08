import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { getCursos, deleteCurso } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function BorrarCursos() {

    const [cursos, setCursos] = useState([]);
    const [cursoSel, setCursoSel] = useState('');

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
        setCursoSel(event.target.value);
        console.log(cursoSel);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este curso?");

        if (confirmDelete) {
            deleteCurso(cursoSel)
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
            <Button type="submit" value="Enviar" onClick={handleShow}>Borrar curso</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Borrar un curso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group controlId="idioma">
                                <Form.Select value={cursoSel} onChange={handleSelCurso}>
                                    {cursos.map((curso) => (
                                        <option key={curso._id} value={curso._id}>
                                            {curso.idioma} - {curso.modalidad}: {curso.dia}, {curso.horario}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={handleDelete}>Borrar curso</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BorrarCursos;
