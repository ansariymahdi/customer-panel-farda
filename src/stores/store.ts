import { configureStore } from "@reduxjs/toolkit"

import loginStepReducer from "@/stores/reducers/login-step/login-step"

const store = configureStore({
	reducer: {
		loginState: loginStepReducer
	}
})

export default store
