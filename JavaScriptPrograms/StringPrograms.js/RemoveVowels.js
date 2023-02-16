let s = "testyantra";
		let wv="";
		for (let i = 0; i < s.length; i++) {
			let ch = s.charAt(i);
			if (!(ch == 'e' || ch == 'a' || ch == 'i' || ch == 'o' || ch == 'u')) {
				wv = wv+ch;
			}
			
		}
		console.log(wv);
