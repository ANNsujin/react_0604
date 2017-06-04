import express from 'express';
import account from './account';
/* import Your api
import A from './A';
import B from './B';
*/
const router = express.Router();
router.use('/account', account);
/* use your api
router.use('/A', A);
router.use('/B', B);
*/
export default router;
