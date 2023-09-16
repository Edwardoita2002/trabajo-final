import {pool} from '../db.js'

export const ping =  async(req,res) =>{
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    console.log(result[0]);
    res.json(result) }