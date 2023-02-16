let c=[];
let cha=[];
function charcount(value) {
		for (let i = 0; i < value.length; i++) {
			let ch = value.charAt(i);
			let count = 0;
			for (let j = 0; j < value.length; j++) {
				if (ch == value.charAt(j)) {
					if (j < i)
						break;
					count++;
				}
			}
			if (count >= 1){
                

				console.log(ch + "---> " + count);
            }
        }
    }
 charcount("Testyantra");





   
