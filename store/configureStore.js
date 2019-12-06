// Store/configureStore.js

import { createStore } from 'redux';
import toggleLu from './reducers/luReducer'

export default createStore(toggleLu)