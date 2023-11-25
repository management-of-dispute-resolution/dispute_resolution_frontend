	function formatDate(dateStr, short = false) {
		const months = [
			'янв',
			'фев',
			'мар',
			'апр',
			'май',
			'июн',
			'июл',
			'авг',
			'сен',
			'окт',
			'ноя',
			'дек',
		];

		const d = new Date(dateStr);
		const day = d.getDate();
		const month = months[d.getMonth()];
		const hours = d.getHours();
		const minutes = `${d.getMinutes()}`.padStart(2, '0');

		return short ? `${day} ${month}` : `${day} ${month} в ${hours}:${minutes}`;
	}

    export default formatDate;
