var isActive = false
var links = [
	{
		name: "Twitter",
		link: "https://twitter.com/joylolxyz"
	},
	{
		name: "GitHub",
		link: "https://github.com/joylool"
	},
	{
		name: "Roblox",
		link: "https://www.roblox.com/users/484042508/profile"
	},
	{
		name: "My Group",
		link: "https://www.roblox.com/groups/10605039/Central-Vet"
	}
]

function fadeIn() {
	if (!window.AnimationEvent) { return; }
	var fader = document.getElementById("fader");
	fader.classList.add("fade-out")
}

document.addEventListener("DOMContentLoaded", function(event) {
	for (let key in links){
		var list = document.createElement("LI");
		var link = document.createElement("A");
		link.id = links[key].name
		link.innerText = links[key].name;
		link.onclick = function(){
			if (isActive === false) {
				isActive = true
				document.getElementById(links[key].name).innerText = "redirecting to " + links[key].link;
				setTimeout(function() {
					window.open(links[key].link, "_self", false)
				}, 1500);
			}
		};
		
		list.appendChild(link);
		document.getElementById("linkList").appendChild(list);
	}
	
	if (!window.AnimationEvent) { return; }
	var anchors = document.getElementsByTagName("a");
	for (var idx=0; idx<anchors.length; idx+=1) {
		if (anchors[idx].hostname !== window.location.hostname || anchors[idx].pathname === window.location.pathname) {
			continue;
		}
		anchors[idx].addEventListener("click", function(event) {
			var fader = document.getElementById("fader"),
			anchor = event.currentTarget;
			
			var listener = function() {
				window.location = anchor.href;
				fader.removeEventListener("animationend", listener)
			};
			
			fader.addEventListener("animationend", listener);
			event.preventDefault();
			fader.classList.add("fade-in");
		});
	}
});

window.addEventListener("pageshow", function(event) {
	if (!event.presisted) {
		return ;
	}
	
	var fader = document.getElementById("fader");
	fader.classList.remove("fade-in")
})
