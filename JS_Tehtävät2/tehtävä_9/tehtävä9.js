
originalList= [1,2,3,4,5,6,7,8,9]
function even(array) {
	even_numbers = []
	array.forEach(function(num) {
  	if(!(num % 2)) {
    	even_numbers.push(num)
    }
  })
  return even_numbers;
}

tasa = even(originalList)
console.log(originalList)
console.log(tasa)