function gastoConIva(num) {
    return num + (0.21 * num);
}


function map(array, callback){
    let resultado=[];
    for (var i = 0; i < array.length; ++i) {
    resultado.push(callback(array[i]));
    }
return resultado;
}


numsConIva = map([20, 10, 100], gastoConIva);
document.write("El gasto con IVA es de : " + numsConIva);





