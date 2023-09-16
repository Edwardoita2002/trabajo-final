import {Router} from 'express'
import {getEmployees,getEmployee,createEmployees,actualizarEmployees,borrarEmployees} from '../controllers/employees.controllers.js'

const router = Router()
   
   router.get('/empleados',getEmployees)
   
   router.get('/empleados/:id',getEmployee)

   router.post('/empleados',createEmployees)
   
   router.patch('/empleados/:id',actualizarEmployees)
   
   router.delete('/empleados/:id',borrarEmployees)
   

export default router