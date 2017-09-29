var holdingone = {
	
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

var holdingtwo = {
	
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

var one = {
	amount: 0,
	type: "",
	measurement: 0
};

var two = {
	amount: 0,
	type: "",
	measurement: 0
};

if(one.measurement === 0) {
	one.type = document.getElementById("default-weight-one").innerHTML;
	one.measurement = document.getElementById("default-weight-one").getAttribute("data-weight");
	document.getElementById("scaleone").innerHTML = one.type;
}

if(two.measurement === 0) {
	two.type = document.getElementById("default-weight-two").innerHTML;
	two.measurement = document.getElementById("default-weight-two").getAttribute("data-weight");
	document.getElementById("scaletwo").innerHTML = two.type;
}

(function (angular) {
	
var typeofweight;
var app = angular.module('app', []);

app.controller('WeightConvertor', function ($scope, $element) {
	
	$scope.setUnit = function(e) {
		typeofweight = e;
	};
	
	$scope.calculateWeight = {
		one: {
			amount: one.amount,
			type: one.type,
			measurement: one.measurement
		},
		
		two: {
			amount: two.amount,
			type: two.type,
			measurement: two.measurement
		},
		
		calculateWeightChange: function(e) {
			this.one.amount = e;
			this.two.amount = Math.round(Math.sqrt(Math.pow((this.one.amount / this.one.measurement) * (this.two.measurement), 2)) * 100000) / 100000;
			
			one = this.one;
			two = this.two;
		},
		
		setWeightScale: function(e) {
			if(!typeofweight) {
				one.measurement = e.target.dataset.weight;
				one.type = e.currentTarget.innerHTML;
				
				document.getElementById("scaleone").innerHTML = one.type;
				document.getElementById("outputfield").value = clickOutput(one.amount, typeofweight);
				
			} else {				
				two.measurement = e.target.dataset.weight;
				two.type = e.currentTarget.innerHTML;
				
				document.getElementById("scaletwo").innerHTML = two.type;
				document.getElementById("outputfield").value = clickOutput(two.amount, typeofweight);
			}
		}
	};
}); 	
	
app.controller('DistanceConvertor', function ($scope, $element) {
	
	$scope.setUnit = function(e) {
		typeofweight = e;
	};
	
	$scope.calculateWeight = {
		one: {
			amount: one.amount,
			type: one.type,
			measurement: one.measurement
		},
		
		two: {
			amount: two.amount,
			type: two.type,
			measurement: two.measurement
		},
		
		calculateWeightChange: function(e) {
			this.one.amount = e;
			this.two.amount = Math.round(Math.sqrt(Math.pow((this.one.amount / this.one.measurement) * (this.two.measurement), 2)) * 100000) / 100000;
			
			one = this.one;
			two = this.two;
		},
		
		setWeightScale: function(e) {
			if(!typeofweight) {
				one.measurement = e.target.dataset.weight;
				one.type = e.currentTarget.innerHTML;
				
				document.getElementById("scaleone").innerHTML = one.type;
				document.getElementById("outputfield").value = clickOutput(one.amount, typeofweight);
				
			} else {				
				two.measurement = e.target.dataset.weight;
				two.type = e.currentTarget.innerHTML;
				
				document.getElementById("scaletwo").innerHTML = two.type;
				document.getElementById("outputfield").value = clickOutput(two.amount, typeofweight);
			}
		}
	};
}); 	
		
}(angular));

function clickOutput(e, type) {
	if(!type) {
		two.amount = Math.round(Math.sqrt(Math.pow((one.amount / one.measurement) * (two.measurement), 2)) * 100000) / 100000;
		return two.amount;
		
	} else {
		two.amount = Math.round(Math.sqrt(Math.pow((one.amount / one.measurement) * (two.measurement), 2)) * 100000) / 100000;
		return two.amount;
	}
}