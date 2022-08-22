
const catalog = document.querySelector('.catalog')
const elemCatalog = document.querySelector('.elem-catalog');
const ROOT_SPINNER = document.querySelector('.spinner');


let buttonText = 'Перейти к товару'

elemCatalog.addEventListener('click', getProduct)

async function getProduct() {
  
    let htmlCatalog = '';
    let { data } = await axios.get('/products')
    data.forEach((item,index) => {


        htmlCatalog += `
       
        <li class="products-element >
        
            <span class="products-element__name">${item.name}</span>
            <img class="products-element__img" src="${item.img}" />
            <span class="products-element__price">
                ⚡️ ${item.price} USD
            </span>
            <button class="products-element__btn" onclick="">
            <a id="${index}" href="/product/${index}"><span>${buttonText} </span></a>
        </button>

        </li>
        
       `;


        const html = `
       <ul class="products-container">
        ${htmlCatalog}
       </ul>
       `;

        catalog.innerHTML = html;
    })
    
    
    catalog.addEventListener('click', (event) => {
        let productId = +event.target.id;
        console.log(productId);
        async function sendId(id) {
            await axios.get(`/product/${id}`)
        }
        sendId(productId);
    })
}



class Spinner {
   
   handleClear() {
       ROOT_SPINNER.innerHTML = '';
   }
 
   render() {
       const html = `
           <img class="spinner__img" src="img/spinner.svg" />
   `
 
       ROOT_SPINNER.innerHTML = html;
   }
}
 
const spinnerPage = new Spinner();
 
spinnerPage.render()























