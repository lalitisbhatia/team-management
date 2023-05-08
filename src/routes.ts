import {Router,Request,Response} from 'express';

export const router = Router();

router.get('/',(req:Request,res:Response) => {
    res.send("<h2>EXPRESS-TS server running </h2>")
})
router.get('/other',(req:Request,res:Response) => {
    res.send("<p>other route for EXPRESS-TS server  </p>")
})

router.post('/calc',(req:Request,res:Response) => {
    const {a,b} = req.body
    console.log(a,typeof a,b)
    if (a && b && typeof a === 'number' && typeof b === 'number') {
        res.json({
          success: true,
          message: a + b,
        });
      } else {
        res.json({
          success: false,
          message: 'Missing parameters',
        });
      }
})