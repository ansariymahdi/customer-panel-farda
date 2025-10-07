"use client"

import { FC, useRef } from "react"

import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import { Formik } from "formik"

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon"
import UserIcon from "@/components/icons/UserIcon"

const MobileForm: FC = () => {
	// const { onChangeStep, onSendOtp, isLoading } = useLogin()
	const phoneInputRef = useRef<HTMLInputElement>(null)

	const submitForm = async () => {
		// onSendOtp(phoneNumber, nationalCode)
	}

	return (
		<Formik
			initialValues={{
				phoneNumber: "",
				nationalCode: ""
			}}
			onSubmit={() => {
				submitForm()
			}}
			validateOnBlur
			// validationSchema={validationSchema}
			enableReinitialize
		>
			{(formik) => (
				<Stack
					component="form"
					sx={{
						justifyContent: "center",
						alignItems: "center"
					}}
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
								شماره موبایل خود را وارد نمایید.
							</Typography>
						</Stack>
						<Stack width="100%" gap={2}>
							<Grid columns={4}>
								<TextField
									name="phoneNumber"
									disabled={false}
									inputRef={phoneInputRef}
									sx={{
										color: "grey.900"
									}}
									slotProps={{
										input: {
											endAdornment: (
												<UserIcon
													sx={{
														color: "grey.900"
													}}
												/>
											)
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
					<Button fullWidth={false}>
						تایید و ادامه
						<ArrowLeftIcon />
					</Button>
					{/* <CustomLoadingButton
								type="submit"
								variant="contained"
								disableRipple

								disableElevation
								sx={{
									borderRadius: "8px ",
									gap: 1,
									backgroundColor: "primary.main"
                  }}
								loading={isLoading}
                >
								تایید و ادامه
								<ArrowLeftIcon />
							</CustomLoadingButton> */}
				</Stack>
			)}
		</Formik>
	)
}

export default MobileForm
