window.onload=function(){
		var keyBoard=document.getElementById('keyBoard');
        var keys=keyBoard.getElementsByTagName('button');
        var screen=document.getElementById('screen'); 
        var onOff=true;
        var lastValue=0; 

		var keyValue=['clear','back','%','/',7,8,9,'*',4,5,6,'-',1,2,3,'+','0','.','Ans','='];
        for (var i = 0; i < keyValue.length; i++) {
        	keyBoard.innerHTML+='<button id="key'+i+'" class="keys">'+keyValue[i]+'</button>';
        }

		screen.value=0;
        for (var i = 0; i < keys.length; i++) {
        	if(i!=0&&i!=1&&i!=18&&i!=19){
        		keys[i].onclick=function(){
        			
        			if(onOff){
        				screen.value='';
        				onOff=false;	
        			}

	        	    screen.value+=this.innerHTML;
	            }
        	}
        }
       
        keys[0].onclick=function(){
        	onOff=true;
    	    screen.value=0;
        }
        keys[1].onclick=function(){
        	if(screen.value!=0){
        		screen.value=screen.value.substring(0,screen.value.length-1);
        	} 	    
    	    if(screen.value.length==0){
    	    	onOff=true;
    	    	screen.value=0;
    	    }
        }
        keys[18].onclick=function(){
        	if(lastValue!=0){
	        	screen.value=lastValue;
	        	onOff=false;
        	}  
        }
        keys[19].onclick=function(){
        	var tem=eval(screen.value);
    	    screen.value=tem;
    	    lastValue=tem;
    	    onOff=true;
        }
}