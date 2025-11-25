//your JS code here. If required.
const output = document.getElementById("output");

function getArray() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([1,2,3,4]);
		}, 3000);
	})
}

getArray()
	.then((data) => {
		return new Promise((resolve) => {
			const evenArray = data.filter(num => num%2 == 0);
			setTimeout(() => {
				output.textContent = evenArray;
				resolve(evenArray);
			}, 1000);
		})
	})
	.then((data) => {
		return new Promise((resolve) => {
			const doubledArray = data.map(num => num*2);
			setTimeout(() => {
				output.textContent = doubledArray;
				resolve(doubledArray);
			}, 3000);
		})
	});

