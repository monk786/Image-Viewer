$(document).ready(function(){
	/*var count=0;*/
	var total = 0, count = 1; while (count >= 1) {  count += 1; }
	$("#likea").click(function(){
		console.log(count++);		
		$("#likea").css("color","#FF6200");
		document.getElementById("likecount").innerHTML = count;			
	});

	$("#likeb").click(function(){
		console.log(count++);		
		$("#likeb").css("color","#FF6200");
		$(".like2").append("<h2 style='color:white;max-resolution: 0;'>"+count+"</h2>");			
	});

	$("#likec").click(function(){
		console.log(count++);		
		$("#likec").css("color","#FF6200");
		$(".like3").append("<h2 style='color:white;max-resolution: 0;'>"+count+"</h2>");			
	});

	$("#liked").click(function(){
		console.log(count++);		
		$("#liked").css("color","#FF6200");
		$(".like4").append("<h2 style='color:white;max-resolution: 0;'>"+count+"</h2>");			
	});

	$("#likee").click(function(){
		console.log(count++);		
		$("#likee").css("color","#FF6200");
		$(".like5").append("<h2 style='color:white;max-resolution: 0;'>"+count+"</h2>");			
	});

	$("#likef").click(function(){
		console.log(count++);		
		$("#likef").css("color","#FF6200");
		$(".like6").append("<h2 style='color:white;max-resolution: 0;'>"+count+"</h2>");			
	});

	$("#likeg").click(function(){
		console.log(count++);		
		$("#likeg").css("color","#FF6200");
		$(".like7").append("<h2 style='color:white;max-resolution: 0;'>"+count+"</h2>");			
	});

	$("#likeh").click(function(){
		console.log(count++);		
		$("#likeh").css("color","#FF6200");
		$(".like8").append("<h2 style='color:white;max-resolution: 0;'>"+count+"</h2>");			
	});

	$("#likei").click(function(){
		console.log(count++);		
		$("#likei").css("color","#FF6200");
		$(".like9").append("<h2 style='color:white;max-resolution: 0;'>"+count+"</h2>");			
	});

	$("#likej").click(function(){
		console.log(count++);		
		$("#likej").css("color","#FF6200");
		$(".like10").append("<h2 style='color:white;max-resolution: 0;'>"+count+"</h2>");			
	});

	$("div").mousedown(function(){
		
		$("#piechart").show();
	});



 });