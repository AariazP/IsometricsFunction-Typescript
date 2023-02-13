
console.log(isometricStrings("add", "egg")); // truea



function isometricStrings(line1: string, line2: string): boolean {
    //creo una tabla hash para guardar las letras de la primera palabra

    let hash = {};

    //recorro la primera palabra y voy guardando las letras en la tabla hash

    for (let i = 0; i < line1.length; i++) {
        if (hash[line1[i]]) {
            hash[line1[i]] += 1;
        } else {
            hash[line1[i]] = 1;
        }
    }

    //recorro la segunda palabra y voy restando las letras de la tabla hash

    for (let i = 0; i < line2.length; i++) {
        if (hash[line2[i]]) {
            hash[line2[i]] -= 1;
        } else {
            hash[line2[i]] = 1;
        }
    }

    //recorro la tabla hash y si hay alguna letra que no se haya usado en la segunda palabra, devuelvo false

    for (let key in hash) {
        if (hash[key] !== 0) {
            return false;
        }
    }

    return true;



}