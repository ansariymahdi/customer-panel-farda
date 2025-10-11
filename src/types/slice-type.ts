export interface LoginStepType {
	loginStep: "mobileStep" | "OtpStep"
	mobileNumber?: string | null
}
