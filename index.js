let a = '';
let b = '';       //переменные
let sign = '';
let finish = false;

const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; //переменные с массивом данных
const action = ['-', '+', 'X', '÷', '%', '+/-']

const out = document.querySelector('p') //"Метод" строка для вывода на экран

function delAll () {  //функция для очистки данных на экране
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.del_all').onclick = delAll;

document.querySelector('.pl_min').onclick = () => { //изменение знака
  a = a * -1;
};

document.querySelector('.btn').onclick = (event) => {

  if (!event.target.classList.contains('kn')) return;
  if (event.target.classList.contains('.del_all')) return;

  out.textContent = '';
  const key = event.target.textContent;

  if (num.includes(key)) {
    if (b ==='' && sign === '') {   //тут будет наполнятся переменная "а"
      a+=key;
      out.textContent = a;
    }
    else if (a!=='' && b!=='' && finish) { 
      b = key;
      finish = false;
      out.textContent = b;
    }
    else {                   //будет наполнятся переменная "b"
      b += key;
      out.textContent = b;
    }
    return;
}

  if (action.includes(key)) {  //условие для нажатия знака
    sign=key;
    out.textContent = (sign);
    return;
  }

  if(key === '=') { 
    if (b==='') b = a;
    switch (sign) {  // условный оператор для выполнения математических вычеслений
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "÷":
        if (b === '0') {   //проверка деления на 0
          out.textContent = "Ошибка";
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = a / b;
        break;
      case "%":
        a = (a / 100) * b;
        break;
    }
    finish = true;
    out.textContent = a;
  }
}