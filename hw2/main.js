
// Creat Attendees at Section3
Create_Attendees(5,3);

// Switch to main screen
let  cancelCnter = 0; // count delete time -> equal == 5 -> enlarge my window
const funBar = document.getElementById("funBar");
funBar.addEventListener("click", function(){
	switchMode();
	createfunBar();
});

//console.log(document.getElementsByClassName("window")[0].getElementsByTagName("img")[0].style.width);
//var x = document.getElementsByTagName("winImg")[0].createElement("div");

// siwtchMode -> All attendees show at main screen.
function switchMode(){
	var AttendeesBlock = document.getElementById("AttendeesBlock");
	var section1 = document.getElementById("section1");
	AttendeesBlock.remove();
	section1.innerHTML = "";
	Create_Attendees(6,1); 
	section1.style.flexDirection = "row";
	section1.style.flexWrap = "wrap";
	section1.style.alignContent = "space-around";
	for (var i = 0; i <= 5; i++){
		document.getElementsByClassName("window")[i].style.width = "400px";
		document.getElementsByClassName("window")[i].style.height = "300px";
		document.getElementsByClassName("winImg")[i].style.width = "160px";
		document.getElementsByClassName("winImg")[i].style.height = "160px";
		document.getElementsByClassName("window")[i].getElementsByTagName("img")[0].style.width = "120px";
		document.getElementsByClassName("window")[i].getElementsByTagName("img")[0].style.height = "120px";
		document.getElementsByClassName("winName")[i].getElementsByTagName("p")[0].style.marginBottom = "40px";
	}
	cancelCnter = 0; // reset 
}
// switchMode() -> createfunBar()
// createfunBar() -> read each <winImg> tag's name -> 創建 <div class="funBar"> -> 寫入三個<span> ->  addEventListener -> 觸發主畫面模式


function createfunBar(){
	for(var i = 0; i < 6; i++){
		//create div and append
		var winFunBar = document.createElement("div");
		document.getElementsByClassName("winImg")[i].appendChild(winFunBar);
		//set div's id and class
		winFunBar.className = "funBar";
		winFunBar.style.width = "120px";
		winFunBar.id = "funBar" + (i + 1);
		winFunBar.number = i + 1;
		console.log(winFunBar.number);
		winFunBar.innerHTML = `
			<span class="material-symbols-outlined">
				push_pin
			</span>
			<span class="material-symbols-outlined">
				grid_view
			</span>
			<span class="material-symbols-outlined">
				close_fullscreen
			</span>
			`;
		winFunBar.addEventListener("click", function(){
			var wrap = document.getElementById("wrap");
			wrap.innerHTML = 
			`
			<!-- 1st part -->
			<div id="section1" class="section1">
				<!-- Top Bar -->
				<div class="mic">
					<span class="material-symbols-outlined">
						mic_off
					</span>
				</div>
				<!-- Portrait -->
				<div class="profile">        
					<!--<div>和毅</div>-->
					<img id="profile_img" src="bunny${this.number}.jpg" style="width: 160px; height: 160px; border-radius: 50%;">
					<!-- Function Bar -->
					<div id="funBar" class="funBar">
						<span class="material-symbols-outlined">
							push_pin
						</span>
						<span class="material-symbols-outlined">
							grid_view
						</span>
						<span class="material-symbols-outlined">
							close_fullscreen
						</span>
					</div>
				</div>
				<!-- Bottom Bar -->
				<div class="pin">
					<span class="material-symbols-outlined">
						push_pin
					</span>
					<p id="presenter">你</p>
				</div>
			</div>
			<!-- 3rd part -->
			<div id="AttendeesBlock" class="section3">
			</div>
			`;
			// Rejoin attendees
			Create_Attendees(6,3);
			document.getElementById("window" + this.number).remove();

			var funBar = document.getElementById("funBar");
			funBar.addEventListener("click", function(){
				switchMode();
				createfunBar();
			});
		});


	}
}

function Attendees_Template(index,section){

	if(section == 3){
		var AttendeesBlock = document.getElementById("AttendeesBlock");
	}

	else{
		var AttendeesBlock = document.getElementById("section1");
	}

	var bunnyNameArray = ["Bunny", "Cutty", "Gima", "Brian", "Titi", "Ed"];
	// Template
	var window = document.createElement("div");  
	//
	var winMic = document.createElement("div"); 
	//
	var cancelIcon = document.createElement("div");
	var cancelBtn = document.createElement("span");

	var icon = document.createElement("div");
	var Mic = document.createElement("span");  

	var winImg = document.createElement("div"); 
	var bunny = document.createElement("img"); 

	var winName = document.createElement("div");  
	var bunny_name = document.createElement("p");
	
	window.className = "window";
	window.id = "window" + (index + 1);
	winMic.className = "winMic";

	if(index != 5){
		cancelIcon.className = "icon";
		cancelBtn.className = "material-symbols-outlined";
		cancelBtn.innerText = "cancel";
	}

	icon.className = "icon";
	Mic.className = "material-symbols-outlined";
	Mic.innerText = "mic_off";

	winImg.className = "winImg";
	winName.className = "winName";
	bunny_name.innerText = bunnyNameArray[index];
	bunny.src = "bunny"+(index+1)+".jpg";
	
	// 刪除演講者
	cancelBtn.addEventListener("click", function(){ 
		var temp = document.getElementById("window" + (index + 1));
		temp.remove();
		cancelCnter++;
		console.log(cancelCnter);
		if(cancelCnter == 5){
			document.getElementById("window6").style.backgroundColor = "transparent";
			document.getElementById("window6").style.width = "90%";
			document.getElementById("window6").style.height = "90%";
		}
	});

	// 交換演講者
	bunny.addEventListener("click", function(){ 
		alert("Change");
		var profile_img = document.getElementById("profile_img");
		var presenter = document.getElementById("presenter");
		var temp_img = profile_img.src;
		var temp_name = presenter.innerText;
		
		profile_img.src = bunny.src;
		presenter.innerText = bunny_name.innerText;

		bunny.src = temp_img;
		bunny_name.innerText = temp_name;
	});
	
	
	// Append
	AttendeesBlock.appendChild(window);
	window.appendChild(winMic);
	winMic.appendChild(cancelIcon);
	cancelIcon.appendChild(cancelBtn);
	winMic.appendChild(icon);
	icon.appendChild(Mic);
	winImg.appendChild(bunny);
	winName.appendChild(bunny_name);
	window.appendChild(winImg);
	window.appendChild(winName);
	
}
// section == 3 -> Create at section3;
// section == 1 -> Create at section1; 
function Create_Attendees(index,section){
	for(var i=0;i < index; i++){
		Attendees_Template(i,section);
	}
}

// Timer
function UpdateDateTime(){
	var DateTime = document.getElementById("DateTime");
	var Time = new Date();
	DateTime.innerText = "" + Time.getHours() + ":" + Time.getMinutes()  + " | Web Programming"; //toLocaleTimeString()
}

var timeoutID = setInterval(UpdateDateTime, 1000);
