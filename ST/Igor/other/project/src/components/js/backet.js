"use strict"
const basket = {
    items: [],
    container: null,

    init() {
        this.container = document.querySelector("#bascket");
        this._render();
        this._handleActions();
    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.dataset.remove == 'remove') {
                this.remove(evt.target.dataset.id);
            }
        });
        document.addEventListener('mouseover', evt => {
            if (evt.currentTarget.classList.contains('header-card')) {
                let bascketMenu = document.getElementById('ButtonHideBascket');
                bascketMenu.toggle('hide');
            }
        });
    },
    _render() {
        if (!(this.items.length == 0)) {
            let str = "";
            this.items.forEach(item => {
                str += `
                <li class="drop__li">
                  <a href="#" class="drop__a drop__a_left">
                  <img src="${item.img}" width="40%" alt="Tshirt">
                  </a>
                  <div class="drop__div_middle">
                      <h4 class="button__h4">${item.name}</h4>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star-half-o" aria-hidden="true"></i>
                      <p class="drop__p drop__p_red">${item.amount}&nbsp;x $${item.price}</p>
                  </div>
                  <a href="#" class="shoppingCart__cansel drop__a_right">
                    <i class="fa fa-times-circle" 
                    aria-hidden="true"  
                    data-remove="remove"
                    data-id="${item.id}"></i>
                  </a>
                </li>`
            })
            this.container.innerHTML = str;
        } else {
            this.container.innerHTML = '';
        }
    },
    add(item) {
        let find = this.items.find(el => el.id == item.id);

        if (!find) {
            this.items.push(item);
        } else {
            find.amount++;
        }
        this._render();
    },
    remove(itemId) {

        let find = this.items.find(el => el.id == itemId);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
}

basket.init();

export default basket