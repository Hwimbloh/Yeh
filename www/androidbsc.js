/*the don*/
/*2782667*/

jQuery(document).ready(function () {
    
    try {






push.on('notification', function(data){



navigator.notification.alert(data.message, null, data.title);





});



push.on('registration', function(data) {

    alert(data.registrationId);

if(localStorage.regID !=  data.registrationId){



localStorage.regID = data.registrationId;

 
 putReg();

}




});


function pushaT(){

push = PushNotification.init({

"android" : {

    "senderId" : "397811471406"


}


});





}




   function      putReg() {

            try {

                var city = empto(localStorage.uid);
                var nname1 = empto(localStorage.regID);
             

                if (city == true && nname1 == true ) {

             

                    var uid = localStorage.uid;
var Token = localStorage.regID;


                    var params = {
                        uid: uid,

                        Token : Token
                    };

                    jQuery.ajax({
                        type: "POST",
                        url: "http://" + localStorage.localhost + "/server/start/registerT.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data == "success") {

                               
                                localStorage.captured = "yes";

                            }

                            else{

            window.setTimeout(putReg, 20000);


                            }

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }




            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }






        localStorage.updated = "no";

     

        function getlocky() {
		



            try {
                var localhost = localStorage.localhost;

                var params = {

                    localhost: localhost

                };
                jQuery.ajax({

                    url: "http://" + localStorage.localhost + "/server/getlocky/getlocky.php",
                    method: "POST",
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                        if (data != "no" && data.indexOf("Maximum") == -1 && data.indexOf("error")== -1 && data.indexOf("exceeded")== -1 ) {

                            localStorage.localhost = data;


                        }
                   
                        localStorage.updated = "yes";


                    },
                    
                    error: function () {

                        datacon();

                    }
                });


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

		
		function dmcheck(){
			
			if(localStorage.dm == "yes" && localStorage.well == "yes"){
				
				 jQuery("#notty").show();

                 window.setTimeout(hoinotty, 2000);
				
			}
			
			
			 window.setTimeout(dmcheck, 25000);
			
			
		}
		
		
		
		

        function sele() {

            try {
                var pado = screen.height / 6;

                jQuery(".sele").css("padding-bottom", "" + pado + "px");
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }

        sele();

        function pogihide() {

            try {
                jQuery(".ito").css("height", "" + screen.width + "px");

                window.setTimeout(function () {

                    jQuery('#pogi').hide();

                }, 1000);

                return false;
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }


        jQuery(window).on("orientationchange", function (event) {

            jQuery(".ito").css("height", "" + screen.width + "px");


        });


        try {


            var logo = localStorage.login;

            var pending = localStorage.pending;

			 var pendingteam = localStorage.pendingteam;
			
            var uid = localStorage.uid;

            if (logo == "yes" && uid.length != 0) {

                jQuery("#morefeed").hide();

                localStorage.there = "no";

                localStorage.there2 = "no";

				localStorage.chatters = "yes";
				
				localStorage.chatters2 = "yes";
				
                setTimeout(getlocky, 6000);
				
				
				 setTimeout(dmcheck, 8000);

                setTimeout(showchats, 10000);

                setTimeout(fetcho, 12000);


 setTimeout(pushaT, 60000);
  if (localStorage.captured != "yes") {

                    setTimeout(putReg, 8000);

                }

                if (pending == "yes") {

                    setTimeout(sendmessage, 14000);

                }
				
				
				
				 if (pendingteam == "yes") {

                    setTimeout(sendmessageteam, 14000);

                }


            }

            else {

                localStorage.localhost = "www.netwek.co.zw";


                localStorage.regID = 0;
			
                localStorage.broadcast = "0";
				
				localStorage.other = "no";
				
				localStorage.dm = "no";
				
				localStorage.chatters = "yes";
				
				
				localStorage.chatters2 = "yes";
				
				
                getlocky();


                window.location.href = "#register";

                alert("Don't Have An Account? Please Sign Up.");

            }


        }
        catch (err) {

            var uid = localStorage.uid;

            var params = {
                err: err.message,
                uid: uid
            };


            jQuery.ajax({
                type: "POST",
                url: "http://" + localStorage.localhost + "/server/start/err.php",
                data: params,
                dataType: 'json',
                crossDomain: true,
                cache: false,
                
                error: function () {

                    datacon();


                }


            });

            return false;

        }


        function replaceqt(yut) {

            try {

                var tuy = yut.replace(/'/g, "qt");


                var trimo = tuy.trim();

                return trimo;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }

        function addqt(yut1) {

            try {


                var tuy1 = yut1.replace(/qt/g, "'");

                var trimo1 = tuy1.trim();

                return trimo1;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }

        function empto(input) {

            try {


                var length = input.length;

                if (length == 0 || input == " " || input == null) {

                    return false;
                }

                else {

                    return true;
                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

        function hoinotty() {

            jQuery('.notifico').hide();

        }

        function nmessage(){
	
		 jQuery("#notty").show();

          window.setTimeout(hoinotty, 2000);
				
	
          }
		
		
        function datacon() {

            pogihide();

            window.setTimeout(function () {

                jQuery("#notty2").show();

            }, 2000);


            window.setTimeout(hoinotty, 4000);

        }

        function dataconmessage() {


            window.setTimeout(function () {

                jQuery("#notty2").show();

            }, 2000);


            window.setTimeout(hoinotty, 4000);

            window.setTimeout(sendmessage, 10000);

        }

		
        function dataconmessageteam() {


            window.setTimeout(function () {

                jQuery("#notty2").show();

            }, 2000);


            window.setTimeout(hoinotty, 4000);

            window.setTimeout(sendmessageteam, 10000);

        }

		
        function notting() {
            pogihide();

            window.setTimeout(function () {

                jQuery("#notty3").show();

            }, 2000);


            window.setTimeout(hoinotty, 4000);

        }

        function nottingsearcho() {
            pogihide();

            window.setTimeout(function () {

                jQuery("#notty8").show();

            }, 2000);


            window.setTimeout(hoinotty, 4000);

        }

        function sendo() {

            jQuery("#notty4").show();


            window.setTimeout(hoinotty, 2000);

        }

        function finished() {

            jQuery("#pogi").hide();

            jQuery("#notty7").show();

            window.setTimeout(hoinotty, 3000);
        }
		
		
        function process() {

            jQuery("#pogi").hide();

            jQuery("#notty9").show();

            window.setTimeout(hoinotty, 3000);
        }
		
		
        function uploaded() {

            jQuery("#pogi").hide();

            jQuery("#notty10").show();

            window.setTimeout(hoinotty, 3000);
        }
		
		
		

        function likodiko() {

            jQuery("#pogilike").show();

            window.setTimeout(hoinotty, 2000);

        }

        function imagoo() {

            pogihide();

            jQuery("#notty5").show();

            window.setTimeout(hoinotty, 2000);

        }

        function nochats() {

            pogihide();


            window.setTimeout(function () {

                jQuery("#notty6").show();

            }, 2000);


            window.setTimeout(hoinotty, 4000);

        }

		
		
        function showproducts2() {

            try {

                jQuery('#pogi').show();

                var z = 1;

                var uid = localStorage.uid;

               // jQuery(".cont1").hide();

                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/mine/showproducts2.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                        if (data.length == 0) {

                            notting();

                            pogihide();

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

                                jQuery("#i" + z + "").html('<img class="ito" src="images/VIEW.jpeg"/>');

                                jQuery("#j" + z + "").html('<h4 style="display:none">' + item.prez + '</h4>');

                                z++;

                            });


							


                        }

						    while(z<=40){
	   
	                jQuery("#a_" + z + "").hide();
	                            z++;
                               }
		   
                            pogihide();

						

                    },
                    
                    error: function () {

                        datacon();

                    }

                })
                return false;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

        function showvacproducts() {

            try {


             //   jQuery(".sectovac").hide();

                jQuery('#pogi').show();

                var z = 1;

                var uid = localStorage.uid;

                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/mine/showvacproducts.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                        if (data.length == 0) {

                            notting();

                            pogihide();

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

                                jQuery("#Kv" + z + "").html('<img class="ito" src="images/VIEW.jpeg"/>');

                                jQuery("#Jv" + z + "").html('<h4 style="display:none">' + item.prez + '</h4>');

                                z++;

                            });

                            pogihide();

                        }

						
						    while(z<=40){
	   
	                jQuery("#Av_" + z + "").hide();
	z++;
                               }
		   
                            pogihide();

						

                    },
                    
                    error: function () {

                        datacon();

                    }

                })
                return false;



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

        function showservice() {

            try {


                jQuery('#pogi').show();

                var z = 41;
                var y = 1;

                var uid = localStorage.uid;

              //  jQuery(".cont2").hide();
                var uid = localStorage.uid;

                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/mine/showservice.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                        if (data.length == 0) {

                            notting();

                            pogihide();

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

                                jQuery("#i" + z + "").html('<img class="ito" src="images/VIEW.jpeg"/>');

                                jQuery("#j" + z + "").html('<h4 style="display:none">' + item.prez + '</h4>');


                                z++;
                                y++;


                            });

                            pogihide();

                        }

						
						    while(z<=80){
	   
	                  jQuery("#a_" + z + "").hide();
	z++;
                               }
		   
                            pogihide();

						

                    },
                    
                    error: function () {

                        datacon();

                    }
                })
                return false;



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

        function showvacservice() {

            try {

                jQuery('#pogi').show();

                var z = 1;

                var uid = localStorage.uid;

             //   jQuery(".sectovac2").hide();

                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/mine/showvacservices.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                        if (data.length == 0) {

                            notting();

                            pogihide();

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

                                jQuery("#Kw" + z + "").html('<img class="ito" src="images/VIEW.jpeg"/>');

                                jQuery("#Jw" + z + "").html('<h4 style="display:none">' + item.prez + '</h4>');


                                z++;

                            });

                            pogihide();

                        }

						
						    while(z<=40){
	   
	                jQuery("#Aw_" + z + "").hide();
	z++;
                               }
		   
                            pogihide();

						

                    },
                    
                    error: function () {

                        datacon();

                    }

                })
                return false;



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }

		
		
        function showcustomers() {

            try {


                jQuery('#pogi').show();

                jQuery(".poppy").hide();

             //   jQuery(".secto3").hide();
                var uid = localStorage.uid;

                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/show/showcustomers.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                          var z = 1;
						
						if (data.length == 0) {

                            notting();

                            pogihide();

                        }
                        else {
                          
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

                                jQuery("#fC" + z + "").html('<img class="ito" src="images/VIEW.jpeg"/>');

                                jQuery("#jC" + z + "").html('<h4 style="display : none">' +
                                    addqt(item.prodido) + '</h4>');

                                jQuery("#kC" + z + "").html('<h4 style="display : none">' +
                                    addqt(item.sectol) + '</h4>');

                                z++;

                            });

                            pogihide();

                        }

						
						    while(z<=40){
	   
	                jQuery("#aC_" + z + "").hide();
	z++;
                               }
		   
                            pogihide();

						
                    },
                    
                    error: function () {

                        datacon();

                    }

                })

                return false;



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

        function showlikedprod() {

            try {

                jQuery('#pogi').show();


                jQuery(".poppy").hide();
           //     jQuery(".secto1").hide();
                var uid = localStorage.uid;

                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/show/showliked.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
						
						var z = 39;
						
                        if (data.length == 0) {

                            notting();

                            pogihide();

                        }
                        else {
                            
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
                                    jQuery("#iA" + z + "").html('<img class="ito" src="images/VIEW.jpeg"/>');

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

                            pogihide();

                        }


						
						    while(z>=1){
	   
	                jQuery("#aA_" + z + "").hide();
	z--;
                               }
		   
                            pogihide();

						
                    },
                    
                    error: function () {

                        datacon();

                    }
                })
                return false;


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

        function showlikedserv() {

            try {


                jQuery('#pogi').show();

                jQuery(".poppy").hide();

                //jQuery(".secto2").hide();
                var uid = localStorage.uid;

                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/show/showlikedserv.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
						
						var z = 39;
						
                        if (data.length == 0) {

                            notting();

                            pogihide();

                        }
                        else {
                            
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
                                    jQuery("#iB" + z + "").html('<img class="ito" src="images/VIEW.jpeg"/>');


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

                            pogihide();

                        }

			                 while(z>=1){
	   
	                       jQuery("#aB_" + z + "").hide();
	z--;
                               }
		   
                            pogihide();

						

                    },
                    
                    error: function () {

                        datacon();

                    }
                })
                return false;



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

		
		
        function showshoppy(selector) {

            try {

                jQuery('#pogi').show();

                jQuery("#moreproducts").hide();


                jQuery(".poppy").hide();


                var uid = localStorage.uid;

                var country = localStorage.country;

				if(selector != jQuery("#hedzo").text() ){
				
				  jQuery(".secto").hide();

				
			}

                jQuery("#hedzo").text(selector);
			
             

                var params = {
                    uid: uid,
                    section: selector,
                    country: country
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/show/showsectionprod.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
						
						 var z = 1;
						
                        if (data.length == 0) {

                            notting();

                            pogihide();

                        }

                        else {

                            jQuery("#moreproducts").show();

                           
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

                                jQuery("#Ia" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');


                                z++;

                            });

                            pogihide();

                        }

					
                            pogihide();


                    },
                    
                    error: function () {

                        datacon();

                    }
                })

                return false;



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }

        function showshoppyserv(selector) {

            try {

                jQuery('#pogi').show();

                jQuery("#moreservices").hide();

                jQuery(".poppy").hide();

                var uid = localStorage.uid;

                var country = localStorage.country;

				 
			 if(selector != jQuery("#hedzo1").text() ){
				
				   jQuery(".secto").hide();


			}
			 

                jQuery("#hedzo1").text(selector);

         
                var params = {
                    uid: uid,
                    section: selector,
                    country: country
                };

                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/show/showsectionserv.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
						
						         var z = 1;

						
                        if (data.length == 0) {

                            notting();

                            pogihide();

                        }
                        else {
                   
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

                                jQuery("#Ib" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');


                                z++;

                            });

                            pogihide();

                        }

		   
    pogihide();

                    },
                    
                    error: function () {

                        datacon();

                    }
                })

                return false;




            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }

        function showwantowi(selector) {

            try {

                jQuery('#pogi').show();

                jQuery("#morewproducts").hide();


                jQuery(".poppy").hide();

                var uid = localStorage.uid;

                var country = localStorage.country;

					if(selector != jQuery("#hedzo2").text() ){
				
				  jQuery(".sectow").hide();
			}
				
                jQuery("#hedzo2").text(selector);

             


                var params = {
                    uid: uid,
                    section: selector,
                    country: country
                };



                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/show/showsectionvacprod.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

						
						      var z = 1;
						
                        if (data.length == 0) {

                            notting();

                            pogihide();

                        }
                        else {
                      
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

                                jQuery("#Iaaa" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');

                                z++;

                            });

                            pogihide();

                        }

						
		
                    },
                    
                    error: function () {

                        datacon();

                    }
                })

                return false;


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

        function showwantowiserv(selector) {

            try {

                jQuery('#pogi').show();

                jQuery("#morewservices").hide();


                jQuery(".poppy").hide();

                var uid = localStorage.uid;

                var country = localStorage.country;

					if(selector != jQuery("#hedzo3").text() ){
				
				   jQuery(".sectow").hide();
				
			}
				
                jQuery("#hedzo3").text(selector);

            


                var params = {
                    uid: uid,
                    section: selector,
                    country: country
                };

                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/show/showsectionvacserv.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

						
						     var z = 1;

						
                        if (data.length == 0) {

                            notting();

                            pogihide();

                        }
                        else {
                       
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

                                jQuery("#Ibbb" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');


                                z++;

                            });

                            pogihide();

                        }

	
                    },
                    
                    error: function () {

                        datacon();

                    }
                })


                return false;



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

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

            try {

               // jQuery(".slihowy").hide();

                var country = localStorage.country;

                var uid = localStorage.uid;

                var params = {
                    uid: uid,
                    country: country
                };

                if (empto(uid) == true) {
                    jQuery.ajax({

                        url: "http://" + localStorage.localhost + "/server/fetchr/fetchrprod.php",
                        method: "POST",
                        dataType: 'json',
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data.length == 0) {

                                return false;

                            }

                            else {

                                jQuery("#morefeed").show();

                                var z = 1;
                                jQuery.each(data, function (i, item) {

                                    jQuery("#Am_" + z + "").show();


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

                                    jQuery("#Im" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');


                                    z++;

                                });

                                pogihide();

                            }


                        },
                        


                    });

                    return false;
                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

        function fetchrserv() {

            try {

                var country = localStorage.country;

                var uid = localStorage.uid;

                var params = {
                    uid: uid,
                    country: country
                };

                if (empto(uid) == true) {

                    jQuery.ajax({

                        url: "http://" + localStorage.localhost + "/server/fetchr/fetchrserv.php",
                        method: "POST",
                        data: params,
                        dataType: 'json',
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data.length == 0) {

                                return false;

                            }
                            else {


                                var z = 1;

                                jQuery.each(data, function (i, item) {

                                    jQuery("#An_" + z + "").show();

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

                                    jQuery("#In" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');


                                    z++;

                                });

                                pogihide();

                            }


                        },
                        
                    });


                    return false;
                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

        function fetchrwprod() {

            try {


                var country = localStorage.country;

                var uid = localStorage.uid;

                var params = {
                    uid: uid,
                    country: country
                };

                if (empto(uid) == true) {


                    jQuery.ajax({

                        url: "http://" + localStorage.localhost + "/server/fetchr/fetchrwprod.php",
                        method: "POST",
                        data: params,
                        dataType: 'json',
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            if (data.length == 0) {

                                return false;

                            }
                            else {

                                var z = 1;
                                jQuery.each(data, function (i, item) {

                                    jQuery("#Aooo_" + z + "").show();

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

                                    jQuery("#Iooo" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');

                                    z++;

                                });

                                pogihide();

                            }


                        },
                        
                    });


                    return false;
                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

        function fetchrwserv() {

            try {


                var country = localStorage.country;

                var uid = localStorage.uid;

                var params = {
                    uid: uid,
                    country: country
                };

                if (empto(uid) == true) {
                    jQuery.ajax({

                        url: "http://" + localStorage.localhost + "/server/fetchr/fetchrwserv.php",
                        method: "POST",
                        data: params,
                        dataType: 'json',
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data.length == 0) {

                                return false;

                            }
                            else {

                                var z = 1;

                                jQuery.each(data, function (i, item) {

                                    jQuery("#Appp_" + z + "").show();

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

                                    jQuery("#Ippp" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');


                                    z++;

                                });

                                pogihide();

                            }


                        },
                        
                    });

                    return false;
                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }

		
		
		
        function fetch_prof2() {

            try {

                jQuery('#pogi').show();

                var uid = localStorage.uid;

                var params = {
                    uid: replaceqt(uid)
                };

                jQuery.ajax({

                    url: "http://" + localStorage.localhost + "/server/fetch/fetch.php",
                    method: "POST",
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                        if (data == "Nothing") {

                            jQuery("#ProfilePic").html(" ");
                            jQuery("#ProfilePic").html('<img  class="ito"  src= "images/default.jpg"/>');
                        }

                        else {

                           
                            jQuery("#ProfilePic").html(data);

                        }

                        pogihide();

                    },
                    
                    error: function () {

                        datacon();

                    }

                });


                return false;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }

        function showchats() {


            try {

                var uid = localStorage.uid;

                var params = {
                    uid: uid,
                };

                if (uid != " ") {
                    jQuery.ajax({

                        type: 'POST',
                        url: "http://" + localStorage.localhost + "/server/erge/NetChatEngineGetChats.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            var there = " ";

                            var there2 = " ";

                            if (data == "New") {

							       localStorage.chatters = "yes" ;

							
                                jQuery("#notty").show();

                                window.setTimeout(hoinotty, 2000);

                                there = localStorage.there;

                                there2 = localStorage.there2;

								
								
								   ghettomessagenew();
								   
						
                                if (there == "Here") {

                                    showchatsNew();

								
                                }

                
                            }
							
							
                            else if (data == "New2") {

							       localStorage.chatters2 = "yes" ;

							
                                jQuery("#notty").show();

                                window.setTimeout(hoinotty, 2000);

                                there = localStorage.there;

                                there2 = localStorage.there2;

                                ghettomessagenewteam();

								   

                                if (there == "Here") {

                                showteam();

				
									
                                }

                
                            }
				
				
							
								else{
								
                          window.setTimeout(showchats, 1000);
														
								}

                   

                        },
                        timeout: 27000,
                       
				   error: function () {

                            window.setTimeout(showchats, 15000);

                        },
 
                    })


                    return false;
                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

        function showteam() {


            try {

              
                var uid = localStorage.uid;
         

                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/erge/getteam.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                        if (data.length == 0) {

                            

                            pogihide();

                        }

                        else {
                            var z = 1;

                            jQuery.each(data, function (i, item) {

                     
                                    jQuery("#AWW_" + z + "").show();
						
                                    jQuery("#AWW" + z + "").css("padding", "0px");
                                    jQuery("#HWW" + z + "").css("padding", "0px");
                                    jQuery("#AWW" + z + "").html('<br /><a data-transition="pop" href="#chatbox" ><center><button class="button">Chat</button> </center></a>');

                                    jQuery("#BWW" + z + "").html('<center><h2 style="color : #222"> NetWek Team : </h2><h3>NetChat With Us For Any Help Or Feedback</h3></center>');

									
									                                    if (item.password != Number(localStorage.uid)   ) {
																			
																			
                                    jQuery("#JWW" + z + "").html('<h4 style="display : none">' + item.password + '</h4>');
									
																			
																		}
                         
									
                                    var mess = "EWW";

                                    if (item.asenda != Number(localStorage.uid)   ) {
                                        var dato = item.datesent;

										if(localStorage.broadcast != item.ido ||  localStorage.other != "yes"){
											
											    jQuery("#AWW_" + z + "").css({ "border": "2px solid #33ffff", "margin": "10px" });

                                             
                                        jQuery("#" + mess + z + "").html('<center><h3 class="messo" style="margin-left:5%;color :#222">  '+
                                            addqt(item.message) + '<br/><br/></h3 ></center><center><h3><span style="color:#3399ff">' + dato.slice(2) + '</span> </h3></center>');

                                        jQuery("#DWW" + z + "").html('<center><h3 style="display : none"> ' + item.ata + '');
										
										
                                      if(item.receiver == 255 && localStorage.broadcast != item.ido){
										  
                                  localStorage.broadcast = item.ido;
																				
						
							    var inito = 1;
                                var NetChatId = item.password;
								
								
								
                var chat2 = 1;

                while (chat2 < 21) {

                    var datum3 = "M" + NetChatId + "" + chat2 + "";

                    if (localStorage.getItem("" + datum3 + "") == null) {

                        localStorage.setItem("" + datum3 + "", "no");
                        localStorage.setItem("" + datum3 + "time", "no");

                    }

                    chat2++;

                }

								
								
								
                                for (inito = 1; inito < 20; inito++) {

                                    var initop = inito + 1;


                                    var fdatum3 = "M" + NetChatId + "" + inito + "";

                                    var fdatum3p = "M" + NetChatId + "" + initop + "";

                                    localStorage.setItem("" + fdatum3 + "", localStorage.getItem("" + fdatum3p + ""));
                                    localStorage.setItem("" + fdatum3 + "time", localStorage.getItem("" + fdatum3p + "time"));


                                }


                            
                                var datumM = "M" + NetChatId + "20";

                                localStorage.setItem("" + datumM + "", "no");

                                localStorage.setItem("" + datumM + "time", "no");


                                localStorage.setItem("" + datumM + "", addqt(item.message));

                                localStorage.setItem("" + datumM + "time", addqt(item.datesent.slice(2)));




									  }
										
											
										}

                                    
                                    }

                                    else {
										
										localStorage.other = "yes";
										
                                        var dato = item.datesent;
                                        jQuery("#AWW_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });

                                        jQuery("#" + mess + z + "").html('<center><h3 class="messo" style="margin-left:5%;color :#222">Me : '+
                                            addqt(item.message) + '<br/><br/></h3 ></center><center><h3><span style="color:#3399ff">' + dato.slice(2) + '</span></h3></center> ');

                                        jQuery("#DWW" + z + "").html('<center><h3 style="display : none"> ' + item.ata + '');

                                    }

                                  


                            });

                            pogihide();

							
							
                        }


						localStorage.chatters2 = "no";
						
                    },
                    
                    error: function () {

                        datacon();

                    }

                })


                return false;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

	
	
        function showchatsNew() {

            try {


                var uid = localStorage.uid;


                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/erge/getchats.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

						
						    var z = 2;

						
                        if (data.length == 0) {

pogihide();                        
						
                        }

                        else {
                        
                            jQuery.each(data, function (i, item) {

                                if (item.del == "yes") {

								

                                    var chat = 1;

                                    while (chat < 21) {

                                        var datum3 = "M" + item.password + "" + chat + "";

                                        localStorage.removeItem("" + datum3 + "");
                                        localStorage.removeItem("" + datum3 + "time");

                                        chat++;

                                    }

                                }

                                else {

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


                                    if (item.asenda != Number(localStorage.uid)) {
                                        var dato = item.datesent;

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

                                    z++;


                                }


                            });

							   pogihide();


                        }

						
						
							while(z <= 80){
								
								 jQuery("#AWW_" + z + "").hide();
								 
								z++;
								
							}
							
						
						
     localStorage.chatters = "no";
							

                    },
                    
                    error: function () {

                        datacon();

                    }


                })

                return false;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

	
        function showchatsreload() {


          try {
		
                jQuery('#pogi').show();

                var uid = localStorage.uid;

                var params = {
                    uid: uid
                };
                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/erge/getchats.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

						
						   var z = 2;

						
                        if (data.length == 0) {

                            

                            pogihide();

                        }

                        else {
                         
                            jQuery.each(data, function (i, item) {

                                if (item.del == "yes") {


                                    var chat = 1;

                                    while (chat < 21) {

                                        var datum3 = "M" + item.password + "" + chat + "";

                                        localStorage.removeItem("" + datum3 + "");
                                        localStorage.removeItem("" + datum3 + "time");

                                        chat++;

                                    }

                                }

                                else {



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

                                    if (item.asenda != Number(localStorage.uid)) {
                                        var dato = item.datesent;


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

                                    z++;


                                }



                            });

					
							
                            pogihide();

							
							
                        }

								
							while(z <= 80){
								
								 jQuery("#AWW_" + z + "").hide();
								 
								z++;
								
							}
							
						
						
						localStorage.chatters = "no";
						

                    },
                    
                    error: function () {

                        datacon();

                    }

                })


                return false;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        }

        function ghettomessagenew() {

            try {


			
                var uid = localStorage.uid;

              

                var params = {
                    uid: uid,
                 
                };

				
                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/erge/messagesnew.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                        var z = 2;
                        jQuery.each(data, function (i, item) {

					
						var NetChatIde = item.sender;
						
					
						  var chat2 = 1;

						  
						  
                    var datum6 = "M" + NetChatIde + "" + chat2 + "";

                    if (localStorage.getItem("" + datum6 + "") == null) {
						
						         while (chat2 < 21) {

                    var datum3 = "M" + NetChatIde + "" + chat2 + "";

                    if (localStorage.getItem("" + datum3 + "") == null) {

                        localStorage.setItem("" + datum3 + "", "no");
                        localStorage.setItem("" + datum3 + "time", "no");

                    }

                    chat2++;

                }

						
					}

						  
       
						

					
                            var inito = 1;

                            for (inito = 1; inito < 20; inito++) {

                                var initop = inito + 1;


                                var fdatum3 = "M" + NetChatIde + "" + inito + "";

                                var fdatum3p = "M" + NetChatIde + "" + initop + "";

                                localStorage.setItem("" + fdatum3 + "", localStorage.getItem("" + fdatum3p + ""));
                                localStorage.setItem("" + fdatum3 + "time", localStorage.getItem("" + fdatum3p + "time"));


                            }

						var	  there2 = localStorage.there2;
						
					  if (there2 == "Here") {

					    var NetChatId = " ";

                var NetWekName = " ";

                NetChatId = replaceqt(jQuery("#JXX1").text());

                NetWekName = jQuery("#GXX1").text();


					  
                                 		
							if(NetChatId == NetChatIde ){
								
							
                            jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid #33ffff ; margin: 10px">' +
                                '<center><p class = "dito">' +
                                addqt(item.message) + ' </p ></center>' +
                                '<center><p class = "dito">' +
                                addqt(item.datesent.slice(2)) + '</p></center>' +
                                '</div>');
	
		
							}


								
                                }
								
								else{
								
								
								localStorage.dm = "yes";	
									
								}
							
					
                            var datumM = "M" + NetChatIde + "20";

                            localStorage.setItem("" + datumM + "", "no");

                            localStorage.setItem("" + datumM + "time", "no");


                            localStorage.setItem("" + datumM + "", addqt(item.message));

                            localStorage.setItem("" + datumM + "time", addqt(item.datesent.slice(2)));

                            z++;

							
							
                        });

						   

                    },
                    
                    error: function () {

                        datacon();

                    }


                });

				
				pogihide();
				
        			
    					 window.setTimeout(showchats, 1000);	 
						 
                return false;



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

			
                return false;

				      
					
				
            }

        }

		
		
        function ghettomessagenewteam() {

            try {


			
                var uid = localStorage.uid;

              

                var params = {
                    uid: uid,
                 
                };

				
                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/erge/messagesteam.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {
                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                        var z = 2;
                        jQuery.each(data, function (i, item) {

					
						var NetChatIde = item.sender;
						
					
						  var chat2 = 1;

						  
						  
                    var datum6 = "M" + NetChatIde + "" + chat2 + "";

                    if (localStorage.getItem("" + datum6 + "") == null) {
						
						         while (chat2 < 21) {

                    var datum3 = "M" + NetChatIde + "" + chat2 + "";

                    if (localStorage.getItem("" + datum3 + "") == null) {

                        localStorage.setItem("" + datum3 + "", "no");
                        localStorage.setItem("" + datum3 + "time", "no");

                    }

                    chat2++;

                }

						
					}

						  
       
						

					
                            var inito = 1;

                            for (inito = 1; inito < 20; inito++) {

                                var initop = inito + 1;


                                var fdatum3 = "M" + NetChatIde + "" + inito + "";

                                var fdatum3p = "M" + NetChatIde + "" + initop + "";

                                localStorage.setItem("" + fdatum3 + "", localStorage.getItem("" + fdatum3p + ""));
                                localStorage.setItem("" + fdatum3 + "time", localStorage.getItem("" + fdatum3p + "time"));


                            }

						var	  there2 = localStorage.there2;
						
					  if (there2 == "Here") {

					    var NetChatId = " ";

                var NetWekName = " ";

                NetChatId = replaceqt(jQuery("#JXX1").text());

                NetWekName = jQuery("#GXX1").text();


					  
                                 		
							if(NetChatId == NetChatIde ){
								
							
                            jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid #33ffff ; margin: 10px">' +
                                '<center><p class = "dito">' +
                                addqt(item.message) + ' </p ></center>' +
                                '<center><p class = "dito">' +
                                addqt(item.datesent.slice(2)) + '</p></center>' +
                                '</div>');
	
		
							}


								
                                }
								
								else{
								
								
								localStorage.dm = "yes";	
									
								}
							
					
                            var datumM = "M" + NetChatIde + "20";

                            localStorage.setItem("" + datumM + "", "no");

                            localStorage.setItem("" + datumM + "time", "no");


                            localStorage.setItem("" + datumM + "", addqt(item.message));

                            localStorage.setItem("" + datumM + "time", addqt(item.datesent.slice(2)));

                            z++;

							
							
                        });

						   

                    },
                    
                    error: function () {

                        datacon();

                    }


                });

				
				pogihide();
				
    					 window.setTimeout(showchats, 1000);
				  
                return false;



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

					 window.setTimeout(showchats, 1000);
				
				
                return false;

				      
					
				
            }

        }

		
        function sendmessage() {

            try {

                var message = localStorage.message;

                var NetChatId = localStorage.NetChatId;

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
                        url: "http://" + localStorage.localhost + "/server/erge/insertchat.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            if (data != "failed") {

                                sendo();

                                var chat = 1;

                                while (chat < 21) {

                                    var datum3 = "M" + NetChatId + "" + chat + "";

                                    if (localStorage.getItem("" + datum3 + "") == null) {

                                        localStorage.setItem("" + datum3 + "", "no");
                                        localStorage.setItem("" + datum3 + "time", "no");

                                    }

                                    chat++;

                                }


                                var inito = 1;

                                for (inito = 1; inito < 20; inito++) {

                                    var initop = inito + 1;

                                    var fdatum3 = "M" + NetChatId + "" + inito + "";

                                    var fdatum3p = "M" + NetChatId + "" + initop + "";

                                    localStorage.setItem("" + fdatum3 + "", localStorage.getItem("" + fdatum3p + ""));
                                    localStorage.setItem("" + fdatum3 + "time", localStorage.getItem("" + fdatum3p + "time"));


                                }



                                var datumM = "M" + NetChatId + "20";

                                localStorage.setItem("" + datumM + "", "no");

                                localStorage.setItem("" + datumM + "time", "no");

                                localStorage.setItem("" + datumM + "", "Me : " + addqt(localStorage.message));


                                localStorage.setItem("" + datumM + "time", addqt(data));


                                localStorage.message = "no";

                                localStorage.NetChatId = "no";

                                localStorage.ata = "no";

                                localStorage.pending = "no";

                                jQuery("textarea").css("height", "4em");

								localStorage.chatters = "yes";
								
                            }

                            else {
                          localStorage.pendingteam = "no";
							
                                localStorage.pending = "yes";

                                setTimeout(sendmessage, 10000);

                            }

                        },
                        error: function () {
  localStorage.pendingteam = "no";
                            localStorage.pending = "yes";

                            dataconmessage();

                        }
                    });

                    return false;

                }

                else {


                    return false;

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

				
        function sendmessageteam() {

            try {

                var message = localStorage.message;

                var NetChatId = localStorage.NetChatId;

                var ata = localStorage.ata;

                var uid = localStorage.uid;

				
				 var name = localStorage.netwekname;

				
				
                if (message.length != 0) {

                    jQuery(".prodty").hide();

                    jQuery(".poppy").hide();

					
                    var params = {

                        message: message,
                        uid: uid,
                        NetChatId: NetChatId,
                        ata: ata,
						name : name

                    };

					
                    jQuery.ajax({
                        type: "POST",
                        url: "http://" + localStorage.localhost + "/server/erge/insertchatteam.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            if (data != "failed") {

                                sendo();

                                var chat = 1;

                                while (chat < 21) {

                                    var datum3 = "M" + NetChatId + "" + chat + "";

                                    if (localStorage.getItem("" + datum3 + "") == null) {

                                        localStorage.setItem("" + datum3 + "", "no");
                                        localStorage.setItem("" + datum3 + "time", "no");

                                    }

                                    chat++;

                                }


                                var inito = 1;

                                for (inito = 1; inito < 20; inito++) {

                                    var initop = inito + 1;

                                    var fdatum3 = "M" + NetChatId + "" + inito + "";

                                    var fdatum3p = "M" + NetChatId + "" + initop + "";

                                    localStorage.setItem("" + fdatum3 + "", localStorage.getItem("" + fdatum3p + ""));
                                    localStorage.setItem("" + fdatum3 + "time", localStorage.getItem("" + fdatum3p + "time"));


                                }



                                var datumM = "M" + NetChatId + "20";

                                localStorage.setItem("" + datumM + "", "no");

                                localStorage.setItem("" + datumM + "time", "no");

                                localStorage.setItem("" + datumM + "", "Me : " + addqt(localStorage.message));


                                localStorage.setItem("" + datumM + "time", addqt(data));


                                localStorage.message = "no";

                                localStorage.NetChatId = "no";

                                localStorage.ata = "no";

                                localStorage.pendingteam = "no";

                                jQuery("textarea").css("height", "4em");

								localStorage.chatters2 = "yes";
								
                            }

                            else {
  localStorage.pending = "no";
                                localStorage.pendingteam = "yes";

                                setTimeout(sendmessageteam, 10000);

                            }

                        },
                        error: function () {
  localStorage.pending = "no";
                            localStorage.pendingteam = "yes";

                            dataconmessageteam();

                        }
                    });

                    return false;

                }

                else {


                    return false;

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

		
        function sendmessagereply() {

            try {

                var message = localStorage.message;

                var NetChatId = localStorage.NetChatId;

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
                        url: "http://" + localStorage.localhost + "/server/erge/insertchat.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            if (data != "failed") {

                                sendo();

                                var chat = 1;

                                while (chat < 21) {

                                    var datum3 = "M" + NetChatId + "" + chat + "";

                                    if (localStorage.getItem("" + datum3 + "") == null) {

                                        localStorage.setItem("" + datum3 + "", "no");
                                        localStorage.setItem("" + datum3 + "time", "no");

                                    }

                                    chat++;

                                }


                                var inito = 1;

                                for (inito = 1; inito < 20; inito++) {

                                    var initop = inito + 1;

                                    var fdatum3 = "M" + NetChatId + "" + inito + "";

                                    var fdatum3p = "M" + NetChatId + "" + initop + "";

                                    localStorage.setItem("" + fdatum3 + "", localStorage.getItem("" + fdatum3p + ""));
                                    localStorage.setItem("" + fdatum3 + "time", localStorage.getItem("" + fdatum3p + "time"));


                                }



                                var datumM = "M" + NetChatId + "20";

                                localStorage.setItem("" + datumM + "", "no");

                                localStorage.setItem("" + datumM + "time", "no");

                                localStorage.setItem("" + datumM + "", "Me : " + addqt(localStorage.message));

                                localStorage.setItem("" + datumM + "time", addqt(data));

                                jQuery(".riley").text(data);

                                localStorage.message = "no";

                                localStorage.NetChatId = "no";

                                localStorage.ata = "no";

                                localStorage.pending = "no";

                                jQuery("textarea").css("height", "4em");

								localStorage.chatters = "yes";
                            }

                            else {
  localStorage.pendingteam = "no";
                                localStorage.pending = "yes";

                                setTimeout(sendmessage, 10000);

                            }

                        },
                        error: function () {
  localStorage.pendingteam = "no";
                            localStorage.pending = "yes";

                            dataconmessage();

                        }
                    });

                    return false;

                }

                else {


                    return false;

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

		
        function sendmessagereplyteam() {

            try {

                var message = localStorage.message;

                var NetChatId = localStorage.NetChatId;

				 var name = localStorage.netwekname;

				
                var ata = localStorage.ata;

                var uid = localStorage.uid;

                if (message.length != 0) {

                    jQuery(".prodty").hide();

                    jQuery(".poppy").hide();


                    var params = {

                        message: message,
                        uid: uid,
                        NetChatId: NetChatId,
                        ata: ata,
						name : name

                    };

                    jQuery.ajax({
                        type: "POST",
                        url: "http://" + localStorage.localhost + "/server/erge/insertchatteam.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            if (data != "failed") {

                                sendo();

                                var chat = 1;

                                while (chat < 21) {

                                    var datum3 = "M" + NetChatId + "" + chat + "";

                                    if (localStorage.getItem("" + datum3 + "") == null) {

                                        localStorage.setItem("" + datum3 + "", "no");
                                        localStorage.setItem("" + datum3 + "time", "no");

                                    }

                                    chat++;

                                }


                                var inito = 1;

                                for (inito = 1; inito < 20; inito++) {

                                    var initop = inito + 1;

                                    var fdatum3 = "M" + NetChatId + "" + inito + "";

                                    var fdatum3p = "M" + NetChatId + "" + initop + "";

                                    localStorage.setItem("" + fdatum3 + "", localStorage.getItem("" + fdatum3p + ""));
                                    localStorage.setItem("" + fdatum3 + "time", localStorage.getItem("" + fdatum3p + "time"));


                                }



                                var datumM = "M" + NetChatId + "20";

                                localStorage.setItem("" + datumM + "", "no");

                                localStorage.setItem("" + datumM + "time", "no");

                                localStorage.setItem("" + datumM + "", "Me : " + addqt(localStorage.message));

                                localStorage.setItem("" + datumM + "time", addqt(data));

                                jQuery(".riley").text(data);

                                localStorage.message = "no";

                                localStorage.NetChatId = "no";

                                localStorage.ata = "no";

                                localStorage.pendingteam = "no";

                                jQuery("textarea").css("height", "4em");

								localStorage.other = "yes";
								
								localStorage.chatters2 = "yes";
								
                            }

                            else {
  localStorage.pending = "no";
                                localStorage.pendingteam = "yes";

                                setTimeout(sendmessageteam, 10000);

                            }

                        },
                        error: function () {
  localStorage.pending = "no";
                            localStorage.pendingteam = "yes";

                            dataconmessageteam();

                        }
                    });

                    return false;

                }

                else {


                    return false;

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        }

		
        function ghettomessage() {

            try {

                jQuery(".mango").remove();


                jQuery('#pogi').show();


                var uid = localStorage.uid;


                var NetChatId = " ";

                var NetWekName = " ";

                NetChatId = replaceqt(jQuery("#JXX1").text());

                NetWekName = jQuery("#GXX1").text();

                var chat = 1;

                var chat2 = 1;




                while (chat < 21) {


                    var datum3 = "M" + NetChatId + "" + chat + "";

                    if (localStorage.getItem("" + datum3 + "").slice(0, 2) == "Me" && localStorage.getItem("" + datum3 + "") != "no") {

                        jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid  #66adff; margin: 10px">' +
                            '<center><p class = "dito">' +
                            localStorage.getItem("" + datum3 + "") + ' </p ></center>' +
                            '<center><p class = "dito">' +
                            localStorage.getItem("" + datum3 + "time") + '</p></center>' +
                            '</div>');


                    }

                    else if (localStorage.getItem("" + datum3 + "") != "no") {
                        jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid  #33ffff; margin: 10px">' +
                            '<center><p class = "dito">' +
                            localStorage.getItem("" + datum3 + "") + ' </p ></center>' +
                            '<center><p class = "dito">' +
                            localStorage.getItem("" + datum3 + "time") + '</p></center>' +
                            '</div>');


                    }


                    chat++;

                }

				
				localStorage.dm = "no";
				
               pogihide();
				
                return false;

				
				
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }

			
        function ghettomessageteam() {

            try {

                jQuery(".mango").remove();


                jQuery('#pogi').show();


                var uid = localStorage.uid;


                var NetChatId = " ";

                var NetWekName = " ";

                NetChatId = replaceqt(jQuery("#JXX1").text());

                NetWekName = jQuery("#GXX1").text();

                var chat = 1;

                var chat2 = 1;




                while (chat < 21) {


                    var datum3 = "M" + NetChatId + "" + chat + "";

                    if (localStorage.getItem("" + datum3 + "").slice(0, 2) == "Me" && localStorage.getItem("" + datum3 + "") != "no") {

                        jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid  #66adff; margin: 10px">' +
                            '<center><p class = "dito">' +
                            localStorage.getItem("" + datum3 + "") + ' </p ></center>' +
                            '<center><p class = "dito">' +
                            localStorage.getItem("" + datum3 + "time") + '</p></center>' +
                            '</div>');


                    }

                    else if (localStorage.getItem("" + datum3 + "") != "no") {
                        jQuery("#KXX1").after('<div class="mango" style = "border: 2px solid  #33ffff; margin: 10px">' +
                            '<center><p class = "dito">' +
                            localStorage.getItem("" + datum3 + "") + ' </p ></center>' +
                            '<center><p class = "dito">' +
                            localStorage.getItem("" + datum3 + "time") + '</p></center>' +
                            '</div>');


                    }


                    chat++;

                }

				
				localStorage.dm = "no";
				
               pogihide();
				
                return false;

				
				
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        }


		
		
        jQuery("#gallery").on("tap", function () {

            try {

                var loaded = false;

                function onPhotosLoad() {

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


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#morefeed").on("tap", function () {

            jQuery('#pogi').show();

            fetchrprod();
            fetchrserv();
            fetchrwprod();
            fetchrwserv();

        });

        jQuery("#moreproducts").on("tap", function () {

            jQuery('#pogi').show();


            var selector = jQuery("#hedzo").text();
            showshoppy(selector);

        });

        jQuery("#moreservices").on("tap", function () {

            jQuery('#pogi').show();


            var selector = jQuery("#hedzo1").text();
            showshoppyserv(selector);

        });

        jQuery("#morewproducts").on("tap", function () {


            jQuery('#pogi').show();


            var selector = jQuery("#hedzo2").text();
            showwantowi(selector);

        });

        jQuery("#morewservices").on("tap", function () {


            jQuery('#pogi').show();


            var selector = jQuery("#hedzo3").text();
            showwantowiserv(selector);

        });

        jQuery(".chatty").on("tap", function () {

            try {


                jQuery("textarea").css("height", "4em");

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


                    jQuery("#chedo").text(NetWekName1 + " : ");


                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        });

        jQuery(".deal").on("tap", function () {

            try {

                jQuery(".prodty").show();

                jQuery("textarea").css("height", "4em");

                var str = jQuery(this).attr("id");

                var prefix = str.slice(0, 1);

                var secprefix = str.slice(1, 2);

                var tester = str.slice(0, 3);

                var number = str.slice(2);

                if (prefix == "H" && tester != "A" + secprefix + "_") {

                    localStorage.ata = replaceqt(jQuery("#C" + secprefix + number + "").text());

                    localStorage.NetChatId = replaceqt(jQuery("#J" + secprefix + number + "").text());


                }

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".chatoy").on("tap", function () {

            try {

                var forme = jQuery(this).attr("id");

                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });


                var sel = forme.slice(7);

                var message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                if (message.length != 0) {

                    localStorage.message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                    sendmessage();

                }

                jQuery("#" + forme + "")[0].reset();


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".dealslide").on("tap", function () {

            try {
                jQuery("textarea").css("height", "4em");


                jQuery(".prodtyS").show();

                var str = jQuery(this).attr("id");

                var prefix = str.slice(0, 1);

                var secprefix = str.slice(1, 2);

                var tester = str.slice(0, 3);

                var number = str.slice(2);

                if (prefix == "H" && tester != "A" + secprefix + "_") {

                    localStorage.ata = replaceqt(jQuery("#F" + secprefix + number + "").text());

                    localStorage.NetChatId = replaceqt(jQuery("#J" + secprefix + number + "").text());



                }

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        })

        jQuery(".chatoyyS").on("tap", function () {

            try {


                var forme = jQuery(this).attr("id");

                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var sel = forme.slice(7);

                var message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                if (message.length != 0) {

                    localStorage.message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                    sendmessage();

                }

                jQuery("#" + forme + "")[0].reset();


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        })

        jQuery(".likew").on("tap", function () {

            try {

                jQuery("textarea").css("height", "4em");

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
                if (secprefix == "ccc") {
                    var messy2 = "#rek52";
                    jQuery(messy2).show();
                }
                if (secprefix == "ddd") {

                    var messy2 = "#rek53";
                    jQuery(messy2).show();

                }


                if (prefix == "A" && tester != "A" + secprefix + "_") {

                    localStorage.ata = replaceqt(jQuery("#C" + secprefix + number + "").text());

                    localStorage.NetChatId = replaceqt(jQuery("#J" + secprefix + number + "").text());


                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".chatoyy").on("tap", function () {

            try {

                var forme = jQuery(this).attr("id");

                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var sel = forme.slice(8);



                var message = replaceqt(jQuery("#biznetchatt" + sel + "").val());

                if (message.length != 0) {

                    localStorage.message = replaceqt(jQuery("#biznetchatt" + sel + "").val());

                    sendmessage();

                }

                jQuery("#" + forme + "")[0].reset();




            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }




        })

        jQuery(".likewslide").on("tap", function () {

            try {

                jQuery("textarea").css("height", "4em");


                jQuery(".prodtyS").show();



                var str = jQuery(this).attr("id");

                var prefix = str.slice(0, 1);

                var secprefix = str.slice(1, 4);
                var tester = str.slice(0, 5);

                var number = str.slice(4);

                if (prefix == "A" && tester != "A" + secprefix + "_") {

                    localStorage.ata = replaceqt(jQuery("#F" + secprefix + number + "").text());

                    localStorage.NetChatId = replaceqt(jQuery("#J" + secprefix + number + "").text());



                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".chatoyyS").on("tap", function () {

            try {

                var forme = jQuery(this).attr("id");

                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var sel = forme.slice(7);

                var message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                if (message.length != 0) {

                    localStorage.message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                    sendmessage();

                }

                jQuery("#" + forme + "")[0].reset();



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".dilo").on("tap", function () {

            try {


                jQuery("textarea").css("height", "4em");


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

                    localStorage.NetChatId = replaceqt(jQuery("#j" + secprefix + number + "").text());


                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery("#msgo1b").on("tap", function () {

            try {


                jQuery("#msgo1").submit(function (event) {

                    event.preventDefault();

                    return false;
                });



                var message = replaceqt(jQuery("#msglike1").val());

                if (message.length != 0) {

                    localStorage.message = replaceqt(jQuery("#msglike1").val());

                    sendmessage();

                }


                jQuery("#msgo1")[0].reset();



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery("#msgo2b").on("tap", function () {

            try {


                jQuery("#msgo2").submit(function (event) {

                    event.preventDefault();

                    return false;
                });


                var message = replaceqt(jQuery("#msglike2").val());


                if (message.length != 0) {

                    localStorage.message = replaceqt(jQuery("#msglike2").val());

                    sendmessage();

                }

                jQuery("#msgo2")[0].reset();


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".dilocusto").on("tap", function () {

            try {

                jQuery("textarea").css("height", "4em");


                jQuery("#rek15").show();

                var str = jQuery(this).attr("id");
                var prefix = str.slice(0, 1);
                var secprefix = str.slice(1, 2);
                var tester = str.slice(0, 3);
                var number = str.slice(2);


                if (prefix == "a" && tester != "a" + secprefix + "_") {

                    localStorage.ata = replaceqt(jQuery("#d" + secprefix + number + "").text());

                    localStorage.NetChatId = replaceqt(jQuery("#i" + secprefix + number + "").text());


                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        })

        jQuery(".chatoyC").tap(function () {

            try {

                var forme = jQuery(this).attr("id");


                jQuery("#" + forme + "").submit(function (event) {

                    event.preventDefault();

                    return false;
                });

                var sel = forme.slice(7);

                var message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                if (message.length != 0) {

                    localStorage.message = replaceqt(jQuery("#biznetchat" + sel + "").val());

                    sendmessage();

                }


                jQuery("#" + forme + "")[0].reset();




            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        })

        jQuery(".remocusto").on("tap", function () {

            try {

                var strep1 = jQuery(this).attr("id");

                var numbp1 = strep1.slice(2);

                var uid = localStorage.uid;

                var prodiddep1 = "dC" + numbp1 + "";

                var ProducteCodep1 = replaceqt(jQuery("#" + prodiddep1 + "").text());

                var r = confirm("Remove ??");
                if (r == true) {
                    jQuery('#pogi').show();

                    var params = {
                        uid: uid,
                        ProducteCodep1: replaceqt(ProducteCodep1),

                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/remove/removecustomer.php",
                        method: "POST",
                        data: params,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            if (data == "successCustomer") {

                                showcustomers();

                            }



                        },
                        
                        error: function () {

                            datacon();

                        }

                    })

                    return false;
                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        })

        jQuery(".editol").on("tap", function () {

            try {


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

                        pogihide();

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


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".editolvac").on("tap", function () {

            try {

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

                        pogihide();

                    });




                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".editolvac2").on("tap", function () {

            try {

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

                        pogihide();

                    });




                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".editolserv").on("tap", function () {

            try {

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

                        pogihide();

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


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".closer").on("tap", function () {

            try {

                var idowe = jQuery(this).attr("id");

                var numbere = idowe.slice(1);

                var popl = "#rek" + numbere + " ";

                jQuery(popl).hide();

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

		
        jQuery(".closerWell").on("tap", function () {

            try {

          
                jQuery("#welly").hide();

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

		
        jQuery(".remove").on("tap", function () {

            try {

                var stre = jQuery(this).attr("id");

                var numb = stre.slice(1);

                var uid = localStorage.uid;
                var prodidde = "c" + numb + "";
                var FulleProductCode = jQuery("#" + prodidde + "").text();
                var ProducteCode = replaceqt(FulleProductCode.slice(6));

                var r = confirm("Remove ??");
                if (r == true) {
                    jQuery('#pogi').show();

                    var params = {
                        uid: uid,
                        ProducteCode: replaceqt(ProducteCode)
                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/remove/removeproduct.php",
                        method: "POST",
                        data: params,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            if (data == "success") {

                                showproducts2();

                            }


                        },
                        
                        error: function () {

                            datacon();

                        }

                    })

                    return false;
                }

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".editolremove").on("tap", function () {

            try {


                var stre = jQuery(this).attr("id");

                var numb = stre.slice(2);

                var uid = localStorage.uid;
                var prodidde = "Cv" + numb + "";
                var FulleProductCode = jQuery("#" + prodidde + "").text();
                var ProducteCode = replaceqt(FulleProductCode.slice(6));


                var r = confirm("Remove ??");
                if (r == true) {

                    jQuery('#pogi').show();


                    var params = {
                        uid: uid,
                        ProducteCode: replaceqt(ProducteCode)
                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/remove/removevacproduct.php",
                        method: "POST",
                        data: params,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            if (data == "success") {

                                showvacproducts();
                            }

                        },
                        
                        error: function () {

                            datacon();

                        }

                    })

                    return false;
                }
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".editolremove2").on("tap", function () {

            try {

                var stre = jQuery(this).attr("id");

                var numb = stre.slice(2);

                var uid = localStorage.uid;
                var prodidde = "Cw" + numb + "";
                var FulleProductCode = jQuery("#" + prodidde + "").text();
                var ProducteCode = replaceqt(FulleProductCode.slice(6));



                var r = confirm("Remove ??");
                if (r == true) {

                    jQuery('#pogi').show();

                    var params = {
                        uid: uid,
                        ProducteCode: replaceqt(ProducteCode)
                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/remove/removevacservice.php",
                        method: "POST",
                        data: params,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            if (data == "success") {

                                showvacservice();
                            }

                        },
                        
                        error: function () {

                            datacon();

                        }

                    })

                    return false;
                }
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".delchat").on("tap", function () {

            try {


                var stre = jQuery(this).attr("id");

                var numb = stre.slice(3);

                var uid = localStorage.uid;
                var prodidde = "JWW" + numb + "";
                var ProducteCode = jQuery("#" + prodidde + "").text();

                var r = confirm("Remove ??");
                if (r == true) {

                    jQuery('#pogi').show();


                    var params = {
                        uid: uid,
                        ProducteCode: replaceqt(ProducteCode)
                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/remove/removechat.php",
                        method: "POST",
                        data: params,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            if (data == "success") {

                                showchatsreload();
                       
					   var chat = 1;

                                    while (chat < 21) {

                                        var datum3 = "M" + ProducteCode + "" + chat + "";

                                        localStorage.removeItem("" + datum3 + "");
                                        localStorage.removeItem("" + datum3 + "time");

                                        chat++;

                                    }

								 
                            }


                        },
                        
                        error: function () {

                            datacon();

                        }

                    })

                    return false;

                }
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });


        jQuery(".removeserv").on("tap", function () {

            try {


                var stru = jQuery(this).attr("id");

                var numbu = stru.slice(1);

                var uid = localStorage.uid;
                var prodiddey = "c" + numbu + "";
                var FullserviceCode = jQuery("#" + prodiddey + "").text();
                var serviceCode = replaceqt(FullserviceCode.slice(6));

                var r = confirm("Remove ??");
                if (r == true) {

                    jQuery('#pogi').show();

                    var params = {
                        uid: uid,
                        serviceCode: replaceqt(serviceCode)
                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/remove/removeservice.php",
                        method: "POST",
                        data: params,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            if (data == "success") {

                                showservice();


                            }

                        },
                        
                        error: function () {

                            datacon();

                        }

                    })

                    return false;

                }
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".remo").on("tap", function () {

            try {

                var strep = jQuery(this).attr("id");

                var numbp = strep.slice(2);

                var uid = localStorage.uid;

                var prodiddep = "cA" + numbp + "";



                var ProducteCodep = replaceqt(jQuery("#" + prodiddep + "").text());



                var r = confirm("Remove ??");
                if (r == true) {

                    jQuery('#pogi').show();


                    var params = {
                        uid: uid,
                        ProducteCodep: replaceqt(ProducteCodep),

                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/remove/removelikoprod.php",
                        method: "POST",
                        data: params,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            if (data == "successProd") {
                                ProducteCodep = " ";
                                showlikedprod();


                            }


                        },
                        
                        error: function () {

                            datacon();

                        }

                    })

                    return false;

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        });

        jQuery(".remoservo").on("tap", function () {

            try {

                var strep2 = jQuery(this).attr("id");

                var numbp2 = strep2.slice(2);

                var uid = localStorage.uid;

                var prodiddep2 = "cB" + numbp2 + "";



                var ProducteCodep2 = replaceqt(jQuery("#" + prodiddep2 + "").text());

                var r = confirm("Remove ??");
                if (r == true) {

                    jQuery('#pogi').show();


                    var params = {
                        uid: uid,
                        ProducteCodep2: replaceqt(ProducteCodep2),

                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/remove/removelikoserv.php",
                        method: "POST",
                        data: params,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            if (data == "successServ") {
                                ProducteCodep2 = " ";
                                showlikedserv();


                            }


                        },
                        
                        error: function () {

                            datacon();

                        }

                    })

                    return false;

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".like").on("tap", function () {

            try {

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
                    url: "http://" + localStorage.localhost + "/server/like/like.php",
                    method: "POST",
                    data: params,
                    success: function (data) {

                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                        ido = " ";
                        prico = " ";

                    },
                    
                    error: function () {

                        datacon();

                    }



                })

                return false;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".likeserv").on("tap", function () {

            try {


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
                    url: "http://" + localStorage.localhost + "/server/like/likeserv.php",
                    method: "POST",
                    data: params,
                    success: function (data) {

                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                        ido = " ";
                        prico = " ";

                    },
                    
                    error: function () {

                        datacon();

                    }


                })

                return false;
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".viewyslide").on("tap", function () {
            try {


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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchfull.php",
                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#Im" + z + "").html(" ");
                            jQuery("#Im" + z + "").html(data);


                            pogihide();

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Im" + z + "").html(" ");
                    jQuery("#Im" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".viewyslide2").on("tap", function () {

            try {

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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchfullserv.php",

                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {


  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            jQuery("#In" + z + "").html(" ");
                            jQuery("#In" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#In" + z + "").html(" ");
                    jQuery("#In" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".viewyslide3").on("tap", function () {

            try {

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
                        url: "http://" + localStorage.localhost + "/server/fetch/fetchvacfull.php",

                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            jQuery("#Iooo" + z + "").html(" ");
                            jQuery("#Iooo" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Iooo" + z + "").html(" ");
                    jQuery("#Iooo" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".viewyslide4").on("tap", function () {

            try {


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
                        url: "http://" + localStorage.localhost + "/server/fetch/fetchvacfull2.php",

                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {


  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            jQuery("#Ippp" + z + "").html(" ");
                            jQuery("#Ippp" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Ippp" + z + "").html(" ");
                    jQuery("#Ippp" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".viewy").on("tap", function () {

            try {

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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchfull.php",
                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {


  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            jQuery("#Ia" + z + "").html(" ");
                            jQuery("#Ia" + z + "").html(data);
                            pogihide();

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Ia" + z + "").html(" ");
                    jQuery("#Ia" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        });

        jQuery(".viewyprod").on("tap", function () {

            try {

                jQuery('#pogi').show();

                var strong = jQuery(this).attr("id");

                var z = strong.slice(2);

                var letter = strong.slice(1, 2)

                var Pname = replaceqt(jQuery("#Cc" + z + "").text());

                var prez = replaceqt(jQuery("#Kc" + z + "").text());


                var uid = localStorage.uid;

                if (prez == 'yes') {


                    var Pname = replaceqt(jQuery("#Cc" + z + "").text());

                    var Pprice = replaceqt(jQuery("#Dc" + z + "").text());

                    var uid = localStorage.uid;

                    var params = {
                        uid: uid,
                        Pname: Pname,
                        Pprice: Pprice

                    };

                    jQuery.ajax({

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchfullprodsearch.php",
                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {


  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            jQuery("#Ic" + z + "").html(" ");
                            jQuery("#Ic" + z + "").html(data);
                            pogihide();

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Ic" + z + "").html(" ");
                    jQuery("#Ic" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });


        jQuery(".viewy2").on("tap", function () {

            try {

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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchfullserv.php",

                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            jQuery("#Ib" + z + "").html(" ");
                            jQuery("#Ib" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Ib" + z + "").html(" ");
                    jQuery("#Ib" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".viewyserv").on("tap", function () {

            try {

                jQuery('#pogi').show();

                var strong = jQuery(this).attr("id");

                var z = strong.slice(2);

                var letter = strong.slice(1, 2)

                var Pname = replaceqt(jQuery("#Cd" + z + "").text());

                var prez = replaceqt(jQuery("#Kd" + z + "").text());


                var uid = localStorage.uid;

                if (prez == 'yes') {


                    var Pname = replaceqt(jQuery("#Cd" + z + "").text());

                    var Pprice = replaceqt(jQuery("#Dd" + z + "").text());

                    var uid = localStorage.uid;

                    var params = {
                        uid: uid,
                        Pname: Pname,
                        Pprice: Pprice

                    };

                    jQuery.ajax({

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchfullservsearch.php",

                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {


  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#Id" + z + "").html(" ");
                            jQuery("#Id" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Id" + z + "").html(" ");
                    jQuery("#Id" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });


        jQuery(".viewy3").on("tap", function () {

            try {


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
                        url: "http://" + localStorage.localhost + "/server/fetch/fetchvacfull.php",

                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {


  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            jQuery("#Iaaa" + z + "").html(" ");
                            jQuery("#Iaaa" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Iaaa" + z + "").html(" ");
                    jQuery("#Iaaa" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery(".viewywprod").on("tap", function () {



            try {

                jQuery('#pogi').show();

                var strong = jQuery(this).attr("id");

                var z = strong.slice(4);

                var letter = strong.slice(1, 4)

                var Pname = replaceqt(jQuery("#Cccc" + z + "").text());

                var prez = replaceqt(jQuery("#Kccc" + z + "").text());


                var uid = localStorage.uid;

                if (prez == 'yes') {


                    var Pname = replaceqt(jQuery("#Cccc" + z + "").text());

                    var Pprice = replaceqt(jQuery("#Dccc" + z + "").text());

                    var uid = localStorage.uid;

                    var params = {
                        uid: uid,
                        Pname: Pname,
                        Pprice: Pprice

                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/fetch/fetchvacfullsearch.php",

                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#Iccc" + z + "").html(" ");
                            jQuery("#Iccc" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Iccc" + z + "").html(" ");
                    jQuery("#Iccc" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });


        jQuery(".viewy4").on("tap", function () {


            try {

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
                        url: "http://" + localStorage.localhost + "/server/fetch/fetchvacfull2.php",

                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {


  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }


                            jQuery("#Ibbb" + z + "").html(" ");
                            jQuery("#Ibbb" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Ibbb" + z + "").html(" ");
                    jQuery("#Ibbb" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        });

        jQuery(".viewywserv").on("tap", function () {


            try {

                jQuery('#pogi').show();

                var strong = jQuery(this).attr("id");

                var z = strong.slice(4);

                var letter = strong.slice(1, 4)

                var Pname = replaceqt(jQuery("#Cddd" + z + "").text());

                var prez = replaceqt(jQuery("#Kddd" + z + "").text());


                var uid = localStorage.uid;

                if (prez == 'yes') {


                    var Pname = replaceqt(jQuery("#Cddd" + z + "").text());

                    var Pprice = replaceqt(jQuery("#Dddd" + z + "").text());

                    var uid = localStorage.uid;

                    var params = {
                        uid: uid,
                        Pname: Pname,
                        Pprice: Pprice

                    };

                    jQuery.ajax({
                        url: "http://" + localStorage.localhost + "/server/fetch/fetchvacfull2search.php",

                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {


  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#Iddd" + z + "").html(" ");
                            jQuery("#Iddd" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Iddd" + z + "").html(" ");
                    jQuery("#Iddd" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });


        jQuery(".viewy5").on("tap", function () {

            try {

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

                    url: "http://" + localStorage.localhost + "/server/fetch/fetchcustomer.php",
                    method: "POST",
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                        if (data != "Nothing") {

                            jQuery("#fC" + z + "").html(" ");
                            jQuery("#fC" + z + "").html(data);
                            pogihide();


                        }

                        else {

                            jQuery("#fC" + z + "").html(" ");
                            jQuery("#fC" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                            pogihide();

                        }

                    },
                    
                    error: function () {

                        datacon();

                    }
                });

                return false;
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".viewy6").on("tap", function () {

            try {

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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchlike.php",
                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#iA" + z + "").html(" ");
                            jQuery("#iA" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#iA" + z + "").html(" ");
                    jQuery("#iA" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        });

        jQuery(".viewy7").on("tap", function () {

            try {

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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchlikeserv.php",
                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#iB" + z + "").html(" ");
                            jQuery("#iB" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#iB" + z + "").html(" ");
                    jQuery("#iB" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".viewy8").on("tap", function () {

            try {

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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchpic.php",
                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#i" + z + "").html(" ");
                            jQuery("#i" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#i" + z + "").html(" ");
                    jQuery("#i" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".viewy9").on("tap", function () {

            try {


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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchpicserv.php",
                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#i" + z + "").html(" ");
                            jQuery("#i" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#i" + z + "").html(" ");
                    jQuery("#i" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".viewy10").on("tap", function () {

            try {

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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchvacpic.php",
                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#Kv" + z + "").html(" ");
                            jQuery("#Kv" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Kv" + z + "").html(" ");
                    jQuery("#Kv" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery(".viewy11").on("tap", function () {

            try {


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

                        url: "http://" + localStorage.localhost + "/server/fetch/fetchvacserv.php",
                        method: "POST",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                            jQuery("#Kw" + z + "").html(" ");
                            jQuery("#Kw" + z + "").html(data);
                            pogihide();


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    jQuery("#Kw" + z + "").html(" ");
                    jQuery("#Kw" + z + "").html('<img  class="ito"  src= "images/default.jpg"/>');
                    pogihide();

                }

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

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

            showshoppy("Other Products");

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

            showshoppyserv("Other Services");

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

            showwantowi("Other Products");

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

            showwantowiserv("Other Services");

        });



        jQuery("#registerform").submit(function () {

            try {


                event.preventDefault();

                jQuery("#morefeed").hide();
localStorage.well = "no";


                var City = empto(jQuery("#city").val());
                var Country = jQuery("#country").val();
                var NetWek_Name = empto(jQuery("#nname").val());
                var Phone = empto(jQuery("#phone").val());


                var updated = localStorage.updated;

                if (updated == "yes") {


                    if (City == true && NetWek_Name == true && Phone == true) {

                        if (Country == "SELECT COUNTRY") {

                            alert("SELECT COUNTRY");

                            pogihide();


                            return false;
                        }

                        else {

                            jQuery('#pogi').show();

                            var params = {

                                city: replaceqt(jQuery("#city").val()),
                                country: replaceqt(jQuery("#country").val()),
                                nname: replaceqt(jQuery("#nname").val()),
                                phone: replaceqt(jQuery("#phone").val()),
                            };

                            var nname = replaceqt(jQuery("#nname").val());


                            jQuery.ajax({
                                type: "POST",
                                url: "http://" + localStorage.localhost + "/server/start/register.php",
                                data: params,
                                dataType: 'json',
                                crossDomain: true,
                                cache: false,
                                success: function (data) {
                                      if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                                    if (data != "failed" && data.length != 0 && data.indexOf("Maximum") == -1 && data.indexOf("error")== -1 && data.indexOf("exceeded")== -1) {

                                        jQuery.each(data, function (i, item) {

                                            localStorage.login = "yes";
                                            localStorage.uid = item.password;
                                            localStorage.netwekname = item.netwekname;
                                            localStorage.city = item.city;
                                            localStorage.country = item.country;
                                            localStorage.phone = item.phone;

                                        });





                                        localStorage.removeItem("updated");

                                        window.location.href = "#pass";

										
pushaT();

                                        setTimeout(showchats, 60000);
										
												
										localStorage.dm = "yes";
									
										
                                        window.setTimeout(dmcheck, 20000);
										
                                        setTimeout(fetcho, 13000);

                                    }

                                    else {

                                        alert("Username Taken...Try Another One");

                                        pogihide();

                                        jQuery("#nname").val("");

                                    }


                                },
                                
                                error: function () {

                                    datacon();



                                }


                            });

                            return false;


                        }



                    }

                    else {

                     
                        return false;



                    }


                }

                else {

                    datacon();

                    getlocky();

                    return false;

                }

            }
            catch (err) {

                var uid = 1984;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });


        jQuery("#loginform").submit(function (event) {

            try {


                event.preventDefault();

                jQuery("#morefeed").hide();


                var username1 = empto(jQuery("#username").val());



                var password1 = empto(jQuery("#password").val());


                if (username1 == true && password1 == true) {
                    jQuery('#pogi').show();

                    var password3 = addqt(jQuery("#password").val());

                    var username3 = jQuery("#username").val();


                    var params = {
                        username: replaceqt(jQuery("#username").val()),

                        password: replaceqt(jQuery("#password").val())

                    };

                    jQuery.ajax({
                        type: "POST",
                        url: "http://" + localStorage.localhost + "/server/start/login.php",
                        data: params,
                        dataType: 'json',
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data != "failed" && data.length != 0) {

                                jQuery.each(data, function (i, item) {

                                    localStorage.login = "yes";
                                    localStorage.uid = item.password;
                                    localStorage.netwekname = item.netwekname;
                                    localStorage.city = item.city;
                                    localStorage.country = item.country;
                                      
                                });




                                alert("Welcome Back " + localStorage.netwekname + "");


                                window.location.href = "#page";


pushaT();

                                setTimeout(showchats, 10000);

										localStorage.dm = "yes";
							
								
								window.setTimeout(dmcheck, 20000);
								
								
                                setTimeout(fetcho, 12000);

								
							

                            }

                            else {
                                pogihide();


                                alert("Incorrect Username Or NetWek ID");


                            }

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;


                }

                else {

                    pogihide();

                    alert("Please Fill In All Details.");

                    return false;

                }

            }
            catch (err) {

                var uid = 1985;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }

        });

        jQuery("#editprofile").submit(function (event) {

            try {

                event.preventDefault();



                var city = empto(jQuery("#Cy").val());
                var nname1 = empto(jQuery("#NName").val());
                var phone1 = empto(jQuery("#Phon").val());

                if (city == true && nname1 == true && phone1 == true) {

                    jQuery('#pogi').show();


                    var uid = localStorage.uid;

                    var nname = replaceqt(jQuery("#NName").val());
                    var city = replaceqt(jQuery("#Cy").val());
                    var phone = replaceqt(jQuery("#Phon").val());

                    var params = {
                        uid: uid,

                        city: replaceqt(jQuery("#Cy").val()),
                        nname: replaceqt(jQuery("#NName").val()),
                        phone: replaceqt(jQuery("#Phon").val()),
                    };

                    jQuery.ajax({
                        type: "POST",
                        url: "http://" + localStorage.localhost + "/server/edit/edit.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {
                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data == "success") {

                                localStorage.netwekname = nname;
                                localStorage.city = city;
                                localStorage.phone = phone;

                                finished();

                                window.location.href = "#profile";


                            }

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    pogihide();

                    alert("Please Fill In All Details.");

                    return false;

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#productadd").submit(function (event) {

            try {

                localStorage.gone = "no";


                event.preventDefault();


                var prodname = empto(jQuery("#prodname").val());
                var prodprice = empto(jQuery("#prodprice").val());
                var prodstate = jQuery("#prodstate").val();
                var prodcategory = jQuery("#prodcategory").val();
                var proddescription = empto(jQuery("#proddescription").val());



                if (prodname == true && prodprice == true && proddescription == true) {

                    if (prodstate != "Choose Product Condition" && prodcategory != "Choose Product Section") {

                        var imageprodo = jQuery("#imageprodo").val();


                        if (imageprodo.length == 0) {

                            alert("Please Choose Image.");

                            pogihide();

                            return false;

                        }

                        else {

                            var extension = jQuery("#imageprodo").val().split('.').pop().toLowerCase();

                            if (jQuery.inArray(extension, ['jpg', 'jpeg', 'png']) == -1) {

                                alert("Invalid Image, must be .jpeg or .jpg or .png");


                                pogihide();

                                return false;
                            }

                            else {

                                jQuery('#pogi').show();

                                var city = localStorage.city;

                                var country = localStorage.country;


                                var params = {

                                    uidi: replaceqt(jQuery("#uidi").val()),
                                    keyselect: replaceqt(jQuery("#keyselect").val()),
                                    prodname: replaceqt(jQuery("#prodname").val()),
                                    prodprice: replaceqt(jQuery("#prodprice").val()),
                                    prodstate: replaceqt(jQuery("#prodstate").val()),
                                    prodcategory: replaceqt(jQuery("#prodcategory").val()),
                                    proddescription: replaceqt(jQuery("#proddescription").val()),
                                    city: replaceqt(city),
                                    country: replaceqt(country)

                                }


                                jQuery.ajax({

                                    type: "POST",
                                    url: "http://" + localStorage.localhost + "/server/add/addproduct.php",
                                    data: params,
                                    crossDomain: true,
                                    cache: false,
                                    success: function (data) {

                                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                                        if (data == "success") {

                                            setTimeout(function () {

                                                var gone = localStorage.gone;

                                                jQuery("#productadd")[0].reset();


                                                if (gone != "yes") {
                                                    process();

                                                    window.location.href = "#products";

                                                }


                                            }, 25000);


                                        }


                                    },
                                   
                                    error: function () {

                                        datacon();


                                    }
                                });

                                jQuery.ajax({

                                    url: "http://" + localStorage.localhost + "/server/add/addproductimage.php",
                                    method: "POST",
                                    data: new FormData(this),
                                    contentType: false,
                                    processData: false,
                                    crossDomain: true,
                                    cache: false,
                                   
                                    success: function (data) {

                                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                                     if(data.indexOf("success") != -1){
										 
										 window.location.href = "#products";

                                            jQuery("#productadd")[0].reset();

                                            localStorage.gone = "yes";

                                            uploaded();

										 
									 }
                                            

                                        


                                    },
                                    error: function () {

                                        datacon();

                                    }


                                });


                                return false;



                            }
                        }

                    }

                    else {

                        pogihide();

                        alert("Choose Product Condition and Product Section.");

                        return false;

                    }


                }

                else {

                    pogihide();

                    alert("Please Fill In All Details.");

                    return false;

                }




            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#wantedproductadd").submit(function (event) {

            try {


                localStorage.gone = "no";

                event.preventDefault();


                var prodname = empto(jQuery("#prodname1").val());
                var prodprice = empto(jQuery("#prodprice1").val());
                var prodstate = jQuery("#prodstate1").val();
                var prodcategory = jQuery("#prodcategory1").val();
                var proddescription = empto(jQuery("#proddescription1").val());



                var imageprodo1 = jQuery("#imageprodo1").val();


                if (imageprodo1.length != 0) {


                    if (prodname == true && prodprice == true && proddescription == true) {

                        if (prodstate != "Choose Product Condition" && prodcategory != "Choose Product Section") {

                            var extension = jQuery("#imageprodo1").val().split('.').pop().toLowerCase();

                            if (jQuery.inArray(extension, ['jpg', 'jpeg', 'png']) == -1) {

                                alert("Invalid Image, must be .jpeg or .jpg or .png");


                                pogihide();

                                return false;
                            }

                            else {

                                jQuery('#pogi').show();

                                var city = localStorage.city;

                                var country = localStorage.country;

                                var params = {
                                    uidi3: replaceqt(jQuery("#uidi3").val()),
                                    keyselect: replaceqt(jQuery("#keyselect3").val()),
                                    prodname: replaceqt(jQuery("#prodname1").val()),
                                    prodprice: replaceqt(jQuery("#prodprice1").val()),
                                    prodstate: replaceqt(jQuery("#prodstate1").val()),
                                    prodcategory: replaceqt(jQuery("#prodcategory1").val()),
                                    proddescription: replaceqt(jQuery("#proddescription1").val()),
                                    city: replaceqt(city),
                                    country: replaceqt(country)

                                }

                                jQuery.ajax({

                                    type: "POST",
                                    url: "http://" + localStorage.localhost + "/server/add/addvacproduct.php",
                                    data: params,
                                    crossDomain: true,
                                    cache: false,
                                    success: function (data) {

                                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                                        if (data == "success") {


                                            setTimeout(function () {


                                                var gone = localStorage.gone;


                                                jQuery("#wantedproductadd")[0].reset();


                                                if (gone != "yes") {
                                                    process();

                                                    window.location.href = "#listp";

                                                }

                                            }, 25000);

                                        }


                                    },
                                   
                                    error: function () {

                                        datacon();

                                    }

                                });

                                jQuery.ajax({

                                    url: "http://" + localStorage.localhost + "/server/add/addvacproductimage.php",
                                    method: "POST",
                                    data: new FormData(this),
                                    contentType: false,
                                    processData: false,
                                    crossDomain: true,
                                    cache: false,
                                   
                                    success: function (data) {
                                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
              if(data.indexOf("success") != -1){
				  
				  
				  window.location.href = "#listp";

                                            jQuery("#wantedproductadd")[0].reset();

                                            localStorage.gone = "yes";

                                            uploaded();
				  
			  }
                                            

                                      


                                    },
                                    error: function () {

                                        datacon();

                                    }

                                });


                                return false;

                            }

                        }

                        else {

                            pogihide();

                            alert("Choose Product Condition and Product Section.");

                            return false;

                        }


                    }

                    else {

                        pogihide();

                        alert("Please Fill In All Details.");

                        return false;

                    }




                }

                else {


                    if (prodname == true && prodprice == true && proddescription == true) {

                        if (prodstate != "Choose Product Condition" && prodcategory != "Choose Product Section") {

                            jQuery('#pogi').show();


                            var city = localStorage.city;

                            var country = localStorage.country;


                            var params = {
                                uidi3: replaceqt(jQuery("#uidi3").val()),
                                keyselect: replaceqt(jQuery("#keyselect3").val()),
                                prodname: replaceqt(jQuery("#prodname1").val()),
                                prodprice: replaceqt(jQuery("#prodprice1").val()),
                                prodstate: replaceqt(jQuery("#prodstate1").val()),
                                prodcategory: replaceqt(jQuery("#prodcategory1").val()),
                                proddescription: replaceqt(jQuery("#proddescription1").val()),
                                city: replaceqt(city),
                                country: replaceqt(country)

                            }

                            jQuery.ajax({

                                type: "POST",
                                url: "http://" + localStorage.localhost + "/server/add/addvacproduct.php",
                                data: params,
                                crossDomain: true,
                                cache: false,
                                success: function (data) {
                                      if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                                    if (data == "success") {

                                        window.location.href = "#listp";

                                        jQuery("#wantedproductadd")[0].reset();

                                        finished();

                                    }


                                },
                               
                                error: function () {

                                    datacon();

                                    pogihide();


                                }

                            });

                            return false;

                        }

                        else {

                            pogihide();

                            alert("Choose Product Condition and Product Section.");

                            return false;

                        }


                    }

                    else {

                        pogihide();

                        alert("Please Fill In All Details.");

                        return false;

                    }


                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        });

        jQuery("#wantedserviceadd").submit(function (event) {

            try {

                localStorage.gone = "no";

                event.preventDefault();


                var prodname = empto(jQuery("#prodname4").val());
                var prodprice = empto(jQuery("#prodprice4").val());
                var prodcategory = jQuery("#prodcategory4").val();
                var proddescription = empto(jQuery("#proddescription4").val());

                var imageprodo4 = jQuery("#imageprodo4").val();


                if (imageprodo4.length != 0) {


                    if (prodname == true && prodprice == true && proddescription == true) {

                        if (prodcategory != "Choose Service Section") {

                            var extension = jQuery("#imageprodo4").val().split('.').pop().toLowerCase();

                            if (jQuery.inArray(extension, ['jpg', 'jpeg', 'png']) == -1) {

                                alert("Invalid Image, must be .jpeg or .jpg or .png");


                                pogihide();

                                return false;
                            }

                            else {
                                jQuery('#pogi').show();

                                var city = localStorage.city;

                                var country = localStorage.country;

                                var params = {
                                    uidi4: replaceqt(jQuery("#uidi4").val()),
                                    keyselect: replaceqt(jQuery("#keyselect4").val()),
                                    prodname: replaceqt(jQuery("#prodname4").val()),
                                    prodprice: replaceqt(jQuery("#prodprice4").val()),
                                    prodcategory: replaceqt(jQuery("#prodcategory4").val()),
                                    proddescription: replaceqt(jQuery("#proddescription4").val()),
                                    city: replaceqt(city),
                                    country: replaceqt(country)

                                }

                                jQuery.ajax({

                                    type: "POST",
                                    url: "http://" + localStorage.localhost + "/server/add/addvacservice.php",
                                    data: params,
                                    crossDomain: true,
                                    cache: false,
                                    success: function (data) {

                                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                                        if (data == "success") {


                                            setTimeout(function () {


                                                jQuery("#wantedserviceadd")[0].reset();


                                                var gone = localStorage.gone;


                                                if (gone != "yes") {
                                                    process();

                                                    window.location.href = "#lists";

                                                }
                                            }, 25000);


                                        }



                                    },
                                   
                                    error: function () {

                                        datacon();
                                        pogihide();

                                    }
                                });

                                jQuery.ajax({

                                    url: "http://" + localStorage.localhost + "/server/add/addvacserviceimage.php",
                                    method: "POST",
                                    data: new FormData(this),
                                    contentType: false,
                                    processData: false,
                                    crossDomain: true,
                                    cache: false,
                                   
                                    success: function (data) {
                                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

									 if(data.indexOf("success") != -1){
										 
										 
                                            window.location.href = "#lists";

                                            jQuery("#wantedserviceadd")[0].reset();

                                            localStorage.gone = "yes";

                                            uploaded();

										 
					}
									
                                        



                                    },
                                    error: function () {

                                        datacon();
                                        pogihide();

                                    }

                                });


                                return false;

                            }

                        }

                        else {

                            pogihide();

                            alert("Choose Service Section.");

                            return false;

                        }


                    }

                    else {

                        pogihide();

                        alert("Please Fill In All Details.");

                        return false;

                    }



                }

                else {


                    if (prodname == true && prodprice == true && proddescription == true) {

                        if (prodcategory != "Choose Service Section") {

                            jQuery('#pogi').show();

                            var city = localStorage.city;

                            var country = localStorage.country;

                            var params = {
                                uidi4: replaceqt(jQuery("#uidi4").val()),
                                keyselect: replaceqt(jQuery("#keyselect4").val()),
                                prodname: replaceqt(jQuery("#prodname4").val()),
                                prodprice: replaceqt(jQuery("#prodprice4").val()),
                                prodcategory: replaceqt(jQuery("#prodcategory4").val()),
                                proddescription: replaceqt(jQuery("#proddescription4").val()),
                                city: replaceqt(city),
                                country: replaceqt(country)

                            }

                            jQuery.ajax({

                                type: "POST",
                                url: "http://" + localStorage.localhost + "/server/add/addvacservice.php",
                                data: params,
                                crossDomain: true,
                                cache: false,
                                success: function (data) {
                                      if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                                    if (data == "success") {


                                        window.location.href = "#lists";

                                        jQuery("#wantedserviceadd")[0].reset();

                                        finished();


                                    }



                                },
                               
                                error: function () {

                                    datacon();

                                }
                            });

                            return false;
                        }

                        else {

                            pogihide();

                            alert("Choose Service Section.");

                            return false;

                        }


                    }

                    else {

                        pogihide();

                        alert("Please Fill In All Details.");

                        return false;

                    }


                }





            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#serviceadd").submit(function (event) {


            try {

                localStorage.gone = "no";


                event.preventDefault();


                var servname = empto(jQuery("#servname").val());
                var servprice = empto(jQuery("#servprice").val());
                var servcategory = jQuery("#servcategory").val();
                var servdescription = empto(jQuery("#servdescription").val());


                var imageprodo2 = jQuery("#imageprodo2").val();

                if (imageprodo2.length != 0) {


                    if (servname == true && servprice == true && servdescription == true) {


                        if (servcategory != "Choose Service Section") {


                            var extension = jQuery("#imageprodo2").val().split('.').pop().toLowerCase();

                            if (jQuery.inArray(extension, ['jpg', 'jpeg', 'png']) == -1) {

                                alert("Invalid Image, must be .jpeg or .jpg or .png");


                                pogihide();

                                return false;
                            }

                            else {

                                jQuery('#pogi').show();

                                var city = localStorage.city;

                                var country = localStorage.country;

                                var params = {
                                    uidi: replaceqt(jQuery("#uidi1").val()),
                                    keyselect: replaceqt(jQuery("#keyselect1").val()),
                                    servname: replaceqt(jQuery("#servname").val()),
                                    servprice: replaceqt(jQuery("#servprice").val()),
                                    servcategory: replaceqt(jQuery("#servcategory").val()),
                                    servdescription: replaceqt(jQuery("#servdescription").val()),
                                    city: replaceqt(city),
                                    country: replaceqt(country)

                                }

                                jQuery.ajax({

                                    type: "POST",
                                    url: "http://" + localStorage.localhost + "/server/add/addservice.php",
                                    data: params,
                                    crossDomain: true,
                                    cache: false,
                                    success: function (data) {
                                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                                        if (data == "success") {

                                            setTimeout(function () {

                                                jQuery("#serviceadd")[0].reset();

                                                var gone = localStorage.gone;


                                                if (gone != "yes") {
                                                    process();

                                                    window.location.href = "#service";

                                                }

                                            }, 25000);



                                        }


                                    },
                                   
                                    error: function () {

                                        datacon();

                                    }

                                });

                                jQuery.ajax({

                                    url: "http://" + localStorage.localhost + "/server/add/addserviceimage.php",
                                    method: "POST",
                                    data: new FormData(this),
                                    contentType: false,
                                    processData: false,
                                    crossDomain: true,
                                    cache: false,
                                   
                                    success: function (data) {
                                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            
							 if(data.indexOf("success") != -1){
										 
								  window.location.href = "#service";

                                            jQuery("#serviceadd")[0].reset();

                                            localStorage.gone = "yes";

                                            uploaded();		 
										 
					}
							
							
                                          

                                        


                                    },
                                    error: function () {
                                        pogihide();

                                        datacon();

                                    }

                                });


                                return false;

                            }




                        }

                        else {

                            pogihide();

                            alert("Choose Service Section.");

                            return false;

                        }


                    }

                    else {

                        pogihide();

                        alert("Please Fill In All Details.");

                        return false;

                    }




                }

                else {


                    if (servname == true && servprice == true && servdescription == true) {


                        if (servcategory != "Choose Service Section") {

                            jQuery('#pogi').show();

                            var city = localStorage.city;

                            var country = localStorage.country;

                            var params = {
                                uidi: replaceqt(jQuery("#uidi1").val()),
                                keyselect: replaceqt(jQuery("#keyselect1").val()),
                                servname: replaceqt(jQuery("#servname").val()),
                                servprice: replaceqt(jQuery("#servprice").val()),
                                servcategory: replaceqt(jQuery("#servcategory").val()),
                                servdescription: replaceqt(jQuery("#servdescription").val()),
                                city: replaceqt(city),
                                country: replaceqt(country)

                            }

                            jQuery.ajax({

                                type: "POST",
                                url: "http://" + localStorage.localhost + "/server/add/addservice.php",
                                data: params,
                                crossDomain: true,
                                cache: false,
                                success: function (data) {

                                      if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

                                    if (data == "success") {

                                        window.location.href = "#service";

                                        jQuery("#serviceadd")[0].reset();

                                        finished();

                                    }


                                },
                               
                                error: function () {
                                    pogihide();

                                    datacon();

                                }

                            });


                            return false;
                        }

                        else {

                            pogihide();

                            alert("Choose Service Section.");

                            return false;

                        }


                    }

                    else {

                        pogihide();

                        alert("Please Fill In All Details.");

                        return false;

                    }

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }




        });

        jQuery("#image_form").submit(function (event) {

            try {


                event.preventDefault();


                var image_name = jQuery("#image").val();


                if (image_name.length == 0) {

                    alert("Please Choose Image.");

                    pogihide();

                    return false;

                }

                else {

                    var extension = jQuery("#image").val().split('.').pop().toLowerCase();

                    if (jQuery.inArray(extension, ['jpg', 'jpeg', 'png']) == -1) {

                        alert("Invalid Image, must be .jpeg or .jpg or .png");


                        pogihide();

                        jQuery("#image_form")[0].reset();

                        return false;
                    }

                    else {
                        jQuery('#pogi').show();


                        jQuery.ajax({

                            url: "http://" + localStorage.localhost + "/server/upload/upload.php",
                            method: "POST",
                            data: new FormData(this),
                            contentType: false,
                            processData: false,
                            crossDomain: true,
                            cache: false,
                            success: function (data) {

                                  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

							 if(data.indexOf("success") != -1){
										 
									 pogihide();

                                imagoo();

								 window.location.href = "#profile";
								
                                jQuery("#image_form")[0].reset();	 
										 
					}
							
                               

                            },
                            
                            error: function () {

                                datacon();

                            }
                        });
                        pogihide();

                        return false;
                    }
                }





            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#prodymage").submit(function (event) {

            try {

                event.preventDefault();


                var image_name = jQuery("#imageprod").val();

                var check = jQuery("#item1").val();


                if (image_name.length == 0) {

                    alert("Please Choose Image.");

                    pogihide();

                    return false;

                }

                else {

                    var extension = jQuery("#imageprod").val().split('.').pop().toLowerCase();

                    if (jQuery.inArray(extension, ['jpg', 'jpeg', 'png']) == -1) {

                        alert("Invalid Image, must be .jpeg or .jpg or .png");


                        pogihide();

                        jQuery("#prodymage")[0].reset();

                        return false;
                    }

                    else {
                        jQuery('#pogi').show();

                        jQuery.ajax({

                            url: "http://" + localStorage.localhost + "/server/upload/uploaditem.php",
                            method: "POST",
                            data: new FormData(this),
                            contentType: false,
                            processData: false,
                            crossDomain: true,
                            cache: false,
                            success: function (data) {

                                  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

							 if(data.indexOf("success") != -1){
										
                                     pogihide();

                                    imagoo();

									 window.location.href = "#products";
									
                                    jQuery("#prodymage")[0].reset();
										
										 
										 
					}
							
                                   
                                

                            },
                            
                            error: function () {

                                datacon();

                            }
                        });
                        pogihide();

                        return false;
                    }
                }




                return false;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#prodymage5").submit(function (event) {

            try {

                event.preventDefault();


                var image_name = jQuery("#imageprod5").val();

                if (image_name.length == 0) {

                    alert("Please Choose Image.");

                    pogihide();

                    return false;

                }

                else {

                    var extension = jQuery("#imageprod5").val().split('.').pop().toLowerCase();

                    if (jQuery.inArray(extension, ['jpg', 'jpeg', 'png']) == -1) {

                        alert("Invalid Image, must be .jpeg or .jpg or .png");


                        pogihide();

                        jQuery("#prodymage5")[0].reset();

                        return false;
                    }

                    else {

                        jQuery('#pogi').show();

                        jQuery.ajax({

                            url: "http://" + localStorage.localhost + "/server/upload/uploadvacitem.php",
                            method: "POST",
                            data: new FormData(this),
                            contentType: false,
                            processData: false,
                            crossDomain: true,
                            cache: false,
                            success: function (data) {

                                  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

							 if(data.indexOf("success") != -1){
								

                                    pogihide();

                                    imagoo();

									 window.location.href = "#listp";
									
                                    jQuery("#prodymage5")[0].reset();

                               								
										 
										 
					}
							

                            },
                            
                            error: function () {

                                datacon();

                            }
                        });

                        return false;

                    }
                }






            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#prodymage6").submit(function (event) {

            try {

                event.preventDefault();


                var image_name = jQuery("#imageprod6").val();

                if (image_name.length == 0) {

                    alert("Please Choose Image.");

                    pogihide();

                    return false;

                }

                else {

                    var extension = jQuery("#imageprod6").val().split('.').pop().toLowerCase();

                    if (jQuery.inArray(extension, ['jpg', 'jpeg', 'png']) == -1) {

                        alert("Invalid Image, must be .jpeg or .jpg or .png");


                        pogihide();
                        jQuery("#prodymage6")[0].reset();

                        return false;

                    }

                    else {
                        jQuery('#pogi').show();

                        jQuery.ajax({

                            url: "http://" + localStorage.localhost + "/server/upload/uploadvacitemserv.php",
                            method: "POST",
                            data: new FormData(this),
                            contentType: false,
                            processData: false,
                            crossDomain: true,
                            cache: false,
                            success: function (data) {

                                  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

							 if(data.indexOf("success") != -1){
										 
								pogihide();

                                    imagoo();

									 window.location.href = "#lists";
									
                                    jQuery("#prodymage6")[0].reset();

                                		 
										 
					}
							
                                    

                            },
                            
                            error: function () {

                                datacon();

                            }
                        });

                        return false;
                    }
                }




            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }




        });

        jQuery("#prodymage1").submit(function (event) {

            try {

                event.preventDefault();



                var image_name = jQuery("#imageprod1").val();
                var check = jQuery("#item1").val();

                if (image_name.length == 0) {

                    alert("Please Choose Image.");

                    pogihide();

                    return false;

                }

                else {

                    var extension = jQuery("#imageprod1").val().split('.').pop().toLowerCase();

                    if (jQuery.inArray(extension, ['jpg', 'jpeg', 'png']) == -1) {

                        alert("Invalid Image, must be .jpeg or .jpg or .png");


                        pogihide();

                        jQuery("#prodymage1")[0].reset();

                        return false;
                    }

                    else {
                        jQuery('#pogi').show();

                        jQuery.ajax({

                            url: "http://" + localStorage.localhost + "/server/upload/uploaditemserv.php",
                            method: "POST",
                            data: new FormData(this),
                            contentType: false,
                            processData: false,
                            crossDomain: true,
                            cache: false,
                            success: function (data) {

                                  if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }

							 if(data.indexOf("success") != -1){
							

                                    pogihide();

                                    imagoo();

									 window.location.href = "#service";
									
                                    jQuery("#prodymage1")[0].reset();

                                							
										 
										 
					}
							

                            },
                            
                            error: function () {

                                datacon();

                            }
                        });

                        return false;
                    }
                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }






        });

        jQuery("#productedit").submit(function (event) {

            try {

                event.preventDefault(event);

                var uid = localStorage.uid;

                var ProductCode = jQuery("#ProductCode").val();
                var prodname = empto(jQuery("#Prodname").val());
                var prodprice = empto(jQuery("#Prodprice").val());
                var prodstate = jQuery("#Prodstate").val();
                var prodcategory = jQuery("#Prodcategory").val();
                var proddescription = empto(jQuery("#Proddescription").val());

                if (prodname == true && prodprice == true && proddescription == true) {

                    jQuery('#pogi').show();

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
                        url: "http://" + localStorage.localhost + "/server/edit/editproduct.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data == "success") {

                                window.location.href = "#products";

                                ProductCode = "  ";

                                jQuery("#productedit")[0].reset();

                                finished();


                            }

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;



                }


                else {

                    pogihide();

                    alert("Please Fill In All Details.");

                    return false;

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#productedit5").submit(function (event) {

            try {

                event.preventDefault(event);



                var uid = localStorage.uid;

                var ProductCode = jQuery("#ProductCode2").val();


                var prodname = empto(jQuery("#Prodname5").val());
                var prodprice = empto(jQuery("#Prodprice5").val());
                var prodstate = jQuery("#Prodstate5").val();
                var prodcategory = jQuery("#Prodcategory5").val();
                var proddescription = empto(jQuery("#Proddescription5").val());

                if (prodname == true && prodprice == true && proddescription == true) {
                    jQuery('#pogi').show();

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
                        url: "http://" + localStorage.localhost + "/server/edit/editvacproduct.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data == "success") {

                                window.location.href = "#listp";

                                ProductCode = "  ";

                                jQuery("#productedit5")[0].reset();

                                finished();


                            }

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }

                else {

                    pogihide();

                    alert("Please Fill In All Details.");

                    return false;

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#productedit6").submit(function (event) {

            try {

                event.preventDefault(event);



                var uid = localStorage.uid;
                var ProductCode = jQuery("#ProductCode3").val();

                var prodcategory = jQuery("#Prodcategory6").val();
                var prodname = empto(jQuery("#Prodname6").val());
                var prodprice = empto(jQuery("#Prodprice6").val());
                var proddescription = empto(jQuery("#Proddescription6").val());



                if (prodname == true && prodprice == true && proddescription == true) {
                    jQuery('#pogi').show();

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
                        url: "http://" + localStorage.localhost + "/server/edit/editvacservice.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data == "success") {

                                window.location.href = "#lists";

                                ProductCode = "  ";

                                jQuery("#productedit6")[0].reset();

                                finished();


                            }

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;
                }


                else {

                    pogihide();

                    alert("Please Fill In All Details.");

                    return false;

                }



            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }




        });

        jQuery("#Serviceedit").submit(function (event) {


            try {

                event.preventDefault(event);


                var uid = localStorage.uid;

                var ServiceCode = jQuery("#ServiceCode").val();


                var Servname = empto(jQuery("#Servname").val());
                var Servprice = empto(jQuery("#Servprice").val());
                var Servcategory = jQuery("#Servcategory").val();
                var Servdescription = empto(jQuery("#Servdescription").val());

                if (Servname == true && Servprice == true && Servdescription == true) {
                    jQuery('#pogi').show();

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
                        url: "http://" + localStorage.localhost + "/server/edit/editservice.php",
                        data: params,
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data == "success") {

                                jQuery("#prodymage1")[0].reset();

                                jQuery("#Serviceedit")[0].reset();

                                window.location.href = "#service";

                                ServiceCode = " ";

                                finished();


                            }

                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;

                }

                else {

                    pogihide();

                    alert("Please Fill In All Details.");

                    return false;

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }




        });

		   jQuery(".chattyteam").on("tap", function () {

           localStorage.team = "yes";
		   
        });

		
        jQuery("#reply").submit(function (event) {

            try {

                jQuery("textarea").css("height", "4em");

                event.preventDefault();


                var message = replaceqt(jQuery("#replyge").val());


                if (message.length != 0) {

                    localStorage.NetChatId = replaceqt(jQuery("#JXX1").text());

                    localStorage.ata = replaceqt(jQuery("#DXX1").text());

                    localStorage.message = replaceqt(jQuery("#replyge").val());

                    jQuery("#KXX1").after('<div class="mango " style = "border: 2px solid  #66adff; margin: 10px">' +
                        '<center><p class = "dito">Me : ' +
                        addqt(message) + ' </p ></center>' +
                        '<center><p class = "dito riley">Just Now</p></center>' +
                        '</div>');
						
						if(localStorage.team == "yes"){
							
						  sendmessagereplyteam();
							
						}
						else{
							
						sendmessagereply();	
							
						}
						
                  
                    jQuery("#reply")[0].reset();

                    jQuery("textarea").css("height", "4em");


                    return false;

                }

                else {

                    return false;

                }


            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        });

        jQuery("#searchprod").submit(function (event) {

            try {

                event.preventDefault();


                var productshop = empto(jQuery("#productshop").val());

                if (productshop == true) {

                    jQuery('#pogi').show();

                    var uid = localStorage.uid;

                    var country = localStorage.country;

                    var params = {

                        uid: uid,
                        country: country,
                        search: replaceqt(jQuery("#productshop").val()),

                    };

                    jQuery.ajax({
                        type: "POST",
                        url: "http://" + localStorage.localhost + "/server/search/searchprod.php",
                        data: params,
                        dataType: 'json',
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data.length == 0) {

                                nottingsearcho();

                                pogihide();

                            }

                            else {

                                jQuery('.sectosearch1').hide();


                                jQuery('#rek20').show();

                                jQuery("#zvandirikuda").text(jQuery("#productshop").val() + " : ");

                                var z = 1;
                                jQuery.each(data, function (i, item) {
                                    jQuery("#Ac_" + z + "").show();

                                    jQuery("#Ac_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                                    jQuery("#Hc" + z + "").css("margin", "8px");

                                    jQuery("#Ac" + z + "").css("margin", "8px");

                                    jQuery("#Ac" + z + "").html('<a data-transition="pop" ><center><button class="button">Like</button> </center></a>');

                                    jQuery("#Hc" + z + "").html('<a data-transition="pop" href="#"     ><center><button class="button">NetChat</button></center></a>');
                                    jQuery("#Bc" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                                        addqt(item.id) + ' </h4 >');
                                    jQuery("#Cc" + z + "").html('<h4 class = "dito">' +
                                        addqt(item.prodname) + ' </h4 >');
                                    jQuery("#Dc" + z + "").html('<h4 class = "dito">' +
                                        addqt(item.prodprice) + '</h4>');
                                    jQuery("#Ec" + z + "").html('<h4 class = "dito">Condition  : ' +
                                        addqt(item.prodstate) + '</h4>');
                                    jQuery("#Fc" + z + "").html('<h4 class = "dito">Section  : ' +
                                        addqt(item.prodcategory) + '</h4>');
                                    jQuery("#Gc" + z + "").html('<h4 class = "dito">Details : <br />' +
                                        addqt(item.proddescription) + '</h4>');

                                    jQuery("#Jc" + z + "").html('<h4 style="display : none"><div>' +
                                        addqt(item.userid) + '</div></h4>');

                                    jQuery("#Kc" + z + "").html('<h4 style="display : none"><div>' +
                                        item.prez + '</div></h4>');

                                    jQuery("#Ic" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');


                                    z++;

                                });
                                jQuery("#searchprod")[0].reset();


                                pogihide();

                            }


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;


                }


                return false;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#searchserv").submit(function (event) {

            try {


                event.preventDefault();


                var serviceshop = empto(jQuery("#serviceshop").val());

                if (serviceshop == true) {

                    jQuery('#pogi').show();

                    var uid = localStorage.uid;

                    var country = localStorage.country;

                    var params = {

                        uid: uid,
                        country: country,
                        search: replaceqt(jQuery("#serviceshop").val()),

                    };

                    jQuery.ajax({
                        type: "POST",
                        url: "http://" + localStorage.localhost + "/server/search/searchserv.php",
                        data: params,
                        dataType: 'json',
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data.length == 0) {

                                nottingsearcho();

                                pogihide();
                            }
                            else {
                                var z = 1;

                                jQuery('.sectosearch2').hide();


                                jQuery('#rek21').show();

                                jQuery("#zvandirikudaserv").text(jQuery("#serviceshop").val() + " : ");

                                jQuery.each(data, function (i, item) {

                                    jQuery("#Ad_" + z + "").show();
                                    jQuery("#Ad_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                                    jQuery("#Ad" + z + "").css("margin", "8px");
                                    jQuery("#Hd" + z + "").css("margin", "8px");

                                    jQuery("#Ad" + z + "").html('<a data-transition="pop"      ><center><button class="button">Like</button> </center></a>');
                                    jQuery("#Hd" + z + "").html('<a data-transition="pop" href="#"     ><center><button class="button">NetChat</button> </center></a>');
                                    jQuery("#Bd" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                                        addqt(item.id) + ' </h4 >');
                                    jQuery("#Cd" + z + "").html('<h4 class = "dito">' +
                                        addqt(item.servname) + ' </h4 >');
                                    jQuery("#Dd" + z + "").html('<h4 class = "dito">' +
                                        addqt(item.servprice) + '</h4>');
                                    jQuery("#Fd" + z + "").html('<h4 class = "dito">Section : ' +
                                        addqt(item.servcategory) + '</h4>');
                                    jQuery("#Gd" + z + "").html('<h4 class = "dito">Details  : <br />' +
                                        addqt(item.servdescription) + '</h4>');

                                    jQuery("#Jd" + z + "").html('<h4 style="display : none"><div>' +
                                        addqt(item.userid) + '</div></h4>');

                                    jQuery("#Kd" + z + "").html('<h4 style="display : none"><div>' +
                                        item.prez + '</div></h4>');

                                    jQuery("#Id" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');


                                    z++;

                                });

                                jQuery("#searchserv")[0].reset();

                                pogihide();

                            }


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;


                }


                return false;
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });

        jQuery("#searchwprod").submit(function (event) {

            try {

                event.preventDefault();


                var wproductshop = empto(jQuery("#wproductshop").val());

                if (wproductshop == true) {

                    jQuery('#pogi').show();

                    var uid = localStorage.uid;

                    var country = localStorage.country;

                    var params = {

                        uid: uid,
                        country: country,
                        search: replaceqt(jQuery("#wproductshop").val()),

                    };

                    jQuery.ajax({
                        type: "POST",
                        url: "http://" + localStorage.localhost + "/server/search/searchwprod.php",
                        data: params,
                        dataType: 'json',
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data.length == 0) {

                                nottingsearcho();

                                pogihide();

                            }
                            else {
                                var z = 1;

                                jQuery('.sectosearch3').hide();


                                jQuery('#rek22').show();

                                jQuery("#zvandirikudawprod").text(jQuery("#wproductshop").val() + " : ");

                                jQuery.each(data, function (i, item) {


                                    jQuery("#Accc_" + z + "").show();
                                    jQuery("#Accc_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                                    jQuery("#Accc" + z + "").css("margin", "8px");
                                    jQuery("#Hccc" + z + "").css("margin", "8px");

                                    jQuery("#Accc" + z + "").html('<a data-transition="pop" href="#"><center><button class="button">NetChat</button> </center></a>');
                                    jQuery("#Bccc" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                                        addqt(item.id) + ' </h4 >');
                                    jQuery("#Cccc" + z + "").html('<h4 class = "dito">' +
                                        addqt(item.vacname) + ' </h4 >');
                                    jQuery("#Dccc" + z + "").html('<h4 class = "dito">' +
                                        addqt(item.vacprice) + '</h4>');
                                    jQuery("#Eccc" + z + "").html('<h4 class = "dito">Condition  : ' +
                                        addqt(item.vacstate) + '</h4>');
                                    jQuery("#Fccc" + z + "").html('<h4 class = "dito">Section  : ' +
                                        addqt(item.vaccategory) + '</h4>');

                                    jQuery("#Gccc" + z + "").html('<h4 class = "dito">Details : <br />' +
                                        addqt(item.vacdescription) + '</h4>');

                                    jQuery("#Jccc" + z + "").html('<h4 style="display : none"><div>' +
                                        addqt(item.userid) + '</div></h4>');

                                    jQuery("#Kccc" + z + "").html('<h4 style="display : none"><div>' +
                                        item.prez + '</div></h4>');

                                    jQuery("#Iccc" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');

                                    z++;

                                });

                                jQuery("#searchwprod")[0].reset();

                                pogihide();

                            }


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;


                }


                return false;
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        });

        jQuery("#searchwserv").submit(function (event) {

            try {

                event.preventDefault();


                var wserviceshop = empto(jQuery("#wserviceshop").val());

                if (wserviceshop == true) {

                    jQuery('#pogi').show();

                    var uid = localStorage.uid;

                    var country = localStorage.country;

                    var params = {

                        uid: uid,
                        country: country,
                        search: replaceqt(jQuery("#wserviceshop").val()),

                    };

                    jQuery.ajax({
                        type: "POST",
                        url: "http://" + localStorage.localhost + "/server/search/searchwserv.php",
                        data: params,
                        dataType: 'json',
                        crossDomain: true,
                        cache: false,
                        success: function (data) {

                              if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                            if (data.length == 0) {

                                nottingsearcho();

                                pogihide();

                            }
                            else {
                                var z = 1;

                                jQuery('.sectosearch4').hide();


                                jQuery('#rek23').show();

                                jQuery("#zvandirikudawserv").text(jQuery("#wserviceshop").val() + " : ");

                                jQuery.each(data, function (i, item) {

                                    jQuery("#Addd_" + z + "").show();
                                    jQuery("#Addd_" + z + "").css({ "border": "2px solid #66adff", "margin": "10px" });
                                    jQuery("#Addd" + z + "").css("margin", "8px");
                                    jQuery("#Hddd" + z + "").css("margin", "8px");
                                    jQuery("#Addd" + z + "").html('<a data-transition="pop" href="#"     ><center><button class="button">NetChat</button> </center></a>');
                                    jQuery("#Bddd" + z + "").html('<h4 style="margin-left:5%;display:none">' +
                                        addqt(item.id) + ' </h4 >');
                                    jQuery("#Cddd" + z + "").html('<h4 class = "dito">' +
                                        addqt(item.vacname) + ' </h4 >');
                                    jQuery("#Dddd" + z + "").html('<h4 class = "dito">' +
                                        addqt(item.vacprice) + '</h4>');
                                    jQuery("#Fddd" + z + "").html('<h4 class = "dito">Section : ' +
                                        addqt(item.vaccategory) + '</h4>');
                                    jQuery("#Gddd" + z + "").html('<h4 class = "dito">Details : <br />' +
                                        addqt(item.vacdescription) + '</h4>');

                                    jQuery("#Jddd" + z + "").html('<h4 style="display : none"><div>' +
                                        addqt(item.userid) + '</div></h4>');

                                    jQuery("#Kddd" + z + "").html('<h4 style="display : none"><div>' +
                                        item.prez + '</div></h4>');

                                    jQuery("#Iddd" + z + "").html('<img class="ito" src="images/VIEW.jpeg" />');


                                    z++;

                                });


                                jQuery("#searchwserv")[0].reset();

                                pogihide();

                            }


                        },
                        
                        error: function () {

                            datacon();

                        }
                    });

                    return false;


                }


                return false;

            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });


        jQuery(document).on("pagebeforehide", ".pageN", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#page", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#register", function () {

            jQuery('#pogi').show();


        });
        jQuery(document).on("pagebeforehide", "#start", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#posts", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#myposts", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#liked", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#profile", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#editpage", function () {
            jQuery('#pogi').show();


        });
        jQuery(document).on("pagebeforehide", "#chat", function () {
            jQuery('#pogi').show();

            localStorage.there = "no";

        });
        jQuery(document).on("pagebeforehide", "#chatbox", function () {
			
            jQuery('#pogi').show();

            localStorage.there2 = "no";
        });
		
        jQuery(document).on("pagebeforehide", "#products", function () {
            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#productsaddow", function () {
            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#productsEdito", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#service", function () {
            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#serviceaddow", function () {
            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#serviceEdito", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#listp", function () {
            jQuery('#pogi').show();


        });
        jQuery(document).on("pagebeforehide", "#listpaddow", function () {
            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#listpEdito", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#lists", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#listsaddow", function () {
            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#listsEdito", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#businessprod", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#businessserv", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#wproducts", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#wservices", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#likedprod", function () {
            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#likedserv", function () {
            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#customers", function () {
            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#shoppy", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#shoppy2", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#wantowi", function () {

            jQuery('#pogi').show();

        });
        jQuery(document).on("pagebeforehide", "#wantowi2", function () {

            jQuery('#pogi').show();

        });


        jQuery(document).on("pagebeforeshow", "#profile", function () {

            try {


                fetch_prof2();

                var uid = localStorage.uid;
                var params = {
                    uid: uid
                };

                jQuery.ajax({

                    type: 'POST',
                    url: "http://" + localStorage.localhost + "/server/mine/myprofile.php",
                    dataType: 'json',
                    data: params,
                    crossDomain: true,
                    cache: false,
                    success: function (data) {

                          if(data.indexOf("Maximum") != -1 || data.indexOf("error")!= -1 || data.indexOf("exceeded")!= -1 ){


                    datacon();


                     }
                        jQuery.each(data, function (i, item) {

                            jQuery("#NetwekName").html("<p  style = 'font-size: 1.1em'>Netwek Name : " + addqt(item.netwekname) + "</p>");

                            jQuery("#City").html("<p  style = 'font-size: 1.1em'>City : " + addqt(item.city) + "</p>");
                            jQuery("#Country").html("<p  style = 'font-size: 1.1em'>Country : " + addqt(item.country) + "</p>");
                            jQuery("#NetId").html("<p  style = 'font-size: 1.1em'>Password : " + addqt(item.password) + "</p>");
                            jQuery("#Phone").html("<p  style = 'font-size: 1.1em'>Mobile Number : " + addqt(item.phone) + "</p>");
                        });
                        pogihide();

                    },
                    
                    error: function () {

                        datacon();

                    }
                })
                return false;
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }


        });
        jQuery(document).on("pagebeforeshow", "#editpage", function () {

            try {

                jQuery("#image_form")[0].reset();


                var uid = localStorage.uid;

                jQuery("#pers").val(uid);




                var NName = jQuery("#NetwekName").text();

                var Cy = jQuery("#City").text();

                var Phone = jQuery("#Phone").text();

                jQuery("#NName").val(NName.slice(14));

                jQuery("#Cy").val(Cy.slice(7));

                jQuery("#Phon").val(Phone.slice(16));
            }
            catch (err) {

                var uid = localStorage.uid;

                var params = {
                    err: err.message,
                    uid: uid
                };


                jQuery.ajax({
                    type: "POST",
                    url: "http://" + localStorage.localhost + "/server/start/err.php",
                    data: params,
                    dataType: 'json',
                    crossDomain: true,
                    cache: false,
                    
                    error: function () {

                        datacon();


                    }


                });

                return false;

            }



        });
        jQuery(document).on("pagebeforeshow", "#chat", function () {

		localStorage.team = "no";
		   
		
            localStorage.there = "Here";

			if(localStorage.chatters == "yes"){
			
            showchatsreload();
		 

				
			}
			
			if(localStorage.chatters2 == "yes"){
			
     
		    showteam();

				
			}
			
		
				pogihide();
				
			
		

            

        });
        jQuery(document).on("pagebeforeshow", "#chatbox", function () {
			

		if(localStorage.team != "yes"){
			
   ghettomessage();		
		
		}
		
		else{
			
			   ghettomessageteam();
			
		}
		
         

            localStorage.there2 = "Here";
			
            jQuery('#notty').hide();





        });
		
			
        jQuery(document).on("pagebeforeshow", "#pass", function () {

          
								jQuery("#welcy").html("<center><h2>Welcome to NetWek : <br/> " + localStorage.netwekname + "</br>Your NetWek Password is : </br>" + localStorage.uid +"</h2></center>");
                        


        });
        jQuery(document).on("pagebeforeshow", "#products", function () {

            showproducts2();


        });
        jQuery(document).on("pagebeforeshow", "#service", function () {

            showservice();

        });
        jQuery(document).on("pagebeforeshow", "#listp", function () {

            showvacproducts();


        });
        jQuery(document).on("pagebeforeshow", "#lists", function () {

            showvacservice();

        });
        jQuery(document).on("pagebeforeshow", "#likedprod", function () {

            showlikedprod();

        });
        jQuery(document).on("pagebeforeshow", "#likedserv", function () {

            showlikedserv();

        });
        jQuery(document).on("pagebeforeshow", "#customers", function () {

            showcustomers();

        });


        jQuery(document).on("pageshow", ".pageN", function () {
            jQuery('.poppy').hide();
        });
        jQuery(document).on("pageshow", "#page", function () {

		localStorage.well = "yes";
		
            pogihide();

        });
	
	
		  jQuery(document).on("pageshow", "#pass", function () {

		  
		  
            pogihide();

        });
		
	
		  jQuery(document).on("pageshow", "#howto", function () {

            pogihide();

        });
		
		  jQuery(document).on("pageshow", "#howto2", function () {

            pogihide();

        });
		
		  jQuery(document).on("pageshow", "#howto3", function () {

            pogihide();

        });
		
		  jQuery(document).on("pageshow", "#howto4", function () {

            pogihide();

        });
		
        jQuery(document).on("pageshow", "#register", function () {

		   var logo = localStorage.login;

            var uid = localStorage.uid;

            if (logo == "yes" && uid.length != 0) {

              
                                        window.location.href = "#pass";


            }

		
            jQuery("#registerform")[0].reset();


            pogihide();


        });
        jQuery(document).on("pageshow", "#start", function () {

		
		   var logo = localStorage.login;

            var uid = localStorage.uid;

            if (logo == "yes" && uid.length != 0) {

              
                                        window.location.href = "#page";


            }
		
            pogihide();

        });
        jQuery(document).on("pageshow", "#posts", function () {

            pogihide();

            sele();
        });
        jQuery(document).on("pageshow", "#myposts", function () {

            pogihide();

            sele();

        });
        jQuery(document).on("pageshow", "#liked", function () {

            pogihide();

            sele();

        });
        jQuery(document).on("pageshow", "#editpage", function () {

            pogihide();

        });
        jQuery(document).on("pageshow", "#productsaddow", function () {
            pogihide();


            var d = new Date();
            jQuery("#keyselect").val(d.getTime());

            var uid = localStorage.uid;
            jQuery("#productadd")[0].reset();
            jQuery("#uidi").val(uid);

            pogihide();
        });
        jQuery(document).on("pageshow", "#productsEdito", function () {

            pogihide();

        });
        jQuery(document).on("pageshow", "#serviceaddow", function () {
            pogihide();


            var d = new Date();
            jQuery("#keyselect1").val(d.getTime());

            var uid = localStorage.uid;

            jQuery("#serviceadd")[0].reset();
            jQuery("#uidi1").val(uid);
            pogihide();
        });
        jQuery(document).on("pageshow", "#serviceEdito", function () {

            pogihide();

        });
        jQuery(document).on("pageshow", "#listpaddow", function () {
            pogihide();

            var d = new Date();
            jQuery("#keyselect3").val(d.getTime());


            var uid = localStorage.uid;
            jQuery("#wantedproductadd")[0].reset();
            jQuery("#uidi3").val(uid);
            pogihide();
        });
        jQuery(document).on("pageshow", "#listpEdito", function () {

            pogihide();

        });
        jQuery(document).on("pageshow", "#listsaddow", function () {
            pogihide();

            var d = new Date();
            jQuery("#keyselect4").val(d.getTime());


            var uid = localStorage.uid;
            jQuery("#wantedserviceadd")[0].reset();
            jQuery("#uidi4").val(uid);
            pogihide();
        });
        jQuery(document).on("pageshow", "#listsEdito", function () {

            pogihide();

        });
        jQuery(document).on("pageshow", "#businessprod", function () {

            pogihide();

        });
        jQuery(document).on("pageshow", "#businessserv", function () {

            pogihide();

        });
        jQuery(document).on("pageshow", "#wproducts", function () {

            pogihide();

        });
        jQuery(document).on("pageshow", "#wservices", function () {

            pogihide();

        });



    }
    catch (err) {

        var uid = localStorage.uid;

        var params = {
            err: err.message,
            uid: uid
        };


        jQuery.ajax({
            type: "POST",
            url: "http://" + localStorage.localhost + "/server/start/err.php",
            data: params,
            dataType: 'json',
            crossDomain: true,
            cache: false,
            
            error: function () {

                datacon();


            }


        });

        return false;

    }

})


















