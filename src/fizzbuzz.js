function fizzBuzzQuiz(number) {
    let result = '';
    number % 3 === 0 && (result += 'Fizz');
    number % 5 === 0 && (result += 'Buzz');
    return result || number;
}

module.exports = {
    fizzBuzzQuiz
}