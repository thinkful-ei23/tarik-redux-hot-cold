'use strict';

import {createStore} from 'redux';
import {actionsReducer} from './reducers';

export default createStore(actionsReducer);