var TankLot = (function (newTankLot) {
 	
 	newTankLot.tankEvents = function(){	
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
    			userInput.value = "";
    			userInput.focus();
    			userInput.value = selectedTank.querySelector('.description').innerHTML;
  			});
		}

		document.getElementById('userInput').addEventListener('keyup', function(e) {
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
	}
	
	return newTankLot;

})(TankLot || {});