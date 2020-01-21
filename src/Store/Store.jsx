import { createStore } from 'redux';

import RootReducer from '../reducer/RootReducer';

const Store = createStore(RootReducer);

export default Store;