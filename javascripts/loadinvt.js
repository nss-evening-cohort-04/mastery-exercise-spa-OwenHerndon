var CarLot = (function () {
  
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
  			productContainer.innerHTML += `<div class="container" class="col-xs-6 col-md-4"><img src="${currentTank.jpg}"><br>${currentTank.make}<br>${currentTank.model}<br>${currentTank.year}<br>${currentTank.price}<br>${currentTank.description}</div>`
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

  return {
    // loadInventory: function (callback) {
    //   var inventoryLoader = new XMLHttpRequest();

    //   inventoryLoader.addEventListener("load", function () {

    //   });
    // }
  };

})();