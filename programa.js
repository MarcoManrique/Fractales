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
            var request = new XMLHttpRequest();
            var formData = new FormData();
            formData.append('imagen', imagen.files[0]);
            enviar.html('Comprimiendo . . . ');
            enviar.attr('disabled', true);
            progreso.show();
            if ($('#fractalcolores').prop('checked') == true) {
                // request.responseType = "arraybuffer";
                request.onreadystatechange = function () {
                    if (request.readyState === 0) {
                        $('.progress-bar').css('width', '25%');
                    }
                    if (request.readyState === 1) {
                        $('#img_res').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
                        $('#img_01').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
                        $('#img_02').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
                        $('.progress-bar').css('width', '50%');
                    }
                    if (request.readyState === 2) {
                        $('.progress-bar').css('width', '75%');
                    }
                    if (request.readyState === 3) {
                        $('.progress-bar').css('width', '80%');
                    }
                    if (request.readyState === 4 && request.status == 200) {
                        respuesta = JSON.parse(request.response);
                        $('.progress-bar').css('width', '100%');
                        $('#img_res').show();
                        // let b64 = btoa(String.fromCharCode.apply(null, new Uint8Array(request.response)))
                        $('#img_res').attr('src', 'data:image/jpeg;base64,' + respuesta[01]);
                        botonesALaNormalidad(enviar);
                    }
                    if (request.readyState === 4 && request.status != 200){
                        alert('Error de conexion con el servidor. Intente con un archivo de menor tamaño.')
                    }
                }
                request.open('post', 'https://compresionappback.herokuapp.com/api/comprimirFractalColor/');
                request.send(formData);
            }
            if ($('#fractalgrises').prop('checked') == true) {
                // request.responseType = "arraybuffer";
                request.onreadystatechange = function () {
                    if (request.readyState === 0) {
                        $('.progress-bar').css('width', '25%');
                    }
                    if (request.readyState === 1) {
                        $('#img_res').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
                        $('#img_01').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
                        $('#img_02').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
                        $('.progress-bar').css('width', '50%');
                    }
                    if (request.readyState === 2) {
                        $('.progress-bar').css('width', '75%');
                    }
                    if (request.readyState === 3) {
                        $('.progress-bar').css('width', '80%');
                    }
                    if (request.readyState === 4 && request.status == 200) {
                        respuesta = JSON.parse(request.response);
                        $('.progress-bar').css('width', '100%');
                        $('#img_res').show();
                        // let b64 = btoa(String.fromCharCode.apply(null, new Uint8Array(request.response)))
                        $('#img_res').attr('src', 'data:image/jpeg;base64,' + respuesta[01]);
                        botonesALaNormalidad(enviar);
                    }
                    if (request.readyState === 4 && request.status != 200){
                        alert('Error de conexion con el servidor. Intente con un archivo de menor tamaño.')
                    }
                }
                request.open('post', 'https://compresionappback.herokuapp.com/api/comprimirFractalGrises/');
                request.send(formData);
            }
            if ($('#poligono').prop('checked') == true) {
                request.onreadystatechange = function () {
                    if (request.readyState === 0) {
                        $('.progress-bar').css('width', '25%');
                    }
                    if (request.readyState === 1) {
                        $('#img_res').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
                        $('#img_01').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
                        $('#img_02').attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
                        $('.progress-bar').css('width', '50%');
                    }
                    if (request.readyState === 2) {
                        $('.progress-bar').css('width', '75%');
                    }
                    if (request.readyState === 3) {
                        $('.progress-bar').css('width', '80%');
                    }
                    if (request.readyState === 4 && request.status == 200) {
                        respuesta = JSON.parse(request.response);
                        $('.progress-bar').css('width', '100%');
                        $('#img_res').show();
                        // let b64 = btoa(String.fromCharCode.apply(null, new Uint8Array(request.response)))
                        $('#img_res').attr('src', 'data:image/jpeg;base64,' + respuesta['01']);
                        $('#img_01').attr('src', 'data:image/jpeg;base64,' + respuesta['02']);
                        $('#img_02').attr('src', 'data:image/jpeg;base64,' + respuesta['03']);
                        botonesALaNormalidad(enviar);
                    }
                    if (request.readyState === 4 && request.status != 200){
                        alert('Error de conexion con el servidor. Intente con un archivo de menor tamaño.')
                    }
                }
                request.open('post', 'https://compresionappback.herokuapp.com/api/comprimirPoligono/');
                request.send(formData);

            }
        }
    })
})