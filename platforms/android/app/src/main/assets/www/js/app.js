// Dom7
var $$ = Dom7;
// Framework7 App main instance
var customers = localStorage.getItem("customers");
var app = new Framework7({
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    data: function () {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
            productbs: JSON.parse(customers),
            // productbs: [{"id":1,"cid":1540562584936,"title":"John","fname":"Doe","phone":"12345646","description":"john.doe@email.com"},{"id":2,"cid":1540818411406,"title":"Melissa","fname":"De Leon","phone":"093482940","description":"2014-04-30"},{"id":3,"cid":1540825840882,"title":"Joanne","fname":"Amparo","phone":"123456789","description":"2014-04-08"},{"id":4,"cid":1540918462991,"title":"JKJk","fname":"weieoidfp","phone":"12459","description":"2014-04-30"}],
            // productbs: [customers],
            items: [{
                    "cant": 1,
                    "check": "notsync",
                    "cname": "1540562584936",
                    "email": "",
                    "id": 1,
                    "img": "img/products/14.jpg",
                    "name": "Cool Shirt",
                    "notes": "",
                    "oldprice": "",
                    "stock":4,
                    title: "1541246715150",
                    "desc":'',
                    "price": 99,
                    "select": "",
                    "sku": "A0000003",
                    "smname": "1111111111111",
                    "timestamp": "1541246715150",
                    "total": "598.00",
                },
                {
                    "cant": 2,
                    "check": "notsync",
                    "cname": "1540562584209",
                    "email": "",
                    "id": 3,
                    "img": "img/products/14.jpg",
                    "name": "Cool Shirt",
                    "notes": "",
                    "oldprice": "",
                    "stock": 4,
                    "title": "1541246715150",
                    "desc":"",
                    "price": 99,
                    "select": "",
                    "sku": "A0000003",
                    "smname": "1111111111111",
                    "timestamp": "1541246715150",
                    "total": "598.00"
                }
            ],
            products: [{
                    id: '1',
                    sku: 'A0000001',
                    title: 'Denim Shirt',
                    cat: 'Sports Wear',
                    state: 'New',
                    statecolor: 'red',
                    size: '',
                    img: 'img/products/12.jpg',
                    oldprice: '',
                    price: 299.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 4,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '2',
                    sku: 'A0000002',
                    title: 'Drypers Mega Pack',
                    cat: 'Baby',
                    state: 'Sale',
                    statecolor: 'green',
                    size: 'Large x 62 pcs',
                    img: 'img/products/baby.jpg',
                    oldprice: 630.00,
                    price: 503.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 2,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '3',
                    sku: 'A0000003',
                    title: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '',
                    img: 'img/products/14.jpg',
                    oldprice: '',
                    price: 99.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 1,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '4',
                    sku: 'A0000004',
                    title: '137 Degrees Iced Coffee Latte with Almond Milk Drink',
                    cat: 'Coffee',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/coffee.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Perfect iced coffee latte with almond milk',
                    stock: 50,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '5',
                    sku: 'A0000005',
                    title: 'Gingen Strong Ginger Formula Tea',
                    cat: 'Tea',
                    state: 'Best Seller',
                    size: '',
                    statecolor: 'blue',
                    img: 'img/products/tea.jpg',
                    oldprice: '',
                    price: 440.00,
                    desc: 'Hot drink with slightly sweet and strong taste from aged quality ginger',
                    stock: 20,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                },
                {
                    id: '6',
                    sku: 'A0000006',
                    title: 'Cool Shirt',
                    cat: 'Out Wear',
                    state: '',
                    statecolor: '',
                    size: '3 pcs x 180 ml',
                    img: 'img/products/15.jpg',
                    oldprice: '',
                    price: 80.00,
                    desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                    stock: 8,
                    cname: '',
                    check: '',
                    select: '',
                    notes: '',
                    email: '',
                    smname: '',
                    timestamp: '',
                    ponumber: '',
                    total: ''
                }


            ],
        };
    },
    // App root methods
    methods: {
        helloWorld: function () {
            app.dialog.alert('Hello World!');
        },
    },
    // App routes
    routes: routes,
});
// Init/Create main view
var mainView = app.views.create('.view-main', {
    url: '/'
});

// Init/Create views
/*var homeView = app.views.create('#view-home', {
    url: '/'
});*/
var settingsView = app.views.create('#view-settings', {
    url: '/settings/'
});
var customersView = app.views.create('#view-catalog', {
    url: '/catalog/'
});
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
    var username = $$('#my-login-screen [name="username"]').val();
    var password = $$('#my-login-screen [name="password"]').val();
    // Close login screen
    app.loginScreen.close('#my-login-screen');
    // Alert username and password
    app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
/*app.getSKU = function(ThisSKU){
    sessionStorage.setItem("skuItem", ThisSKU);
}
*/
//var ThisSKU = $$(this).attr("data-sku");
$$('a.getsku').on('click', function () {
    sessionStorage.setItem("skuItem", ThisSKU);
    app.dialog.alert(selectedCat);
});
$$('a.category').on('click', function () {
    var selectedCat = $$(this).html();
    // Alert username and password
    app.dialog.alert(selectedCat);
});



$$(document).on('page:init', '.page[data-name="cartscreen"]', function (e) {

   
    
});
$$(document).on('page:init', '.page[data-name="homes"]', function (e) {
    app.loadStore();
    

});
$$(document).on('page:init', '.page[data-name="catalog"]', function (e) {
    //  app.createProducts();
    app.loadStore(); // Show preloader before Ajax request
    //  app.preloader.show();
    // Perform Ajax request
    /* app.request.get('someurl.html', function (data) {
       // Hide preloader when Ajax request completed
       app.preloader.hide();
     });*/
    app.preloader.show();
    setTimeout(function () {
        app.preloader.hide();
        app.loadStore();
    }, 1500);
    console.log("Catalog");
    app.addToMyCart = function (id) {
        // alert("test");
        //function checkHasUer(){
        if (!localStorage.getItem("idMember")) {
            alert("Please select a customer.");
            app.router.navigate('/catalogb/');
            return false;
        } else {
            console.log("continue shopping");
            var timeandpo = localStorage.getItem("timeandponumber");
            var idMember = localStorage.getItem("idMember");
            $$("#nowserving").html(idMember);
            $$("#servingpo").html(timeandpo);
            //
            //console.log("add to cart");
            // var l = Ladda.create(document.querySelector('.prod-' + id));
            var l = $$('.prod-' + id);
            // l.start();
            var products = JSON.parse(localStorage.getItem('products')),
                producto = _.find(products, {
                    'id': id
                }),
                cant = 1;
            $$('body').css('opacity', '0.5');
            if (cant <= producto.stock) {
                if (undefined != producto) {
                    if (cant > 0) {
                        setTimeout(function () {
                            var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                                items: []
                            };
                            app.searchProd(cart,
                                producto.id,
                                producto.sku,
                                parseInt(cant),
                                producto.name,
                                producto.price,
                                producto.img,
                                producto.stock,
                                producto.oldprice,
                                producto.notes,
                                producto.cname,
                                // producto.cname = localStorage.getItem("idMember"),
                                producto.check = "notsync",
                                producto.select,
                                producto.email,
                                // producto.smname = localStorage.getItem("idSalesMngr"),
                                producto.smname,
                                producto.timestamp,
                                producto.ponumber,
                                producto.total = localStorage.getItem("grndTotal")
                            )
                            // l.stop();
                            console.log(parseInt(cant))
                            $$('body').css('opacity', '1');
                        }, 100)
                    } else {
                        alert('Only larger quantities are allowed to zero');
                    }
                } else {
                    alert('Oops! Something we wrong, try again later')
                }
            } else {
                alert('You can not add more of this product');
            }
        }
    }


    app.searchProd = function (cart, id, sku, cant, name, price, img, available, oldprice, cname, smname, check, select, notes, email, timestamp, total, ponumber) {
        //si le pasamos un valor negativo a la cantidad, se descuenta del carrito
        var curProd = _.find(cart.items, {
            'id': id
        });
        
        console.log("search products");
        if (undefined != curProd && curProd != null) {
            //ya existe el producto, aÃ±adimos uno mÃ¡s a su cantidad
            if (curProd.cant < available) {
                curProd.cant = parseInt(curProd.cant + cant)
            } else {
                alert('This product is currently out of stock')
            }
            $$('#prod_' + curProd.id).val(curProd.cant);
        } else {
            //sino existe lo agregamos al carrito       
            // var timeandponumber = new Date().getTime();
            var timeandpo = localStorage.getItem("timeandponumber");
            //localStorage.setItem("timeandponumber", timeandponumber);

            var prod = {

                cant: cant,
                check: check,
                cname: cname = localStorage.getItem("idMember"),
                email: email,
                id: id,
                img: img,
                name: name,
                notes: notes,
                oldprice: oldprice,

                ponumber: timeandpo,
                price: price,
                select: select,
                sku: sku,
                smname: smname = localStorage.getItem("idSalesMngr"),
                timestamp: timeandpo,
                total: localStorage.getItem("grndTotal")








            }
            cart.items.push(prod)
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        app.init();
        app.getProducts();
        app.updatePayForm();
    }
});


$$('#my-cart-screen .btnSavePO').on('click', function () {
    var purchaseorder = (JSON.parse(localStorage.getItem('purchaseorder')) != null) ? JSON.parse(localStorage.getItem('purchaseorder')) : {
        items: []
    };
    var productArray=purchaseorder;
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
      
    };

  $(this).html('<i class="fa fa-check"></i>Added to cart');
  console.log('Item added ');
  //var productJSON={"id":$(this).attr('pr_id'), "nameEn":$(this).attr('pr_name_en'), "price":$(this).attr('pr_price'), "image":$(this).attr('pr_image')};

  var productJSON=cart;


  if(localStorage.getItem('purchaseorder')!==null){
    productArray=JSON.parse(localStorage.getItem('purchaseorder'));
    productArray.push(productJSON);  
    localStorage.setItem('purchaseorder', productArray);  
  }
  else{
    productArray.push(productJSON);  
    localStorage.setItem('purchaseorder', productArray);  
  }


Storage.prototype.setObj = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObj = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
   /* var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
      
    };
    console.log(cart);
    var purchaseorder = (JSON.parse(localStorage.getItem('purchaseorder')) != null) ? JSON.parse(localStorage.getItem('purchaseorder')) : {
        items: []
    };
    if (undefined != purchaseorder && null != purchaseorder && purchaseorder != '') {
       // var i = 1;
        localStorage.setItem("purchaseorder", JSON.stringify(cart));
        purchaseorder.push(cart);
        $$("#pocontainer").html(purchaseOrders);
    }else{
        purchaseorder.push(cart); 
        console.log(purchaseorder);
        $$("#pocontainer").html(purchaseOrders);

    }


    */
    // alert("save po");
   /* var purchaseOrders =localStorage.getItem("purchaseorder");
     //var fruits = ["Banana", "Orange", "Apple", "Mango"];
     $$("#pocontainer").html(JSON.stringify(purchaseOrders));
     var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: [],
       
    };
    purchaseOrders.push(cart);
    $$("#pocontainer").html(purchaseOrders);
   */
    
 });

$$(document).on('page:init', '.page[data-page="category"]', function (e) {
    app.loadStore();
    console.log('Category');
});
/**************************************** CART */
app.loadStore = function () {}
var business_paypal = '', // aquí va tu correo electrónico de paypal
    currency_icon = '₱';
mockIdSalesMngr = '1111111111111';
localStorage.setItem("myCurrency", currency_icon);
localStorage.setItem("idSalesMngr", mockIdSalesMngr);
'use strict';
//no coflict con underscores
app.init = function () {
    console.log("initializing...");
    //totalItems totalAmount
    var total = 0,
        items = 0
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    };
    if (undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0) {
        _.forEach(cart.items, function (n, key) {
            items = (items + n.cant)
            total = total + (n.cant * n.price)
        });
    }
    var total_Items = $$('#totalItems');
    total_Items.text(items);
    //alert(items);
    if (items == 0) {
        $$(total_Items).hide();
    } else {
        $$(total_Items).show();
    }
    $$('.totalAmount').text(currency_icon + ' ' + total + ' USD');
}
app.createProducts = function () {
    console.log("create products");
    var products = [{
                id: 1,
                sku: 'A0000001',
                name: 'Denim Shirt',
                cat: 'Sports Wear',
                state: 'New',
                statecolor: 'red',
                size: '',
                img: 'img/products/12.jpg',
                oldprice: '',
                price: 299.00,
                desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                stock: 4,
                cname: '',
                check: '',
                select: '',
                notes: '',
                email: '',
                smname: '',
                timestamp: '',
                ponumber: '',
                total: ''
            },
            {
                id: 2,
                sku: 'A0000002',
                name: 'Drypers Mega Pack',
                cat: 'Baby',
                state: 'Sale',
                statecolor: 'green',
                size: 'Large x 62 pcs',
                img: 'img/products/baby.jpg',
                oldprice: 630.00,
                price: 503.00,
                desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                stock: 2,
                cname: '',
                check: '',
                select: '',
                notes: '',
                email: '',
                smname: '',
                timestamp: '',
                ponumber: '',
                total: ''
            },
            {
                id: 3,
                sku: 'A0000003',
                name: 'Cool Shirt',
                cat: 'Out Wear',
                state: '',
                statecolor: '',
                size: '',
                img: 'img/products/14.jpg',
                oldprice: '',
                price: 99.00,
                desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                stock: 1,
                cname: '',
                check: '',
                select: '',
                notes: '',
                email: '',
                smname: '',
                timestamp: '',
                ponumber: '',
                total: ''
            },
            {
                id: 4,
                sku: 'A0000004',
                name: '137 Degrees Iced Coffee Latte with Almond Milk Drink',
                cat: 'Coffee',
                state: '',
                statecolor: '',
                size: '3 pcs x 180 ml',
                img: 'img/products/coffee.jpg',
                oldprice: '',
                price: 80.00,
                desc: 'Perfect iced coffee latte with almond milk',
                stock: 50,
                cname: '',
                check: '',
                select: '',
                notes: '',
                email: '',
                smname: '',
                timestamp: '',
                ponumber: '',
                total: ''
            },
            {
                id: 5,
                sku: 'A0000005',
                name: 'Gingen Strong Ginger Formula Tea',
                cat: 'Tea',
                state: 'Best Seller',
                size: '',
                statecolor: 'blue',
                img: 'img/products/tea.jpg',
                oldprice: '',
                price: 440.00,
                desc: 'Hot drink with slightly sweet and strong taste from aged quality ginger',
                stock: 20,
                cname: '',
                check: '',
                select: '',
                notes: '',
                email: '',
                smname: '',
                timestamp: '',
                ponumber: '',
                total: ''
            },
            {
                id: 6,
                sku: 'A0000006',
                name: 'Cool Shirt',
                cat: 'Out Wear',
                state: '',
                statecolor: '',
                size: '3 pcs x 180 ml',
                img: 'img/products/15.jpg',
                oldprice: '',
                price: 80.00,
                desc: 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
                stock: 8,
                cname: '',
                check: '',
                select: '',
                notes: '',
                email: '',
                smname: '',
                timestamp: '',
                ponumber: '',
                total: ''
            }
        ],
        // wrapper = $$('.productosWrapper'),
        //      wrapper2 = $$('#stepper_prod_'+ products[i].id),
        wrapper2 = $$('.mystepper1');
    wrapper = $$('#stepper_prod_1');
    content = '';
    oldpricing = '';
    for (var i = 0; i < products.length; i++) {
        if (products[i].stock > 0) {
            if (products[i].oldprice != 0 || products[i].oldprice != '') {
                oldpricing = currency_icon + '' + products[i].oldprice.toFixed(2)
            } else {
                oldpricing = '';
            }
            //console.log(cant);
            content = '';
            content += '<div id="myStepper_' + products[i].id + '" data-id="' + products[i].id + '" class="stepper stepper-small-md stepper-small stepper-init" style="padding:0; float:right; margin:0 auto;">'
            content += '<div class="stepper-button-minus" onclick="app.updateItem(' + products[i].id + ',' + products[i].stock + ')"  data-type="minus"></div>'
            /*content += '<input type="number" id="prod_' + products[i].id + '" readonly name="quant[' + products[i].id + ']" class="form-control input-number quantity manage-qtty"  value="'+ carts.items[vv].cant + '" min="0" max="100">'*/
            content += '<input type="number" id="prod_' + products[i].id + '" readonly name="quant[' + products[i].id + ']" class="form-control input-number quantity manage-qtty"  value="0" min="0" max="100">'
            content += ' <div class="stepper-button-plus" prod-' + products[i].id + '"  data-type="plus" data-style="slide-right" onclick="app.addtoCart(' + products[i].id + ');" ></div>'
            content += '</div>'
        }
    }
    // $$('#stepper_prod_1').html('');
    //  $$('#stepper_prod_1').html(content);    
    // wrapper.html(content);
    //  wrapper.html('<div>help</div>');
    // wrapper2.html('<div>help</div>');
    localStorage.setItem('products', JSON.stringify(products))
}

function callFunction(func) {
    var newValue = func();
    console.log(newValue);
}


/*
app.addtoCart = function (id) {
    //function checkHasUer(){
    if (!localStorage.getItem("idMember")) {
        alert("Please select a customer.");
        app.router.navigate('/catalogb/');
        return false;
    } else {
        console.log("continue shopping");
        //
        //console.log("add to cart");
        // var l = Ladda.create(document.querySelector('.prod-' + id));
        var l = $$('.prod-' + id);
        // l.start();
        var products = JSON.parse(localStorage.getItem('products')),
            producto = _.find(products, {
                'id': id
            }),
            cant = 1;
        $$('body').css('opacity', '0.5');
        if (cant <= producto.stock) {
            if (undefined != producto) {
                if (cant > 0) {
                    setTimeout(function () {
                        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
                            items: []
                        };
                        app.searchProd(cart,
                            producto.id,
                            producto.sku,
                            parseInt(cant),
                            producto.name,
                            producto.price,
                            producto.img,
                            producto.stock,
                            producto.oldprice,
                            producto.notes,
                            // producto.cname = localStorage.getItem("idMember"),
                            producto.cname,
                            producto.check = "notsync",
                            producto.select,
                            producto.email,
                            // producto.smname = localStorage.getItem("idSalesMngr"),
                            producto.smname,
                            producto.timestamp,
                            producto.ponumber,
                            producto.total = localStorage.getItem("grndTotal")
                        )
                        // l.stop();
                        console.log(parseInt(cant))
                        $$('body').css('opacity', '1');
                    }, 100)
                } else {
                    alert('Only larger quantities are allowed to zero');
                }
            } else {
                alert('Oops! Something we wrong, try again later')
            }
        } else {
            alert('You can not add more of this product');
        }
    }
}*/
/*app.searchProd = function (cart, id, sku, cant, name, price, img, available, oldprice, cname, smname, check, select, notes, email, timestamp, total, ponumber) {
    //si le pasamos un valor negativo a la cantidad, se descuenta del carrito
    var curProd = _.find(cart.items, {
        'id': id
    })
    console.log("search products");
    if (undefined != curProd && curProd != null) {
        //ya existe el producto, aÃ±adimos uno mÃ¡s a su cantidad
        if (curProd.cant < available) {
            curProd.cant = parseInt(curProd.cant + cant)
        } else {
            alert('This product is currently out of stock')
        }
        $$('#prod_' + curProd.id).val(curProd.cant);
    } else {
        //sino existe lo agregamos al carrito
        var prod = {
            id: id,
            sku: sku,
            cant: cant,
            name: name,
            price: price,
            img: img,
            available: available,
            oldprice: oldprice,
            cname: cname,
            smname: smname,
            check: check,
            select: select,
            notes: notes,
            email: email,
            timestamp: timestamp,
            total: localStorage.getItem("grndTotal"),
            ponumber: ponumber,
        }
        cart.items.push(prod)
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    app.init();
    app.getProducts();
    app.updatePayForm();
}*/
app.getProducts = function () {
    console.log("get products");
    var custmername = localStorage.getItem("custmername");
    var timeandpo = localStorage.getItem("timeandponumber");
    var idMember = localStorage.getItem("idMember");

    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
            items: []
        },
        msg = '',
        wrapper = $$('.cart'),
        personwrapper = $$('.mycart'),
        total = 0;
    personwrapper.html('');
    wrapper.html('');
    if (undefined == cart || null == cart || cart == '' || cart.items.length == 0) {
        wrapper.html('<div>Your cart is empty</div>');
        $$('.cart').css('left', '-400%')
    } else {
        var personcart = '<tr>' +
            '<td>Now Serving</td>' +
            '<td class="right"><h5 id="nowservingw">' + idMember + '</h5><small>' + idMember + '</small></td>' +

            ' </tr>' +
            '<tr>' +

            ' <td>PO #</td>' +
            '  <td class="right"><h5 id="servingpos">' + timeandpo + '</h5></td>' +
            '</tr>';
        var items = '';
        _.forEach(cart.items, function (n, key) {
            var oldpricing = '';
            if (n.oldprice != 0 || n.oldprice != '') {
                var oldpricing = currency_icon + '' + n.oldprice.toFixed(2)
            } else {
                var oldpricing = '';
            }
            total = total + (n.cant * n.price);
            items += '<tr>'
            //items += '<td><img src="'+n.img+'" /></td>'
            items += '<td><span class="qant">' + n.cant + '</span></td>'
            items += '<td><h3 class="title">' + n.name + '</h3></td>'
            items += '<td colspan="2"><p class="right"><del>' + oldpricing + '</del></p>'
            items += '<p class="price right">' + currency_icon + '' + n.price.toFixed(2) + '</p></td>'
            items += '</tr>';
            $$('#prod_' + n.id).val(n.cant);
        });
        //agregar el total al carrito
        items += '<tr class="total-row"><td colspan="2" > </td><td id="total" class="total right" colspan="3">' + currency_icon + '' + total.toFixed(2) + ' </td></tr>'
        items += '<tr><td colspan="5" class="total"></td></tr>'
        items += '<tr><td colspan="5"> <div class="submitForm"></div></td></tr>'
        wrapper.html(items);
        personwrapper.html(personcart);

        localStorage.setItem("grndTotal", total.toFixed(2));
        $$('.cart').css('left', '0')
    }
}
app.updateItem = function (id, available) {
    //resta uno a la cantidad del carrito de compras
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
            items: []
        },
        curProd = _.find(cart.items, {
            'id': id
        })
    //actualizar el carrito
    curProd.cant = curProd.cant - 1;
    //validar que la cantidad no sea menor a 0
    if (curProd.cant > 0) {
        localStorage.setItem('cart', JSON.stringify(cart))
        app.init()
        app.getProducts()
        app.updatePayForm()
    } else {
        app.deleteProd(id, true)
    }
}
app.delete = function (id) {
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    };
    var curProd = _.find(cart.items, {
        'id': id
    })
    $$('#prod_' + id + '').val('0');
    _.remove(cart.items, curProd);
    localStorage.setItem('cart', JSON.stringify(cart));
    app.init();
    app.getProducts();
    app.updatePayForm();
}
app.deleteProd = function (id, remove) {
    if (undefined != id && id > 0) {
        if (remove == true) {
            app.delete(id)
        } else {
            var conf = confirm('Remove this product?')
            if (conf) {
                app.delete(id)
            }
        }
    }
}
app.updatePayForm = function () {
    //eso va a generar un formulario dinamico para paypal
    //con los products y sus precios
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {
        items: []
    };

    var purchaseorder = (JSON.parse(localStorage.getItem('purchaseorder')) != null) ? JSON.parse(localStorage.getItem('purchaseorder')) : {
        items: []
    };
    if (undefined != purchaseorder && null != purchaseorder && purchaseorder != '') {
       // var i = 1;
        localStorage.setItem("purchaseorder", JSON.stringify(cart));
    }else{
       // productArray.push(productJSON); 
    }
    var grandtotal = localStorage.getItem("grndTotal")
    var ponumber = localStorage.getItem("timeandponumber");
    //var statics = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="' + business_paypal + '">',
    var statics = '<form  method="post">' +
        '<input type="hidden" name="cmd" value="_cart">' +
        '<input type="hidden" name="upload" value="1">' +
        '<input type="hidden" name="currency_code" value="PHP" />' +
        '<input type="hidden" name="business" value="SUPER 8">' +
        '<input type="hidden" class="PONUMBER" name="ponumber" value="' + ponumber + '">' +
        '<input type="hidden" class="TOTAL" name="grandtotal" class="grandtotal" value="' + grandtotal + '">',
        dinamic = '',
        wrapper = $$('.submitForm')
    wrapper.html('')
    if (undefined != cart && null != cart && cart != '') {
        var i = 1;
        _.forEach(cart.items, function (prod, key) {
            dinamic += '<input type="hidden" name="item_name_' + i + '" value="' + prod.name + '">'
            dinamic += '<input type="hidden" name="amount_' + i + '" value="' + prod.price + '">'
            dinamic += '<input type="hidden" name="item_sku_' + i + '" value="' + prod.sku + '">'
            dinamic += '<input type="hidden" name="item_ponum_' + i + '" value="' + prod.ponumber + '">'
            dinamic += '<input type="hidden" name="item_number_' + i + '" value="' + prod.id + '" />'
            dinamic += '<input type="hidden" name="quantity_' + i + '" value="' + prod.cant + '" />'
            dinamic += '<input type="hidden" class="grndTotal" name="total_' + i + '" value="' + grandtotal + '" />' // added by jrn
            i++;
        })
       // statics += dinamic + '<button type="submit" class="pay btn btn-success">Submit<i class="ion-chevron-right"></i></button></form>'

       statics += dinamic + '<button type="button" class="btn btnSavePO btn-success hidden">Submit PO</button></form>'
        wrapper.html(statics)
    }
}
/***************************** */


app.resetCart = function () {
    var retVal = confirm("This will clear cart data? Do you want to continue ?");
    if (retVal == true) {
        localStorage.removeItem("cart");
        localStorage.removeItem("idMember");
        localStorage.removeItem("grndTotal");
        localStorage.removeItem("listHTML");
        localStorage.removeItem("timeandponumber");
        $$(".cart, .mycart, #totalItems").html("");
        
      //  localStorage.removeItem("purchaseorder");
        mainView.router.refreshPage();
        alert("Cache is now cleared.");
        mainView.router.navigate(mainView.router.currentRoute.url, {
            ignoreCache: true,
            reloadCurrent: true
        });
        return true;
      
    } else {
        return false;
    }
}

app.showOrders = function () {
    // alert("orders");
    var myObj, i, item = "";
    var po = JSON.parse(localStorage.getItem("purchaseorder"));
    //  var po = localStorage.getItem("purchaseorder");
    console.log(po);
    myObj = po;
    for (i in myObj.items) {
        item += '<a href="product-page.html" onclick=getSKU("' + myObj.items[i].sku + '") data-sku="' + myObj.items[i].sku + '" class="list-group-item list-group-item-action flex-column align-items-start">'
        item += '<div class="d-flex w-100 justify-content-between">'
        item += '<h5 class="mb-2 h5">' + myObj.items[i].notes + '</h5>'
        item += '<small class="order-status">Not Synced</small>'
        item += '</div>'
        item += '<p class="mb-2">' + myObj.items[i].cname + '</p>'
        item += '</a>';
        //  items += '<li class="nav-item"><a class="nav-link waves-effect" href="' + myObj.menuitems[i].url + '">' + myObj.menuitems[i].notes + '</li>';
        /* for (j in myObj.menuitems[i].models) {
             items += myObj.menuitems[i].models[j] + "<li class='hidden'>";
         }*/
    }
    $$("#mainOrders").html(item);
}
app.showMenu = function () {
    // alert("orders");
    var myObj, i, j, items = "";
    myObj = {
        "name": "John",
        "age": 30,
        "menuitems": [{
                "name": "Home",
                "url": "index.html"
            },
            {
                "name": "Acount",
                "url": "user.html"
            },
            {
                "name": "Customers",
                "url": "customer-list.html"
            },
            {
                "name": "Orders",
                "url": "orders.html"
            },
            {
                "name": "Store",
                "url": "storegroup.html"
            }
        ]
    }
    for (i in myObj.menuitems) {
        items += '<li class="nav-item"><a class="nav-link waves-effect" href="' + myObj.menuitems[i].url + '">' + myObj.menuitems[i].name + '</li>';
        /* for (j in myObj.menuitems[i].models) {
             items += myObj.menuitems[i].models[j] + "<li class='hidden'>";
         }*/
    }
    $$("#mainMenu").html(items);
}
/************************************* */
app.getSKU = function (ThisSKU) {
    sessionStorage.setItem("skuItem", ThisSKU);
}
// Get the container element
var btnContainer = $$(".toolbar-inner");

// Get all buttons with class="btn" inside the container
var btns = $$(".tab-link");

btns.on("click", function () {
    btns.removeClass("tab-link-active");
    $$(this).addClass("tab-link-active");
})
// Loop through the buttons and add the active class to the current/clicked button
/*for (var i = 0; i < btns.length; i++) {
  btns.on("click", function() {
    var current = $$(".tab-link-active");
    current[0].className = current[0].toggleClass("tab-link-active");
    this.addClass("tab-link-active")
  });
}*/
app.productsPage = function () {
    var activeSKU = sessionStorage.getItem("skuItem");
    console.log(activeSKU);
    //var ThisSKU = $$(this).attr("data-sku");
    //var activeSKU = sessionStorage.getItem("ThisSKU");
    var skusList = localStorage.getItem("products");
    skus = JSON.parse(skusList);
    console.log(skus);
    var SearchTag = function (sku) {
        var i = null;
        for (i = 0; skus.length > i; i += 1) {
            if (skus[i].sku === sku) {
                return skus[i];
            }
        }
        return null;
    };
    var product = SearchTag(activeSKU);
    oldpricing = '';
    if (product) {
        var oldprice = product.oldprice;
        if (oldprice != 0 || oldprice != '') {
            oldpricing = currency + '' + oldprice;
        } else {
            oldpricing = '';
        }
        var cat = product.cat;
        var desc = product.desc;
        var id = product.id;
        var img = product.img;
        var name = product.name;
        var price = product.price;
        var size = product.size;
        var sku = product.sku;
        var state = product.state;
        var statecolor = product.statecolor;
        var stock = product.stock;
        // var currency = localStorage.getItem("myCurrency");
        // console.log(cat+"|"+desc+"|"+id+"|"+img+"|"+name+"|"+price+"|"+size);
        $$("#thisName").html(name);
        $$("#prodImg").html('<img src="' + img + '" class="img-fluid prod-page-image" alt="' + name + '">');
        $$("#thisBadges").html('<a href="">' +
            '<span class="badge ' + statecolor + ' mr-1">' + state + '</span>' +
            '</a>');
        $$("#thisStock").html("In Stock: " + stock);
        $$("#thisLead").html('<span class="mr-1">' +
            '<del>' + oldpricing + '</del>' +
            '</span>' +
            '<span>' + currency + '' + price + '</span>')
        $$("#thisDesc").html(desc);
        /* $$("#thisAddCart").html('<input type="number" value="1" id="prod_'+id +'" readonly name="quant['+id+']"  aria-label="Search" class="form-control" style="width: 100px">'+
         '<button class="btn btn-primary btn-md my-0 btn-number waves-effect  submit ladda-button waves-light" type="button"  onclick="app.addtoCart(' +id + ');">Add to cart'+
           '<i class="fa fa-shopping-cart ml-1"></i>'+
        '</button>');*/
        $$("#footerBtns").html('<div class="row"><div class="btn-group" role="group" aria-label="Basic">' +
            '<button type="button" class="btn btn-success manage-qtty btn-number h-40 waves-effect waves-light" onclick="app.updateItem(' + id + ',' + stock + ')" data-type="minus"><i class="material-icons">remove</i></button>' +
            '<input type="number"id="prod_' + id + '" readonly="" name="quant[' + id + ']" class="form-control input-number quantity manage-qtty h-40" value="0" min="0" max="100" style="height:40px; width:80px;">' +
            '<button type="button" class="btn btn-success btn-number waves-effect h-40 submit ladda-button waves-light prod-' + id + '" data-type="plus" data-style="slide-right" onclick="app.addtoCart(' + id + ');"><i class="material-icons">add</i></button>' +
            //'<button type="button" class="btn btn-number waves-effect  submit ladda-button waves-light grey-borders btn-success prod-'+id+'" data-type="plus" data-style="slide-right" onclick="app.addtoCart('+id+');">Add to Cart</button>');
            '<a class="btn btn-info waves-effect waves-light h-40 pl-4 pr-4" href="#" role="button" data-toggle="modal" data-target="#modalCart">View Cart</a></div></div>');
    }
}
/***************************** */
//  $$(document).ready(function () {
$$(document).on('DOMContentLoaded', function () {

    app.init();
    app.updatePayForm();
    app.createProducts();
    app.getProducts();
    $$(".btn-checkout").click(function () {
        app.updatePayForm();
    })
    /******************* */
    // showQuantity();
    app.showMenu();
    //addCustomer();
    //app.loadStore();
    app.showOrders();
    currency_icon = '₱';
    localStorage.setItem("myCurrency", currency_icon);
    /******************* */
    //   })
    // Your content here
});
//}
/**************************************** CART */