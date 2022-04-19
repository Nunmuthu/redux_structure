import { createStore } from 'redux';
import { counterReducer} from "./reducers/count.reducer";

export const store = createStore(counterReducer);