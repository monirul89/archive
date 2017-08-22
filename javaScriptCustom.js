window.onload = function() {
    document.getElementById('logo').innerHTML = "MO";
//    if("#menu_area ul li ul"){
//            $("#menu_area ul li").addClass("dowpdown");
//        }
//        else if("#menu_area ul li ul") {
//            $("#menu_area ul li").addClass("");
//        }
//        else{
//            $("#menu_area ul li").addClass("");
//        }
//    endfi;
    
    var addClass = ("#menu_area ul li ul" || "#menu_area ul li");
    switch(addClass) {
        case ("#menu_area ul li ul"):
            $("#menu_area ul li ul").parent('li').addClass("dowpdown");
            break;
        case ("#menu_area ul li"):
            $("#menu_area ul li").addClass("");
            break;
        default:
            $("#menu_area ul li").addClass("");
    }

}




function switchButton() {
    var x = document.getElementById('header_area');
    if (x.style.display === 'block') {
        $('#header_area').slideUp('slow');
    } else {        
        $('#header_area').slideDown('slow');
        x.style.display = 'block';
        document.getElementById('header').style.borderBottom="none";
    }
}

//function switchButton() {
//    $("#header_area").toggle('slow');
//}

//function switchButton() {
//     $('#header_area').slideDown('slow');
//     $('#header_area').slideUp('slow');
//     if ($('#header_area').css('display') == 'none') {
//          $('#submit').html('Collapsed text mode &#9658');
//     }
//     else {
//          $('#submit').html('Expanded text mode &#9660');
//     }
//}
