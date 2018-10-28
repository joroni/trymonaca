/*************************************** WEBSQL */

var db = openDatabase('super8', '1.0', 'Customers and Order processing', 100 * 1024);

//$$(document).on('pageInit', '.page[data-page="home"]', function (e) {
  
 //  alert('Customers page');
  
//$$(document).ready(function () {

console.info("Initialize...");

init();

memberList();
//selectMemberList();
mockData();
selectCustomertoShop();
console.info("Carga Complete...");

////////////////////////////////////////////////////////////////////
////////////////////////////Funciones jquery///////////////////////
////////////////////////////////////////////////////////////////////
$$('#submit').click(function () {
    var txtId = $$('#txt-id');
    var txtFname = $$('#fname');
    var txtLname = $$('#lname');
    var txtPhone = $$('#phone');
    var txtEmail = $$('#email');
    var txtEmail = $$('#birthdate');

    var input = $$('input');

    if (txtFname.val() === '' || txtLname.val() === '' || txtPhone.val() === '' || txtEmail.val() ===
        '' /*|| input === ""*/ ) {
        alert("All fields are Required...");
        return;
    }

    var member = Object();

    member.fname = txtFname.val();
    member.lname = txtLname.val();
    member.phone = txtPhone.val();
    member.email = txtEmail.val();



    if (txtId.val() === '') { //Lo guarda
        member.id = new Date().getTime();
        saveMember(member);
    } else { //Lo actualiza
        member.id = parseInt(txtId.val());
        updateMember(member);
    }

    memberList();
    //selectMemberList();
    mockData();
    txtFname.val(null);
    txtLname.val(null);
    txtPhone.val(null);
    txtEmail.val(null);
    txtId.val(null);
});



$$('#customerList').on("click", ".btn-user-info", function () {
    var idMember = $$(this).data("id");
    selectMember(idMember);
    $$("label").addClass("active");
    //$$("#modal-Title").html("View Customer");

});


$$('#customerList').on("click", ".btn-editar", function () {
    var idMember = $$(this).data("id");
    selectMember(idMember);
    $$("label").addClass("active");
    $$("#modal-Title").html("Edit Customer");

});

$$('#customerList').on("click", ".btn-eliminar", function () {
    var idMember = $$(this).data("id");
    removeMember(idMember);
    memberList();
    //selectMemberList();
});




$$('#btnCustomers').on('click', function () {
    memberList();
    //selectMemberList();
});


$$('#btnStore').on('click', function () {
    loadStore();
});

//});

////////////////////////////////////////////////////////////////////
///////////////////////funciones para el CRUd///////////////////////
////////////////////////////////////////////////////////////////////
function init() {
    db.transaction(function (tx) {
        tx.executeSql('create table if not exists CUSTOMERS(ID, FNAMES, LNAMES,PHONE, EMAIL)');
        tx.executeSql('create table if not exists PURCHASEORDER(ID, FNAMES, LNAMES,PHONE, EMAIL)');
    }, error, exito);
}

function memberList() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT rowid, ID, FNAMES, LNAMES, PHONE, EMAIL FROM CUSTOMERS', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = "";

                for (var i = 0; i < rs.rows.length; i++) {
                    var member = rs.rows.item(i);
                    var id = member.ID;
                    var fullname = member.FNAMES + ' ' + member.LNAMES;

                    lisHtml += '<li><a href="/customerinfo/" onclick="selectMember(' + id + ')">' + fullname + '</a></li>';
                    // $$('#ccompleteName').html(fullname);

                }

                localStorage.setItem("listHTML", lisHtml);

                // var permdata = localStorage.getItem("listHTML");
                // console.log(permdata);

                $$('#customerList').html(lisHtml);


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



function selectMemberList() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT rowid, ID, FNAMES, LNAMES, PHONE, EMAIL FROM CUSTOMERS', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = "";

                for (var i = 0; i < rs.rows.length; i++) {
                    var member = rs.rows.item(i);
                    var id = member.ID;
                    var fullname = member.FNAMES + ' ' + member.LNAMES;

                    lisHtml += '<li><a href="/catalog/" onclick="selectMember(' + id + ')">' + fullname + '</a></li>';
                    // $$('#ccompleteName').html(fullname);

                }

                localStorage.setItem("listHTML", lisHtml);

                // var permdata = localStorage.getItem("listHTML");
                // console.log(permdata);

                $$('#customerListSelect').html(lisHtml);


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




function selectCustomertoShop() {
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES, PHONE, EMAIL FROM CUSTOMERS', [], function (t, rs) {
            if (rs.rows.length > 0) {
                var lisHtml = '';

                for (var i = 0; i < rs.rows.length; i++) {
                    var member = rs.rows.item(i);
                    var id = member.ID;



                    /*    lisHtml += '<div class="list-group-item customer-list list-group-item-action">'+
                                '<div class="media"><i class="material-icons"></i>' +
                                    '<a href="#" onclick="viewidMember('+ id +')"><img src="img/user.svg" class="mr-3 btn-user-info img-circle" width="48" alt=' + member.FNAMES + ' ' + member.LNAMES +" /></a>" +
                                    '<div class="media-body"><h5 class="mt-0 customer-name">' + member.FNAMES + ' ' + member.LNAMES + '</h5><p> ' + member.PHONE + '</p></div>'+
                                '</div>'+
                            '</div>';
*/

                    lisHtml += '<li><a href="#" onclick="viewidMember(' + id + ')">' + member.FNAMES + ' ' + member.LNAMES + '</li>'

                }


                $$('#customerList').html(lisHtml);



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

function mockData() {
    var str = '{ID: 4,FNAMES: "John", LNAMES: "Dough",PHONE: "0995475142",EMAIL: "johnd@mail.com"}';
    console.log(str);
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO CUSTOMERS (ID, FNAMES, LNAMES, PHONE, EMAIL) VALUES(?, ?, ?,?,?)', [str]);
    });
}

function saveMember(member) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO CUSTOMERS(ID, FNAMES, LNAMES, PHONE, EMAIL) VALUES(?, ?, ?,?,?)', [
            member.id, member.fname, member.lname, member.phone, member.email
        ]);
    }, error, function () {
        alert("Item Saved.");
        // $$(".close, .pop-up").trigger();
        $$(".popup-backdrop").removeClass("backdrop-in");

    });
}



function selectMember(idMember) {
    // localStorage.setItem("customer-name",idMember);
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM CUSTOMERS WHERE ID = ?', [idMember],
            function (t, rs) {
                if (rs.rows.length > 0) {
                    var lisHtml = '';
                    var member = new Object();
                    member.id = rs.rows.item(0).ID;
                    member.fname = rs.rows.item(0).FNAMES;
                    member.lname = rs.rows.item(0).LNAMES;
                    member.phone = rs.rows.item(0).PHONE;
                    member.email = rs.rows.item(0).EMAIL;
                    /* $$('#txt-id').val(rs.rows.item(0).ID);
                     $$('#fname').val(rs.rows.item(0).FNAMES);
                     $$('#lname').val(rs.rows.item(0).LNAMES);
                     $$('#phone').val(rs.rows.item(0).PHONE);
                     $$('#email').val(rs.rows.item(0).EMAIL);*/
                    $$('#customerInfo').html('<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">person</i></div>' +
                        '<div class="item-inner">' +
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
                        '</li>'+
                        '<li>' +
                        '<div class="item-content">' +
                        '<div class="item-media"><i class="material-icons icon-f7">mail</i></div>' +
                        '<div class="item-inner">' +
                        '<div class="item-title">' + rs.rows.item(0).ID + '<input id="memberID" type="hidden" value="' + rs.rows.item(0).ID+'"/></div>' +
                        '<div class="item-after"></div>' +
                        '</div>' +
                        '</div>' +
                        '</li>')


                }
            }, error);
    });
}



function memberProfile(idMember) {
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM CUSTOMERS WHERE ID = ?', [idMember],
            function (t, rs) {
                if (rs.rows.length > 0) {

                    var lisHtml = '';

                    for (var i = 0; i < rs.rows.length; i++) {
                        var member = rs.rows.item(i);
                        var id = member.ID;
                        var fname = member.FNAMES;
                        var lname = member.LNAMES;
                        var phone = member.PHONE;
                        var email = member.EMAIL;


                        lisHtml += '<li>'
                        '<div class="item-content">'
                        '<div class="item-media"><i class="material-icons icon-f7">person</i></div>'
                        '<div class="item-inner">'
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


                    $$('#customerInfo').html(lisHtml);





                }

            }, error);
    });
}



function viewidMember(idMember) {
    localStorage.setItem("idMember", idMember);
    console.log(idMember);
    // viewidMember(idMembre);
    db.readTransaction(function (t) {
        t.executeSql('SELECT ID, FNAMES, LNAMES , PHONE, EMAIL FROM CUSTOMERS WHERE ID = ?', [idMember],
            function (t, rs) {
                if (rs.rows.length > 0) {
                    var member = new Object();
                    member.fname = rs.rows.item(0).FNAMES;
                    member.lname = rs.rows.item(0).LNAMES;
                    member.phone = rs.rows.item(0).PHONE;
                    member.email = rs.rows.item(0).EMAIL;
                    $$('#txt-id').val(rs.rows.item(0).ID);
                    $$('#fname').html(rs.rows.item(0).FNAMES);
                    $$('#lname').html(rs.rows.item(0).LNAMES);
                    $$('#phone').html(rs.rows.item(0).PHONE);
                    $$('#email').html(rs.rows.item(0).EMAIL);
                    //console.log($$(this).attr([id]));
                }
            }, error);
    });
}

function updateMember(member) {
    db.transaction(function (tx) {
        tx.executeSql('UPDATE CUSTOMERS SET FNAMES = ?, LNAMES = ?, PHONE = ?, EMAIL = ?, WHERE ID = ?', [
            member.phone, member.fname, member.lname, member.id
        ]);
    }, error, function () {
        alert("The member has been updated successfully");
    });
}

function removeMember(idMember) {


    var retVal = confirm("This will delete the selected record? Do you want to continue ?");
    if (retVal == true) {
        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM CUSTOMERS WHERE ID = ?', [idMember]);
        }, error, function () {
            alert("The member has been removed successfully");
        })
        return true;
    } else {

        return false;
    }



    /*  db.transaction(function (tx) {
          tx.executeSql('DELETE FROM CUSTOMERS WHERE ID = ?', [idMember]);
      }, error, function () {
          alert("The member has been rem successfully");
      });*/
}

function savePO(member) {
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO CUSTOMERS(ID, FNAMES, LNAMES, PHONE, EMAIL) VALUES(?, ?, ?,?,?)', [
            member.id, member.fname, member.lname, member.phone, member.email
        ]);
    }, error, function () {
        alert("Item Saved.");
        $$(".close").trigger();
    });
}


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
