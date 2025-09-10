import express from 'express'
import { getbyFromTo,postdata,getdetails,postesp32 } from '../Controllers/Busdetails.js';

const router =  express.Router();

router.get('/:from/:to',getbyFromTo)
router.post('/',postdata)

router.get('/:busnumber',getdetails)
router.post('/personcount',postesp32)

export default router;
