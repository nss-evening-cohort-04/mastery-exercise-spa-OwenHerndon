var TankLot = (function () {
  
  //var inventory = [];

  	console.log("test");

  	function executeThisCodeWhenChunksArrive () {
	  
	}

	function executeThisCodeIfXHRFails () {
	  console.log("An error occurred while transferring");
	}
	
	var tanks;

	function executeThisCodeAfterFileLoaded () {
		console.log("executeThisCodeAfterFileLoaded it loaded");

		tankData = JSON.parse(this.responseText).tanks;

		var productContainer = document.getElementById("storefront");

  		for (var i = 0; i < tankData.length; i++) {
  			currentTank = tankData[i];
  			// productContainer.innerHTML += `<div class="container">`
  			// productContainer.innerHTML += `<div class="col-xs-6 col-md-4">`
  			// productContainer.innerHTML += `<img src="${currentTank.jpg}"><br>`
  			// productContainer.innerHTML += `${currentTank.make}<br>`
  			// productContainer.innerHTML += `${currentTank.model}<br>`
  			// productContainer.innerHTML += `${currentTank.year}<br>`
  			// productContainer.innerHTML += `${currentTank.price}<br>`
  			// productContainer.innerHTML += `${currentTank.description}`
  			// productContainer.innerHTML += `</div>`
  			// productContainer.innerHTML += `</div>`
  			productContainer.innerHTML += 
  				`<div id="container" class="col-xs-6 col-md-4 tank_container">
  				<img src="${currentTank.jpg}">
  				<p>${currentTank.model}</p>
  				<p>${currentTank.make}</p>
  				<p>${currentTank.year}</p>
  				<p>$${currentTank.price}</p>
  				<div class="description">${currentTank.description}</div></div>`

  		}	
  		//domDisplay();
  	}

  	var output = document.getElementById('storefront');
  	
  // 	function domDisplay(){
  // 		output.innerHTML = "";

		// var productContainer = document.getElementById("storefront");
  		
  // 		for (var i = 0; i < tanks.length; i++) {
  // 			productContainer.innerHTML += `<div class="container">`
  // 			productContainer.innerHTML += `<div class="col-xs-6 col-md-4">`
  // 			productContainer.innerHTML += `<img src="${tanks[i].jpg}">`
  // 			productContainer.innerHTML += `${tanks[i].make}`
  // 			productContainer.innerHTML += `${tanks[i].model}`
  // 			productContainer.innerHTML += `${tanks[i].year}`
  // 			productContainer.innerHTML += `${tanks[i].price}`
  // 			productContainer.innerHTML += `${tanks[i].description}`
  // 			productContainer.innerHTML += `</div>`
  // 		}	
  // 	}

  	var myRequest = new XMLHttpRequest();

	myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
	myRequest.addEventListener("error", executeThisCodeIfXHRFails);
	myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
	myRequest.open("GET", "inventory.json");
	myRequest.send();

	//var selectedContainer = document.getElementById("container");
	var selectedTankBio = null;
	var userInput = document.getElementById("userInput");
	var containerEl = document.getElementsByClassName("tank_container");

	for (var i = 0; i < containerEl.length; i++) {
  		containerEl[i].addEventListener("click", function(event) {
    		for (var x = 0; x < containerEl.length; x++) {
      			containerEl[x].classList.remove('borderLarge');
    		}
    		event.currentTarget.classList.add('borderLarge');
    		selectedTankBio = event.currentTarget;
    		userInput.focus();
    		userInput.value = selectedTank.querySelector('.description').innerHTML;
  		});
	}

	document.getElementById('useInput').addEventListener('keyup', function(e) {
  		if (selectedTankBio) {
    		selectedTankBio.querySelector('.description').innerHTML = this.value;
  		}
	});

	document.getElementById('userInput').addEventListener('keypress', function(e) {
  		if (e.keyCode == 13) {
    		selectedTankBio.classList.remove('.borderLarge');
    		selectedTankBio = null;
    		this.value = "";
    		return false;
  		}
  	});

  return {
    // loadInventory: function (callback) {
    //   var inventoryLoader = new XMLHttpRequest();

    //   inventoryLoader.addEventListener("load", function () {

    //   });
    // }
  };

})();