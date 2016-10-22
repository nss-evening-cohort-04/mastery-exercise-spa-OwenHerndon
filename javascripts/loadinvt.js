var TankLot = (function (LoadTankLot) {

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
  			productContainer.innerHTML += 
  				`<div id="container" class="col-xs-6 col-md-4 tank_container">
  				<img src="${currentTank.jpg}">
  				<p>${currentTank.model}</p>
  				<p>${currentTank.make}</p>
  				<p>${currentTank.year}</p>
  				<p>$${currentTank.price}</p>
  				<div class="description">${currentTank.description}</div></div>`

  		}
  		LoadTankLot.tankEvents();

  	}

  	var output = document.getElementById('storefront');

  	var myRequest = new XMLHttpRequest();

	myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
	myRequest.addEventListener("error", executeThisCodeIfXHRFails);
	myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
	myRequest.open("GET", "inventory.json");
	myRequest.send();

  return LoadTankLot;

})(TankLot || {});