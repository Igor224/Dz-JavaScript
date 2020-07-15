"use strict";

function createItem(id, name, price, img) {
            return { id, name, price, img }
        };

        function initCatalog() {
            let ids = [1, 2, 3, 4, 5, 6, 7, 8];
            let names = ['MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 
            'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT'];
            let prices = [52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00];
            let imgs = [
                'img/blackRoundTshirt.png', 
                'img/redDress.png', 
                'img/hairPignail.png', 
                'img/flowersDress.png', 
                'img/zebraDress.png', 
                'img/manwithHat.png', 
                'img/waitTrousers.png', 
                'img/manInShorts.png'
            ]

            return names.map((name, index) => createItem(ids[index], name, prices[index], imgs[index]));
        }

        const basket = {
            items: [],
            add(item) {
            },
            remove(item) {
            }
        };

        const catalog = {
            items: [],
            container: null,

            init() {
                this.container = document.querySelector('#catalogMango');
                this.items = initCatalog();
                this._render();
            },
            _render() {
                let str = '';

                this.items.forEach(item => {
                    str += `
                        <article class="mangoItems">
				            <img src="${item.img}" class="mangoItems__img" alt="product">
				            <div class="mangoItems__content"><a href="single_page.html" class="mangoItems__name">${item.name}</a>
                			<p class="mango__p">&#36;${item.price}</p>
				            <a href="#" class="mangoItems__add">Add to Cart</a>
				            </div>
				        </article>
                    `
                });
                this.container.innerHTML = str;
            }
        };

        catalog.init();