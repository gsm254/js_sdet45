let s = "testyantra";
		let wv="";
		for (let i = 0; i < s.length; i++) {
			let ch = s.charAt(i);
				if(ch=='t') {
					wv = wv+ "T";
                    
			}else
				wv+=ch;
			
		}
		console.log(wv);