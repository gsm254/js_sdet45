let s = "testyantra";
		let vow = 0;
		let cons = 0;
		for (let i = 0; i < s.length; i++) {
			let ch = s.charAt(i);
			
			if (ch == 'e' || ch == 'a' || ch == 'i' || ch == 'o' || ch == 'u') {
				
				vow++;
			}
			else
				cons++;
			
			
		}
		console.log("vowels \t consonent");
		console.log(vow+" \t "+ cons);