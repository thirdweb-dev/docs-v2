export function formatHumanReadableDate(isoString: string) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const date = new Date(isoString);
	const dayOfMonth = date.getUTCDate();
	const month = months[date.getUTCMonth()];
	const year = date.getUTCFullYear();

	// Function to get the ordinal suffix for the day of the month
	function getOrdinalSuffix(day: number) {
		const suffixes = ["th", "st", "nd", "rd"];
		const v = day % 100;
		return v >= 11 && v <= 13 ? "th" : suffixes[(v - 11) % 10] || "th";
	}

	const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

	const formattedDate = `${month} ${dayOfMonth}${ordinalSuffix}, ${year}`;

	return formattedDate;
}
