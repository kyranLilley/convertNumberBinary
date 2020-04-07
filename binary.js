function binaryCalc(binaryNumber){ 
    var binaryOutput = ''; 
    var decimalNumber = binaryNumber; 
    while ( decimalNumber > 0 ) 
    { binaryOutput = ( decimalNumber % 2 ) + binaryOutput; decimalNumber = Math.floor( decimalNumber / 2 ); } 
    return binaryOutput; }


    console.log(binaryCalc(10))


    // console.log(10 % 2 + '') //0
    // console.log(decimalNumber = Math.floor( 10 / 2 ) ) //5

    // console.log(5 % 2 + '') //1
    // console.log(decimalNumber = Math.floor( 5 / 2 ) ) //2

    // console.log(2 % 2 + '') //0
    // console.log(decimalNumber = Math.floor( 2 / 2 ) )//1

    // console.log(1 % 2 + '') //1
    // console.log(decimalNumber = Math.floor( 1 / 2 ) ); //0
