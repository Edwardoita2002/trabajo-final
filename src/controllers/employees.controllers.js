import {pool} from '../db.js'

export const getEmployees = async (req,res)=>{
    try {
           const [rows] = await pool.query('SELECT * FROM employee;')
            res.json(rows)
    } catch (error) {
        res.status(500).json({
            message:'error de respuesta'
        })
    }
}

export const getEmployee = async (req,res) =>{

try {
    const [rows]=await pool.query('SELECT * FROM employee where id =?;',[req.params.id])


    if (rows.length <= 0) return res.status(404).json({message:'no se encontro el empleado'})
  
     res.json(rows)
} catch (error) {
    res.status(500).json({
        message:'error de respuesta'
    })
}
    // console.log(req.params.id);
   // res.send(`este es empleado ${req.params.id}`)
}

export const createEmployees = async(req,res)=>{
try {
    const {name,salaty} = req.body
    const[rows] =  await pool.query('INSERT INTO employee (name,salaty) VALUES (?, ?)',[name,salaty])
     console.log(req.body);
     res.send({
         id:rows.insertId,
         name,
         salaty
     })
} catch (error) {
    res.status(500).json({
        message:'error de respuesta'
    })
}
}

export const actualizarEmployees = async(req,res)=>{
try {
    const {id} = req.params
    const {name,salaty} = req.body
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name), salaty = IFNULL(?,salaty) WHERE id = ?',[name, salaty,id])
     //console.log(result);
     if(result.affectedRows <= 0){ return res.status(404).json({
        message : "no se actualunado ningun dato"
     })}
     const [rows] = await pool.query('SELECT * FROM employee where id =?;',[id])
     res.json(rows[0])
} catch (error) {
    res.status(500).json({
        message:'error de respuesta'
    })
}
}




export const borrarEmployees = async(req,res) => {
try {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id])
    console.log(result);
if (result.affectedRows<=0){ return res.status(404).json({
    message:"es usuario no es valido"
})}

    res.sendstatus(204);
} catch (error) {
    res.status(500).json({
        message:'error de respuesta'
    })
}
}