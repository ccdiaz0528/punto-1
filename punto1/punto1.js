var nota=0, asistencia=0 ,nombre=0,estudiantes=0;
estudiantes=parseFloat(prompt("Ingrese la cantidad de estudiantes: "));

for (i=1;estudiantes>=i;i++){
nombre=(prompt(i+" Ingrese su nombre "));
nota=parseFloat(prompt(i+" Ingrese su nota de 10 a 100: "));
asistencia=parseFloat(prompt(i+" Ingrese su porcentaje de asistencia: "))

if ((asistencia>=80)){
    alert("El estudiante "+nombre+" Ha aprobado");
}

if ((asistencia<80)){
    alert("El estudiante "+nombre+" No ha aprobado");
}

}
