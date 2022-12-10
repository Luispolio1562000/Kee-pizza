$(document).ready(
    function() {
       
        $('#americana').hide();
        $('#romana').hide();
       
        $('#selectam').change(
            
            function() {
                
                var seleccion = document.getElementById('selectam').value;
                if(seleccion ==1 || seleccion == 2 || seleccion == 3){
                $('#americana').show();
                $('#romana').show();
                } else {
                    $('#americana').hide();
                $('#romana').show();
                }


            }
        );

    }

);