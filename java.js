let disp;
	let op;
	let num1, num2;
	function addValue(n)
	{
		disp = document.getElementById("disp");
		disp.value = disp.value + n;
		num1 = disp.value;
		//console.log(num1);
		return num1;
	}
	
	function setOp(a)
	{
		op = a;
		num2 = num1;
		disp.value = "";
		//console.log(op);
		return op;
	}
	
	function deleteLast()
	{
		//let num = disp.value;
		disp.value = disp.value.substring(0, disp.value.length-1);
		
	}
	
	function clearInput()
	{
		disp.value = " ";
	}
	
	function Calculate()
	{
	//console.log(op);
	//console.log(num2);
	//console.log(disp.value);
	
	//console.log("sum is "+tot);
	//disp.value = tot;
	
		switch(op)
		{
			case 1:
			//div
			disp.value = parseInt(num2) / parseInt(disp.value);
				
			break;
			case 2:
			//multi
			disp.value = parseInt(num2) * parseInt(disp.value);
			break;
			case 3:
			//sub 
			disp.value = parseInt(num2) - parseInt(disp.value);
			break;
			case 4:
			//add
			disp.value = parseInt(num2) + parseInt(disp.value);
			
			
			break;
		}
		
		
	}