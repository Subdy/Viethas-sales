// Library for Bills
export class BillTools {
	genNewBillCode() {
		let date = new Date();
        return (
			date
				.getFullYear()
				.toString()
				.slice(2, 4) +
			(date.getMonth() + 1).toString() +
			date.getUTCDate().toString() +
			date.getHours().toString() +
			date.getMinutes().toString() +
			date.getSeconds().toString()
        );
	}

	
}