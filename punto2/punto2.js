var monto=0, descuento=0, cantidad=0 ;

cantidad=prompt("Ingrese la cantidad de montos: ");

for (i=1; cantidad>=i;i++){
monto=parseFloat(prompt("Ingrese un monto"));

    if ((monto>100)){
        descuento=monto*0.10;
    }
    else {
        descuento=monto*0.02;
    }
monto=monto-descuento;
    alert("El descuento del monto es de: "+descuento+"%");
    alert("El monto restante es de: "+monto);

}
