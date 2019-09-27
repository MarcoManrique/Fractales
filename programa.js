function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#txtimagen').text(input.files[0].name)
            $('#img_prev').show();
            $('#img_prev').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$('#imagen').change(function () {
    readURL(this);
})
function botonesALaNormalidad(button) {
    button.attr('disabled', false);
    button.html('Comprimir');
    new Promise((resolve, reject) => {
        setTimeout(function () {
            $('.progress').hide();
        }, 1000);
    });
}
$(document).ready(function () {
    let progreso = $('.progress');
    progreso.hide();
    var enviar = $('#enviar');
    $('#img_prev').hide();
    $('#img_res').hide();
    let imagen = document.getElementById('imagen');


    enviar.click(function (params) {
        if (imagen.files[0] === undefined) {
            alert('No hay imagen')
        } else {
            enviar.html('Comprimiendo . . . ');
            enviar.attr('disabled', true);
            progreso.show();
            var formData = new FormData();
            formData.append('imagen', imagen.files[0], imagen.files[0].name);
            let headersRest = {
                method: 'POST',
                body: formData
            };
            if ($('#fractal').prop('checked') == true) {
                new Promise((resolve, reject) => {
                    setTimeout(function () {
                        $('.progress-bar').css('width', '100%');
                        botonesALaNormalidad(enviar);
                    }, 2000);
                });

                // fetch('link', headersRest).then(response => {
                //     return response.json();
                // }).then(data => {
                //     $('.progress-bar').css('width', '100%');
                //     alert('imagen comprimida exitosamente')
                //     $('#img_res').show();
                //     $('#img_res').attr('src', data)
                //     botonesALaNormalidad(enviar);
                // })
            }
            if ($('#poligono').prop('checked') == true) {
                // fetch('link', headersRest).then(response => {
                //     return response.json();
                // }).then(data => {
                //     $('.progress-bar').css('width', '100%');
                //     alert('imagen comprimida exitosamente')
                //     $('#img_res').show();
                //     $('#img_res').attr('src', data)
                //     botonesALaNormalidad(enviar);
                // })
            }
            console.log(formData);
            
        }
    })
})