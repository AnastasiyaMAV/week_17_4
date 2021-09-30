const randomNumbers = () => {
    let arrRandNumb = new Array();

    for(let i=0; i<10; i++){
        arrRandNumb.push( ( ( (Math.random() < 0.5) ? -1 : 1) * (Math.floor(Math.random() * 11) ) ) );
    }   
    document.getElementById('randNumber').value = "Сгенирированные числа: " + arrRandNumb;

    let minNum = Math.min.apply(null, arrRandNumb);
    document.getElementById('minNumber').value = "Минимальное число: " + minNum;

    let maxNum = Math.max.apply(null, arrRandNumb);
    document.getElementById('maxNumder').value = "Максимальное числа: " + maxNum;

    let srArNumber1 = 0;
    for(let i=0; i<10; i++){
        srArNumber1 += arrRandNumb[i];
    }
    let srArNumber2 = srArNumber1 / 10;   
    document.getElementById('srArifmNumber').value = "Среднее арифметическое: " + srArNumber2;

    let sumNumber1 = 0;
    for(let i=0; i<10; i++){
        sumNumber1 += arrRandNumb[i];
    }  
    document.getElementById('sumNumber').value = "Сумма чисел: " + sumNumber1;

    let multNumber = 1;
    for(let i=0; i<10; i++){
        multNumber = multNumber * arrRandNumb[i];
        console.log(multNumber);
    }  
    document.getElementById('multiplNumber').value = "Произведение чисел: " + multNumber;
}
