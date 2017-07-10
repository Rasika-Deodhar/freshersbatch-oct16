var arry = [44,77,90,12,32,14];
function calc
{
	var max=0,min=999,total=0,avg=0;
	
	for(i=0;i<arry.length;i++)
	{
		if(arry[i]>max)
		{
			max=arry[i];
		}
		
		if(arry[i]<min)
		{
			min=arry[i];
		}
		
		total +=arry[i];
	}
	
	document.write("Max = " + max);
	document.write("Min = " + min);
	document.write("Total = " + total);
	document.write("Average = " + total/arry.length);
}