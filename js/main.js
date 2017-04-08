// we need and array to hold all of our zodiac info
// we need an input field to accept user input
// we need a way to call the function (button or Enter key)
// we need a way to cycle through the array when a user provides some input (for loop?)
// we need a way to compare the user's input to the info in the array to determine what content to show

//hey dummy, put EVERYTHING you want to show up to the user upon input of INPUT in an array. 'SAGIT', ../img... "yer stupid", and the like.


var zodSigns = [

{name: "aries",
aka: "this ram",
img: "img/ariesPic.png",
fortu: ""
},
{name: "taurus",
aka: "a bull",
img: "img/taurusPic.png",
fortu: ""
},
{name: "gemini",
aka: "some twins",
img: "img/geminiPic.png",
fortu: ""
},
{name: "cancer",
aka: "a crab",
img: "img/cancerPic.png",
fortu: ""
},
{name: "leo",
aka: "this lion",
img: "img/leoPic.png",
fortu: ""
},
{name: "virgo",
aka: "a maiden",
img: "img/virgoPic.png",
fortu: ""
},
{name: "libra",
aka: "some scales",
img: "img/libraPic.png",
fortu: ""
},
{name: "scorpio",
aka: "a scorpion",
img: "img/scorpioPic.png",
fortu: ""
},
{name: "sagittarius",
aka: "some sort of monster archer",
img: "img/sagittariusPic.png",
fortu: ""
},
{name: "capricorn",
aka: "a goat",
img: "img/capricornPic.png",
fortu: "you are free to live the life of a goat. enjoy it."
},
{name: "aquarius",
aka: "a water-bearer",
img: "img/aquariusPic.png",
fortu: "you are constantly pouring precious water out of your fancy vase. it's wasteful."
},
{name: "pisces",
aka: " some fish",
img: "img/piscesPic.png",
fortu: "you a fish. regard worms with suspicion."
}
]
	

// the button is called zodbut; onclick the button does funciton zopro
// zopro needs to deal with the input text box's user input. id of text input is zanswer
function zopro() {
	// if you add ".value" to the end of the variable, you don't need to include it later in the consol.logs, or getElementByIds
	//also, LEARN MORE ABOUT .NOTAION!!! it fixes the problem of how to tie a funciton to a specific element
	var zanswer = document.getElementById("zanswer").value.toLowerCase()
	console.log(zanswer)
	console.log("user value is: " + zanswer)
//bliss. bliss and heaven, it seems to be working...
//now to do a for loop. is zac gonna fuck it up? stay tuned...
	for(i = 0; i <zodSigns.length; i = i + 1) {
		console.log("current loop item is: " + zodSigns[i].name)

		if (zanswer === zodSigns[i].name) {
			console.log("if you are reading this")
			console.log(zanswer.value + " was typed by user")
			console.log("their image is thusly..." + zodSigns[i].img)
			console.log("sign is aka " + zodSigns[i].aka)
			console.log("Behold your fortune: " + zodSigns[i].fortu)


			document.getElementById("also").innerText = "your sign is " + zodSigns[i].aka
			document.getElementById("userSign").innerText = zanswer
			document.getElementById("logo").src = zodSigns[i].img
			
			return
		}
	}
}




