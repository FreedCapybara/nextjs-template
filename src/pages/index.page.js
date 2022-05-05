import { Landing } from './landing/Landing';
import { Home } from './home/Home';

const isLoggedIn = false;

export default isLoggedIn ? Home : Landing;

