let text = "testyatra"

for(let i =0;i<text.length;i++)
{
    let ch = text.charAt(i)
    let count=0;
if(!(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')){
	for(let j=0;j<text.length;j++)
	{
		if(ch==text[j]){
		 if(j<i){
            break;
         }
		count++;
        }
	}

	
}
     if(count>=1){
        console.log(ch+"---> "+count)
        }

}
