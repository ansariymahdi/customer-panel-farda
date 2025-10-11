import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { LoginStepType } from "@/types/slice-type"

const initialState: LoginStepType = {
	loginStep: "mobileStep",
	mobileNumber: null
}
export const loginStepSlice = createSlice({
	name: "loginState",
	initialState,
	reducers: {
		setLoginStep(state, action: PayloadAction<LoginStepType>) {
			state.loginStep = action.payload.loginStep
			state.mobileNumber = action.payload.mobileNumber
		}
	}
})

export const { setLoginStep } = loginStepSlice.actions

export default loginStepSlice.reducer
