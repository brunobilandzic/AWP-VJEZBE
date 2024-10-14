function even_odd(arr) {
    const even = []
    const odd = []

    arr.forEach(element => {
        if(element % 2 === 0) {
            even.push(element)
        } else {
            odd.push(element)
        }
    });

    console.log('Even:', even)
    console.log('Odd:', odd)

    return {even, odd}
}

console.log(even_odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))