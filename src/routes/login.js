import route from './rIndex.js';
import * as controllers from '../controllers/cIndex.js';

const loginRouter = Route();

loginRouter.post('/login', controllers.login);

export default loginRouter;

