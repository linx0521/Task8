let minValue;
let maxValue;
let answerNumber;
let orderNumber;
let gameRun;
let answreString;


minValue = parseInt(prompt('Минимальное знание числа для игры','0') || '0');
(minValue<0) ? minValue = 0 : minValue = minValue;
//if (minValue < 0) {minValue = 0};
if (minValue > 100) {minValue = 0};
maxValue = parseInt(prompt('Максимальное знание числа для игры','100') || '100');
if (maxValue < minValue) {maxValue = 100};
(maxValue>100) ? maxValue = 100 : maxValue = maxValue;
//if (maxValue > 100) {maxValue = 100};
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
answerNumber  = Math.floor((minValue + maxValue) / 2);
orderNumber = 1;
gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
const phraseRandom = Math.round( Math.random()*2);
switch (phraseRandom) {
    case 0:
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        break;
    case 1:
        answerField.innerText = `Наверное, это число ${answerNumber }?`;
        break;
    default:
        answerField.innerText = `Я догадался, это число ${answerNumber }?`;
}


document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;


    minValue = parseInt(prompt('Минимальное знание числа для игры','0') || '0');
    (minValue<0) ? minValue = 0 : minValue = minValue;
    //if (minValue < 0) {minValue = 0};
    if (minValue > 100) {minValue = 0};
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100') || '100');
    if (maxValue < minValue) {maxValue = 100};
    (maxValue>100) ? maxValue = 100 : maxValue = maxValue;
    //if (maxValue > 100) {maxValue = 100};
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');

    orderNumberField.innerText = orderNumber;
    const phraseRandom = Math.round( Math.random()*2);
    switch (phraseRandom) {
        case 0:
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
            break;
        case 1:
            answerField.innerText = `Наверное, это число ${answerNumber }?`;
            break;
        default:
            answerField.innerText = `Я догадался, это число ${answerNumber }?`;
}
    //alert('Чтобы сыграть еще раз, нажмите клавишу F5 на клавиатуре');
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = `Не может быть! Вы загадали число ${answerNumber }?`;
                    break;
                case 1:
                    answerField.innerText = `Что, если это число ${answerNumber }?`;
                    break;
                default:
                    answerField.innerText = `Догадываюсь! Это число ${answerNumber }?`;
            }

        //    answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = `По-моему, число ${answerNumber }?`;
                    break;
                case 1:
                    answerField.innerText = `Наверное, это число ${answerNumber }?`;
                    break;
                default:
                    answerField.innerText = `Я догадался, это число ${answerNumber }?`;
            }

        //    answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
            switch (phraseRandom) {
                case 0:
                    answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
                    break;
                case 1:
                    answerField.innerText = `Я так и знал!\n\u{1F609}`;
                    break;
                default:
                    answerField.innerText = `Приятно выигрывать\n\u{1F608}`;
            }

        //answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

