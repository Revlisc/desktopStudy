import { mongoose } from 'mongoose';
import PostMessage from '../models/postMessage.js';

//register a new user
export const register = async (req, res) => {
    try {
        //grab info from schema with await
        //if successful
        res.status(200).json(info)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}