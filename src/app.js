import  express  from "express";
import employeesRouter from './Router/employes.routes.js';
import indexRoutes from './Router/index.routes.js';


const app = express();

app.use(express.json())

app.use(indexRoutes)
app.use('/api',employeesRouter)

//si no se encuentra la  peticiones esta es por defecto 

app.use((req,res,next) =>{
    res.status(404).json({
        message:"endpoint not found"
    })
})

export default app