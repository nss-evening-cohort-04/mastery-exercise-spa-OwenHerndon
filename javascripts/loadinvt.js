var TankLot = (function (LoadTankLot) {


  	function executeThisCodeWhenChunksArrive () {
	  
	}

	function executeThisCodeIfXHRFails () {
	  
	}
	
	var tanks;

	function executeThisCodeAfterFileLoaded () {
		

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

  	LoadTankLot.RunXHR = function(){
  		var output = document.getElementById('storefront');

  		var myRequest = new XMLHttpRequest();

		myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
		myRequest.addEventListener("error", executeThisCodeIfXHRFails);
		myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
		myRequest.open("GET", "inventory.json");
		myRequest.send();
	};

  return LoadTankLot;

})(TankLot || {});