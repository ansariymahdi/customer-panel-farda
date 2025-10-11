"use client"

import { FC, useRef } from "react"
import { useDispatch } from "react-redux"

import { LoadingButton } from "@mui/lab"
import { Box, Grid, TextField, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import { Formik } from "formik"
import { toast } from "sonner"
import * as Yup from "yup"

import { setLoginStep } from "@/stores/reducers/login-step/login-step"
import { usePostApiV1CustomerAuthenticationOTPSendCode } from "@/hooks/api-hooks/authentication/authentication"

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon"
import UserIcon from "@/components/icons/UserIcon"

const validationSchema = Yup.object({
	phoneNumber: Yup.string()
		.matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
		.required("شماره موبایل الزامی است")
})

const MobileForm: FC = () => {
	const dispatch = useDispatch()

	const phoneInputRef = useRef<HTMLInputElement>(null)

	const { mutateAsync, isPending } =
		usePostApiV1CustomerAuthenticationOTPSendCode()

	// ✅ Form submission handler with value phone-number
	const submitForm = async (values: { phoneNumber: string }) => {
		try {
			await mutateAsync({
				data: {
					mobileNumber: values.phoneNumber
				}
			})

			toast.success("کد تایید ارسال شد")
			dispatch(
				setLoginStep({
					loginStep: "OtpStep",
					mobileNumber: values.phoneNumber
				})
			)
		} catch (error) {
			toast.error("ارسال کد تایید با خطا مواجه شد")
		}
	}

	return (
		<Formik
			initialValues={{
				phoneNumber: ""
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
						sx={(theme) => ({
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
							flexDirection: "column",
							[theme.breakpoints.down("tablet")]: {
								width: 300,
								p: 2
							},
							[theme.breakpoints.down("mobile")]: {
								width: 300,
								p: 2
							}
						})}
					>
						<Stack sx={{ alignItems: "center", mt: 2 }} gap={1}>
							<Typography variant="h6">
								شماره موبایل خود را وارد نمایید.
							</Typography>
						</Stack>
						<Stack width="100%" gap={2}>
							<Grid columns={4}>
								<TextField
									name="phoneNumber"
									disabled={isPending}
									inputRef={phoneInputRef}
									sx={{ color: "grey.900" }}
									slotProps={{
										input: {
											endAdornment: <UserIcon sx={{ color: "grey.900" }} />
										}
									}}
									value={formik.values.phoneNumber}
									onChange={formik.handleChange}
									placeholder="شماره موبایل"
									variant="outlined"
									error={
										formik.touched.phoneNumber &&
										Boolean(formik.errors.phoneNumber)
									}
									helperText={
										formik.touched.phoneNumber && formik.errors.phoneNumber
									}
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

export default MobileForm
