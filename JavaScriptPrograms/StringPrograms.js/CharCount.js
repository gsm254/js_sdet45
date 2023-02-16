let s = "testyantra";
		for (let i = 0; i < s.length; i++) {
			let ch = s.charAt(i);
			let count = 0;
			for (let j = 0; j < s.length; j++) {
				if (ch == s.charAt(j)) {
					if (j < i)
						break;
					count++;
				}
			}
			if (count >= 1)
				console.log(ch + "---> " + count);
        }