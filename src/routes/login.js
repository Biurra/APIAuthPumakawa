import route from './rIndex.js';
import * as controllers from '../controllers/cIndex.js';

const loginRouter = Router();

loginRouter.post('/login', controllers.login);
loginRouter.get('/login/auth', controllers.loginAuth);

export default loginRouter;

