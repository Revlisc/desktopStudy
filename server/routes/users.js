import express from 'express';

//import from controllers

const router = express.Router();

router.post('/', register);

export default router;