
// CLOSER = CLOSER HOLO AMI JODI KONO FUNCTION THEKE AREKTA FUNCTION KE CALL BA RETURN KORI TAHOLE AKTA CLOSE ENVIRONMENT 
// TAIRI KORE FELEBE AND JE FUNCTIONKE RETURN KORBO SE TAR BAIRER SCOPE KE ACCESS KORTE PARE, AND JOKON SETA USE KORBO
// VARIABLE HISEBE, TOKON SE TAR NJESSO VALUE ASSIGN KORBE,, JENO TARA AKTA CLOSE ENVIORMENT TAIRI KORE FELTE PARE



function stopClock() {
    let count = 0
    return function () {
        count++
        return count
    }

}

const clock1 = stopClock()

console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())

const clock2 = stopClock()

console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock1())