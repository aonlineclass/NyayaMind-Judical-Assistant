import {client} from '../models/qdrant.js';
import { v4 as uuidv4 } from 'uuid';

async function queryDatabase(query,collectionName,vectorName,embeddingFunction,filters) {

    console.log("starting.....")
    const queryt = await embeddingFunction(query);

    const checkquery = await client.query("search-query-recomd",{
      query:queryt,
      using:"recomd-dense",
      score_threshold:0.80,
      with_payload:true
    })

    if(checkquery.points.length == 0){
      console.log(checkquery.points.length)
        const saved = await client.upsert("search-query-recomd", {
  points:[
    {
      id: uuidv4(),
      payload: {
        query : query,
        timestamp: new Date().getTime()
      },
      vector: {
        "recomd-dense": queryt
      },
    },
  ],
});
console.log("The query saved :",saved)

    }else{
      console.log("Query not saved as its already in qdrant")
    }

    const val = filters?.match?.value || "All Categories"
    
    if(val === "All Categories"){
      console.log("In cat")
       const queryfinal = await client.query(collectionName, {
    query:queryt,
    using: vectorName,
    with_payload: true,
    with_vector: false,
    limit:8,
    score_threshold:0.3
  });

  return {queryfinal}
    }else
      {
      console.log("out of cat")
       const queryfinal = await client.query(collectionName, {
    query:queryt,
    using: vectorName,
    with_payload: true,
    with_vector: false,
    limit:8,
    score_threshold:0.3,
    filter:{
      must:[filters]
    }
    });
    return {queryfinal}

    }

    
}

async function queryrecomdations(searchquery,collectionName,vectorName,embeddingFunction) {
    const queryfinal = await client.query(collectionName, {
    query:await embeddingFunction(searchquery),
    using: vectorName,
    with_payload: true,
    with_vector: false,
    limit:8,
    score_threshold:0.4
});
    return queryfinal;
}

export {queryDatabase,queryrecomdations};