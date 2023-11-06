import { legacy_createStore as createStore} from 'redux';
import countryReducer from './reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

 // const store = createStore(countryReducer);

const enhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const store = createStore(countryReducer,composeWithDevTools());


export default store