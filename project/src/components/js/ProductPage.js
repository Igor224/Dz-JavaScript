 "use strict";
        function initNewApp(settings) { 
            const element = {
                ids: settings.ids,
                names: settings.names,
                prices: settings.prices,
                imgs: settings.imgs,
                container: settings.container,
                template: settings.template,
                init() {
                    this._render(); 
                },
                _render() {
                    let str = ''; 
                    this.names.forEach((el,index) => { 
                        str += this.template(this.imgs[index],this.names[index],this.prices[index]); 
                    });
                    document.querySelector(this.container).innerHTML += str; 
                },
            }
            element.init();

            return element;
        }


        let catalogProduct = { 
            ids: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            names: ['MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT',
             'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT',
              'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT'],
            prices: [52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00, 52.00],
            imgs: [
                '../src/assets/img/hairedmaninPark.png', 
                '../src/assets/img/hairPignail.png', 
                '../src/assets/img/hairPignail.png', 
                '../src/assets/img/manBerdinGreyTsh.png', 
                '../src/assets/img/manInShorts.png', 
                '../src/assets/img/manBeardRedTh.png', 
                '../src/assets/img/manwithHat.png', 
                '../src/assets/img/skinHead.png', 
                '../src/assets/img/manBerdinBlueTsh.png'
            ],
            container: '#catalogProduct',
            template(imgs,names,prices) {
                return `<article class="mangoItems">
                            <img src="${imgs}" class="mangoItems__img" alt="product">
                            <div class="mangoItems__content"><a href="single_page.html" class="mangoItems__name">${names}</a>
                            <p class="mango__p">&#36;${prices}</p>
                            <a href="#" class="mangoItems__add">Add to Cart</a>
                            </div>
                        </article>
                       `
            }
        };
    
        let ProductPadgeGalaryGen = initNewApp(catalogProduct);
