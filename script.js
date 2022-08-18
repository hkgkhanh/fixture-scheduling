function scheduling(n) {
	if (n % 2 === 0) {
		return even(n);
	} else {
		return odd(n);
	}
}
 function even(n) {
 	// INIT
 	let matchCount = n / 2;
 	let resultArr = []; // arr đã chia bảng
 	//let roundArr = []; // 1 vòng của arr đã chia bảng
 	let cycleArr = [];
 	let tempArr = [];

 	// CYCLE
 	for (let i = 0; i < n; i++) {
 		cycleArr[i] = i + 1;
 	}

 	for (let i = 0; i < n - 1; i++) {
 		// cycle
 		let temp = cycleArr[1];

 		for (let j = 1; j < n - 1; j++) {
 			cycleArr[j] = cycleArr[j + 1];
 		}

 		cycleArr[n - 1] = temp;

 		// save
 		let roundArr = [];
 		for (let k = 0; k < matchCount; k++) {
 			//roundArr[k] = "'" + cycleArr[k] + " - " + cycleArr[n - 1 - k];
 			if (cycleArr[k] * cycleArr[n - 1 - k] !== 0) {
 				roundArr.push("'" + cycleArr[k] + " - " + cycleArr[n - 1 - k]);
 			}
 		}
 		resultArr.push(roundArr);
 	}

 	console.table(resultArr);

 	// EXPORT
 	var CsvString = "";
  	resultArr.forEach(function(RowItem, RowIndex) {
    	RowItem.forEach(function(ColItem, ColIndex) {
      	CsvString += ColItem + ',';
    	});
    	CsvString += "\r\n";
  	});
  	CsvString = "data:application/csv," + encodeURIComponent(CsvString);
 	var x = document.createElement("A");
 	x.setAttribute("href", CsvString);
 	x.setAttribute("download","somedata.csv");
 	document.body.appendChild(x);
 	x.click();
}

function odd(n) {
	// INIT
	let N = n + 1;
 	let matchCount = N / 2;
 	let resultArr = []; // arr đã chia bảng
 	//let roundArr = []; // 1 vòng của arr đã chia bảng
 	let cycleArr = [];
 	let tempArr = [];

 	// CYCLE
 	for (let i = 0; i < N; i++) {
 		cycleArr[i] = i;
 	}

 	for (let i = 0; i < N - 1; i++) {
 		// cycle
 		let temp = cycleArr[1];

 		for (let j = 1; j < N - 1; j++) {
 			cycleArr[j] = cycleArr[j + 1];
 		}

 		cycleArr[N - 1] = temp;

 		// save
 		let roundArr = [];
 		for (let k = 0; k < matchCount; k++) {
 			//roundArr[k] = "'" + cycleArr[k] + " - " + cycleArr[n - 1 - k];
 			if (cycleArr[k] * cycleArr[N - 1 - k] !== 0) {
 				roundArr.push("'" + cycleArr[k] + " - " + cycleArr[N - 1 - k]);
 			}
 		}
 		resultArr.push(roundArr);
 	}

 	console.table(resultArr);
 	console.log(N);

 	// EXPORT
 	var CsvString = "";
  	resultArr.forEach(function(RowItem, RowIndex) {
    	RowItem.forEach(function(ColItem, ColIndex) {
      	CsvString += ColItem + ',';
    	});
    	CsvString += "\r\n";
  	});
  	CsvString = "data:application/csv," + encodeURIComponent(CsvString);
 	var x = document.createElement("A");
 	x.setAttribute("href", CsvString);
 	x.setAttribute("download","somedata.csv");
 	document.body.appendChild(x);
 	x.click();
}