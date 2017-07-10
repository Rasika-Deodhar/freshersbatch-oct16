function division()
{
	var n1,n2;
	
	n1 = parseInt(document.getElementById("num1").value);
	n2 = parseInt(document.getElementById("num2").value);
	
	if(n2==0)
	{
		alert("Division by 0 exception!!");
	}
	
	n3 = n1/n2;
	document.write("Division = " + n3);
	
}