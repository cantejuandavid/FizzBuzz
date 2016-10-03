(function(){

	document.addEventListener('DOMContentLoaded', function(){

		var nMax = 100;
		var doc = document.getElementById('container');
		var h  = ''

		for(var n = 1; n <= nMax; n++) {

			h  += '<span>'

			if(esDivisible(n, 3))
				h += 'Fizz'		

			if(esDivisible(n, 5))
				h += 'Buzz'
			
			if(!esDivisible(n, 3) && !esDivisible(n, 5))
				h += n
			
			h += '</span>'	
		}

		
		doc.innerHTML = h;

	}, false)

	function esDivisible (num, divisor) {
		if(num % divisor === 0)
			return true
		else
			return false
	}

})();