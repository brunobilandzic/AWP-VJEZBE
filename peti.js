function counter() {
    var count_par = []

    function make_count_par(par) {
        c = count_par.length

        count_par.push({
            par,
            count: c
        })

        return count_par
    }

    return make_count_par
}


const mk_cp = counter()

console.log(mk_cp('a'))
console.log(mk_cp('b'))
console.log(mk_cp('c'))
console.log(mk_cp('d'))