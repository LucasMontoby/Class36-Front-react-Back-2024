const express=require ('express')
const upload = require('../libs/storage')
const { getCursos, addCurso, findCursos, updateCursos, deleteCursos } = require ('../controllers/cursosController')
const api= express.Router()

api.get('/cursos', getCursos)
api.post('/cursos', upload.single('imagen'), addCurso)
api.get('/cursos/:id', findCursos);
api.put('/cursos/:id', upload.single('imagen'), updateCursos);
api.delete ('/cursos/:id', deleteCursos);

module.exports = api

