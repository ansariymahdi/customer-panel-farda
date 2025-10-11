"use client"

import { FC, useRef } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"

import { LoadingButton } from "@mui/lab"
import { Box, Grid, TextField, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import { setCookie } from "cookies-next"
import { Formik } from "formik"
import { toast } from "sonner"
import * as Yup from "yup"

import { usePostApiV1CustomerAuthenticationOTPVerifyCode } from "@/hooks/api-hooks/authentication/authentication"
import { toPrivateNumber } from "@/utils/utility"

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon"
import UserIcon from "@/components/icons/UserIcon"

const validationSchema = Yup.object({
	otp: Yup.string().required("وارد کردن کد الزامی است")
})

const OTPForm: FC = () => {
	const router = useRouter()

	const mobileNumber = useSelector(
		(state: any) => state.loginState.mobileNumber
	)

	const phoneInputRef = useRef<HTMLInputElement>(null)

	const { mutateAsync, isPending } =
		usePostApiV1CustomerAuthenticationOTPVerifyCode()

	const submitForm = async (values: { otp: string }) => {
		try {
			const response = await mutateAsync({
				data: {
					code: values.otp,
					mobileNumber
				}
			})

			const data: any = response?.data?.data

			debugger
			if (data?.accessToken) {
				// ✅ Save tokens in cookies (secure + short-lived)
				setCookie("accessToken", data.accessToken, {
					path: "/",
					maxAge: 60 * 60 * 24, // 1 day
					secure: process.env.NODE_ENV === "production"
				})

				if (data.refreshToken) {
					setCookie("refreshToken", data.refreshToken, {
						path: "/",
						maxAge: 60 * 60 * 24 * 7, // 7 days
						secure: process.env.NODE_ENV === "production"
					})
				}

				router.push("/profile/policy")
			}
		} catch (error: any) {
			toast.error(error?.response?.data?.message)
		}
	}

	return (
		<Formik
			initialValues={{
				otp: ""
			}}
			onSubmit={submitForm}
			validationSchema={validationSchema}
			validateOnBlur
		>
			{(formik) => (
				<Stack
					component="form"
					sx={{ justifyContent: "center", alignItems: "center" }}
					onSubmit={formik.handleSubmit}
				>
					<Box
						sx={{
							backgroundColor: "#EEF0F296",
							width: "380px",
							height: "170px",
							px: 8,
							py: 2,
							mb: 4,
							mt: 4,
							borderRadius: 2,
							gap: 4,
							display: "flex",
							flexDirection: "column"
						}}
					>
						<Stack sx={{ alignItems: "center", mt: 2 }} gap={1}>
							<Typography variant="h6">
								لطفا کد ارسال شده به شماره{" "}
								<span dir="ltr">{mobileNumber ? mobileNumber : ""}</span> را
								وارد نمایید{" "}
							</Typography>
						</Stack>
						<Stack width="100%" gap={2}>
							<Grid columns={4}>
								<TextField
									name="otp"
									disabled={isPending}
									inputRef={phoneInputRef}
									sx={{ color: "grey.900" }}
									slotProps={{
										input: {
											endAdornment: <UserIcon sx={{ color: "grey.900" }} />
										}
									}}
									value={formik.values.otp}
									onChange={formik.handleChange}
									placeholder="کد تایید"
									variant="outlined"
									error={formik.touched.otp && Boolean(formik.errors.otp)}
									helperText={formik.touched.otp && formik.errors.otp}
								/>
							</Grid>
						</Stack>
					</Box>

					<LoadingButton
						type="submit"
						variant="contained"
						disabled={isPending}
						sx={{
							borderRadius: "8px",
							gap: 1,
							backgroundColor: "primary.main"
						}}
						fullWidth={false}
						disableElevation
						loading={isPending}
					>
						{"تایید و ادامه"}
						<ArrowLeftIcon />
					</LoadingButton>
				</Stack>
			)}
		</Formik>
	)
}

export default OTPForm
