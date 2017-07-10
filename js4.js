var table = [];
function genTable()
{
	var n = parseInt(document.getElementById("num").value);
	
	for(i=0;i<10;i++)
	{
		table.push(n*(i+1));
	}
	
	for(i=0;i<10;i++)
	{
		//document.write(n + "*" + (i+1) + " = " + table[i] + "<br>");
		prompt(for(i=0;i<10;i++)
	{
		document.write(n + "*" + (i+1) + " = " + table[i] + "<br>");
	},"Next number?");
	}
	//nextVal();
}
/*function nextVal
{
	prompt(for(i=0;i<10;i++)
	{
		document.write(n + "*" + (i+1) + " = " + table[i] + "<br>");
	},"Next number?");
}*/