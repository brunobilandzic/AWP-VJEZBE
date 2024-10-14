function types () {
    const dif_typ_arr = [1, 'string', true, null, undefined, {}, [], function () { }]
    
    dif_typ_arr.forEach((el) => {
        console.log(typeof el)
    })

    console.log('-----------------')
}

types()