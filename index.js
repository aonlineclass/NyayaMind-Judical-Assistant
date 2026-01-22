  import express from 'express'
  import main from './Routers/main.js';
  import dboperations from './Routers/dboperation.js';

  const app = express()
  const port = 3000
  app.use(express.json({limit: '50mb'}));
  app.use(express.urlencoded({ extended: true }));
  app.use(main);
  app.use("/operations",dboperations);

      
  app.listen(port, () => {
    console.log(`NyayaMind is listening on port ${port}`)
  })








