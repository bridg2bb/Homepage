function toSubmitOrNot()
	{
		var ele = document.getElementsByName('language');
		var JSSelected = false, phpSelected = false;  
		for(i = 0; i < ele.length; i++) {
			if(ele[i].checked) 
			{
				if (ele[i].value == "php")
				{
					phpSelected = true;
				} else if (ele[i].value == "js") {
					JSSelected = true;
				}
				break;
			}
		}
		if (phpSelected)
		{
			document.getElementById("form").submit();
		} else
		{
			var results = document.getElementById("results");
			var txtNumber = document.getElementById("txtNumber");
			
			var number = parseInt(txtNumber.value);

			if (isNaN(number) || number < 1)
			{
				results.innerHTML = "You must enter a valid number.";
			} else {
				results.innerHTML = '';
				for (i = 1; i <= number; i ++)
				{
					
					var output = ((i % 3 == 0) ? "Fizz" : "") + ((i % 5 == 0) ? "Buzz" : "") +
							(((i % 3 != 0) && (i % 5 != 0)) ? i : "")
					
					results.innerHTML += output + "<br />";
					
					/*
					var divisibleBy3 = (i % 3 == 0);
					var divisibleBy5 = (i % 5 == 0);
				
					if (divisibleBy3)
					{
							results.innerHTML += "Fizz";
					}
					if (divisibleBy5)
					{
							results.innerHTML += "Buzz";
					}
					if (!divisibleBy3 && !divisibleBy5)
					{
							results.innerHTML += i;
					}
					results.innerHTML += "<br />";
					*/
				}
			}
			
		}
	}
	document.getElementById("btnSubmit").onclick = toSubmitOrNot;