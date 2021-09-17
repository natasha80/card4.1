/* eslint-disable linebreak-style */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-plusplus */
/* eslint-disable no-cond-assign */
/* eslint-disable no-bitwise */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import dataCreditSystem from './../DataCreditSystem/DataCreditSystem';

export default class WidgetController {
  constructor(widget = null) {
    this.widget = widget;
    this.dataCreditSystem = dataCreditSystem;

    this.checkBindingDOM();
  }

  addListeners() {
    document.addEventListener('click', (event) => {
      if (event.target.closest('.button-validate')) {
        event.preventDefault();
        this.widget.removeError();
        this.checkInput();
        this.widget.input.blur();
        this.widget.form.reset();
      }
    });

    this.widget.input.addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        this.widget.button.click();
      }
    });
  }

  allItemDisactive() {
    for (const i of this.cartCollection) {
      i.classList.add('disactive');
    }
  }

  allItemActive() {
    for (const i of this.cartCollection) {
      i.classList.remove('disactive');
    }
  }

  activeCart(value) {
    const currentCard = document.querySelector(`.${value}`);
    currentCard.classList.remove('disactive');
  }

  checkInput() {
    const value = this.checkValidity(this.widget.input.value);
    if (!value) {
      this.widget.addError();
      this.allItemActive();
      return;
    }
    const result = this.belongToCreditSystem(this.widget.input.value);
    if (result !== null) {
      this.allItemDisactive();
      this.activeCart(result);
    } else {
      this.allItemActive();
    }
  }

  checkValidity(value) {
    let ch = 0;
    const num = String(value).replace(/\D/g, '');
    const isOdd = num.length % 2 !== 0;
    if (num === '') return false;
    for (let i = 0; i < num.length; i++) {
      let n = parseInt(num[i], 10);

      ch += (isOdd | 0) === (i % 2) && (n *= 2) > 9 ? (n - 9) : n;
    }
    return (ch % 10) === 0;
  }

  belongToCreditSystem(data) {
    const value = String(data);
    for (const i of this.dataCreditSystem) {
      const finding = i.startWith.find((item) => value.startsWith(String(item)));
      if (finding) {
        return i.name;
      }
    }
    return null;
  }

  checkBindingDOM() {
    if (this.widget !== null) {
      this.cartCollection = document.querySelectorAll('.card-item');
      this.addListeners();
    }
  }
}