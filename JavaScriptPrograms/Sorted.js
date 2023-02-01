/*arr = [1,2,5,4,1,4,4]
o/p = 1
      4

*/

var arr = [1,2,5,4,1,4,4];
let size = arr.length

for (let i = 0; i < arr.length-1; i++) 
{
  
			for (let j = 0; j < arr.length-1; j++) 
                  {
				
				if(arr[j]>arr[j+1]) {
					var temp = arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp
					
					
			
	
				}
			}
			
			
}
console.log(arr);   
      


