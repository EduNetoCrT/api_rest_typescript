import { AppDataSource } from './data-source'
import express, { response } from 'express';


AppDataSource.initialize().then(() => {
  const port = 3232;
  const app = express();

  
  app.use(express.json())
  app.use((request, response) => {
    response.json({msg: "Endpoint não encontrado"})
  })


  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
  })

})





