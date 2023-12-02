import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './image-reducer'
import settingsReducer from './settings-reducer'

export default configureStore({
    reducer: {
        image: imageReducer,
        settings: settingsReducer
    }
})