import './css/Shop.css';
import cup from './images/cup.png';
import pumpkin from './images/pumpkin.png';
import mask from './images/mask.png';
import doll from './images/doll.png';
import cloth from './images/cloth.png';
import villa from './images/villa.png';

function Shop() {
    return (
        <div className="shop">
            <h2>Horry Toy</h2>
            <div class="products">
                <div class="product">
                    <img class="product-pic"
                        src={cup}
                        alt="a cup with ghost pattern" />
                    <h3 class="product-title">Ghost Cup</h3>
                    <p class="product-text">Give you relif while having a drink</p>
                    <p class="pay-link"><strong>Pay</strong> at $19.99</p>
                </div>

                <div class="product">
                    <img class="product-pic"
                        src={pumpkin}
                        alt="a pumpkin light with a dark background" />
                    <h3 class="product-title">Pumpkin Light</h3>
                    <p class="product-text">Take the cool light to your home</p>
                    <p class="pay-link"><strong>Pay</strong> at $19.99</p>
                </div>

                <div class="product">
                    <img class="product-pic"
                        src={mask}
                        alt="a black horrible mask" />
                    <h3 class="product-title">Cold Face</h3>
                    <p class="product-text">A mask that makes you super cool</p>
                    <p class="pay-link"> <strong>Pay</strong> at $29.99</p>
                </div>

                <div class="product">
                    <img class="product-pic"
                        src={doll}
                        alt="a doll with creepy face" />
                    <h3 class="product-title">Cold Face</h3>
                    <p class="product-text">two doll sisters with a creepy face</p>
                    <p class="pay-link"> <strong>Pay</strong> at $59.99</p>
                </div>

                <div class="product">
                    <img class="product-pic"
                        src={cloth}
                        alt="a red ghost jacket" />
                    <h3 class="product-title">red ghost jacket</h3>
                    <p class="product-text">A jacket that no one will refuse</p>
                    <p class="pay-link"> <strong>Pay</strong> at $39.99</p>
                </div>

                <div class="product">
                    <img class="product-pic"
                        src={villa}
                        alt="a black horrible villa" />
                    <h3 class="product-title">black villa</h3>
                    <p class="product-text">A villa that far away from the society</p>
                    <p class="pay-link"> <strong>Pay</strong> at $1999.99</p>
                </div>



            </div>
        </div>
    );
}

export default Shop;




