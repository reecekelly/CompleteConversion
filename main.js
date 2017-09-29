var holdinginput = { 
	
	weight : {
		amount: 0,
		type: "",
		measurement: 0
	},
	
	distance : {
		amount: 0,
		type: "",
		measurement: 0
	},	
	
	temp : {
		amount: 0,
		type: "",
		measurement: 0
	}
	
};

var holdingoutput = {
	
	weight : {
		amount: 0,
		type: "",
		measurement: 0
	},
	
	distance : {
		amount: 0,
		type: "",
		measurement: 0
	},	
	
	temp : {
		amount: 0,
		type: "",
		measurement: 0
	}
	
};

if(holdinginput.weight.measurement === 0) {
	holdinginput.weight.type = document.getElementById("default-weight-one").innerHTML;
	holdinginput.weight.measurement = document.getElementById("default-weight-one").getAttribute("data-weight");
	document.getElementById("type-of-selection-input-weight").innerHTML = holdinginput.weight.type;
}

if(holdingoutput.weight.measurement === 0) {
	holdingoutput.weight.type = document.getElementById("default-weight-two").innerHTML;
	holdingoutput.weight.measurement = document.getElementById("default-weight-two").getAttribute("data-weight");
	document.getElementById("type-of-selection-output-weight").innerHTML = holdingoutput.weight.type;
}

(function (angular) {
	
var fieldselection;
var app = angular.module('app', []);

app.controller('WeightConvertor', function ($scope, $element) {
	
	$scope.setUnit = function(e) {
		fieldselection = e;
	};
	
	$scope.calculateMeasurement = {
		input: {
			amount: holdinginput.weight.amount,
			type: holdinginput.weight.type,
			measurement: holdinginput.weight.measurement
		},
		
		output: {
			amount: holdingoutput.weight.amount,
			type: holdingoutput.weight.type,
			measurement: holdingoutput.weight.measurement
		},
		
		calculateMeasurementChange: function(e) {
			this.input.amount = e;
			this.output.amount = Math.round(Math.sqrt(Math.pow((this.input.amount / this.input.measurement) * (this.output.measurement), 2)) * 100000) / 100000;
			
			holdinginput.weight = this.input;
			holdingoutput.weight = this.output;
		},
		
		setMeasurementType: function(e) {
			if(!fieldselection) {
				holdinginput.weight.measurement = e.target.dataset.weight;
				holdinginput.weight.type = e.currentTarget.innerHTML;
				
				document.getElementById("type-of-selection-input-weight").innerHTML = holdinginput.weight.type;
				document.getElementById("outputfield-weight").value = clickOutput(holdinginput.weight.amount, fieldselection);
				
			} else {				
				holdingoutput.weight.measurement = e.target.dataset.weight;
				holdingoutput.weight.type = e.currentTarget.innerHTML;
				
				document.getElementById("type-of-selection-output-weight").innerHTML = holdingoutput.weight.type;
				document.getElementById("outputfield-weight").value = clickOutput(holdingoutput.weight.amount, fieldselection);
			}
		}
	};
}); 		
		
}(angular));


function setMeasurementType(e, unittype) {
	if(!fieldselection) {
		holdinginput.weight.measurement = e.target.dataset.weight;
		holdinginput.weight.type = e.currentTarget.innerHTML;
		
		document.getElementById("type-of-selection-input-" + unittype).innerHTML = holdinginput.weight.type;
		document.getElementById("outputfield-" + unittype).value = clickOutput(holdinginput.weight.amount, fieldselection);
		
	} else {				
		holdingoutput.weight.measurement = e.target.dataset.weight;
		holdingoutput.weight.type = e.currentTarget.innerHTML;
		
		document.getElementById("type-of-selection-output-" + unittype).innerHTML = holdingoutput.weight.type;
		document.getElementById("outputfield-" + unittype).value = clickOutput(holdingoutput.weight.amount, fieldselection);
	}
}

function clickOutput(e, type) {
	if(!type) {
		holdingoutput.weight.amount = Math.round(Math.sqrt(Math.pow((holdinginput.weight.amount / holdinginput.weight.measurement) * (holdingoutput.weight.measurement), 2)) * 100000) / 100000;
		return holdingoutput.weight.amount;
		
	} else {
		holdingoutput.weight.amount = Math.round(Math.sqrt(Math.pow((holdinginput.weight.amount / holdinginput.weight.measurement) * (holdingoutput.weight.measurement), 2)) * 100000) / 100000;
		return holdingoutput.weight.amount;
	}
}