function check()
{
	var a = document.getElementById("text").value;
	var b;
	
	b=a.reverse();
	
	if(a==b)
	{
		document.write("String is a Palindrome.");
	}
	else
	{
		document.write("String is NOT a Palindrome.");
	}
}