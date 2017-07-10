function check()
{
	var id = document.getElementById("id").value;
	var pwd = document.getElementById("pwd").value;
	
	var i=0,flag=0;
	while(i!=3)
	{
		if(id==="R")
		{
			if(pwd==="R")
			{
				alert("Valid Applicant!");
				flag=1;
			}
		}
		else
		{
			continue;
		}
		i++;
	}
	if(flag==0)
	{
		alert("Invalid Applicant! Login Unsuccessful!");
	}
	else
	{
		document.write("Login Successful!");
	}
}