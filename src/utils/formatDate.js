function formatDate(inputDate, short) {
	const currentDate = new Date();
	const inputDateTime = new Date(inputDate);

	if (short) {
		const options = {
			day: 'numeric',
			month: 'short',
			hour: 'numeric',
			minute: 'numeric',
		};

		return inputDateTime.toLocaleDateString('ru-RU', options);
	}
	const options = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};

	if (currentDate.getFullYear() === inputDateTime.getFullYear()) {
		// Если год совпадает, отображаем без года
		options.year = undefined;
	}

	return inputDateTime.toLocaleDateString('ru-RU', options);
}
export default formatDate;
