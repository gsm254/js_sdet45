function removeDuplicate(value) {
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
                
                tw=tw+ch;
				
            }
        }
    }
    let tw = ""
    let tst = new removeDuplicate("testyantra");
    console.log(tw);





   
