var numprod = 0;
var productos = [];
var articulos = [];








document.getElementById('ordenar').onclick = function() {
    var radios = document.getElementsByName('masas');
    for (var radio of radios)
    {
        if (radio.checked) {
            var masa= radio.value
            alert(masa);
        }
    }
    var combo = document.getElementById("selectam");
    var selected = combo.options[combo.selectedIndex].text;
    var extras = document.getElementById("selectext");
    var extselect = extras.options[extras.selectedIndex].text;
    var precio = 0;
    console.log(selected, ",", extselect, ",", masa )
    agregarprod(selected,extselect, masa, precio)


}

function agregarprod(selected, extselect, masa, precio){
    let item ={
        Tamaño: selected,
        Extras: extselect,
        Tipo_de_masa: masa,
        Precio: precio
    }
    articulos.push(item);
    console.table(articulos);
    actualizar();
    return item;
}


function actualizar() {
    localStorage.setItem('Lista_articulos', JSON.stringify(articulos));
}



document.getElementById('pizza_mitad').onclick = function() {



    
}


    
    
   
    
    
    
