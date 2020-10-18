//numbers
var numbers = [1,2,3,4,5];

//filter numbers with normal function
var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

//animals
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var s_words = words.filter(function(sword){
    return sword[0] == 's'
});

console.log(s_words)
