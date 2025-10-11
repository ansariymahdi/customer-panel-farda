import { IconButton, Stack, Tooltip, Typography } from "@mui/material"

import InfoFillIcon from "@/icons/InfoFillIcon"

import EyeIcon from "../icons/EyeIcon"
import { CopyBox } from "./CopyBox"

interface CardTextBoxProps {
	title?: string | any
	value: string | number
	hasCopy?: boolean
	bgColor?: string
	badgeConfig?: any
	highlighted?: boolean
	highlightStatus?: "error" | "success"
	tooltipMsg?: string
	description?: string
	onEyeClick?: any
}
export const CardTextBox = ({
	title,
	value,
	hasCopy,
	bgColor,
	badgeConfig,
	highlighted = false,
	highlightStatus,
	tooltipMsg,
	description,
	onEyeClick
}: CardTextBoxProps) => {
	return (
		<Stack
			flexDirection="row"
			sx={{
				gap: 2,
				width: "100%",
				justifyContent: "space-between",
				alignItems: "center"
			}}
		>
			<Stack
				flexDirection="row"
				sx={{
					gap: 2,
					width: "100%",
					justifyContent: "space-between",
					alignItems: "center",

					backgroundColor: bgColor ? bgColor : "#0000000A",
					borderRadius: 2,
					minHeight: 30,
					border: highlighted
						? `2px solid ${highlightStatus === "error" ? "#E85A5A" : "#5AE893"}`
						: "",
					px: 2,
					py: 0.5
				}}
			>
				{highlighted && (
					<Tooltip
						title={tooltipMsg}
						arrow
						placement="top"
						componentsProps={{
							tooltip: {
								sx: {
									bgcolor: highlightStatus === "error" ? "#FFB6B6" : "#AEF4CA",
									"& .MuiTooltip-arrow": {
										color: highlightStatus === "error" ? "#FFB6B6" : "#AEF4CA"
									},
									color: "secondary.200"
								}
							}
						}}
					>
						<Stack
							sx={{
								justifyContent: "center",
								alignItems: "center",
								cursor: "pointer",
								mx: 0.5,
								color: highlightStatus === "error" ? "#E85A5A" : "#5AE893"
							}}
						>
							<InfoFillIcon sx={{ color: "error" }} />
						</Stack>
					</Tooltip>
				)}
				{title && (
					<Typography
						variant="body2"
						color="text.primary"
						fontWeight="bold"
						sx={{ fontSize: 12 }}
					>
						{title}:
					</Typography>
				)}

				<Stack
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: 0.5
					}}
				>
					{!badgeConfig ? (
						<>
							<Stack
								flexDirection={"column"}
								sx={{ alignItems: "left", pr: 1 }}
							>
								<Typography
									variant={"body2"}
									color="text.primary"
									sx={{ fontSize: 14, textAlign: "left" }}
								>
									{value ? value : "-"}
								</Typography>
								{description && (
									<Typography
										color="text.primary"
										variant={"caption"}
										sx={{ textAlign: "right", lineHeight: 0.85, fontSize: 11 }}
									>
										{description}
									</Typography>
								)}
							</Stack>
							{hasCopy && <CopyBox copyValue={value} />}
						</>
					) : (
						<Stack
							sx={{
								flexDirection: "row",
								backgroundColor: badgeConfig.color,
								borderRadius: 1,

								alignItems: "center",
								justifyContent: "center",
								p: 0.8
							}}
						>
							<Typography
								sx={{
									borderRadius: 2,
									fontSize: 10
								}}
								color="text.primary"
								variant="body2"
							>
								{value}
							</Typography>
						</Stack>
					)}
					{onEyeClick && (
						<IconButton
							onClick={onEyeClick}
							sx={{
								color: "secondary.200",
								p: 0
							}}
						>
							<EyeIcon />
						</IconButton>
					)}
				</Stack>
			</Stack>
		</Stack>
	)
}
