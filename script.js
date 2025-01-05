const html = document.querySelector('html');
const button = document.querySelector('.bx-sun');

button.addEventListener('click', () => {
  html.classList.toggle('light');
});

// function criaCalculadora() {
//   return {
//     display: document.querySelector('.display'),
//     btnClear: document.querySelector('.btn-clear'),

//     inicia() {
//       this.cliqueBotoes();
//       this.pressionaEnter();
//     },

//     pressionaEnter() {
//       this.display.addEventListener('keyup', (e) => {
//         if (e.keyCode === 13) {
//           this.realizaConta();
//         }
//       });
//     },

//     realizaConta() {
//       let conta = this.display.value;

//       try {
//         conta = eval(conta);
//         if (!conta) {
//           alert('Erro');
//           return;
//         }
//         this.display.value = String(conta);
//       } catch (err) {
//         alert('Erro');
//         return;
//       }
//     },

//     clearDisplay() {
//       this.display.value = '';
//     },

//     apagaUm() {
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     cliqueBotoes() {
//       document.addEventListener('click', (e) => {
//         const el = e.target; //gurada o valor do botão
//         if (el.classList.contains('btn-num')) {
//           this.btnParaDisplay(el.innerText); //numero do botão
//         }
//         if (el.classList.contains('btn-clear')) {
//           this.clearDisplay();
//         }
//         if (el.classList.contains('btn-del')) {
//           this.apagaUm();
//         }
//         if (el.classList.contains('btn-eq')) {
//           this.realizaConta();
//         }
//       });
//     },

//     btnParaDisplay(valor) {
//       this.display.value += valor;
//     },
//   };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();

function Calculadora() {
  this.display = document.querySelector('.display');
  this.tnClear = document.querySelector('.btn-clear');

  this.start = () => {
    this.clickBtn();
    this.btnEnter();
  };

  this.btnEnter = () => {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.result();
      }
    });
  };

  this.clickBtn = () => {
    document.addEventListener('click', (e) => {
      const el = e.target;
      if (el.classList.contains('btn-num')) this.addNun(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.eq();
    });
  };

  this.result = () => {
    try {
      conta = eval(this.display.value);
      if (!conta) {
        alert('Erro');
        return;
      }
      this.display.value = String(conta);
    } catch (err) {
      alert('Erro');
      return;
    }
  };

  this.addNun = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  this.clear = () => (this.display.value = '');
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
  this.eq = () => this.result();
}

const calculadora = new Calculadora();
calculadora.start();
