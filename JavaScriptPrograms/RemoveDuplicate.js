/*arr = [1,2,5,4,1,4,4]
o/p = 1
      4

*/

var arr = [1,2,5,4,1,4,4];
//int[] arr = { 1, 2, 5, 4, 1, 4, 4 };

		var nonDuplicates = "";

		for (var i = 0; i < arr.length; i++) {
			var count = 0;
			for (var j = 0; j < arr.length; j++) {

				if (arr[i] == arr[j]) {
					if (j < i) {
						break;
					}
					count++;
				}
			}
			if (count > 1) {
				nonDuplicates = nonDuplicates + arr[i] + "/";
				//System.out.println(arr[i] + "---> " + count);
			} else if (count == 1) {
				nonDuplicates = nonDuplicates + arr[i] + "/";
			}
		}

		var r = nonDuplicates.split("/");
		var resultArray = new Array(r.length-1);
		for (let i = 0; i < resultArray.length; i++) {
			resultArray[i] = Number(r[i]);
		}

		// array without duplicate
		console.log(resultArray);



