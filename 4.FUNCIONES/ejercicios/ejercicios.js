//EJERCICIO 01
function menorNumero(a,b,c,d,e){
    this.menor=a;
    this.argumentos=[a,b,c,d,e]
    for (let i = 1; i<5;i++){
        if(this.argumentos[i]<this.menor)this.menor=this.argumentos[i];
    }
    return this.menor;
}
console.log(menorNumero(5,2,8,1,10));

//EJERCICIO 02
function fibonacci(n, a=0,b=1){
    if (n===0) return;
    console.log(a);
    fibonacci (n-1,b,a+b)
}
fibonacci(20)