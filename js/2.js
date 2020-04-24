var body = document.querySelector("body");
var sticky = document.createElement("span");
var close = document.createElement("span");
sticky.className = "justify";



 window.onscroll = function(){scroll_menu()}			
var nav_header = document.getElementById("navbar_header");
body.appendChild(sticky);




function scroll_menu()
	{
		if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
		{
			  nav_header.classList.add("new_menu");
			  sticky.style.display = "block";			
		}
		else
		{
			 nav_header.classList.remove("new_menu");
			 nav_header.classList.remove("active1");
			 sticky.style.display = "none";			
		}
}

//Khi Clik Vao Sticky thi hien menu

	sticky.addEventListener("click",()=>{
		nav_header.classList.toggle("active1");
	});


// Hieu Ung Khi mousemove 
document.addEventListener("mousemove",function(e){
	var span = document.createElement("span");
	span.className = "heart";
	var x = e.offsetX;
	var y = e.offsetY;
	var size = Math.random() * 100;
	span.style.left = (x - 50) + "px";
	span.style.top =  (y-size) + "px";
	span.style.width = size/2 + "px";
	span.style.height = size/2 + "px";
	// console.log(x,y)
	body.appendChild(span);
	setTimeout(() => {
		span.remove();
	}, 500);

});

// Hieu Ung Khi Load Wed

var loadweb = document.getElementsByClassName("loadweb");
  window.addEventListener("scroll" , ()=>{
      for(var i = 0 ; i < loadweb.length;i++){
        var heightload = "duoi";
        var inload = loadweb[i].offsetTop - 400;
        if (window.pageYOffset > inload) {
          if (heightload == "duoi") {
          heightload = "tren";
          loadweb[i].classList.add('goload');
		  }  
	   }
	   else
	   {
		loadweb[i].classList.remove('goload');
	   }
	  }
  })
// 

var header = document.querySelector(".header");
window.addEventListener("scroll",()=>{
	var value = window.scrollY;
	var val = screen.height  - 2*value;
	header.style.clipPath = "circle( " + val +"px at center)";

});


const helpMes = document.getElementById("helpMes");
const showText = (event)=>{
	var name = event.target.name;
	var value = event.target.value;
	console.log(helpMes);
	
	if(value.length < 5)
	{
		helpMes.innerHTML = "ERror";
		// helpMes.innerHTML = "Error " ; 
		 helpMes.style.color = "red";
	}
	else
	{

		 helpMes.innerHTML = "Ok !!!";
		helpMes.style.color = "lime";
	}
	if(value === "")
	{
		helpMes.innerHTML = "";
	}
}

// Tang CHieu Dai Khi Scroll

const progress = document.getElementById("progress");

let tong = window.body.scrollHeight - window.innerHeight;
window.addEventListener("scroll",()=>{
	let progressHeight = (window.pageYOffset / tong ) * 100;
	// console.log(progressHeight);
	progress.style.height = progressHeight + "%"; 
});


// Thiet Lap Khi Chon Gia Hoac Danh Sach San Pham Se Hien Thi Tag

var tag = document.getElementById("tag");
var group = document.getElementById("group");
var price = document.getElementById("price");
var alert = document.createElement("span");
tag.appendChild(alert);
tag.style.display = "none";
group.addEventListener("change" , ()=>{
	tag.style.display = "block";
	render(alert,group.value);
});
price.addEventListener("change" , ()=>{
	tag.style.display = "block";
	render(alert,price.value);
});
const render = (element,str)=>{
	element.innerHTML = str;
}


const group_icon = document.querySelector(".group-icon");

const toggle_icon = document.querySelector(".toggle-icon");

toggle_icon.addEventListener("click",()=>{
	group_icon.classList.toggle("toggle");
})