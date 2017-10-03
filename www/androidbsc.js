/*the don*/


jQuery(document).ready(function () {


    function replaceqt(yut) {

        var tuy = yut.replace(/'/g, "qt");


        var trimo = tuy.trim();

        return trimo;
    }

    function addqt(yut1) {

        var tuy1 = yut1.replace(/qt/g, "'");

        var trimo1 = tuy1.trim();

        return trimo1;

    }


    function empto(input) {

        var length = input.length;

        if (length == 0) {

            return false;
        }

        else {

            return true;
        }

    }

    jQuery("#morefeed").hide();

    jQuery("#moreproducts").hide();

    function sendmessage(message, NetChatId) {

        jQuery('#pogi').show();

        var ata = localStorage.ata;

        var uid = localStorage.uid;

        if (message.length != 0) {

            jQuery(".prodty").hide();

            jQuery(".poppy").hide();


            var params = {

                message: message,
                uid: uid,
                NetChatId: NetChatId,
                ata: ata

            };

            jQuery.ajax({
                type: "POST",
                url: "http://192.168.92.1/server/erge/insertchat.php",
                data: params,
                crossDomain: true,
                cache: false,
                timeout: 25000,
                success: function (data) {

                    sendo();

                    ata = " ";

                },
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;

        }

        else {

            jQuery('#pogi').hide();


            return false;

        }



    }

    function alertochato() {

        datacon();

        window.setTimeout(showchats, 10000);
    }

    function hoinotty() {

        jQuery('.notifico').hide();

    }



    function datacon() {

        jQuery('#pogi').hide();


        jQuery("#notty2").show();

        window.setTimeout(hoinotty, 2000);

    }

    function notting() {
        jQuery('#pogi').hide();


        jQuery("#notty3").show();

        window.setTimeout(hoinotty, 2000);

    }

    function sendo() {

        jQuery("#notty4").show();

        window.setTimeout(hoinotty, 2000);

    }

    function likodiko() {

        jQuery("#pogilike").show();

        window.setTimeout(hoinotty, 2000);

    }



    function imagoo() {
        jQuery('#pogi').hide();


        jQuery("#notty5").show();

        window.setTimeout(hoinotty, 2000);

    }

    function nochats() {

        jQuery('#pogi').hide();

        jQuery("#notty6").show();

        window.setTimeout(hoinotty, 2000);

    }

    function onLoad() {

        document.addEventListener('deviceready', onDeviceReady);

    }

    function onDeviceReady() {

        StatusBar.overlaysWebView(false);

        
    var logo = localStorage.login;


    var uid = localStorage.uid;

    if (logo == "true" && uid != " ") {

        showchats();

        fetcho();


    }



    else {

        window.location.href = "#register";

        alert("Sign Up If You Dont Have An Account...Sign In If You Have One.");

    }



        
    }

    onLoad();

    function showchats() {

        var uid = localStorage.uid;

        var params = {
            uid: uid,
        };

        if (uid != " ") {
            jQuery.ajax({

                type: 'POST',
                url: 'http://192.168.92.1/server/erge/NetChatEngineGetChats.php',
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    var there = " ";

                    var there2 = " ";

                    if (data == "New") {

                        jQuery("#notty").show();

                        window.setTimeout(hoinotty, 2000);

                        there = jQuery("#ident").text();

                        there2 = jQuery("#ident2").text();

                        if (there != " ") {

                            showchatsNew();

                        }


                        if (there2 != " ") {

                            ghettomessagenew();

                        }

                    }

                    showchats();
                },
                timeout: 27000,
                error: function () {

                    window.setTimeout(alertochato, 5000);



                },
            })
            jQuery('#pogi').hide();


            return false;
        }


    }





    function fetcho() {



        fetchrprod();
        fetchrserv();
        fetchrwprod();
        fetchrwserv();

        window.setTimeout(fetcho, 180000);

    }



    function fetchrprod() {

        var uid = localStorage.uid;

        var params = {
            uid: uid
        };

        if (uid != " ") {
            jQuery.ajax({

                url: "http://192.168.92.1/server/fetchr/fetchrprod.php",
                method: "POST",
                dataType: 'json',
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data.length == 0) {

                        return false;

                    }

                    else {
                        jQuery("#morefeed").show();

                        var z = 1;
                        jQuery.each(data, function (i, item) {

                            jQuery("#Am_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                            jQuery("#Hm" + z + "").css("margin", "8px");
                            jQuery("#Am" + z + "").css("margin", "8px");

                            jQuery("#Am" + z + "").html('<br /><center><a class="asbutton">Like </center></a><br />');

                            jQuery("#Hm" + z + "").html('<br /><center><a class="asbutton">NetChat </center></a><br />');
                            jQuery("#Bm" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                                addqt(item.id) + ' </h4 >');
                            jQuery("#Cm" + z + "").html('<center><span class="pio">Product :</span></center><br /><h4 class = "dito"> ' +
                                addqt(item.prodname) + ' </h4 >');
                            jQuery("#Dm" + z + "").html('<h4 class = "dito">' +
                                addqt(item.prodprice) + '</h4>');
                            jQuery("#Em" + z + "").html('<h4 class = "dito">Condition : ' +
                                addqt(item.prodstate) + '</h4>');

                            jQuery("#Gm" + z + "").html('<h4 class = "dito">Details : <br />' +
                                addqt(item.proddescription) + '</h4>');

                            jQuery("#Jm" + z + "").html('<h4 style="display : none"><div>' +
                                addqt(item.userid) + '</div></h4>');

                            jQuery("#Fm" + z + "").html('<h4 style="display : none"><div>' +
                                addqt(item.prodname) + '</div></h4>');

                            jQuery("#Km" + z + "").html('<h4 style="display : none"><div>' +
                                item.prez + '</div></h4>');

                            jQuery("#Im" + z + "").html('<img src="images/VIEW.jpeg" />');


                            z++;

                        });
                    }


                },
                timeout: 25000,


            });

            return false;
        }


    }

    function fetchrserv() {


        var uid = localStorage.uid;

        var params = {
            uid: uid
        };

        if (uid != " ") {

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetchr/fetchrserv.php",
                method: "POST",
                data: params,
                dataType: 'json',
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data.length == 0) {

                        return false;

                    }
                    else {
                        var z = 1;

                        jQuery.each(data, function (i, item) {

                            jQuery("#An_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                            jQuery("#Hn" + z + "").css("margin", "8px");
                            jQuery("#An" + z + "").css("margin", "8px");

                            jQuery("#An" + z + "").html('<br /><center><a class="asbutton">Like </center></a><br />');
                            jQuery("#Hn" + z + "").html('<br /><center><a class="asbutton">NetChat </center></a><br />');
                            jQuery("#Bn" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                                addqt(item.id) + ' </h4 >');
                            jQuery("#Cn" + z + "").html('<center><span class="pio">Service :</span></center><br /><h4 class = "dito">' +
                                addqt(item.servname) + ' </h4 >');
                            jQuery("#Dn" + z + "").html('<h4 class = "dito">' +
                                addqt(item.servprice) + '</h4>');

                            jQuery("#Gn" + z + "").html('<h4 class = "dito">Details  : <br />' +
                                addqt(item.servdescription) + '</h4>');

                            jQuery("#Jn" + z + "").html('<h4 style="display : none"><div>' +
                                addqt(item.userid) + '</div></h4>');

                            jQuery("#Fn" + z + "").html('<h4 style="display : none"><div>' +
                                addqt(item.servname) + '</div></h4>');

                            jQuery("#Kn" + z + "").html('<h4 style="display : none"><div>' +
                                item.prez + '</div></h4>');

                            jQuery("#In" + z + "").html('<img src="images/VIEW.jpeg" />');


                            z++;

                        });
                    }


                },
                timeout: 25000,
            });
            return false;
        }


    }

    function fetchrwprod() {

        var uid = localStorage.uid;

        var params = {
            uid: uid
        };

        if (uid != " ") {

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetchr/fetchrwprod.php",
                method: "POST",
                data: params,
                dataType: 'json',
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data.length == 0) {

                        return false;

                    }
                    else {
                        var z = 1;
                        jQuery.each(data, function (i, item) {


                            jQuery("#Aooo_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                            jQuery("#Hooo" + z + "").css("margin", "8px");

                            jQuery("#Aooo" + z + "").html('<br /><br /><center><a class="asbutton">NetChat </center></a><br />');
                            jQuery("#Booo" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                                addqt(item.id) + ' </h4 >');
                            jQuery("#Cooo" + z + "").html('<center><span class="pio">Wanted Product :</span></center><br /><h4 class = "dito"> ' +
                                addqt(item.vacname) + ' </h4 >');
                            jQuery("#Dooo" + z + "").html('<h4 class = "dito">' +
                                addqt(item.vacprice) + '</h4>');
                            jQuery("#Eooo" + z + "").html('<h4 class = "dito">Condition : ' +
                                addqt(item.vacstate) + '</h4>');

                            jQuery("#Gooo" + z + "").html('<h4 class = "dito">Details : <br />' +
                                addqt(item.vacdescription) + '</h4>');

                            jQuery("#Jooo" + z + "").html('<h4 style="display : none"><div>' +
                                addqt(item.userid) + '</div></h4>');

                            jQuery("#Fooo" + z + "").html('<h4 style="display : none"><div>' +
                                addqt(item.vacname) + '</div></h4>');

                            jQuery("#Kooo" + z + "").html('<h4 style="display : none"><div>' +
                                item.prez + '</div></h4>');

                            jQuery("#Iooo" + z + "").html('<img src="images/VIEW.jpeg" />');

                            z++;

                        });
                    }


                },
                timeout: 25000,
            });
            return false;
        }

    }

    function fetchrwserv() {

        var uid = localStorage.uid;

        var params = {
            uid: uid
        };

        if (uid != " ") {
            jQuery.ajax({

                url: "http://192.168.92.1/server/fetchr/fetchrwserv.php",
                method: "POST",
                data: params,
                dataType: 'json',
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data.length == 0) {

                        return false;

                    }
                    else {
                        var z = 1;

                        jQuery.each(data, function (i, item) {

                            jQuery("#Appp_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                            jQuery("#Hppp" + z + "").css("margin", "8px");
                            jQuery("#Appp" + z + "").html('<br /><br /><center><a class="asbutton">NetChat </center></a><br />');
                            jQuery("#Bppp" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                                addqt(item.id) + ' </h4 >');
                            jQuery("#Cppp" + z + "").html('<center><span class="pio">Wanted Service :</span></center><br /> <h4 class = "dito">' +
                                addqt(item.vacname) + ' </h4 >');
                            jQuery("#Dppp" + z + "").html('<h4 class = "dito">' +
                                addqt(item.vacprice) + '</h4>');

                            jQuery("#Gppp" + z + "").html('<h4 class = "dito">Details : <br />' +
                                addqt(item.vacdescription) + '</h4>');

                            jQuery("#Jppp" + z + "").html('<h4 style="display : none"><div>' +
                                addqt(item.userid) + '</div></h4>');

                            jQuery("#Fppp" + z + "").html('<h4 style="display : none"><div>' +
                                addqt(item.vacname) + '</div></h4>');

                            jQuery("#Kppp" + z + "").html('<h4 style="display : none"><div>' +
                                item.prez + '</div></h4>');

                            jQuery("#Ippp" + z + "").html('<img src="images/VIEW.jpeg" />');


                            z++;

                        });
                    }


                },
                timeout: 25000,
            });

            return false;
        }


    }

    jQuery("#morefeed").on("tap", function () {

        fetchrprod();
        fetchrserv();
        fetchrwprod();
        fetchrwserv();

    });


    function showproducts2() {

        jQuery('#pogi').show();

        var z = 1;

        var uid = localStorage.uid;

        jQuery(".cont1").hide();

        var params = {
            uid: uid
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/mine/showproducts2.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {

                    jQuery.each(data, function (i, item) {

                        jQuery("#a_" + z + "").show();
                        jQuery("#i" + z + "").html(' ');

                        jQuery("#a_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#a" + z + "").css("margin", "8px");
                        jQuery("#h" + z + "").css("margin", "8px");
                        jQuery("#a" + z + "").html('<a data-transition="pop" href="#productsEdito" data-transition="pop"><center><button class="button">Edit</button> </center></a>');
                        jQuery("#h" + z + "").html('<a data-transition="pop" href="#proddelete"  ><center><button class="button">Remove</button> </center></a>');
                        jQuery("#b" + z + "").html('<center><h3>Product # ' + z + '</h3></center> ');
                        jQuery("#c" + z + "").html('<h4 class = "dito">Name : ' +
                            addqt(item.prodname) + ' </h4 >');
                        jQuery("#d" + z + "").html('<h4 class = "dito">Pricing  : ' +
                            addqt(item.prodprice) + '</h4>');
                        jQuery("#e" + z + "").html('<h4 class = "dito">Condition  : ' +
                            addqt(item.prodstate) + '</h4>');
                        jQuery("#f" + z + "").html('<h4 class = "dito">Section  : ' +
                            addqt(item.prodcategory) + '</h4>');
                        jQuery("#g" + z + "").html('<h4 class = "dito">Details  : <br />' +
                            addqt(item.proddescription) + '</h4>');

                        jQuery("#i" + z + "").html('<img src="images/VIEW.jpeg"/>');

                        jQuery("#j" + z + "").html('<h4 style="display:none">' + item.prez + '</h4>');

                        z++;

                    });

                    jQuery('#pogi').hide();


                }




            },
            timeout: 25000,
            error: function () {

                datacon();

            }

        })
        return false;

        jQuery('#pogi').hide();

    }

    function showvacproducts() {

        jQuery(".sectovac").hide();

        jQuery('#pogi').show();

        var z = 1;

        var uid = localStorage.uid;

        var params = {
            uid: uid
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/mine/showvacproducts.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {

                    jQuery.each(data, function (i, item) {

                        jQuery("#Av_" + z + "").show();
                        jQuery("#Av" + z + "").html(' ');

                        jQuery("#Av_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#Av" + z + "").css("margin", "8px");
                        jQuery("#Hv" + z + "").css("margin", "8px");
                        jQuery("#Av" + z + "").html('<a href="#listpEdito" data-transition="pop"><center><button class="button">Edit</button> </center></a>');
                        jQuery("#Hv" + z + "").html('<a href="#proddelete" data-transition="pop"  ><center><button class="button">Remove</button> </center></a>');
                        jQuery("#Bv" + z + "").html('<center><h3>Product # ' + z + '</h3></center> ');
                        jQuery("#Cv" + z + "").html('<h4 class = "dito">Name : ' +
                            addqt(item.vacname) + ' </h4 >');
                        jQuery("#Dv" + z + "").html('<h4 class = "dito">Pricing  : ' +
                            addqt(item.vacprice) + '</h4>');
                        jQuery("#Ev" + z + "").html('<h4 class = "dito">Condition  : ' +
                            addqt(item.vacstate) + '</h4>');
                        jQuery("#Fv" + z + "").html('<h4 class = "dito">Section  : ' +
                            addqt(item.vaccategory) + '</h4>');
                        jQuery("#Gv" + z + "").html('<h4 class = "dito">Details  : <br />' +
                            addqt(item.vacdescription) + '</h4>');

                        jQuery("#Kv" + z + "").html('<img src="images/VIEW.jpeg"/>');

                        jQuery("#Jv" + z + "").html('<h4 style="display:none">' + item.prez + '</h4>');

                        z++;

                    });

                    jQuery('#pogi').hide();

                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }

        })
        return false;

        jQuery('#pogi').hide();

    }

    function showservice() {
        jQuery('#pogi').show();

        var z = 41;
        var y = 1;

        var uid = localStorage.uid;

        jQuery(".cont2").hide();
        var uid = localStorage.uid;

        var params = {
            uid: uid
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/mine/showservice.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {

                    jQuery.each(data, function (i, item) {

                        jQuery("#a_" + z + "").show();
                        jQuery("#i" + z + "").html(' ');

                        jQuery("#a_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#a" + z + "").css("margin", "8px");
                        jQuery("#h" + z + "").css("margin", "8px");

                        jQuery("#a" + z + "").html('<a href="#serviceEdito" data-transition="pop"><center><button class="button">Edit</button> </center></a>');
                        jQuery("#h" + z + "").html('<a data-transition="pop" href="#servdelete"  ><center><button class="button">Remove</button> </center></a>');
                        jQuery("#b" + z + "").html('<center><h3>Service # ' + y + '</h3></center> ');
                        jQuery("#c" + z + "").html('<h4 class = "dito">Name : ' +
                            addqt(item.servname) + ' </h4 >');
                        jQuery("#d" + z + "").html('<h4 class = "dito">Pricing  : ' +
                            addqt(item.servprice) + '</h4>');

                        jQuery("#f" + z + "").html('<h4 class = "dito">Section  : ' +
                            addqt(item.servcategory) + '</h4>');
                        jQuery("#g" + z + "").html('<h4 class = "dito">Details  : <br />' +
                            addqt(item.servdescription) + '</h4>');

                        jQuery("#i" + z + "").html('<img src="images/VIEW.jpeg"/>');

                        jQuery("#j" + z + "").html('<h4 style="display:none">' + item.prez + '</h4>');


                        z++;
                        y++;


                    });

                    jQuery('#pogi').hide();

                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        })
        return false;

        jQuery('#pogi').hide();

    }

    function showvacservice() {

        jQuery('#pogi').show();

        var z = 1;

        var uid = localStorage.uid;

        jQuery(".sectovac2").hide();

        var params = {
            uid: uid
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/mine/showvacservices.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {


                    jQuery.each(data, function (i, item) {

                        jQuery("#Aw_" + z + "").show();
                        jQuery("#Aw" + z + "").html(' ');

                        jQuery("#Aw_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#Aw" + z + "").css("margin", "8px");
                        jQuery("#Hw" + z + "").css("margin", "8px");
                        jQuery("#Aw" + z + "").html('<a href="#listsEdito" data-transition="pop"><center><button class="button">Edit</button> </center></a>');
                        jQuery("#Hw" + z + "").html('<a data-transition="pop" href="#proddelete"  ><center><button class="button">Remove</button> </center></a>');
                        jQuery("#Bw" + z + "").html('<center><h3>Service # ' + z + '</h3></center> ');
                        jQuery("#Cw" + z + "").html('<h4 class = "dito">Name : ' +
                            addqt(item.vacname) + ' </h4 >');
                        jQuery("#Dw" + z + "").html('<h4 class = "dito">Pricing  : ' +
                            addqt(item.vacprice) + '</h4>');
                        jQuery("#Fw" + z + "").html('<h4 class = "dito">Section  : ' +
                            addqt(item.vaccategory) + '</h4>');
                        jQuery("#Gw" + z + "").html('<h4 class = "dito">Details  : <br />' +
                            addqt(item.vacdescription) + '</h4>');

                        jQuery("#Kw" + z + "").html('<img src="images/VIEW.jpeg"/>');

                        jQuery("#Jw" + z + "").html('<h4 style="display:none">' + item.prez + '</h4>');


                        z++;

                    });

                    jQuery('#pogi').hide();

                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }

        })
        return false;

        jQuery('#pogi').hide();

    }

    function showcustomers() {

        jQuery('#pogi').show();

        jQuery(".poppy").hide();

        jQuery(".secto3").hide();
        var uid = localStorage.uid;

        var params = {
            uid: uid
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/show/showcustomers.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {
                    var z = 1;
                    jQuery.each(data, function (i, item) {
                        jQuery("#aC_" + z + "").show();
                        jQuery("#aC" + z + "").html('<br /><a data-transition="pop" href="#"     ><center><button class="button">NetChat</button> </center></a>');

                        jQuery("#hC" + z + "").html('<br /><a data-transition="pop" href="#custodel"  ><center><button class="button">Remove</button> </center></a><br />');

                        jQuery("#aC_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#bC" + z + "").html('<center><h3>  ' + addqt(item.netwekname) + '</h3></center> ');


                        jQuery("#dC" + z + "").html('<h4 style="display : none">' +
                            addqt(item.prodidoname) + '</h4>');

                        if (item.sectol == 'product') {
                            jQuery("#eC" + z + "").html('<center><h3> Liked...' + item.prodidoname + '  </h3></center> ');
                        }
                        else {
                            jQuery("#eC" + z + "").html('<center><h3> Liked Service...' + item.prodidoname + ' </h3></center> ');
                        }

                        jQuery("#iC" + z + "").html('<h4 style="display : none">' +
                            addqt(item.liker) + '</h4>');

                        jQuery("#fC" + z + "").html('<img src="images/VIEW.jpeg"/>');

                        jQuery("#jC" + z + "").html('<h4 style="display : none">' +
                            addqt(item.prodido) + '</h4>');

                        jQuery("#kC" + z + "").html('<h4 style="display : none">' +
                            addqt(item.sectol) + '</h4>');

                        z++;

                    });

                    jQuery('#pogi').hide();

                }

            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        })

        return false;

        jQuery('#pogi').hide();

    }


    function fetch_prof2() {

        var uid = localStorage.uid;

        var params = {
            uid: replaceqt(uid)
        };

        jQuery.ajax({

            url: "http://192.168.92.1/server/fetch/fetch.php",
            method: "POST",
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {

                if (data == "Nothing") {

                    jQuery("#ProfilePic").html(" ");
                    jQuery("#ProfilePic").html('<img  src= "images/default.jpg"/>');
                }

                else {

                    jQuery("#ProfilePic").html(" ");
                    jQuery("#ProfilePic").html(data);

                }
            },
            timeout: 25000,
            error: function () {

                datacon();

            }

        });

        jQuery('#pogi').hide();

        return false;
    }


    function showlikedprod() {

        jQuery('#pogi').show();


        jQuery(".poppy").hide();
        jQuery(".secto1").hide();
        var uid = localStorage.uid;

        var params = {
            uid: uid
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/show/showliked.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {
                    var z = 39;
                    jQuery.each(data, function (i, item) {
                        jQuery("#aA_" + z + "").show();
                        if (item.prodname != null) {
                            jQuery("#aA_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                            jQuery("#aA" + z + "").css("margin", "8px");
                            jQuery("#hA" + z + "").css("margin", "8px");
                            jQuery("#aA" + z + "").html('<a data-transition="pop" href="#dealow"     ><center><button class="button">NetChat</button> </center></a>');
                            jQuery("#hA" + z + "").html('<a data-transition="pop" href="#likodel"  ><center><button class="button">Remove</button> </center></a>');

                            jQuery("#cA" + z + "").html('<h4 class = "dito">' +
                                addqt(item.prodidoname) + ' </h4 >');
                            jQuery("#dA" + z + "").html('<h4 class = "dito">' +
                                addqt(item.prodprice) + '</h4>');
                            jQuery("#eA" + z + "").html('<h4 class = "dito">Condition  : ' +
                                addqt(item.prodstate) + '</h4>');
                            jQuery("#fA" + z + "").html('<h4 class = "dito">Section  : ' +
                                addqt(item.prodcategory) + '</h4>');
                            jQuery("#gA" + z + "").html('<h4 class = "dito"> Details : <br />' +
                                addqt(item.proddescription) + '</h4>');
                            jQuery("#iA" + z + "").html('<img src="images/VIEW.jpeg"/>');

                            jQuery("#jA" + z + "").html('<h4 style="display: none">' +
                                addqt(item.liked) + '</h4>');

                            jQuery("#bA" + z + "").html('<h4 style="display: none">' +
                                addqt(item.prodido) + '</h4>');

                            jQuery("#kA" + z + "").html('<h4 style="display: none">' +
                                addqt(item.prez) + '</h4>');


                        }

                        else if (item.prodname == null) {
                            jQuery("#aA_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                            jQuery("#aA" + z + "").css("margin", "8px");
                            jQuery("#hA" + z + "").css("margin", "8px");
                            jQuery("#hA" + z + "").html('<a data-transition="pop" href="#likodel"  ><center><button class="button">Remove</button> </center></a>');

                            jQuery("#cA" + z + "").html('<center><h3>' + item.prodidoname + '</h3></center> ');
                            jQuery("#dA" + z + "").html('<center><h3> was removed from the shop by supplier</h3></center> ');
                        }
                        z--;

                    });

                    jQuery('#pogi').hide();

                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        })
        return false;

        jQuery('#pogi').hide();

    }

    function showlikedserv() {
        jQuery('#pogi').show();

        jQuery(".poppy").hide();

        jQuery(".secto2").hide();
        var uid = localStorage.uid;

        var params = {
            uid: uid
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/show/showlikedserv.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {
                    var z = 39;
                    jQuery.each(data, function (i, item) {

                        jQuery("#aB_" + z + "").show();
                        if (item.servname != null) {
                            jQuery("#aB_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                            jQuery("#aB" + z + "").css("margin", "8px");
                            jQuery("#hB" + z + "").css("margin", "8px");
                            jQuery("#aB" + z + "").html('<a data-transition="pop" href="#dealow"     ><center><button class="button">NetChat</button> </center></a>');
                            jQuery("#hB" + z + "").html('<a data-transition="pop" href="#likodelservo"  ><center><button class="button">Remove</button> </center></a>');

                            jQuery("#cB" + z + "").html('<h4 class = "dito">' +
                                addqt(item.servname) + ' </h4 >');
                            jQuery("#dB" + z + "").html('<h4 class = "dito">' +
                                addqt(item.servprice) + '</h4>');
                            jQuery("#fB" + z + "").html('<h4 class = "dito">Section  : ' +
                                addqt(item.servcategory) + '</h4>');
                            jQuery("#gB" + z + "").html('<h4 class = "dito">Details  : <br />' +
                                addqt(item.servdescription) + '</h4>');
                            jQuery("#iB" + z + "").html('<img src="images/VIEW.jpeg"/>');


                            jQuery("#jB" + z + "").html('<h4 style="display: none">' +
                                addqt(item.liked) + '</h4>');

                            jQuery("#bB" + z + "").html('<h4 style="display: none">' +
                                addqt(item.prodido) + '</h4>');

                            jQuery("#kB" + z + "").html('<h4 style="display: none">' +
                                addqt(item.prez) + '</h4>');

                        }
                        else if (item.servname == null) {
                            jQuery("#aB_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                            jQuery("#aB" + z + "").css("margin", "8px");
                            jQuery("#hB" + z + "").css("margin", "8px");
                            jQuery("#hB" + z + "").html('<a data-transition="pop" href="#likodel"  ><center><button class="button">Remove</button> </center></a>');

                            jQuery("#cB" + z + "").html('<center><h3> ' + item.prodidoname + '</h3></center> ');
                            jQuery("#dB" + z + "").html('<center><h3> was removed from the shop by provider</h3></center> ');
                        }

                        z--;

                    });

                    jQuery('#pogi').hide();

                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        })
        return false;

        jQuery('#pogi').hide();

    }

    function showshoppy(selector) {

        jQuery('#pogi').show();

        jQuery("#moreproducts").hide();


        jQuery(".poppy").hide();


        var uid = localStorage.uid;
        jQuery("#hedzo").text(selector);

        jQuery(".secto").hide();


        var params = {
            uid: uid,
            section: selector
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/show/showsectionprod.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }

                else {

                    jQuery("#moreproducts").show();


                    var z = 1;
                    jQuery.each(data, function (i, item) {
                        jQuery("#Aa_" + z + "").show();

                        jQuery("#Aa_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#Ha" + z + "").css("margin", "8px");

                        jQuery("#Aa" + z + "").css("margin", "8px");

                        jQuery("#Aa" + z + "").html('<a data-transition="pop" ><center><button class="button">Like</button> </center></a>');

                        jQuery("#Ha" + z + "").html('<a data-transition="pop" href="#"     ><center><button class="button">NetChat</button></center></a>');
                        jQuery("#Ba" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                            addqt(item.id) + ' </h4 >');
                        jQuery("#Ca" + z + "").html('<h4 class = "dito">' +
                            addqt(item.prodname) + ' </h4 >');
                        jQuery("#Da" + z + "").html('<h4 class = "dito">' +
                            addqt(item.prodprice) + '</h4>');
                        jQuery("#Ea" + z + "").html('<h4 class = "dito">Condition  : ' +
                            addqt(item.prodstate) + '</h4>');

                        jQuery("#Ga" + z + "").html('<h4 class = "dito">Details : <br />' +
                            addqt(item.proddescription) + '</h4>');

                        jQuery("#Ja" + z + "").html('<h4 style="display : none"><div>' +
                            addqt(item.userid) + '</div></h4>');

                        jQuery("#Ka" + z + "").html('<h4 style="display : none"><div>' +
                            item.prez + '</div></h4>');

                        jQuery("#Ia" + z + "").html('<img src="images/VIEW.jpeg" />');


                        z++;

                    });

                    jQuery('#pogi').hide();

                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        })

        return false;

        jQuery('#pogi').hide();

    }

    jQuery("#moreproducts").on("tap", function () {

        var selector = jQuery("#hedzo").text();
        showshoppy(selector);

    });

    function showshoppyserv(selector) {

        jQuery('#pogi').show();

        jQuery("#moreservices").hide();


        jQuery(".poppy").hide();

        var uid = localStorage.uid;
        jQuery("#hedzo1").text(selector);

        jQuery(".secto").hide();


        var params = {
            uid: uid,
            section: selector
        };

        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/show/showsectionserv.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {
                    var z = 1;

                    jQuery("#moreservices").show();


                    jQuery.each(data, function (i, item) {

                        jQuery("#Ab_" + z + "").show();
                        jQuery("#Ab_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#Ab" + z + "").css("margin", "8px");
                        jQuery("#Hb" + z + "").css("margin", "8px");

                        jQuery("#Ab" + z + "").html('<a data-transition="pop"      ><center><button class="button">Like</button> </center></a>');
                        jQuery("#Hb" + z + "").html('<a data-transition="pop" href="#"     ><center><button class="button">NetChat</button> </center></a>');
                        jQuery("#Bb" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                            addqt(item.id) + ' </h4 >');
                        jQuery("#Cb" + z + "").html('<h4 class = "dito">' +
                            addqt(item.servname) + ' </h4 >');
                        jQuery("#Db" + z + "").html('<h4 class = "dito">' +
                            addqt(item.servprice) + '</h4>');

                        jQuery("#Gb" + z + "").html('<h4 class = "dito">Details  : <br />' +
                            addqt(item.servdescription) + '</h4>');

                        jQuery("#Jb" + z + "").html('<h4 style="display : none"><div>' +
                            addqt(item.userid) + '</div></h4>');

                        jQuery("#Kb" + z + "").html('<h4 style="display : none"><div>' +
                            item.prez + '</div></h4>');

                        jQuery("#Ib" + z + "").html('<img src="images/VIEW.jpeg" />');


                        z++;

                    });

                    jQuery('#pogi').hide();

                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        })

        return false;

        jQuery('#pogi').hide();


    }

    jQuery("#moreservices").on("tap", function () {

        var selector = jQuery("#hedzo1").text();
        showshoppyserv(selector);

    });


    function showwantowi(selector) {

        jQuery('#pogi').show();

        jQuery("#morewproducts").hide();


        jQuery(".poppy").hide();

        var uid = localStorage.uid;
        jQuery("#hedzo2").text(selector);

        jQuery(".sectow").hide();


        var params = {
            uid: uid,
            section: selector
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/show/showsectionvacprod.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {
                    var z = 1;
                    jQuery("#morewproducts").show();


                    jQuery.each(data, function (i, item) {


                        jQuery("#Aaaa_" + z + "").show();
                        jQuery("#Aaaa_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#Aaaa" + z + "").css("margin", "8px");
                        jQuery("#Haaa" + z + "").css("margin", "8px");

                        jQuery("#Aaaa" + z + "").html('<a data-transition="pop" href="#"><center><button class="button">NetChat</button> </center></a>');
                        jQuery("#Baaa" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                            addqt(item.id) + ' </h4 >');
                        jQuery("#Caaa" + z + "").html('<h4 class = "dito">' +
                            addqt(item.vacname) + ' </h4 >');
                        jQuery("#Daaa" + z + "").html('<h4 class = "dito">' +
                            addqt(item.vacprice) + '</h4>');
                        jQuery("#Eaaa" + z + "").html('<h4 class = "dito">Condition  : ' +
                            addqt(item.vacstate) + '</h4>');

                        jQuery("#Gaaa" + z + "").html('<h4 class = "dito">Details : <br />' +
                            addqt(item.vacdescription) + '</h4>');

                        jQuery("#Jaaa" + z + "").html('<h4 style="display : none"><div>' +
                            addqt(item.userid) + '</div></h4>');

                        jQuery("#Kaaa" + z + "").html('<h4 style="display : none"><div>' +
                            item.prez + '</div></h4>');

                        jQuery("#Iaaa" + z + "").html('<img src="images/VIEW.jpeg" />');

                        z++;

                    });

                    jQuery('#pogi').hide();

                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        })

        return false;

        jQuery('#pogi').hide();

    }

    jQuery("#morewproducts").on("tap", function () {

        var selector = jQuery("#hedzo2").text();
        showwantowi(selector);

    });


    function showwantowiserv(selector) {

        jQuery('#pogi').show();

        jQuery("#morewservices").hide();


        jQuery(".poppy").hide();

        var uid = localStorage.uid;
        jQuery("#hedzo3").text(selector);

        jQuery(".sectow").hide();


        var params = {
            uid: uid,
            section: selector
        };

        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/show/showsectionvacserv.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    notting();

                    jQuery('#pogi').hide();

                }
                else {
                    var z = 1;

                    jQuery("#morewservices").show();


                    jQuery.each(data, function (i, item) {

                        jQuery("#Abbb_" + z + "").show();
                        jQuery("#Abbb_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#Abbb" + z + "").css("margin", "8px");
                        jQuery("#Hbbb" + z + "").css("margin", "8px");
                        jQuery("#Abbb" + z + "").html('<a data-transition="pop" href="#"     ><center><button class="button">NetChat</button> </center></a>');
                        jQuery("#Bbbb" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                            addqt(item.id) + ' </h4 >');
                        jQuery("#Cbbb" + z + "").html('<h4 class = "dito">' +
                            addqt(item.vacname) + ' </h4 >');
                        jQuery("#Dbbb" + z + "").html('<h4 class = "dito">' +
                            addqt(item.vacprice) + '</h4>');

                        jQuery("#Gbbb" + z + "").html('<h4 class = "dito">Details : <br />' +
                            addqt(item.vacdescription) + '</h4>');

                        jQuery("#Jbbb" + z + "").html('<h4 style="display : none"><div>' +
                            addqt(item.userid) + '</div></h4>');

                        jQuery("#Kbbb" + z + "").html('<h4 style="display : none"><div>' +
                            item.prez + '</div></h4>');

                        jQuery("#Ibbb" + z + "").html('<img src="images/VIEW.jpeg" />');


                        z++;

                    });

                    jQuery('#pogi').hide();

                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        })


        return false;

        jQuery('#pogi').hide();

    }

    jQuery("#morewservices").on("tap", function () {

        var selector = jQuery("#hedzo3").text();
        showwantowiserv(selector);

    });


    function getmessage(z, munhu, mess) {

        var uid = localStorage.uid;

        var params = {
            uid: uid,
            NetChatId: munhu

        };

        jQuery.ajax({
            type: "POST",
            url: "http://192.168.92.1/server/erge/messagesface.php",
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                jQuery.each(data, function (i, item) {
                    var dato = item.datesent;
                    if (item.sender == munhu) {

                        jQuery("#AWW_" + z + "").css({ "border": "2px solid #33ffff", "margin": "10px" });


                        jQuery("#" + mess + z + "").html('<center><h3 class="messo" style="margin-left:5%;color :#222"> @ ' + item.ata + ': <br /><br />' +
                            addqt(item.message) + '<br/><br/></h3 ></center><center><h3><span style="color:#3399ff">' + dato.slice(2) + '</span> </h3></center>');

                        jQuery("#DWW" + z + "").html('<center><h3 style="display : none"> ' + item.ata + '');

                    }

                    else {
                        var dato = item.datesent;
                        jQuery("#AWW_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });

                        jQuery("#" + mess + z + "").html('<center><h3 class="messo" style="margin-left:5%;color :#222">Me @ ' + item.ata + ': <br /><br />' +
                            addqt(item.message) + '<br/><br/></h3 ></center><center><h3><span style="color:#3399ff">' + dato.slice(2) + '</span></h3></center> ');

                        jQuery("#DWW" + z + "").html('<center><h3 style="display : none"> ' + item.ata + '');

                    }


                });




            },
            timeout: 25000,
            error: function () {

                datacon();

            }



        });

        jQuery('#pogi').hide();


        return false;
    }

    function showchatsreload() {

        var uid = localStorage.uid;

        jQuery(".chato").hide();

        var params = {
            uid: uid
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/erge/getchats.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    nochats();
                }

                else {
                    var z = 39;

                    jQuery.each(data, function (i, item) {
                        jQuery("#AWW_" + z + "").show();
                        jQuery("#AWW_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#AWW" + z + "").css("padding", "0px");
                        jQuery("#HWW" + z + "").css("padding", "0px");
                        jQuery("#AWW" + z + "").html('<br /><a data-transition="pop" href="#chatbox" ><center><button class="button">Chat</button> </center></a>');
                        jQuery("#HWW" + z + "").html('<a data-transition="pop" href="#dilidel"  ><center><button class="button">Remove</button> </center></a><br />');

                        jQuery("#BWW" + z + "").html('<center><h2 style="color : #222">' +
                            addqt(item.netwekname) + '</h2></center>');

                        jQuery("#JWW" + z + "").html('<h4 style="display : none">' + item.password + '</h4>');

                        var mess = "EWW";



                        getmessage(z, item.password, mess)

                        z--;

                    });


                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }

        })

        jQuery('#pogi').hide();


        return false;
    }

    function showchatsNew() {

        var uid = localStorage.uid;


        var params = {
            uid: uid
        };
        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/erge/getchats.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data.length == 0) {

                    nochats();
                }

                else {
                    var z = 39;

                    jQuery.each(data, function (i, item) {
                        jQuery("#AWW_" + z + "").show();
                        jQuery("#AWW_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                        jQuery("#AWW" + z + "").css("padding", "0px");
                        jQuery("#HWW" + z + "").css("padding", "0px");
                        jQuery("#AWW" + z + "").html('<br /><a data-transition="pop" href="#chatbox" ><center><button class="button">Chat</button> </center></a>');
                        jQuery("#HWW" + z + "").html('<a data-transition="pop" href="#dilidel"  ><center><button class="button">Remove</button> </center></a><br />');

                        jQuery("#BWW" + z + "").html('<center><h2 style="color : #222">' +
                            addqt(item.password) + '</h2></center>');

                        jQuery("#JWW" + z + "").html('<h4 style="display : none">' + item.password + '</h4>');

                        var mess = "EWW";



                        getmessage(z, item.password, mess)

                        z--;

                    });


                }


            },
            timeout: 25000,
            error: function () {

                datacon();

            }


        })
        jQuery('#pogi').hide();

        return false;
    }

    function ghettomessage() {

        var uid = localStorage.uid;


        var NetChatId = " ";

        var NetWekName = " ";

        NetChatId = replaceqt(jQuery("#JXX1").text());

        NetWekName = jQuery("#GXX1").text();



        var params = {
            uid: uid,
            NetChatId: NetChatId

        };

        jQuery.ajax({
            type: "POST",
            url: "http://192.168.92.1/server/erge/messages.php",
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                jQuery(".mango").remove();

                var z = 2;
                jQuery.each(data, function (i, item) {

                    if (item.sender == NetChatId) {

                        jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid #33ffff ; margin: 10px">' +
                            '<center><p class = "dito">' +
                            addqt(item.message) + ' </p ></center>' +
                            '<center><p class = "dito">' +
                            addqt(item.datesent.slice(2)) + '</p></center>' +
                            '</div>');


                    }

                    else {

                        jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid  #66adff; margin: 10px">' +
                            '<center><p class = "dito">Me : ' +
                            addqt(item.message) + ' </p ></center>' +
                            '<center><p class = "dito">' +
                            addqt(item.datesent.slice(2)) + '</p></center>' +
                            '</div>');



                    }



                    z++;

                });


            },
            timeout: 25000,
            error: function () {

                datacon();

            }


        });
        jQuery('#pogi').hide();

        return false;


    }

    function ghettomessagenew() {

        var uid = localStorage.uid;


        var NetChatId = " ";

        var NetWekName = " ";

        NetChatId = replaceqt(jQuery("#JXX1").text());

        NetWekName = jQuery("#GXX1").text();



        var params = {
            uid: uid,
            NetChatId: NetChatId
        };

        jQuery.ajax({
            type: "POST",
            url: "http://192.168.92.1/server/erge/messagesnew.php",
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {

                var z = 2;
                jQuery.each(data, function (i, item) {

                    if (item.sender == NetChatId) {

                        jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid #33ffff ; margin: 10px">' +
                            '<center><p class = "dito">' +
                            addqt(item.message) + ' </p ></center>' +
                            '<center><p class = "dito">' +
                            addqt(item.datesent.slice(2)) + '</p></center>' +
                            '</div>');


                    }

                    else {

                        jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid  #66adff; margin: 10px">' +
                            '<center><p class = "dito">Me : ' +
                            addqt(item.message) + ' </p ></center>' +
                            '<center><p class = "dito">' +
                            addqt(item.datesent.slice(2)) + '</p></center>' +
                            '</div>');



                    }



                    z++;

                });


            },
            timeout: 25000,
            error: function () {

                datacon();

            }


        });
        jQuery('#pogi').hide();

        return false;


    }


    jQuery(".viewyslide").on("tap", function () {
        jQuery('#pogi').show();


        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);

        var letter = strong.slice(1, 2)

        var Pname = replaceqt(jQuery("#Fm" + z + "").text());

        var prez = replaceqt(jQuery("#Km" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Pname = replaceqt(jQuery("#Fm" + z + "").text());

            var Pprice = replaceqt(jQuery("#Dm" + z + "").text());

            var uid = localStorage.uid;

            var params = {
                uid: uid,
                Pname: Pname,
                Pprice: Pprice

            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchfull.php",
                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Im" + z + "").html(" ");
                    jQuery("#Im" + z + "").html(data);
                    jQuery('#pogi').hide();

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Im" + z + "").html(" ");
            jQuery("#Im" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }


    });

    jQuery(".viewyslide2").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);

        var letter = strong.slice(1, 2)

        var Pname = replaceqt(jQuery("#Fn" + z + "").text());

        var prez = replaceqt(jQuery("#Kn" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Pname = replaceqt(jQuery("#Fn" + z + "").text());

            var Pprice = replaceqt(jQuery("#Dn" + z + "").text());

            var uid = localStorage.uid;

            var params = {
                uid: uid,
                Pname: Pname,
                Pprice: Pprice

            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchfullserv.php",

                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#In" + z + "").html(" ");
                    jQuery("#In" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#In" + z + "").html(" ");
            jQuery("#In" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }


    });

    jQuery(".viewyslide3").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(4);

        var letter = strong.slice(1, 4)

        var Pname = replaceqt(jQuery("#Fooo" + z + "").text());

        var prez = replaceqt(jQuery("#Kooo" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Pname = replaceqt(jQuery("#Fooo" + z + "").text());

            var Pprice = replaceqt(jQuery("#Dooo" + z + "").text());

            var uid = localStorage.uid;

            var params = {
                uid: uid,
                Pname: Pname,
                Pprice: Pprice

            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/fetch/fetchvacfull.php",

                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Iooo" + z + "").html(" ");
                    jQuery("#Iooo" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Iooo" + z + "").html(" ");
            jQuery("#Iooo" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }


    });

    jQuery(".viewyslide4").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");


        var z = strong.slice(4);

        var letter = strong.slice(1, 4)

        var Pname = replaceqt(jQuery("#Fppp" + z + "").text());

        var prez = replaceqt(jQuery("#Kppp" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Pname = replaceqt(jQuery("#Fppp" + z + "").text());

            var Pprice = replaceqt(jQuery("#Dppp" + z + "").text());

            var uid = localStorage.uid;

            var params = {
                uid: uid,
                Pname: Pname,
                Pprice: Pprice

            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/fetch/fetchvacfull2.php",

                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Ippp" + z + "").html(" ");
                    jQuery("#Ippp" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Ippp" + z + "").html(" ");
            jQuery("#Ippp" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }


    });


    jQuery(document).on("pagebeforeshow", ".pageN", function () {

        jQuery('#pogi').show();

    });

    jQuery(document).on("pageshow", ".pageN", function () {
       jQuery('#pogi').hide();
        jQuery('.poppy').hide();
        jQuery('.rek').hide();


    });


    jQuery(document).on("pagebeforeshow", "#chat", function () {

        jQuery("#ident").text("Here");

        showchatsreload();


    });

    jQuery(document).on("pagebeforehide", "#chat", function () {

        jQuery("#ident").text(" ");

    });

    jQuery(document).on("pagebeforeshow", "#chatbox", function () {

        ghettomessage();


        jQuery("#ident2").text("Here");

        jQuery('#notty').hide();





    });

    jQuery(document).on("pagebeforehide", "#chatbox", function () {

        jQuery("#ident2").text(" ");

    });



    jQuery(".chatty").on("tap", function () {

        $("textarea").css("height", "4em");

        var str = jQuery(this).attr("id");

        var prefix = str.slice(0, 1);

        var secprefix = str.slice(1, 3);

        var tester = str.slice(0, 4);

        if (prefix == "A" && tester != "A" + secprefix + "_") {

            var number = str.slice(3);

            var NetWekName1 = jQuery("#B" + secprefix + number + "").text();

            var NetChatId1 = jQuery("#J" + secprefix + number + "").text();

            var ata = jQuery("#D" + secprefix + number + "").text();


            jQuery("#JXX1").html('<p style="display : none">' + NetChatId1 + '</p>');

            jQuery("#GXX1").html('<p style="display : none">' + NetWekName1 + '</p>');

            jQuery("#DXX1").html('<p style="display : none">' + ata + '</p>');


            jQuery("#chedo").text(NetWekName1);


        }

    });


    jQuery("#reply").submit(function (event) {

        $("textarea").css("height", "4em");

        event.preventDefault();

        var uid = localStorage.uid;

        var NetChatId = replaceqt(jQuery("#JXX1").text());

        var ata = replaceqt(jQuery("#DXX1").text());


        var message = replaceqt(jQuery("#replyge").val());


        if (message.length != 0) {

            jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid  #66adff; margin: 10px">' +
                '<center><p class = "dito">Me : ' +
                addqt(message) + ' </p ></center>' +
                '<center><p class = "dito">Just Now</p></center>' +
                '</div>');


            jQuery("#reply")[0].reset();



            var params = {

                message: message,
                uid: uid,
                NetChatId: NetChatId,
                ata: ata

            };

            jQuery.ajax({
                type: "POST",
                url: "http://192.168.92.1/server/erge/insertchat.php",
                data: params,
                crossDomain: true,
                cache: false,
                timeout: 25000,
                success: function (data) {


                    message = "  ";

                    NetChatId = " ";

                    ata = " ";


                },
                error: function () {

                    datacon();

                }

            });
            jQuery('#pogi').hide();

            return false;

        }

        else {

            return false;

        }



    });

    jQuery(".deal").on("tap", function () {

        jQuery(".prodty").show();

        $("textarea").css("height", "4em");

        var str = jQuery(this).attr("id");

        var prefix = str.slice(0, 1);

        var secprefix = str.slice(1, 2);

        var tester = str.slice(0, 3);

        var number = str.slice(2);

        if (prefix == "H" && tester != "A" + secprefix + "_") {

            localStorage.ata = replaceqt(jQuery("#C" + secprefix + number + "").text());


            jQuery(".chatoy").on("tap", function () {



                var forme = jQuery(this).attr("id");

                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var sel = forme.slice(7);


                var NetChatId = replaceqt(jQuery("#J" + secprefix + number + "").text());


                var message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                sendmessage(message, NetChatId);

                jQuery("#" + forme + "")[0].reset();


            });

        }

    });

    jQuery(".dealslide").on("tap", function () {

        $("textarea").css("height", "4em");


        jQuery(".prodtyS").show();

        var str = jQuery(this).attr("id");

        var prefix = str.slice(0, 1);

        var secprefix = str.slice(1, 2);

        var tester = str.slice(0, 3);

        var number = str.slice(2);

        if (prefix == "H" && tester != "A" + secprefix + "_") {

            localStorage.ata = replaceqt(jQuery("#F" + secprefix + number + "").text());



            jQuery(".chatoyyS").on("tap", function () {

                var forme = jQuery(this).attr("id");

                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var sel = forme.slice(7);


                var NetChatId = replaceqt(jQuery("#J" + secprefix + number + "").text());


                var message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                sendmessage(message, NetChatId);

                jQuery("#" + forme + "")[0].reset();






            })

        }

    })


    jQuery(".likew").on("tap", function () {

        $("textarea").css("height", "4em");

        var str = jQuery(this).attr("id");

        var prefix = str.slice(0, 1);

        var secprefix = str.slice(1, 4);
        var tester = str.slice(0, 5);

        var number = str.slice(4);
        if (secprefix == "aaa") {
            var messy2 = "#rek11";
            jQuery(messy2).show();
        }
        if (secprefix == "bbb") {

            var messy2 = "#rek12";
            jQuery(messy2).show();

        }




        if (prefix == "A" && tester != "A" + secprefix + "_") {

            localStorage.ata = replaceqt(jQuery("#C" + secprefix + number + "").text());


            jQuery(".chatoyy").on("tap", function () {


                var forme = jQuery(this).attr("id");

                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var sel = forme.slice(8);

                var NetChatId = replaceqt(jQuery("#J" + secprefix + number + "").text());


                var message = replaceqt(jQuery("#biznetchatt" + sel + "").val());

                sendmessage(message, NetChatId);

                jQuery("#" + forme + "")[0].reset();





            })

        }

    });

    jQuery(".likewslide").on("tap", function () {

        $("textarea").css("height", "4em");


        jQuery(".prodtyS").show();


        var str = jQuery(this).attr("id");

        var prefix = str.slice(0, 1);

        var secprefix = str.slice(1, 4);
        var tester = str.slice(0, 5);

        var number = str.slice(4);

        if (prefix == "A" && tester != "A" + secprefix + "_") {

            localStorage.ata = replaceqt(jQuery("#F" + secprefix + number + "").text());


            jQuery(".chatoyyS").on("tap", function () {



                var forme = jQuery(this).attr("id");

                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var sel = forme.slice(7);

                var NetChatId = replaceqt(jQuery("#J" + secprefix + number + "").text());


                var message = replaceqt(jQuery("#biznetchat" + sel + "").val());


                sendmessage(message, NetChatId);

                jQuery("#" + forme + "")[0].reset();


            })

        }

    });


    jQuery(".dilo").on("tap", function () {

        $("textarea").css("height", "4em");


        var str = jQuery(this).attr("id");

        var prefix = str.slice(0, 1);

        var secprefix = str.slice(1, 2);

        var tester = str.slice(0, 3);

        if (secprefix == "A") {
            var messy3 = "#rek13";
            jQuery(messy3).show();
        }
        if (secprefix == "B") {

            var messy3 = "#rek14";
            jQuery(messy3).show();

        }

        if (prefix == "a" && tester != "A" + secprefix + "_") {

            var number = str.slice(2);

            localStorage.ata = replaceqt(jQuery("#c" + secprefix + number + "").text());


            var uid = localStorage.uid;

            jQuery("#msgo1b").on("tap", function () {

                jQuery("#msgo1").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var NetChatId = replaceqt(jQuery("#j" + secprefix + number + "").text());


                var message = replaceqt(jQuery("#msglike1").val());

                sendmessage(message, NetChatId);

                jQuery("#msgo1")[0].reset();


            });

            jQuery("#msgo2b").on("tap", function () {

                jQuery("#msgo2").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var NetChatId = replaceqt(jQuery("#j" + secprefix + number + "").text());


                var message = replaceqt(jQuery("#msglike2").val());

                sendmessage(message, NetChatId);

                jQuery("#msgo2")[0].reset();

            });



        }

    });

    jQuery(".dilocusto").on("tap", function () {

        $("textarea").css("height", "4em");


        jQuery("#rek15").show();

        var str = jQuery(this).attr("id");
        var prefix = str.slice(0, 1);
        var secprefix = str.slice(1, 2);
        var tester = str.slice(0, 3);
        var number = str.slice(2);


        if (prefix == "a" && tester != "a" + secprefix + "_") {

            localStorage.ata = replaceqt(jQuery("#d" + secprefix + number + "").text());


            jQuery(".chatoyC").tap(function () {

                var forme = jQuery(this).attr("id");



                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var sel = forme.slice(7);


                var NetChatId = replaceqt(jQuery("#i" + secprefix + number + "").text());


                var message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                sendmessage(message, NetChatId);

                jQuery("#" + forme + "")[0].reset();



            })

        }

    })

    jQuery(".remocusto").on("tap", function () {

        jQuery("#rek8").show();

        var strep1 = jQuery(this).attr("id");

        var numbp1 = strep1.slice(2);

        var uid = localStorage.uid;

        var prodiddep1 = "dC" + numbp1 + "";

        var ProducteCodep1 = replaceqt(jQuery("#" + prodiddep1 + "").text());


        jQuery("#delcusto").tap(function () {

            var params = {
                uid: uid,
                ProducteCodep1: replaceqt(ProducteCodep1),

            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/remove/removecustomer.php",
                method: "POST",
                data: params,
                success: function (data) {

                    if (data == "successCustomer") {

                        jQuery("#rek8").hide();

                        showcustomers();

                    }



                },
                timeout: 25000,
                error: function () {

                    datacon();

                }

            })
            jQuery('#pogi').hide();

            return false;
        })

    })





    jQuery("#registerform").submit(function () {

        event.preventDefault();


        jQuery('#pogi').show();

        var d = new Date();

        var password = d.getTime();


        var City = empto(jQuery("#city").val());
        var Country = empto(jQuery("#country").val());
        var NetWek_Name = empto(jQuery("#nname").val());
        var Password = empto(password);

        if (City == true && Country == true && NetWek_Name == true && Password == true) {



            var params = {

                city: replaceqt(jQuery("#city").val()),
                country: replaceqt(jQuery("#country").val()),
                nname: replaceqt(jQuery("#nname").val()),
                pword: password,
            };

            var nname = replaceqt(jQuery("#nname").val());


            jQuery.ajax({
                type: "POST",
                url: "http://192.168.92.1/server/start/register.php",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (isNaN(data) == false) {
                        localStorage.login = "true";
                        localStorage.uid = data;
                        jQuery('#pogi').hide();

                        window.location.href = "#page";

                        showchats();

                        fetcho();

                        alert("Welcome To NetWek...Your NetWek ID Is : " + data + "...Please Save It In Your Contacts As NetWek ID.");

                    }
                    else if (data == "exists") {

                        alert("Username Taken...Try Another One");

                        jQuery('#pogi').hide();

                        jQuery("#nname").val("");

                    }


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }


            });

            return false;



        }

        else {

            jQuery('#pogi').hide();


            alert("Please Fill In All Details.");



            return false;



        }


    });

    jQuery("#loginform").submit(function (event) {

        event.preventDefault();


        jQuery('#pogi').show();
        var username1 = empto(jQuery("#username").val());

        var password1 = empto(jQuery("#password").val());

        if (username1 == true && password1 == true) {
            var password3 = jQuery("#password").val();

            var params = {
                username: replaceqt(jQuery("#username").val()),

                password: replaceqt(jQuery("#password").val())

            };

            jQuery.ajax({
                type: "POST",
                url: "http://192.168.92.1/server/start/login.php",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data == "success") {
                        localStorage.login = "true";
                        localStorage.uid = password3;
                        jQuery('#pogi').hide();


                        window.location.href = "#page";

                        showchats();

                        fetcho();


                    }

                    else {
                        jQuery('#pogi').hide();


                        alert("Incorrect Username Or NetWek ID");


                    }

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });

            return false;


        }

        else {

            jQuery('#pogi').hide();

            alert("Please Fill In All Details.");

            return false;

        }

    });

    jQuery("#editprofile").submit(function (event) {

        event.preventDefault();


        jQuery('#pogi').show();

        var city = empto(jQuery("#Cy").val());
        var country = empto(jQuery("#Cry").val());
        var nname1 = empto(jQuery("#NName").val());

        if (city == true && country == true && nname1 == true) {

            var uid = localStorage.uid;

            var nname = replaceqt(jQuery("#NName").val());

            var params = {
                uid: uid,

                city: replaceqt(jQuery("#Cy").val()),
                country: replaceqt(jQuery("#Cry").val()),
                nname: replaceqt(jQuery("#NName").val()),
            };

            jQuery.ajax({
                type: "POST",
                url: "http://192.168.92.1/server/edit/edit.php",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data == "success") {

                        jQuery('#pogi').hide();

                        window.location.href = "#profile";


                    }

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });

            return false;
        }

        else {

            jQuery('#pogi').hide();

            alert("Please Fill In All Details.");

            return false;

        }



    });


    jQuery("#productadd").submit(function (event) {

        localStorage.gone = "no";


        event.preventDefault();

        jQuery('#pogi').show();

        var prodname = empto(jQuery("#prodname").val());
        var prodprice = empto(jQuery("#prodprice").val());
        var prodstate = jQuery("#prodstate").val();
        var prodcategory = jQuery("#prodcategory").val();
        var proddescription = empto(jQuery("#proddescription").val());



        if (prodname == true && prodprice == true && proddescription == true) {

            if (prodstate != "Select Product Condition" && prodcategory != "Select Product Section") {

                var imageprodo = jQuery("#imageprodo").val();


                if (imageprodo.length == 0) {

                    alert("Please Select Image.");

                    jQuery('#pogi').hide();

                    return false;

                }

                else {

                    var extension = jQuery("#imageprodo").val().split('.').pop().toLowerCase();

                    if (jQuery.inArray(extension, ['jpg', 'jpeg']) == -1) {

                        alert("Invalid Image, must be .jpeg or .jpg.");


                        jQuery('#pogi').hide();

                        return false;
                    }

                    else {




                        var params = {

                            uidi: replaceqt(jQuery("#uidi").val()),
                            keyselect: replaceqt(jQuery("#keyselect").val()),
                            prodname: replaceqt(jQuery("#prodname").val()),
                            prodprice: replaceqt(jQuery("#prodprice").val()),
                            prodstate: replaceqt(jQuery("#prodstate").val()),
                            prodcategory: replaceqt(jQuery("#prodcategory").val()),
                            proddescription: replaceqt(jQuery("#proddescription").val()),
                        }


                        jQuery.ajax({

                            type: "POST",
                            url: "http://192.168.92.1/server/add/addproduct.php",
                            data: params,
                            crossDomain: true,
                            cache: false,
                            success: function (data) {
                                if (data == "success") {

                                    setTimeout(function () {

                                        var gone = localStorage.gone;

                                        jQuery("#productadd")[0].reset();

                                        jQuery('#pogi').hide();




                                        if (gone != "yes") {

                                            window.location.href = "#products";



                                        }



                                    }, 6000);


                                }


                            },
                            timeout: 25000,
                            error: function () {

                                datacon();

                                jQuery('#pogi').hide();


                            }
                        });

                        jQuery.ajax({

                            url: "http://192.168.92.1/server/add/addproductimage.php",
                            method: "POST",
                            data: new FormData(this),
                            contentType: false,
                            processData: false,
                            crossDomain: true,
                            cache: false,
                            timeout: 25000,
                            success: function (data) {
                                if (data == "success") {

                                    jQuery('#pogi').hide();

                                    window.location.href = "#products";

                                    jQuery("#productadd")[0].reset();

                                    localStorage.gone = "yes";


                                }


                            },
                            error: function () {

                                datacon();

                                jQuery('#pogi').hide();

                            }


                        });


                        return false;



                    }
                }

            }

            else {

                jQuery('#pogi').hide();

                alert("Select Product Condition and Product Section.");

                return false;

            }


        }

        else {

            jQuery('#pogi').hide();

            alert("Please Fill In All Details.");

            return false;

        }




    });


    jQuery("#wantedproductadd").submit(function (event) {

        localStorage.gone = "no";


        event.preventDefault();

        jQuery('#pogi').show();

        var prodname = empto(jQuery("#prodname1").val());
        var prodprice = empto(jQuery("#prodprice1").val());
        var prodstate = jQuery("#prodstate1").val();
        var prodcategory = jQuery("#prodcategory1").val();
        var proddescription = empto(jQuery("#proddescription1").val());



        var imageprodo1 = jQuery("#imageprodo1").val();


        if (imageprodo1.length != 0) {

            var extension = jQuery("#imageprodo1").val().split('.').pop().toLowerCase();

            if (jQuery.inArray(extension, ['jpg', 'jpeg']) == -1) {

                alert("Invalid Image, must be .jpeg or .jpg.");


                jQuery('#pogi').hide();

                return false;
            }

            else {


                if (prodname == true && prodprice == true && proddescription == true) {

                    if (prodstate != "Select Product Condition" && prodcategory != "Select Product Section") {


                        var params = {
                            uidi3: replaceqt(jQuery("#uidi3").val()),
                            keyselect: replaceqt(jQuery("#keyselect3").val()),
                            prodname: replaceqt(jQuery("#prodname1").val()),
                            prodprice: replaceqt(jQuery("#prodprice1").val()),
                            prodstate: replaceqt(jQuery("#prodstate1").val()),
                            prodcategory: replaceqt(jQuery("#prodcategory1").val()),
                            proddescription: replaceqt(jQuery("#proddescription1").val()),
                        }

                        jQuery.ajax({

                            type: "POST",
                            url: "http://192.168.92.1/server/add/addvacproduct.php",
                            data: params,
                            crossDomain: true,
                            cache: false,
                            success: function (data) {
                                if (data == "success") {


                                    setTimeout(function () {


                                        var gone = localStorage.gone;

                                        jQuery('#pogi').hide();


                                        jQuery("#wantedproductadd")[0].reset();




                                        if (gone != "yes") {

                                            window.location.href = "#listp";



                                        }

                                    }, 6000);

                                }


                            },
                            timeout: 25000,
                            error: function () {

                                datacon();

                                jQuery('#pogi').hide();

                            }

                        });

                        jQuery.ajax({

                            url: "http://192.168.92.1/server/add/addvacproductimage.php",
                            method: "POST",
                            data: new FormData(this),
                            contentType: false,
                            processData: false,
                            crossDomain: true,
                            cache: false,
                            timeout: 25000,
                            success: function (data) {
                                if (data == "success") {


                                    jQuery('#pogi').hide();

                                    window.location.href = "#listp";

                                    jQuery("#wantedproductadd")[0].reset();

                                    localStorage.gone = "yes";
                                }


                            },
                            error: function () {

                                datacon();

                                jQuery('#pogi').hide();

                            }

                        });


                        return false;
                    }

                    else {

                        jQuery('#pogi').hide();

                        alert("Select Product Condition and Product Section.");

                        return false;

                    }


                }

                else {

                    jQuery('#pogi').hide();

                    alert("Please Fill In All Details.");

                    return false;

                }


            }
        }

        else {


            if (prodname == true && prodprice == true && proddescription == true) {

                if (prodstate != "Select Product Condition" && prodcategory != "Select Product Section") {

                    var params = {
                        uidi3: replaceqt(jQuery("#uidi3").val()),
                        keyselect: replaceqt(jQuery("#keyselect3").val()),
                        prodname: replaceqt(jQuery("#prodname1").val()),
                        prodprice: replaceqt(jQuery("#prodprice1").val()),
                        prodstate: replaceqt(jQuery("#prodstate1").val()),
                        prodcategory: replaceqt(jQuery("#prodcategory1").val()),
                        proddescription: replaceqt(jQuery("#proddescription1").val()),
                    }

                    jQuery.ajax({

                        type: "POST",
                        url: "http://192.168.92.1/server/add/addvacproduct.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                            if (data == "success") {


                                jQuery('#pogi').hide();



                                window.location.href = "#listp";

                                jQuery("#wantedproductadd")[0].reset();

                            }


                        },
                        timeout: 25000,
                        error: function () {

                            datacon();

                            jQuery('#pogi').hide();


                        }

                    });

                    return false;

                }

                else {

                    jQuery('#pogi').hide();

                    alert("Select Product Condition and Product Section.");

                    return false;

                }


            }

            else {

                jQuery('#pogi').hide();

                alert("Please Fill In All Details.");

                return false;

            }


        }





    });


    jQuery("#wantedserviceadd").submit(function (event) {

        localStorage.gone = "no";

        event.preventDefault();

        jQuery('#pogi').show();

        var prodname = empto(jQuery("#prodname4").val());
        var prodprice = empto(jQuery("#prodprice4").val());
        var prodcategory = jQuery("#prodcategory4").val();
        var proddescription = empto(jQuery("#proddescription4").val());

        var imageprodo4 = jQuery("#imageprodo4").val();


        if (imageprodo4.length != 0) {

            var extension = jQuery("#imageprodo4").val().split('.').pop().toLowerCase();

            if (jQuery.inArray(extension, ['jpg', 'jpeg']) == -1) {

                alert("Invalid Image, must be .jpeg or .jpg.");


                jQuery('#pogi').hide();

                return false;
            }

            else {

                if (prodname == true && prodprice == true && proddescription == true) {

                    if (prodcategory != "Select Service Section") {



                        var params = {
                            uidi4: replaceqt(jQuery("#uidi4").val()),
                            keyselect: replaceqt(jQuery("#keyselect4").val()),
                            prodname: replaceqt(jQuery("#prodname4").val()),
                            prodprice: replaceqt(jQuery("#prodprice4").val()),
                            prodcategory: replaceqt(jQuery("#prodcategory4").val()),
                            proddescription: replaceqt(jQuery("#proddescription4").val()),
                        }

                        jQuery.ajax({

                            type: "POST",
                            url: "http://192.168.92.1/server/add/addvacservice.php",
                            data: params,
                            crossDomain: true,
                            cache: false,
                            success: function (data) {
                                if (data == "success") {


                                    setTimeout(function () {

                                        jQuery('#pogi').hide();



                                        jQuery("#wantedserviceadd")[0].reset();


                                        var gone = localStorage.gone;





                                        if (gone != "yes") {

                                            window.location.href = "#lists";




                                        }
                                    }, 6000);


                                }



                            },
                            timeout: 25000,
                            error: function () {

                                datacon();
                                jQuery('#pogi').hide();

                            }
                        });

                        jQuery.ajax({

                            url: "http://192.168.92.1/server/add/addvacserviceimage.php",
                            method: "POST",
                            data: new FormData(this),
                            contentType: false,
                            processData: false,
                            crossDomain: true,
                            cache: false,
                            timeout: 25000,
                            success: function (data) {
                                if (data == "success") {

                                    jQuery('#pogi').hide();


                                    window.location.href = "#lists";

                                    jQuery("#wantedserviceadd")[0].reset();

                                    localStorage.gone = "yes";
                                }



                            },
                            error: function () {

                                datacon();
                                jQuery('#pogi').hide();

                            }

                        });


                        return false;
                    }

                    else {

                        jQuery('#pogi').hide();

                        alert("Select Service Section.");

                        return false;

                    }


                }

                else {

                    jQuery('#pogi').hide();

                    alert("Please Fill In All Details.");

                    return false;

                }



            }
        }

        else {


            if (prodname == true && prodprice == true && proddescription == true) {

                if (prodcategory != "Select Service Section") {

                    var params = {
                        uidi4: replaceqt(jQuery("#uidi4").val()),
                        keyselect: replaceqt(jQuery("#keyselect4").val()),
                        prodname: replaceqt(jQuery("#prodname4").val()),
                        prodprice: replaceqt(jQuery("#prodprice4").val()),
                        prodcategory: replaceqt(jQuery("#prodcategory4").val()),
                        proddescription: replaceqt(jQuery("#proddescription4").val()),
                    }

                    jQuery.ajax({

                        type: "POST",
                        url: "http://192.168.92.1/server/add/addvacservice.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                            if (data == "success") {

                                jQuery('#pogi').hide();


                                window.location.href = "#lists";

                                jQuery("#wantedserviceadd")[0].reset();

                            }



                        },
                        timeout: 25000,
                        error: function () {

                            datacon();

                        }
                    });
                    jQuery('#pogi').hide();

                    return false;
                }

                else {

                    jQuery('#pogi').hide();

                    alert("Select Service Section.");

                    return false;

                }


            }

            else {

                jQuery('#pogi').hide();

                alert("Please Fill In All Details.");

                return false;

            }


        }





    });


    jQuery("#serviceadd").submit(function (event) {

        localStorage.gone = "no";


        event.preventDefault();

        jQuery('#pogi').show();

        var servname = empto(jQuery("#servname").val());
        var servprice = empto(jQuery("#servprice").val());
        var servcategory = jQuery("#servcategory").val();
        var servdescription = empto(jQuery("#servdescription").val());


        var imageprodo2 = jQuery("#imageprodo2").val();

        if (imageprodo2.length != 0) {
            var extension = jQuery("#imageprodo2").val().split('.').pop().toLowerCase();

            if (jQuery.inArray(extension, ['jpg', 'jpeg']) == -1) {

                alert("Invalid Image, must be .jpeg or .jpg.");


                jQuery('#pogi').hide();

                return false;
            }

            else {


                if (servname == true && servprice == true && servdescription == true) {


                    if (servcategory != "Select Service Section") {


                        var params = {
                            uidi: replaceqt(jQuery("#uidi1").val()),
                            keyselect: replaceqt(jQuery("#keyselect1").val()),
                            servname: replaceqt(jQuery("#servname").val()),
                            servprice: replaceqt(jQuery("#servprice").val()),
                            servcategory: replaceqt(jQuery("#servcategory").val()),
                            servdescription: replaceqt(jQuery("#servdescription").val())
                        }

                        jQuery.ajax({

                            type: "POST",
                            url: "http://192.168.92.1/server/add/addservice.php",
                            data: params,
                            crossDomain: true,
                            cache: false,
                            success: function (data) {
                                if (data == "success") {

                                    setTimeout(function () {
                                        jQuery('#pogi').hide();




                                        jQuery("#serviceadd")[0].reset();

                                        var gone = localStorage.gone;




                                        if (gone != "yes") {

                                            window.location.href = "#service";



                                        }

                                    }, 6000);



                                }


                            },
                            timeout: 25000,
                            error: function () {
                                jQuery('#pogi').hide();

                                datacon();

                            }

                        });

                        jQuery.ajax({

                            url: "http://192.168.92.1/server/add/addserviceimage.php",
                            method: "POST",
                            data: new FormData(this),
                            contentType: false,
                            processData: false,
                            crossDomain: true,
                            cache: false,
                            timeout: 25000,
                            success: function (data) {
                                if (data == "success") {

                                    jQuery('#pogi').hide();



                                    window.location.href = "#service";

                                    jQuery("#serviceadd")[0].reset();

                                    localStorage.gone = "yes";
                                }


                            },
                            error: function () {
                                jQuery('#pogi').hide();

                                datacon();

                            }

                        });


                        return false;

                    }

                    else {

                        jQuery('#pogi').hide();

                        alert("Select Service Section.");

                        return false;

                    }


                }

                else {

                    jQuery('#pogi').hide();

                    alert("Please Fill In All Details.");

                    return false;

                }

            }


        }

        else {


            if (servname == true && servprice == true && servdescription == true) {


                if (servcategory != "Select Service Section") {



                    var params = {
                        uidi: replaceqt(jQuery("#uidi1").val()),
                        keyselect: replaceqt(jQuery("#keyselect1").val()),
                        servname: replaceqt(jQuery("#servname").val()),
                        servprice: replaceqt(jQuery("#servprice").val()),
                        servcategory: replaceqt(jQuery("#servcategory").val()),
                        servdescription: replaceqt(jQuery("#servdescription").val())
                    }

                    jQuery.ajax({

                        type: "POST",
                        url: "http://192.168.92.1/server/add/addservice.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                            if (data == "success") {


                                jQuery('#pogi').hide();



                                window.location.href = "#service";

                                jQuery("#serviceadd")[0].reset();

                            }


                        },
                        timeout: 25000,
                        error: function () {
                            jQuery('#pogi').hide();

                            datacon();

                        }

                    });


                    return false;
                }

                else {

                    jQuery('#pogi').hide();

                    alert("Select Service Section.");

                    return false;

                }


            }

            else {

                jQuery('#pogi').hide();

                alert("Please Fill In All Details.");

                return false;

            }

        }





    });


    jQuery("#image_form").submit(function (event) {

        event.preventDefault();

        jQuery('#pogi').show();

        var image_name = jQuery("#image").val();


        if (image_name.length == 0) {

            alert("Please Select Image.");

            jQuery('#pogi').hide();

            return false;

        }

        else {

            var extension = jQuery("#image").val().split('.').pop().toLowerCase();

            if (jQuery.inArray(extension, ['jpg', 'jpeg']) == -1) {

                alert("Invalid Image.....must be .jpeg or .jpg");


                jQuery('#pogi').hide();

                jQuery("#image_form")[0].reset();

                return false;
            }

            else {

                jQuery.ajax({

                    url: "http://192.168.92.1/server/upload/upload.php",
                    method: "POST",
                    data: new FormData(this),
                    contentType: false,
                    processData: false,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {





                        jQuery('#pogi').hide();

                        imagoo();



                        window.location.href = "#editpage";

                        jQuery("#image_form")[0].reset();

                    },
                    timeout: 25000,
                    error: function () {

                        datacon();

                    }
                });
                jQuery('#pogi').hide();

                return false;
            }
        }






    });

    jQuery("#prodymage").submit(function (event) {

        event.preventDefault();

        jQuery('#pogi').show();

        var image_name = jQuery("#imageprod").val();

        var check = jQuery("#item1").val();


        if (image_name.length == 0) {

            alert("Please Select Image.");

            jQuery('#pogi').hide();

            return false;

        }

        else {

            var extension = jQuery("#imageprod").val().split('.').pop().toLowerCase();

            if (jQuery.inArray(extension, ['jpg', 'jpeg']) == -1) {

                alert("Invalid Image.....must be .jpeg or .jpg");


                jQuery('#pogi').hide();

                jQuery("#prodymage")[0].reset();

                return false;
            }

            else {

                jQuery.ajax({

                    url: "http://192.168.92.1/server/upload/uploaditem.php",
                    method: "POST",
                    data: new FormData(this),
                    contentType: false,
                    processData: false,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

                        if (data == "success") {


                            jQuery('#pogi').hide();

                            imagoo();



                            window.location.href = "#productsEdito";

                            //     showproducts2();


                            jQuery("#prodymage")[0].reset();

                        }

                    },
                    timeout: 25000,
                    error: function () {

                        datacon();

                    }
                });
                jQuery('#pogi').hide();

                return false;
            }
        }




        return false;

    });

    jQuery("#prodymage5").submit(function (event) {

        event.preventDefault();

        jQuery('#pogi').show();

        var image_name = jQuery("#imageprod5").val();

        if (image_name.length == 0) {

            alert("Please Select Image.");

            jQuery('#pogi').hide();

            return false;

        }

        else {

            var extension = jQuery("#imageprod5").val().split('.').pop().toLowerCase();

            if (jQuery.inArray(extension, ['jpg', 'jpeg']) == -1) {

                alert("Invalid Image.....must be .jpeg or .jpg");


                jQuery('#pogi').hide();

                jQuery("#prodymage5")[0].reset();

                return false;
            }

            else {

                jQuery.ajax({

                    url: "http://192.168.92.1/server/upload/uploadvacitem.php",
                    method: "POST",
                    data: new FormData(this),
                    contentType: false,
                    processData: false,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

                        if (data == "success") {





                            jQuery('#pogi').hide();

                            imagoo();



                            window.location.href = "#listpEdito";
                            //   showvacproducts();

                            jQuery("#prodymage5")[0].reset();

                        }

                    },
                    timeout: 25000,
                    error: function () {

                        datacon();

                    }
                });
                jQuery('#pogi').hide();

                return false;

            }
        }






    });

    jQuery("#prodymage6").submit(function (event) {

        event.preventDefault();

        jQuery('#pogi').show();

        var image_name = jQuery("#imageprod6").val();

        if (image_name.length == 0) {

            alert("Please Select Image.");

            jQuery('#pogi').hide();

            return false;

        }

        else {

            var extension = jQuery("#imageprod6").val().split('.').pop().toLowerCase();

            if (jQuery.inArray(extension, ['jpg', 'jpeg']) == -1) {

                alert("Invalid Image.....must be .jpeg or .jpg");


                jQuery('#pogi').hide();
                jQuery("#prodymage6")[0].reset();

                return false;

            }

            else {

                jQuery.ajax({

                    url: "http://192.168.92.1/server/upload/uploadvacitemserv.php",
                    method: "POST",
                    data: new FormData(this),
                    contentType: false,
                    processData: false,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

                        if (data == "success") {





                            jQuery('#pogi').hide();

                            imagoo();



                            window.location.href = "#listsEdito";
                            // showvacservice();

                            jQuery("#prodymage6")[0].reset();

                        }

                    },
                    timeout: 25000,
                    error: function () {

                        datacon();

                    }
                });
                jQuery('#pogi').hide();

                return false;
            }
        }






    });

    jQuery("#prodymage1").submit(function (event) {

        event.preventDefault();


        jQuery('#pogi').show();

        var image_name = jQuery("#imageprod1").val();
        var check = jQuery("#item1").val();

        if (image_name.length == 0) {

            alert("Please Select Image.");

            jQuery('#pogi').hide();

            return false;

        }

        else {

            var extension = jQuery("#imageprod1").val().split('.').pop().toLowerCase();

            if (jQuery.inArray(extension, ['jpg', 'jpeg']) == -1) {

                alert("Invalid Image.....must be .jpeg or .jpg");


                jQuery('#pogi').hide();

                jQuery("#prodymage1")[0].reset();

                return false;
            }

            else {

                jQuery.ajax({

                    url: "http://192.168.92.1/server/upload/uploaditemserv.php",
                    method: "POST",
                    data: new FormData(this),
                    contentType: false,
                    processData: false,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

                        if (data == "success") {



                            jQuery('#pogi').hide();

                            imagoo();



                            window.location.href = "#serviceEdito";
                            //  showservice();
                            jQuery("#prodymage1")[0].reset();

                        }

                    },
                    timeout: 25000,
                    error: function () {

                        datacon();

                    }
                });
                jQuery('#pogi').hide();

                return false;
            }
        }






    });


    jQuery(document).on("pagebeforeshow", "#profile", function () {
        jQuery('#pogi').show();

        fetch_prof2();

        var uid = localStorage.uid;
        var params = {
            uid: uid
        };

        jQuery.ajax({

            type: 'POST',
            url: 'http://192.168.92.1/server/mine/myprofile.php',
            dataType: 'json',
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                jQuery.each(data, function (i, item) {

                    jQuery("#NetwekName").html("<p  style = 'font-size: 1.1em'>Netwek Name : " + addqt(item.netwekname) + "</p>");

                    jQuery("#City").html("<p  style = 'font-size: 1.1em'>City : " + addqt(item.city) + "</p>");
                    jQuery("#Country").html("<p  style = 'font-size: 1.1em'>Country : " + addqt(item.country) + "</p>");
                    jQuery("#NetId").html("<p  style = 'font-size: 1.1em'>NetWek ID : " + addqt(item.password) + "</p>");

                });
                jQuery('#pogi').hide();

            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        })
        return false;

        jQuery('#pogi').hide();

    });

    jQuery(document).on("pagebeforeshow", "#editpage", function () {

        jQuery("#image_form")[0].reset();


        var uid = localStorage.uid;

        jQuery("#pers").val(uid);




        var NName = jQuery("#NetwekName").text();

        var Cy = jQuery("#City").text();

        var Cry = jQuery("#Country").text();



        jQuery("#NName").val(NName.slice(14));

        jQuery("#Cy").val(Cy.slice(7));
        jQuery("#Cry").val(Cry.slice(10));


        jQuery('#pogi').hide();
    });

    jQuery(document).on("pagebeforeshow", "#products", function () {

        showproducts2();


    });


    jQuery(document).on("pagebeforeshow", "#listp", function () {

        showvacproducts();


    });

    jQuery(document).on("pagebeforeshow", "#lists", function () {

        showvacservice();

    });

    jQuery(document).on("pagebeforeshow", "#service", function () {


        showservice();

    });

    jQuery(document).on("pagebeforeshow", "#customers", function () {

        showcustomers();

        jQuery('#pogi').hide();

    });


    jQuery("#Retailing").on("tap", function () {

        showshoppy("Retailing & Wholesales");

    });

    jQuery("#Computers").on("tap", function () {

        showshoppy("Computers & Accesories");

    });

    jQuery("#Mobile-phones").on("tap", function () {

        showshoppy("Mobile-phones & Accesories");

    });

    jQuery("#Hardware").on("tap", function () {

        showshoppy("Hardware");

    });

    jQuery("#Motor-mechanics").on("tap", function () {

        showshoppy("Motor Services, Parts & Spares");

    });

    jQuery("#Academics").on("tap", function () {
        showshoppy("Academics & Tuition");

    });

    jQuery("#Leisure").on("tap", function () {

        showshoppy("Leisure, Sports & Hobbies");

    });

    jQuery("#Vehicle").on("tap", function () {

        showshoppy("Vehicle Sales & Hire");

    });

    jQuery("#Electronics").on("tap", function () {

        showshoppy("Electronics & Home-appliances");

    });

    jQuery("#Home1").on("tap", function () {

        showshoppy("Home, Office & Garden");

    });

    jQuery("#Money").on("tap", function () {

        showshoppyserv("Money Services");

    });

    jQuery("#Lodges").on("tap", function () {

        showshoppyserv("Lodges & Motels");


    });

    jQuery("#Construction").on("tap", function () {

        showshoppy("Construction");

    });

    jQuery("#Arts").on("tap", function () {

        showshoppy("Arts, Entertainment & Crafts");

    });

    jQuery("#House-Helps").on("tap", function () {

        showshoppyserv("House-Helps & Garderners");

    });

    jQuery("#Plumbing").on("tap", function () {

        showshoppy("Plumbing & Electricity");

    });

    jQuery("#Fashion").on("tap", function () {

        showshoppy("Fashion & Beauty");

    });

    jQuery("#Farming").on("tap", function () {

        showshoppy("Farming");

    });

    jQuery("#Houses").on("tap", function () {

        showshoppy("Houses, Stands & Premises");

    });

    jQuery("#Specialist").on("tap", function () {

        showshoppy("Specialist Products");

    });

    jQuery("#ComputersS").on("tap", function () {

        showshoppyserv("Computers & Accesories");
    });

    jQuery("#Mobile-phonesS").on("tap", function () {

        showshoppyserv("Mobile-phones & Accesories");

    });

    jQuery("#Motor-mechanicsS").on("tap", function () {

        showshoppyserv("Motor Services, Parts & Spares");

    });

    jQuery("#AcademicsS").on("tap", function () {

        showshoppyserv("Academics & Tuition");

    });

    jQuery("#LeisureS").on("tap", function () {

        showshoppyserv("Leisure, Sports & Hobbies");

    });

    jQuery("#ElectronicsS").on("tap", function () {

        showshoppyserv("Electronics & Home-appliances");

    });

    jQuery("#Home1S").on("tap", function () {

        showshoppyserv("Home, Office & Garden");

    });

    jQuery("#ConstructionS").on("tap", function () {

        showshoppyserv("Construction");

    });

    jQuery("#ArtsS").on("tap", function () {

        showshoppyserv("Arts, Entertainment & Crafts");

    });

    jQuery("#PlumbingS").on("tap", function () {

        showshoppyserv("Plumbing & Electricity");

    });

    jQuery("#FashionS").on("tap", function () {

        showshoppyserv("Fashion & Beauty");

    });

    jQuery("#SpecialistS").on("tap", function () {

        showshoppyserv("Specialist Services");

    });

    jQuery("#Retailing2").on("tap", function () {

        showwantowi("Retailing & Wholesales");

    });

    jQuery("#Computers2").on("tap", function () {

        showwantowi("Computers & Accesories");

    });

    jQuery("#Mobile-phones2").on("tap", function () {

        showwantowi("Mobile-phones & Accesories");

    });

    jQuery("#Hardware2").on("tap", function () {

        showwantowi("Hardware");

    });

    jQuery("#Motor-mechanics2").on("tap", function () {

        showwantowi("Motor Services, Parts & Spares");

    });

    jQuery("#Academics2").on("tap", function () {

        showwantowi("Academics & Tuition");

    });

    jQuery("#Leisure2").on("tap", function () {

        showwantowi("Leisure, Sports & Hobbies");

    });

    jQuery("#Vehicle2").on("tap", function () {

        showwantowi("Vehicle Sales & Hire");

    });

    jQuery("#Electronics2").on("tap", function () {

        showwantowi("Electronics & Home-appliances");

    });

    jQuery("#Home12").on("tap", function () {

        showwantowi("Home, Office & Garden");

    });

    jQuery("#Money2").on("tap", function () {

        showwantowiserv("Money Services");

    });

    jQuery("#Lodges2").on("tap", function () {

        showwantowiserv("Lodges & Motels");

    });

    jQuery("#Construction2").on("tap", function () {

        showwantowi("Construction");

    });

    jQuery("#Arts2").on("tap", function () {

        showwantowi("Arts, Entertainment & Crafts");

    });

    jQuery("#House-Helps2").on("tap", function () {

        showwantowiserv("House-Helps & Garderners");

    });

    jQuery("#Plumbing2").on("tap", function () {

        showwantowi("Plumbing & Electricity");

    });

    jQuery("#Fashion2").on("tap", function () {

        showwantowi("Fashion & Beauty");

    });

    jQuery("#Farming2").on("tap", function () {

        showwantowi("Farming");

    });

    jQuery("#Houses2").on("tap", function () {

        showwantowi("Houses, Stands & Premises");

    });

    jQuery("#Specialist2").on("tap", function () {

        showwantowi("Specialist Products");

    });

    jQuery("#ComputersS2").on("tap", function () {

        showwantowiserv("Computers & Accesories");

    });

    jQuery("#Mobile-phonesS2").on("tap", function () {

        showwantowiserv("Mobile-phones & Accesories");

    });

    jQuery("#Motor-mechanicsS2").on("tap", function () {

        showwantowiserv("Motor Services, Parts & Spares");

    });

    jQuery("#AcademicsS2").on("tap", function () {

        showwantowiserv("Academics & Tuition");

    });

    jQuery("#LeisureS2").on("tap", function () {

        showwantowiserv("Leisure, Sports & Hobbies");

    });

    jQuery("#ElectronicsS2").on("tap", function () {

        showwantowiserv("Electronics & Home-appliances");

    });

    jQuery("#Home1S2").on("tap", function () {

        showwantowiserv("Home, Office & Garden");

    });

    jQuery("#ConstructionS2").on("tap", function () {

        showwantowiserv("Construction");

    });

    jQuery("#ArtsS2").on("tap", function () {

        showwantowiserv("Arts, Entertainment & Crafts");

    });

    jQuery("#PlumbingS2").on("tap", function () {

        showwantowiserv("Plumbing & Electricity");

    });

    jQuery("#FashionS2").on("tap", function () {

        showwantowiserv("Fashion & Beauty");

    });

    jQuery("#SpecialistS2").on("tap", function () {

        showwantowiserv("Specialist Services");

    });



    jQuery(document).on("pagebeforeshow", "#likedprod", function () {

        showlikedprod();

    });

    jQuery(document).on("pagebeforeshow", "#likedserv", function () {

        showlikedserv();

    });


    jQuery(".editol").on("tap", function () {

        var uid = localStorage.uid;
        jQuery("#prodymage")[0].reset();
        jQuery("#persi").val(uid);

        var str = jQuery(this).attr("id");

        var prefix = str.slice(0, 1);

        var tester = str.slice(0, 2);

        if (prefix == "a" && tester != "a_") {

            var number = str.slice(1);


            var Prodname = jQuery("#c" + number + "").text();
            var ProductCode = Prodname.slice(6);
            var Prodprice = jQuery("#d" + number + "").text();
            var Prodstate = jQuery("#e" + number + "").text();
            var Prodcategory = jQuery("#f" + number + "").text();
            var Proddescription = jQuery("#g" + number + "").text();


            jQuery(document).on("pagebeforeshow", "#productsEdito", function () {
                var ProductCode2 = ProductCode;

                jQuery("#ProductCode").val(Prodname.slice(6));

                jQuery("#Prodname").val(" ");

                jQuery("#Prodname").val(Prodname.slice(6));
                jQuery("#item").val(" ");

                jQuery("#item").val(replaceqt(Prodname.slice(6)));


                jQuery("#Prodprice").val(" ");

                jQuery("#Prodprice").val(Prodprice.slice(10));
                jQuery("#currentstate").html(" ");

                jQuery("#currentstate").html("Current Condition : " + Prodstate.slice(12));
                jQuery("#currentcat").html(" ");

                jQuery("#currentcat").html("Current Section : " + Prodcategory.slice(10));
                jQuery("#Proddescription").val(" ");

                jQuery("#Proddescription").val(Proddescription.slice(10));
                jQuery("#titol").html(" ");

                jQuery("#titol").html("<center><h3>" + Prodname.slice(6) + " :</h3></center>");
                ProductCode2 = "  ";

                jQuery('#pogi').hide();

            });




            jQuery(document).on("pagebeforehide", "#productsEdito", function () {

                jQuery("#Prodname").val(" ");

                jQuery("#item").val(" ");

                jQuery("#Prodprice").val(" ");

                jQuery("#currentstate").html(" ");

                jQuery("#currentcat").html(" ");

                jQuery("#Proddescription").val(" ");

                jQuery("#titol").html(" ");

            });

        }

    });

    jQuery("#productedit").submit(function (event) {

        event.preventDefault(event);

        jQuery('#pogi').show();


        var uid = localStorage.uid;

        var ProductCode = jQuery("#ProductCode").val();
        var prodname = empto(jQuery("#Prodname").val());
        var prodprice = empto(jQuery("#Prodprice").val());
        var prodstate = jQuery("#Prodstate").val();
        var prodcategory = jQuery("#Prodcategory").val();
        var proddescription = empto(jQuery("#Proddescription").val());

        if (prodname == true && prodprice == true && proddescription == true) {


            var params = {
                uid: uid,
                ProductCode: replaceqt(ProductCode),
                prodname: replaceqt(jQuery("#Prodname").val()),
                prodprice: replaceqt(jQuery("#Prodprice").val()),
                prodstate: replaceqt(jQuery("#Prodstate").val()),
                prodcategory: replaceqt(jQuery("#Prodcategory").val()),
                proddescription: replaceqt(jQuery("#Proddescription").val()),
            }

            jQuery.ajax({
                type: "POST",
                url: "http://192.168.92.1/server/edit/editproduct.php",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data == "success") {

                        jQuery('#pogi').hide();




                        window.location.href = "#products";
                        // showproducts2();
                        ProductCode = "  ";

                        jQuery("#productedit")[0].reset();


                    }

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;



        }


        else {

            jQuery('#pogi').hide();

            alert("Please Fill In All Details.");

            return false;

        }




    });


    jQuery(".editolvac").on("tap", function () {

        var uid = localStorage.uid;
        jQuery("#prodymage5")[0].reset();
        jQuery("#persi5").val(uid);

        var str = jQuery(this).attr("id");

        var prefix = str.slice(0, 1);

        var tester = str.slice(0, 3);

        if (prefix == "A" && tester != "A_") {

            var number = str.slice(2);


            var Prodname = jQuery("#Cv" + number + "").text();
            var ProductCode = Prodname.slice(6);
            var Prodprice = jQuery("#Dv" + number + "").text();
            var Prodstate = jQuery("#Ev" + number + "").text();
            var Prodcategory = jQuery("#Fv" + number + "").text();
            var Proddescription = jQuery("#Gv" + number + "").text();



            jQuery(document).on("pagebeforeshow", "#listpEdito", function () {

                var ProductCode2 = ProductCode;
                jQuery("#ProductCode2").val(Prodname.slice(6));

                jQuery("#Prodname5").val(Prodname.slice(6));
                jQuery("#item5").val(replaceqt(Prodname.slice(6)));
                jQuery("#Prodprice5").val(Prodprice.slice(10));
                jQuery("#currentstate5").html("Current Condition : " + Prodstate.slice(12));
                jQuery("#currentcat5").html("Current Section : " + Prodcategory.slice(10));
                jQuery("#Proddescription5").val(Proddescription.slice(10));
                jQuery("#titol5").html("<center><h3>" + Prodname.slice(6) + " :</h3></center>");
                ProductCode2 = "  ";

                jQuery('#pogi').hide();

            });




        }

    });

    jQuery("#productedit5").submit(function (event) {

        event.preventDefault(event);

        jQuery('#pogi').show();


        var uid = localStorage.uid;

        var ProductCode = jQuery("#ProductCode2").val();


        var prodname = empto(jQuery("#Prodname5").val());
        var prodprice = empto(jQuery("#Prodprice5").val());
        var prodstate = jQuery("#Prodstate5").val();
        var prodcategory = jQuery("#Prodcategory5").val();
        var proddescription = empto(jQuery("#Proddescription5").val());

        if (prodname == true && prodprice == true && proddescription == true) {

            var params = {
                uid: uid,
                ProductCode: replaceqt(ProductCode),
                prodname: replaceqt(jQuery("#Prodname5").val()),
                prodprice: replaceqt(jQuery("#Prodprice5").val()),
                prodstate: replaceqt(jQuery("#Prodstate5").val()),
                prodcategory: replaceqt(jQuery("#Prodcategory5").val()),
                proddescription: replaceqt(jQuery("#Proddescription5").val()),
            }

            jQuery.ajax({
                type: "POST",
                url: "http://192.168.92.1/server/edit/editvacproduct.php",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data == "success") {

                        jQuery('#pogi').hide();




                        window.location.href = "#listp";
                        ProductCode = "  ";

                        jQuery("#productedit5")[0].reset();



                    }

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery('#pogi').hide();

            alert("Please Fill In All Details.");

            return false;

        }



    });


    jQuery(".editolvac2").on("tap", function () {

        var uid = localStorage.uid;
        jQuery("#prodymage6")[0].reset();
        jQuery("#persi6").val(uid);

        var str = jQuery(this).attr("id");

        var prefix = str.slice(0, 1);

        var tester = str.slice(0, 3);

        if (prefix == "A" && tester != "A_") {

            var number = str.slice(2);


            var Prodname = jQuery("#Cw" + number + "").text();
            var ProductCode = Prodname.slice(6);
            var Prodprice = jQuery("#Dw" + number + "").text();
            var Prodcategory = jQuery("#Fw" + number + "").text();
            var Proddescription = jQuery("#Gw" + number + "").text();



            jQuery(document).on("pagebeforeshow", "#listsEdito", function () {

                var ProductCode2 = ProductCode;

                jQuery("#ProductCode3").val(Prodname.slice(6));


                jQuery("#Prodname6").val(Prodname.slice(6));
                jQuery("#item6").val(replaceqt(Prodname.slice(6)));
                jQuery("#Prodprice6").val(Prodprice.slice(10));
                jQuery("#currentcat6").html("Current Section : " + Prodcategory.slice(10));
                jQuery("#Proddescription6").val(Proddescription.slice(10));
                jQuery("#titol6").html("<center><h3>" + Prodname.slice(6) + " :</h3></center>");
                ProductCode2 = "  ";

                jQuery('#pogi').hide();

            });




        }

    });

    jQuery("#productedit6").submit(function (event) {

        event.preventDefault(event);

        jQuery('#pogi').show();


        var uid = localStorage.uid;
        var ProductCode = jQuery("#ProductCode3").val();

        var prodcategory = jQuery("#Prodcategory6").val();
        var prodname = empto(jQuery("#Prodname6").val());
        var prodprice = empto(jQuery("#Prodprice6").val());
        var proddescription = empto(jQuery("#Proddescription6").val());



        if (prodname == true && prodprice == true && proddescription == true) {

            var params = {
                uid: uid,
                ProductCode: replaceqt(ProductCode),
                prodname: replaceqt(jQuery("#Prodname6").val()),
                prodprice: replaceqt(jQuery("#Prodprice6").val()),
                prodcategory: replaceqt(jQuery("#Prodcategory6").val()),
                proddescription: replaceqt(jQuery("#Proddescription6").val()),
            }

            jQuery.ajax({
                type: "POST",
                url: "http://192.168.92.1/server/edit/editvacservice.php",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data == "success") {

                        jQuery('#pogi').hide();




                        window.location.href = "#lists";
                        ProductCode = "  ";

                        jQuery("#productedit6")[0].reset();


                    }

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }


        else {

            jQuery('#pogi').hide();

            alert("Please Fill In All Details.");

            return false;

        }





    });


    jQuery(".closer").on("tap", function () {

        var idowe = jQuery(this).attr("id");

        var numbere = idowe.slice(1);

        var popl = "#rek" + numbere + " ";

        jQuery(popl).hide();




    });




    jQuery(".remove").on("tap", function () {

        var stre = jQuery(this).attr("id");

        var numb = stre.slice(1);

        var uid = localStorage.uid;
        var prodidde = "c" + numb + "";
        var FulleProductCode = jQuery("#" + prodidde + "").text();
        var ProducteCode = replaceqt(FulleProductCode.slice(6));

        var r = confirm("Remove ??");
        if (r == true) {

            var params = {
                uid: uid,
                ProducteCode: replaceqt(ProducteCode)
            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/remove/removeproduct.php",
                method: "POST",
                data: params,
                success: function (data) {

                    if (data == "success") {

                        jQuery("#rek2").hide();

                        showproducts2();

                    }


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }

            })
            jQuery('#pogi').hide();

            return false;
        }
    });

    jQuery(".editolremove").on("tap", function () {
        var stre = jQuery(this).attr("id");

        var numb = stre.slice(2);

        var uid = localStorage.uid;
        var prodidde = "Cv" + numb + "";
        var FulleProductCode = jQuery("#" + prodidde + "").text();
        var ProducteCode = replaceqt(FulleProductCode.slice(6));


        var r = confirm("Remove ??");
        if (r == true) {

            var params = {
                uid: uid,
                ProducteCode: replaceqt(ProducteCode)
            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/remove/removevacproduct.php",
                method: "POST",
                data: params,
                success: function (data) {

                    if (data == "success") {

                        jQuery("#rek4").hide();


                        showvacproducts();
                    }

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }

            })
            jQuery('#pogi').hide();

            return false;
        }
    });

    jQuery(".editolremove2").on("tap", function () {
        var stre = jQuery(this).attr("id");

        var numb = stre.slice(2);

        var uid = localStorage.uid;
        var prodidde = "Cw" + numb + "";
        var FulleProductCode = jQuery("#" + prodidde + "").text();
        var ProducteCode = replaceqt(FulleProductCode.slice(6));



        var r = confirm("Remove ??");
        if (r == true) {




            var params = {
                uid: uid,
                ProducteCode: replaceqt(ProducteCode)
            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/remove/removevacservice.php",
                method: "POST",
                data: params,
                success: function (data) {

                    if (data == "success") {

                        jQuery("#rek5").hide();

                        showvacservice();
                    }

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }

            })
            jQuery('#pogi').hide();

            return false;
        }
    });

    jQuery(".delchat").on("tap", function () {
        var stre = jQuery(this).attr("id");

        var numb = stre.slice(3);

        var uid = localStorage.uid;
        var prodidde = "JWW" + numb + "";
        var ProducteCode = jQuery("#" + prodidde + "").text();

        var r = confirm("Remove ??");
        if (r == true) {



            var params = {
                uid: uid,
                ProducteCode: replaceqt(ProducteCode)
            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/remove/removechat.php",
                method: "POST",
                data: params,
                success: function (data) {

                    if (data == "success") {

                        showchatsreload();
                    }


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }

            })
            jQuery('#pogi').hide();

            return false;

        }
    });

    jQuery(".editolserv").on("tap", function () {

        var uid = localStorage.uid;

        jQuery("#prodymage1")[0].reset();

        jQuery("#Serviceedit")[0].reset();

        jQuery("#persi1").val(uid);

        var stry = jQuery(this).attr("id");

        var prefixy = stry.slice(0, 1);

        var testery = stry.slice(0, 2);

        if (prefixy == "a" && testery != "a_") {

            var numy = stry.slice(1);

            var Servname = jQuery("#c" + numy + "").text();
            var ServiceCode = Servname.slice(6);
            var Servprice = jQuery("#d" + numy + "").text();
            var Servcategory = jQuery("#f" + numy + "").text();
            var Servdescription = jQuery("#g" + numy + "").text();

            jQuery(document).on("pagebeforeshow", "#serviceEdito", function () {

                jQuery("#prodymage1")[0].reset();

                jQuery("#Serviceedit")[0].reset();


                jQuery("#Servname").val(" ");
                jQuery("#ServiceCode").val(Servname.slice(6));

                jQuery("#Servname").val(Servname.slice(6));
                jQuery("#item1").val(" ");

                jQuery("#item1").val(replaceqt(Servname.slice(6)));
                jQuery("#Servprice").val(" ");

                jQuery("#Servprice").val(Servprice.slice(10));
                jQuery("#currentservcat").html(" ");

                jQuery("#currentservcat").html("Current Section : " + Servcategory.slice(10));
                jQuery("#Servdescription").val(" ");

                jQuery("#Servdescription").val(Servdescription.slice(10));
                jQuery("#titol1").html(" ");

                jQuery("#titol1").html("<center><h3>" + Servname.slice(6) + " :</h3></center>");

                jQuery('#pogi').hide();

            });

            jQuery(document).on("pagebeforehide", "#serviceEdito", function () {

                jQuery("#prodymage1")[0].reset();

                jQuery("#Serviceedit")[0].reset();


                jQuery("#Servname").val(" ");

                jQuery("#item1").val(" ");

                jQuery("#Servprice").val(" ");

                jQuery("#currentservcat").html(" ");

                jQuery("#Servdescription").val(" ");

                jQuery("#titol1").html(" ");


            });


        }



    });

    jQuery("#Serviceedit").submit(function (event) {

        event.preventDefault(event);

        jQuery('#pogi').show();

        var uid = localStorage.uid;

        var ServiceCode = jQuery("#ServiceCode").val();


        var Servname = empto(jQuery("#Servname").val());
        var Servprice = empto(jQuery("#Servprice").val());
        var Servcategory = jQuery("#Servcategory").val();
        var Servdescription = empto(jQuery("#Servdescription").val());

        if (Servname == true && Servprice == true && Servdescription == true) {

            var params = {
                uid: uid,
                ServiceCode: replaceqt(ServiceCode),
                Servname: replaceqt(jQuery("#Servname").val()),
                Servprice: replaceqt(jQuery("#Servprice").val()),
                Servcategory: replaceqt(jQuery("#Servcategory").val()),
                Servdescription: replaceqt(jQuery("#Servdescription").val()),
            }

            jQuery.ajax({
                type: "POST",
                url: "http://192.168.92.1/server/edit/editservice.php",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {
                    if (data == "success") {
                        jQuery("#prodymage1")[0].reset();

                        jQuery("#Serviceedit")[0].reset();



                        jQuery('#pogi').hide();



                        window.location.href = "#service";
                        ServiceCode = " ";

                    }

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;

        }

        else {

            jQuery('#pogi').hide();

            alert("Please Fill In All Details.");

            return false;

        }




    });


    jQuery(".removeserv").on("tap", function () {
        var stru = jQuery(this).attr("id");

        var numbu = stru.slice(1);

        var uid = localStorage.uid;
        var prodiddey = "c" + numbu + "";
        var FullserviceCode = jQuery("#" + prodiddey + "").text();
        var serviceCode = replaceqt(FullserviceCode.slice(6));

        var r = confirm("Remove ??");
        if (r == true) {


            var params = {
                uid: uid,
                serviceCode: replaceqt(serviceCode)
            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/remove/removeservice.php",
                method: "POST",
                data: params,
                success: function (data) {

                    if (data == "success") {
                        jQuery("#rek3").hide();

                        showservice();


                    }

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }

            })
            jQuery('#pogi').hide();

            return false;

        }
    });



    jQuery(".like").on("tap", function () {

        likodiko();


        var strong = jQuery(this).attr("id");

        var numbu = strong.slice(2);

        var letter = strong.slice(1, 2)

        var ido = replaceqt(jQuery("#B" + letter + numbu + "").text());

        var prico = replaceqt(jQuery("#D" + letter + numbu + "").text());

        var uid = localStorage.uid;

        var params = {
            uid: uid,
            ido: ido,
            prico: prico
        };

        jQuery.ajax({
            url: "http://192.168.92.1/server/like/like.php",
            method: "POST",
            data: params,
            success: function (data) {

                ido = " ";
                prico = " ";

            },
            timeout: 25000,
            error: function () {

                datacon();

            }



        })
        jQuery('#pogi').hide();

        return false;
    });

    jQuery(".likeserv").on("tap", function () {

        likodiko();


        var strong = jQuery(this).attr("id");

        var numbu = strong.slice(2);

        var letter = strong.slice(1, 2)

        var ido = replaceqt(jQuery("#B" + letter + numbu + "").text());

        var prico = replaceqt(jQuery("#D" + letter + numbu + "").text());

        var uid = localStorage.uid;

        var params = {
            uid: uid,
            ido: ido,
            prico: prico
        };

        jQuery.ajax({
            url: "http://192.168.92.1/server/like/likeserv.php",
            method: "POST",
            data: params,
            success: function (data) {

                ido = " ";
                prico = " ";

            },
            timeout: 25000,
            error: function () {

                datacon();

            }


        })
        jQuery('#pogi').hide();

        return false;
    });




    jQuery(".viewy").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);

        var letter = strong.slice(1, 2)

        var Pname = replaceqt(jQuery("#Ca" + z + "").text());

        var prez = replaceqt(jQuery("#Ka" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Pname = replaceqt(jQuery("#Ca" + z + "").text());

            var Pprice = replaceqt(jQuery("#Da" + z + "").text());

            var uid = localStorage.uid;

            var params = {
                uid: uid,
                Pname: Pname,
                Pprice: Pprice

            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchfull.php",
                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Ia" + z + "").html(" ");
                    jQuery("#Ia" + z + "").html(data);
                    jQuery('#pogi').hide();

                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Ia" + z + "").html(" ");
            jQuery("#Ia" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }


    });

    jQuery(".viewy2").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);

        var letter = strong.slice(1, 2)

        var Pname = replaceqt(jQuery("#Cb" + z + "").text());

        var prez = replaceqt(jQuery("#Kb" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Pname = replaceqt(jQuery("#Cb" + z + "").text());

            var Pprice = replaceqt(jQuery("#Db" + z + "").text());

            var uid = localStorage.uid;

            var params = {
                uid: uid,
                Pname: Pname,
                Pprice: Pprice

            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchfullserv.php",

                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Ib" + z + "").html(" ");
                    jQuery("#Ib" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Ib" + z + "").html(" ");
            jQuery("#Ib" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }


    });

    jQuery(".viewy3").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(4);

        var letter = strong.slice(1, 4)

        var Pname = replaceqt(jQuery("#Caaa" + z + "").text());

        var prez = replaceqt(jQuery("#Kaaa" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Pname = replaceqt(jQuery("#Caaa" + z + "").text());

            var Pprice = replaceqt(jQuery("#Daaa" + z + "").text());

            var uid = localStorage.uid;

            var params = {
                uid: uid,
                Pname: Pname,
                Pprice: Pprice

            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/fetch/fetchvacfull.php",

                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Iaaa" + z + "").html(" ");
                    jQuery("#Iaaa" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Iaaa" + z + "").html(" ");
            jQuery("#Iaaa" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }


    });

    jQuery(".viewy4").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(4);

        var letter = strong.slice(1, 4)

        var Pname = replaceqt(jQuery("#Cbbb" + z + "").text());

        var prez = replaceqt(jQuery("#Kbbb" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Pname = replaceqt(jQuery("#Cbbb" + z + "").text());

            var Pprice = replaceqt(jQuery("#Dbbb" + z + "").text());

            var uid = localStorage.uid;

            var params = {
                uid: uid,
                Pname: Pname,
                Pprice: Pprice

            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/fetch/fetchvacfull2.php",

                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Ibbb" + z + "").html(" ");
                    jQuery("#Ibbb" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Ibbb" + z + "").html(" ");
            jQuery("#Ibbb" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }


    });

    jQuery(".viewy5").on("tap", function () {
        jQuery('#pogi').show();



        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);

        var customer = replaceqt(jQuery("#jC" + z + "").text());

        var sectol = replaceqt(jQuery("#kC" + z + "").text());

        var uid = localStorage.uid;

        var params = {
            uid: replaceqt(uid),
            customer: replaceqt(customer),
            sectol: replaceqt(sectol)
        };

        jQuery.ajax({

            url: "http://192.168.92.1/server/fetch/fetchcustomer.php",
            method: "POST",
            data: params,
            crossDomain: true,
            cache: false,
            success: function (data) {
                if (data != "Nothing") {

                    jQuery("#fC" + z + "").html(" ");
                    jQuery("#fC" + z + "").html(data);
                    jQuery('#pogi').hide();


                }

                else {

                    jQuery("#fC" + z + "").html(" ");
                    jQuery("#fC" + z + "").html('<img  src= "images/default.jpg"/>');
                    jQuery('#pogi').hide();

                }

            },
            timeout: 25000,
            error: function () {

                datacon();

            }
        });
        jQuery('#pogi').hide();

        return false;
    });

    jQuery(".viewy6").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);

        var prodido = replaceqt(jQuery("#bA" + z + "").text());

        var prez = replaceqt(jQuery("#kA" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {

            var uid = localStorage.uid;

            var params = {
                uid: replaceqt(uid),
                prodido: replaceqt(prodido)

            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchlike.php",
                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#iA" + z + "").html(" ");
                    jQuery("#iA" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#iA" + z + "").html(" ");
            jQuery("#iA" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }

    });

    jQuery(".viewy7").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);

        var prodido = replaceqt(jQuery("#bB" + z + "").text());

        var prez = replaceqt(jQuery("#kB" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {

            var uid = localStorage.uid;

            var params = {
                uid: replaceqt(uid),
                prodido: replaceqt(prodido)

            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchlikeserv.php",
                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#iB" + z + "").html(" ");
                    jQuery("#iB" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#iB" + z + "").html(" ");
            jQuery("#iB" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }

    });

    jQuery(".viewy8").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(1);


        var prez = replaceqt(jQuery("#j" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Prodname = jQuery("#c" + z + "").text();
            var ProductCode = replaceqt(Prodname.slice(6));

            var uid = localStorage.uid;

            var params = {
                uid: replaceqt(uid),
                ProductCode: replaceqt(ProductCode)
            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchpic.php",
                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#i" + z + "").html(" ");
                    jQuery("#i" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#i" + z + "").html(" ");
            jQuery("#i" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }

    });

    jQuery(".viewy9").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(1);


        var prez = replaceqt(jQuery("#j" + z + "").text());


        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Prodname1 = jQuery("#c" + z + "").text();
            var ProductCode1 = replaceqt(Prodname1.slice(6));

            var uid = localStorage.uid;

            var params = {
                uid: replaceqt(uid),
                ProductCode1: replaceqt(ProductCode1)
            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchpicserv.php",
                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#i" + z + "").html(" ");
                    jQuery("#i" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#i" + z + "").html(" ");
            jQuery("#i" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }

    });

    jQuery(".viewy10").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);


        var prez = replaceqt(jQuery("#Jv" + z + "").text());

        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Prodname = jQuery("#Cv" + z + "").text();
            var ProductCode = replaceqt(Prodname.slice(6));

            var uid = localStorage.uid;

            var params = {
                uid: replaceqt(uid),
                ProductCode: replaceqt(ProductCode)
            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchvacpic.php",
                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Kv" + z + "").html(" ");
                    jQuery("#Kv" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Kv" + z + "").html(" ");
            jQuery("#Kv" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }

    });

    jQuery(".viewy10").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);


        var prez = replaceqt(jQuery("#Jv" + z + "").text());

        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Prodname = jQuery("#Cv" + z + "").text();
            var ProductCode = replaceqt(Prodname.slice(6));

            var uid = localStorage.uid;

            var params = {
                uid: replaceqt(uid),
                ProductCode: replaceqt(ProductCode)
            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchvacpic.php",
                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Kv" + z + "").html(" ");
                    jQuery("#Kv" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Kv" + z + "").html(" ");
            jQuery("#Kv" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }

    });

    jQuery(".viewy11").on("tap", function () {
        jQuery('#pogi').show();

        var strong = jQuery(this).attr("id");

        var z = strong.slice(2);


        var prez = replaceqt(jQuery("#Jw" + z + "").text());

        var uid = localStorage.uid;

        if (prez == 'yes') {


            var Prodname = jQuery("#Cw" + z + "").text();
            var ProductCode = replaceqt(Prodname.slice(6));

            var uid = localStorage.uid;

            var params = {
                uid: replaceqt(uid),
                ProductCode: replaceqt(ProductCode)
            };

            jQuery.ajax({

                url: "http://192.168.92.1/server/fetch/fetchvacserv.php",
                method: "POST",
                data: params,
                crossDomain: true,
                cache: false,
                success: function (data) {

                    jQuery("#Kw" + z + "").html(" ");
                    jQuery("#Kw" + z + "").html(data);
                    jQuery('#pogi').hide();


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }
            });
            jQuery('#pogi').hide();

            return false;
        }

        else {

            jQuery("#Kw" + z + "").html(" ");
            jQuery("#Kw" + z + "").html('<img  src= "images/default.jpg"/>');
            jQuery('#pogi').hide();

        }

    });




    jQuery(".remo").on("tap", function () {

        var strep = jQuery(this).attr("id");

        var numbp = strep.slice(2);

        var uid = localStorage.uid;

        var prodiddep = "cA" + numbp + "";



        var ProducteCodep = replaceqt(jQuery("#" + prodiddep + "").text());



        var r = confirm("Remove ??");
        if (r == true) {



            var params = {
                uid: uid,
                ProducteCodep: replaceqt(ProducteCodep),

            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/remove/removelikoprod.php",
                method: "POST",
                data: params,
                success: function (data) {

                    if (data == "successProd") {
                        ProducteCodep = " ";
                        showlikedprod();


                    }


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }

            })
            jQuery('#pogi').hide();

            return false;

        }


    });


    jQuery(".remoservo").on("tap", function () {

        var strep2 = jQuery(this).attr("id");

        var numbp2 = strep2.slice(2);

        var uid = localStorage.uid;

        var prodiddep2 = "cB" + numbp2 + "";



        var ProducteCodep2 = replaceqt(jQuery("#" + prodiddep2 + "").text());

        var r = confirm("Remove ??");
        if (r == true) {


            var params = {
                uid: uid,
                ProducteCodep2: replaceqt(ProducteCodep2),

            };

            jQuery.ajax({
                url: "http://192.168.92.1/server/remove/removelikoserv.php",
                method: "POST",
                data: params,
                success: function (data) {

                    if (data == "successServ") {
                        ProducteCodep2 = " ";
                        jQuery("#rek7").hide();
                        showlikedserv();



                    }


                },
                timeout: 25000,
                error: function () {

                    datacon();

                }

            })
            jQuery('#pogi').hide();

            return false;

        }


    });




    jQuery(document).on("pageshow", "#productsaddow", function () {
        jQuery('#pogi').hide();


        var d = new Date();
        jQuery("#keyselect").val(d.getTime());

        var uid = localStorage.uid;
        jQuery("#productadd")[0].reset();
        jQuery("#uidi").val(uid);

        jQuery('#pogi').hide();
    });

    jQuery(".linkola").on("tap", function () {

        jQuery('#pogi').hide();

    });

    jQuery(document).on("pageshow", "#listpaddow", function () {
        jQuery('#pogi').hide();

        var d = new Date();
        jQuery("#keyselect3").val(d.getTime());


        var uid = localStorage.uid;
        jQuery("#wantedproductadd")[0].reset();
        jQuery("#uidi3").val(uid);
        jQuery('#pogi').hide();
    });

    jQuery(".linkolc").on("tap", function () {

        jQuery('#pogi').hide();


    });

    jQuery(document).on("pageshow", "#listsaddow", function () {
        jQuery('#pogi').hide();

        var d = new Date();
        jQuery("#keyselect4").val(d.getTime());


        var uid = localStorage.uid;
        jQuery("#wantedserviceadd")[0].reset();
        jQuery("#uidi4").val(uid);
        jQuery('#pogi').hide();
    });

    jQuery("#linkold").on("tap", function () {

        jQuery('#pogi').hide();

    });


    jQuery(document).on("pageshow", "#serviceaddow", function () {
        jQuery('#pogi').hide();


        var d = new Date();
        jQuery("#keyselect1").val(d.getTime());

        var uid = localStorage.uid;

        jQuery("#serviceadd")[0].reset();
        jQuery("#uidi1").val(uid);
        jQuery('#pogi').hide();
    });

    jQuery(".linkolb").on("tap", function () {

        jQuery('#pogi').hide();

    });

    jQuery("#gallery").on("tap", function () {

        var loaded = false;
        function onPhotosLoad() {
            // only load the camera selector on first load

            if (!loaded) {
                navigator.camera.getPicture(onPhotoLoadSuccess, onFail,
                    {
                        quality: 50,
                        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
                    });
                loaded = true;
            }
        }



        function onPhotoLoadSuccess(imageData) {

            jQuery(".gallery").val("" + imageData + "");

        }
        function onFail(message) {
            alert("Failed...Please Try Again.");
        }

    });



    jQuery(document).on("pageshow", "#start", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#register", function () {

        jQuery("#registerform")[0].reset();


        jQuery('#pogi').hide();


    });
    jQuery(document).on("pageshow", "#page", function () {

        jQuery('#pogi').hide();




    });
    jQuery(document).on("pageshow", "#posts", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#myposts", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#liked", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#profile", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#editpage", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#chat", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#chatbox", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#products", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#productsEdito", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#service", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#serviceEdito", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#wproducts", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#wservices", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#listp", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#listpEdito", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#lists", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#listsEdito", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#businessprod", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#businessserv", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#likedprod", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#likedserv", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#customers", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#shoppy", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#shoppy2", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#wantowi", function () {

        jQuery('#pogi').hide();

    });
    jQuery(document).on("pageshow", "#wantowi2", function () {

        jQuery('#pogi').hide();

    });


})


















