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
		const j = day % 10;
		const k = day % 100;

		// 1st
		if (j === 1 && k !== 11) {
			return "st";
		}

		// 2nd
		if (j === 2 && k !== 12) {
			return "nd";
		}

		// 3rd
		if (j === 3 && k !== 13) {
			return "rd";
		}

		// 4th, 5th, 6th, 7th, 8th, 9th, 10th, 11th..
		return "th";
	}

	const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

	const formattedDate = `${month} ${dayOfMonth}${ordinalSuffix}, ${year}`;

	return formattedDate;
}
