// $(document).ready(function(){
// 	$('.c-service_text_box').hide();
//     $('.c-service_box').on('click', function(){
//         $('.c-service_text_box').toggle();
//     });
// });

function hideAndShowText() {
    var x = document.getElementById('service_text_box');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
	}
}

