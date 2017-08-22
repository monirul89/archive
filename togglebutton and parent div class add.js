window.onload = function() {
    document.getElementById('logo').innerHTML = "MO";
    
    //add class
    
    if("#menu_area ul li ul"){
            $("#menu_area ul li").addClass("dowpdown");
        }
        else if("#menu_area ul li ul") {
            $("#menu_area ul li").addClass("");
        }
        else{
            $("#menu_area ul li").addClass("");
        }
    endfi;
   

//    add parents div class
    $('#bx-pager').parent('div').addClass('newClass');
    
//     add parents div class
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


//toggle button switchButton slow

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

