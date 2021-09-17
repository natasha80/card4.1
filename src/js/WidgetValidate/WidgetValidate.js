/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default class WidgetValidate {
  constructor() {
    this.drawWidget();
  }

  drawWidget() {
    this.widgetBlock = document.createElement('div');
    this.widgetBlock.classList.add('widget-card-validation');
    this.widgetBlock.innerHTML = `<ul class="card-list">
                                    <li class="card-item visa">
                                      <span class="card">Visa</span>
                                    </li>
                                    <li class="card-item master">
                                      <span class="card">Mastercard</span>
                                    </li>
                                    <li class="card-item amex">
                                      <span class="card">American Express</span>
                                    </li>
                                    <li class="card-item discover">
                                      <span class="card">Discover</span>
                                    </li>
                                    <li class="card-item jcb">
                                      <span class="card">JCB</span>
                                    </li>
                                    <li class="card-item diners_club">
                                      <span class="card">Diners Club</span>
                                    </li>
                                    <li class="card-item mir">
                                      <span class="card">MIR</span>
                                    </li>
                                  </ul>
                                  <form class="form">
                                    <div class="form-block error-validate">
                                      <input class="input-number-card" type="text" placeholder="Credit card number">
                                      <div class="error">
                                        <span class="error-text">номер введенной карты неверный</span>
                                      </div>  
                                    </div>
                                    <div class="form-block">
                                      <button class="button-validate">Check to Validate</button>
                                    </div>
                                  </form>`;
    this.form = this.widgetBlock.querySelector('.form');
    this.input = this.widgetBlock.querySelector('.input-number-card');
    this.button = this.widgetBlock.querySelector('.button-validate');
    this.error = this.widgetBlock.querySelector('.error');

    document.body.appendChild(this.widgetBlock);
  }

  addError() {
    this.error.classList.add('active');
  }

  removeError() {
    this.error.classList.remove('active');
  }
}