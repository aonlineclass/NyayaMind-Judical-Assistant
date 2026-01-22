import { queryDatabase, queryrecomdations } from "../utils/query.js"
import {getEmbedding,anaylyzeorder,anaskquery} from "../models/openai.js"

async function querycases(req,res){
    const {query,filter} = req.body;
    const resultq = await queryDatabase(query,"Court Orders","legal-dense-vector",getEmbedding,filter)
    res.json({result:resultq.queryfinal.points})

}

async function queryrecomnd(req,res){
    const {query} = req.body
    const result = await queryrecomdations(query,"search-query-recomd","recomd-dense",getEmbedding)
    res.json({resultrecomnd:result.points})
}

async function anylyzequery(req,res) {
    const {query} = req.body
    const result1 = await anaylyzeorder(query)
    res.json({result:result1})
    
}

async function anaskquerynew(req,res) {
    const {query,dataset} = req.body;
    const result1 = await anaskquery(query,dataset);

   res.json({result:result1})

}
export {querycases,queryrecomnd,anylyzequery,anaskquerynew}