//your JS code here. If required.
let p=document.createElement("p");
p.setAttribute('id','timer')
document.body.append(p);
setInterval(function(){
	let date=new Date();
	let an=date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear()+","+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	if(date.getHours()>=12&&date.getHours()<=23)
	{
		an+="PM";
	}
	else{
		an+="AM";
	}
	p.innerHTML=an;
},1000);