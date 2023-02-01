/*arr = [1,2,5,4,1,4,4]
o/p = 1
      4

*/

var arr = [1,2,5,4,1,4,4];
let size = arr.length

for (let i = 0; i < arr.length; i++) 
{
  let count = 0
			for (let j = 0; j < arr.length; j++) 
                  {
				
				if(arr[i]==arr[j]) {
					if(j<i)
					{
						break;
					}
					count++;
				}
			}
			if(count>1) {
				console.log(arr[i]);
			}
			
}
      
      


