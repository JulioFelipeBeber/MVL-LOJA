// Criação da Barra


   var html= '<div class="product-bar"> <div class="container"> <div class="row"> <div class="col-md-6 d-none d-md-block"> <div class="product-info d-flex"> <div class="product-bar-image"> <img id="image" class="js-product-slide-img product-slider-image img-absolute img-absolute-centered lazyautosizes lazyloaded"> </div> <div class="d-flex"> <strong class="text-title">Sérum Aloe Vera Dropz</strong> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class="col-6"> <div class"item-bar-container mb-1 text-right d-block"> <span class="js-compare-bar-price-display span-price"> de: R$0,00 </span> <span class="js-max-bar-container js-max-installments item-bar d-block"> 6x de R$10,83 sem juros </span> <span class="js-bar-display item-bar-price d-block"> por: R$65,00 à vista </span> </div> </div> <div class="col-6"> <form class="js-product-bar-form" method="post" action="/comprar/"> <input type="hidden" name="add_to_cart" value="99659714"> <input type="submit" class="js-bar-cart  js-prod-submit-form btn btn-primary px-5 mb-2 cart submit-product" value="Comprar" data-component="product-list-item.add-to-cart" data-component-value="99659714"> <div class="js-addtocartbar js-addtocart-placeholder btn btn-primary btn-block btn-transition btn-small w-100 mb-2 disabled" style="display: none;"> <div class="d-inline-block"> <span class="js-bar-addtocart-text">Comprar</span> <span class="js-bar-addtocart-success transition-container btn-transition-success-small"> <svg class="icon-inline svg-icon-invert btn-transition-success-icon" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>        </span> <div class="js-addtocart-bar-adding transition-container transition-soft btn-transition-progress"> <div class="spinner-ellipsis invert"> <div class="point"></div> <div class="point"></div> <div class="point"></div> <div class="point"></div> </div> </div> </div> </div> </form> </div> </div> </div> </div> </div> </div> </div>'
   var css = '<style> .product-bar{ position: fixed; bottom: 0; left: 0; width: 100%; background-color: #000; color: #fff; padding: 10px 0; z-index: 999; transition: .3s; } .container { width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; } .product-bar .product-bar-info { max-width: 100%; height: auto; } .product-bar-image{ width: 100%; } img.product-img { max-width: 75px; height: auto; background: #fff; border-radius: 999px; margin-right: 15px; } .price-compare { text-decoration: line-through; } .js-max-bar-container { font-size: 12px; } .submit-product { padding: 10px; border: 1px solid #fff; background-color: #fff; color: #000; font-weight: bold; } .submit-product:hover{ background: none; } .text-right { text-align: right!important; } .span-price{ text-decoration: line-through; } </style>'
   var el = document.createElement( 'div');

   el.innerHTML = html + css;
   
   document.getElementsByClassName('footer-legal')[0].append(el);


//    ALterar o contéudo da barra


var image= $('.js-product-slide-img');
var price = $('.js-installment-price');
var text= $('.js-product-name');
var img= $('.swiper-slide-active .js-product-slide-img');




var src= '//d3ugyf2ht6aenh.cloudfront.net/stores/001/007/019/products/7m-boots-26-04-21-28-a1-390fddfe3b7790fc8316195383857941-480-0.webp 480w, //d3ugyf2ht6aenh.cloudfront.net/stores/001/007/019/products/7m-boots-26-04-21-28-a1-390fddfe3b7790fc8316195383857941-640-0.webp 640w, //d3ugyf2ht6aenh.cloudfront.net/stores/001/007/019/products/7m-boots-26-04-21-28-a1-390fddfe3b7790fc8316195383857941-1024-1024.webp 1024w">';



//Carrinho de compras//

   
   $('.js-bar-cart').on('click' , function(){
    $('.js-addtocart').click();
   
});




//Alterar imagem do produto//





//Alterar o Texto do Site//



function alteracao (){

    var img= $('.swiper-slide-active .js-product-slide-img');


    var text= $('.js-product-name').text();
    $('.text-title').html(text);

}

alteracao();




























