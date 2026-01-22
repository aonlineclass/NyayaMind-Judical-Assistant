import {QdrantClient} from '@qdrant/js-client-rest';
import dotenv from 'dotenv'
dotenv.config()
const client = new QdrantClient({
    url: 'https://5ea2f10a-ae59-4927-aff9-8eb73378467c.us-east4-0.gcp.cloud.qdrant.io:6333',
    apiKey: process.env.QDRANT_API_KEY,
});

export {client}