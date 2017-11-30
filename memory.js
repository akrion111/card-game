var array=[];
array[0]="ciri.png";
array[1]="geralt.png";
array[2]="yen.png";
array[3]="iorweth.png";
array[4]="jaskier.png";
array[5]="triss.png";
array[6]="jaskier.png";
array[7]="triss.png";
array[8]="yen.png";
array[9]="iorweth.png";
array[10]="ciri.png";
array[11]="geralt.png";
var squares=[];

for(i=0;i<array.length;i++)
{
squares[i]=document.getElementById('s'+i);
}

var one_revealed=false;


squares[0].addEventListener("click", function() { revealCard(0); }  );
squares[1].addEventListener("click", function() { revealCard(1); }  );
squares[2].addEventListener("click", function() { revealCard(2); }  );
squares[3].addEventListener("click", function() { revealCard(3); }  );
squares[4].addEventListener("click", function() { revealCard(4); }  );
squares[5].addEventListener("click", function() { revealCard(5); }  );
squares[6].addEventListener("click", function() { revealCard(6); }  );
squares[7].addEventListener("click", function() { revealCard(7); }  );
squares[8].addEventListener("click", function() { revealCard(8); }  );
squares[9].addEventListener("click", function() { revealCard(9); }  );
squares[10].addEventListener("click", function() { revealCard(10); }  );
squares[11].addEventListener("click", function() { revealCard(11); }  );



function randomize()
{
	var buffer;
for(i=0;i<array.length;i++)
{
var x=Math.floor((Math.random()*11)+1);
buffer=array[i];
array[i]=array[x];
array[x]=buffer;

}
}

var revealed_number;
var counter=0;
var stop=false;
var pairs_left=6;

function revealCard(nr)
{


if(opacityValue!=0&&stop==false)
{
	var image="url(img/"+array[nr]+")";
var opacityValue = $('#s'+nr).css('opacity');
$('#s'+nr).addClass('squareA');
$('#s'+nr).removeClass('square');
	stop=true;
	$('#s'+nr).css('background-image',image);
if(one_revealed!=false)
{
		if(array[nr]==array[revealed_number])
		{
			pairs_left--;
			if(pairs_left==0)
			{
			$('#container').html("You have won! Good job! <a href=\"gra.html\">TRY AGAIN?</a>");
			}
		setTimeout(function() {hide_cards(nr,revealed_number);},1000);
		
		}
		else
		{
		setTimeout(function() {restore_cards(nr,revealed_number);},1000);
	
		}
	counter++;
	one_revealed=false;
	document.getElementById("counter").innerHTML="Turn counter: "+counter;
}
else
{
revealed_number=nr;
one_revealed=true;
stop=false;
}
}

}

function hide_cards(number1, number2)
{
$('#s'+number1).css('opacity',0);
$('#s'+number2).css('opacity',0);
stop=false;
}

function restore_cards(number1,number2)
{
$('#s'+number1).css('background-image','url("img/karta.png")');
$('#s'+number2).css('background-image','url("img/karta.png")');
$('#s'+number1).addClass('square');
$('#s'+number1).removeClass('squareA');
$('#s'+number2).addClass('square');
$('#s'+number2).removeClass('squareA');
stop=false;
	
}