//Программа №1
var aboutMan =  ['name', 'John', 'lastname', 'Black', 'age', '23']
var objectMan = {}


for (var t = 0; t < aboutMan.length; t+=2){
    var keys = aboutMan[t]
    objectMan[keys] = aboutMan[t + 1]
}
console.log(objectMan)


//Прлграмма №2
function sumNumbers (numbers){
    var sum = 0
    for (var i = 0; i < numbers.length; i++){
        sum += numbers[i] / numbers.length
    }
    return console.log(sum)
}
sumNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//Программа №3

function getDataType (el) {
    console.log(typeof el)
}
getDataType(34)
getDataType(false)
getDataType('string')
getDataType({})





// программа №4
var btnPlus = document.getElementById('btnPlus')
var btnMinus = document.getElementById('btnMinus')
var input = document.getElementById('input')

btnPlus.addEventListener('click', () => {
    input.value++
})

btnMinus.addEventListener('click', ()=> {
    input.value--
})