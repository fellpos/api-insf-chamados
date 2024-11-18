import { Router } from "express";

const endpoints = Router();

endpoints.post('/user', async (req,resp) => {
    try {
        let user = req.body;
        let id = await service.inserirUser(user);
        resp.send({
            NovoId: id
        })    
    } 
    catch (err) {
        console.log(err.message)
        resp.send({
            Erro: err.message
        })    
    }
})

export default endpoints;