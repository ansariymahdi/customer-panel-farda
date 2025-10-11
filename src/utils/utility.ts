export const toPrivateNumber = (number: string) => {
	return number.replace(number.substring(4, 7), "***")
}
