/*************************************** WEBSQL */

var db = openDatabase('super8', '1.0', 'Customers and Order processing', 100 * 1024);

//$$(document).on('pageInit', '.page[data-page="home"]', function (e) {
$$(document).on('DOMContentLoaded', function () {
    //  alert('Customers page');

    //$$(document).ready(function () {

    console.info("Initialize...");

    init();

    orderList();
    //selectorderList();
    mockData();
    selectCustomertoShop();
    console.info("Carga Complete...");

    ////////////////////////////////////////////////////////////////////
    ////////////////////////////Funciones jquery///////////////////////
    ////////////////////////////////////////////////////////////////////
    $$('#submit').click(function () {
        var txtPo = $$('#PONUMBER');
        var txtTotal = $$('#TOTAL');
        /*var txtLname = $$('#lname');
        var txtPhone = $$('#phone');
        var txtEmail = $$('#email');
        var txtEmail = $$('#birthdate');*/

      //  var input = $$('input');

       /* if (txtTotal.val() === '' || txtLname.val() === '' || txtPhone.val() === '' || txtEmail.val() ===
            ) {
            alert("All fields are Required...");
            return;
        }*/

        var order = Object();

        order.total = txtTotal.val();
      /*  order.lname = txtLname.val();
        order.phone = txtPhone.val();
        order.email = txtEmail.val();*/



        if (txtPo.val() === '') { //Lo guarda
            //order.id = new Date().getTime();
            order.id = parseInt(txtPo.val());
            saveOrder(order);
        } else { //Lo actualiza
            order.id = parseInt(txtPo.val());
            updateOrder(order);
        }

        orderList();
        //selectorderList();
        mockData();
        txtTotal.val(null);
        /*txtLname.val(null);
        txtPhone.val(null);
        txtEmail.val(null);*/
        txtPo.val(null);
    });



    $$('#orderList').on("click", ".btn-order-info", function () {
        //   var idOrder = $$(this).data("id");
        var idOrder = $$('input.customerid').value();

        selectOrder(idOrder);
        $$("label").addClass("active");
        //$$("#modal-Title").html("View Customer");

    });


    $$('#orderList').on("click", ".btn-editar", function () {
        // var idOrder = $$(this).data("id");
        var idOrder = $$('input.customerid').value();
        selectOrder(idOrder);
        $$("label").addClass("active");
        $$("#modal-Title").html("Edit Customer");

    });

    $$('#orderList').on("click", ".btn-eliminar", function () {
        //  var idOrder = $$(this).data("id");
        var idOrder = $$('input.customerid').value();
        removeOrder(idOrder);
        orderList();
        //selectorderList();
    });

    $$(document).on('page:init', '.page[data-name="catalogb"]', function (e) {
        orderList();
        app.preloader.show();
        setTimeout(function () {
            app.preloader.hide();
            orderList();

        }, 3000);
        console.log("Catalogb");


        btns.removeClass("tab-link-active");
        $$("#btnCustomers").addClass("tab-link-active");

    });


    $$(document).on('page:init', '.page[data-name="orderInfo"]', function (e) {
        console.log('Customer Info');
        $$('.page-content').on('click', function () {
            orderList();
        })


        $$(".btn-eliminar").on("click", function () {
            var idOrder = $$(this).data("id");
            removeOrder(idOrder);
            orderList();
            //selectorderList();
        });

        $$(".btnOrderID").on("click", function () {
            var mid = $$("input#orderID").val();
            console.log(mid);
            localStorage.setItem("idOrder", mid);

            if (!localStorage.getItem("idOrder")) {

                alert("Please select a customer.");

                app.router.navigate('/catalogb/');

                return false;
            } else {
             app.router.navigate('/catalog/');
                console.log("continue shopping");
            }
        })

    })


    $$('#btnCustomers').on('click', function () {
        orderList();
        //selectorderList();
    });


    $$('#btnStore').on('click', function () {
        app.loadStore();
    });

});

////////////////////////////////////////////////////////////////////
///////////////////////funciones para el CRUd///////////////////////
////////////////////////////////////////////////////////////////////
function init() {
    db.transaction(function (tx) {
            tx.executeSql('create table if not exists PURCHASEORDER(ID, FNAMES, LNAMES,PHONE, EMAIL)');
            //  tx.executeSql('create table if not exists PURCHASEORDER(id,sku,cant,name,price,img,available,oldprice,smname,notes,email,timestamp,total)');

        },
        error, exito);
}



function orderList() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT rowid, ID, FNAMES, LNAMES, PHONE, EMAIL FROM PURCHASEORDERS', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = "";
                myJson = [];
               for (var i = 0; i < rs.rows.length; i++) {
                    var order = rs.rows.item(i);
                    var id = order.ID;
                   // var fullname = order.FNAMES + ' ' + order.LNAMES;

                    lisHtml += '<li><a href="/orderInfo/" onclick="selectOrder(' + id + ')">' + fullname + '</a></li>';
                   // myJson.push({ order: order,  fullname: fullname, FNAMES: order.FNAMES, LNAMES:order.LNAMES, ID: order.ID,});
                 //  myJson.push({order});
               //  myJson.push({ order: order,  fullname: fullname, FNAMES: order.FNAMES, LNAMES:order.LNAMES, ID: order.ID,});
                }



                function showAll(item, id, cid, title, fname, phone, description) {
                    $$('#orderList').append('<li>' + title + ' ' + fname + ' ' + id + '</li>');
                }
                //mybase.init.getAll();

                localStorage.setItem("listHTML", lisHtml);

                // var permdata = localStorage.getItem("listHTML");
                // console.log(permdata);
              //  console.log(JSON.stringify(myJson));
                //localStorage.setItem("customers", JSON.stringify(myJson));
                $$('#orderList').html(lisHtml);


                /* $$(function () {
                     $$('.icon-btn').on('click', function () {
                         $$('.showData').toggle();
                     });
                 });*/


                $$('[data-toggle="class"]').click(function () {
                    var $target = $$($$(this).data('target'));
                    var classes = $$(this).data('classes');

                    $target.toggleClass(classes);
                    return false;
                });




                $$("#btnNew").click(function () {
                    console.log("reset fields");
                    $$('#dynamic-form')[0].reset();
                    $$('#modalBody').html("")
                    $$('#txt-id').val("");
                    $$("#modal-Title").html("Add Customer");

                })



            }

        }, error);
    });
}



function selectorderList() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT rowid, ID, FNAMES, LNAMES, PHONE, EMAIL FROM PURCHASEORDERS', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = "";

                for (var i = 0; i < rs.rows.length; i++) {
                    var order = rs.rows.item(i);
                    var id = order.ID;
                    var fullname = order.FNAMES + ' ' + order.LNAMES;

                    lisHtml += '<li><a href="/catalog/" onclick="selectOrder(' + id + ')">' + fullname + '</a></li>';
                    // $$('#ccompleteName').html(fullname);

                }

                //localStorage.setItem("listHTML", lisHtml);

                // var permdata = localStorage.getItem("listHTML");
                // console.log(permdata);

                $$('#orderListSelect').html(lisHtml);


                /* $$(function () {
                     $$('.icon-btn').on('click', function () {
                         $$('.showData').toggle();
                     });
                 });*/


                $$('[data-toggle="class"]').click(function () {
                    var $target = $$($$(this).data('target'));
                    var classes = $$(this).data('classes');

                    $target.toggleClass(classes);
                    return false;
                });




                $$("#btnNew").click(function () {
                    console.log("reset fields");
                    $$('#dynamic-form')[0].reset();
                    $$('#modalBody').html("")
                    $$('#txt-id').val("");
                    $$("#modal-Title").html("Add Customer");

                })



            }

        }, error);
    });
}



function saveOrder(order) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO PURCHASEORDERS(ID, FNAMES, LNAMES, PHONE, EMAIL) VALUES(?, ?, ?,?,?)', [
            order.id, order.fname, order.lname, order.phone, order.email
        ]);
    }, error, function () {
        alert("Item Saved.");
        // $$(".close, .pop-up").trigger();
        $$(".popup-backdrop").removeClass("backdrop-in");

    });
}


/*
function saveOrderLocal(order) {
    var order = Object();
    var i = 1;
    order.smname = $$("#ssmname").val();
    order.cname = $$("#ccname").val();
    order.total = $$("#grandtotal").val();
    order.timestamp = i++;


    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO PURCHASEORDER(ID, CNAME, SMNAME,TOTAL, TIMESTAMP) VALUES(?, ?, ?,?,?)', [
            order.id, order.cname, order.smname, order.total, order.timestamp
        ]);
    }, error, function () {
        alert("Item Saved.");
        // $$(".close, .pop-up").trigger();
        $$(".popup-backdrop").removeClass("backdrop-in");

    });
}
*/

function selectOrder(idOrder) {
    // localStorage.setItem("customer-name",idOrder);
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM PURCHASEORDERS WHERE ID = ?', [idOrder],
            function (t, rs) {
                if (rs.rows.length > 0) {
                    var lisHtml = '';
                    var order = new Object();
                    order.id = rs.rows.item(0).ID;
                    order.fname = rs.rows.item(0).FNAMES;
                    order.lname = rs.rows.item(0).LNAMES;
                    order.phone = rs.rows.item(0).PHONE;
                    order.email = rs.rows.item(0).EMAIL;
                    /* $$('#txt-id').val(rs.rows.item(0).ID);
                     $$('#fname').val(rs.rows.item(0).FNAMES);
                     $$('#lname').val(rs.rows.item(0).LNAMES);
                     $$('#phone').val(rs.rows.item(0).PHONE);
                     $$('#email').val(rs.rows.item(0).EMAIL);*/
                    $$('#orderInfo').html('<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">person</i></div>' +
                        '<div class="item-inner">' +
                        '<input type="hidden" class="customerid" value="' + rs.rows.item(0).ID + '" />' +
                        '<div class="item-title">' + rs.rows.item(0).FNAMES + ' ' + rs.rows.item(0).LNAMES + '</div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">phone</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title"> ' + rs.rows.item(0).PHONE + '</div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title">' + rs.rows.item(0).EMAIL + '</div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>' +
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title">' + rs.rows.item(0).ID + '<input id="orderID" type="hidden" value="' + rs.rows.item(0).ID + '"/></div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>')


                }
            }, error);
    });
}



function orderProfile(idOrder) {
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM PURCHASEORDERS WHERE ID = ?', [idOrder],
            function (t, rs) {
                if (rs.rows.length > 0) {

                    var lisHtml = '';

                    for (var i = 0; i < rs.rows.length; i++) {
                        var order = rs.rows.item(i);
                        var id = order.ID;
                        var fname = order.FNAMES;
                        var lname = order.LNAMES;
                        var phone = order.PHONE;
                        var email = order.EMAIL;


                        lisHtml += '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">person</i></div>'
                        '<div class="item-inner">'
                        '<input type="hidden" class="customerid" value="' + id + '" />' +
                            '<div class="item-title">' + fname + ' ' + lname + '</div>'
                        '<div class="item-after"></div>'
                        '</div>'
                        '</div>'
                        '</li>'
                        '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">phone</i></div>'
                        '<div class="item-inner">'
                        '<div class="item-title">' + phone + '</div>'
                        '<div class="item-after"></div>'
                        '</div>'
                        '</div>'
                        '</li>'
                        '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>'
                        '<div class="item-inner">'
                        '<div class="item-title">' + email + '</div>'
                        '<div class="item-after"></div>'
                        '</div>'
                        '</div>'
                        '</li>'


                    }


                    $$('#orderInfo').html(lisHtml);





                }

            }, error);
    });
}


function updateOrder(order) {
    db.transaction(function (tx) {
        tx.executeSql('UPDATE PURCHASEORDERS SET FNAMES = ?, LNAMES = ?, PHONE = ?, EMAIL = ?, WHERE ID = ?', [
            order.phone, order.fname, order.lname, order.id
        ]);
    }, error, function () {
        alert("The order has been updated successfully");
    });
}

function removeOrder(idOrder) {


    var retVal = confirm("This will delete the selected record? Do you want to continue ?");
    if (retVal == true) {
        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM PURCHASEORDERS WHERE ID = ?', [idOrder]);
        }, error, function () {
            alert("The order has been removed successfully");
        })
        return true;
    } else {

        return false;
    }



    /*  db.transaction(function (tx) {
          tx.executeSql('DELETE FROM PURCHASEORDERS WHERE ID = ?', [idOrder]);
      }, error, function () {
          alert("The order has been rem successfully");
      });*/
}

function savePO(order) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO PURCHASEORDERS(ID, FNAMES, LNAMES, PHONE, EMAIL) VALUES(?, ?, ?,?,?)', [
            order.id, order.fname, order.lname, order.phone, order.email
        ]);
    }, error, function () {
        alert("Item Saved.");
        $$(".close").trigger();
    });
}


/*
function saveOrderLocals(order) {
    var str = localStorage.getItem("purchaseorder");
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO PURCHASEORDER (id,sku,cant,name,price,img,available,oldprice,smname,notes,email,timestamp,total) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [94, JSON.parse(str)]);
    }, error, function () {
        alert("Item Saved.");
        $$(".close").trigger();
    });
}*/

////////////////////////////////////////////////////////////////////
////////////////////////Funciones de logueo////////////////////
////////////////////////////////////////////////////////////////////
var error = function (err) {
    console.error(err);
};

var exito = function () {
    console.info("Table created...");
};
/*************************************** WEBSQL */
