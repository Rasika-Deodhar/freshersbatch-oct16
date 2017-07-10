function factCheck()
{
	var n = parseInt(document.getElementById("num").value);
	var fact=1;
	for(i=1;i<=n;i++)
	{
		fact = fact*i;
	}
	document.write("The factorial of the number entered is = " + fact);
}