import rootReducer from './root_reducer'
import { configureStore } from 'redux-starter-kit'


const appStore = configureStore({
    reducer: rootReducer
})

export default appStore
