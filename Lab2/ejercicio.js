/*CALCULO DE PORCENTAJE*/
/*(P * TOTAL)/100*/
/*SIENDO P EL PORCENTAJE A CALCULAR*/


let total = prompt('Ingrese el total de presupuesto');
let gastosnecesarios = 50;
let gastosopcionales = 30;
let inversion = 20;

/* P1/v1 = GASTOS NECESARIOS
   P2/v2 = GASTOS OPCIONALES
   P3/v3 = INVERSIONES      */
let p1 = ((gastosnecesarios*total)/100);
let p2 = ((gastosopcionales*total)/100);
let p3 = ((inversion*total)/100);

alert("Los gastos necesarios son de " + p1);
alert("Los gastos opcionales son de " + p2 );
alert("Los gastos de inversion son de " + p3);