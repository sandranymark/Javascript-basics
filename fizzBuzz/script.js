//Fizzbuzz 


/*loopa igenim hundra nummer och om: 
    - Numret är dividerbart med 3, skriv ut "Fizz"
    - Numret är dividerbart med 5 , skriv ut "Buzz"
    - Numret är dividerbart med 3 och 5, skriv ut "FizzBuzz" */

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()