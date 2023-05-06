$(document).ready(function() {

    $.ajax({
        url: "last_fuck.json"
    }).done(function(result) {
        console.log(result);
        let date_1 = new Date(result);
        let date_2 = new Date();
        let difference = date_2.getTime() - date_1.getTime();
        days = parseInt(Math.ceil(difference / (1000 * 3600 * 24)) - 1);
        
        if(days==1) {
            $('#days').html(days+" dia sem transar");
        } else {
            $('#days').html(days+" dias sem transar");
        }

        if(days==0) {
            $('#mr-incredible').html('<img src="vendor/images/0.png">');
            $('#days').css("font-family", "Great Vibes");
        }

        if(days>0 && days<=3) {
            $('#mr-incredible').html('<img src="vendor/images/1.png">');
            $('#days').css("font-family", "Great Vibes");
        }

        if(days>3 && days<=7) {
            $('#mr-incredible').html('<img src="vendor/images/2.png">');
            $('#days').css("font-family", "Indie Flower");
        }

        if(days>7 && days<=10) {
            $('#mr-incredible').html('<img src="vendor/images/3.png">');
            $('#days').css("font-family", "Indie Flower");
        }

        if(days>10 && days<=14) {
            $('#mr-incredible').html('<img src="vendor/images/4.png">');
            $('#days').css("font-family", "Indie Flower");
        }

        if(days>14 && days<=20) {
            $('#mr-incredible').html('<img src="vendor/images/5.png">');
            $('#days').css("font-family", "Foldit");
        }

        if(days>20 && days<=25) {
            $('#mr-incredible').html('<img src="vendor/images/6.png">');
            $('#days').css("font-family", "Foldit");
            $('#days').css("color", "#660000");
        }

        if(days>25) {
            $('#mr-incredible').html('<img src="vendor/images/7.png">');
            $('#days').css("font-family", "Bloody, sans-serif");
            $('#days').css("color", "#660000");
        }
    });

});