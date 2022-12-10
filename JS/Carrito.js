

function CargarInfo(){
    articulos = JSON.parse(localStorage.getItem('Lista_articulos'));
    if (articulos === null) {
        articulos = [];
    } else {
        console.log(articulos);
        let contador = 0;
        
        const tabla = document.getElementById('productos');
        tabla.innerHTML=``;
        articulos.forEach(articulo => {
            let Tamanio = articulos[contador].Tamaño;
            let Adicionales = articulos[contador].Extras;
            let Masa = articulos[contador].Tipo_de_masa;
            let Precio = articulos[contador].Precio;
            
                tabla.innerHTML+=`
                <tr>
                    <th scope="row">
                        
                    </th>
                    <td>${Tamanio,",",Adicionales,",",Masa }</td>
                    <td>1</td>
                    <td>${Precio}</td>
                </tr>
                `;
                contador = contador + 1;
        });
    }
}
 CargarInfo();