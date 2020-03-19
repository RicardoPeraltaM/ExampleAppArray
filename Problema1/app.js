EventListener()

let A = []
let B = []
let Print = document.getElementById('Print')
let count = 0

function EventListener(){
    document.addEventListener('keypress', getSize)
    document.addEventListener('click', calc)
}

function getSize(event){

    if(event.key != 'Enter')return
    if(event.key == '')return
    if(isNaN(event.target.value))return
    if(event.target.value <= 0)return

    crearArray(event.target.value)
    event.target.value = ''

}

function crearArray(size){
    A = []
    B = []

    for (let i = 0; i < size; i++) {
        A.push(Math.floor(Math.random()*(100 - (-100)) + (-100)))
        B.push(Math.floor(Math.random()*(100 - (-100)) + (-100)))
    }
    ShowArray(A, 'A', 'primary')
    ShowArray(B, 'B', 'info')
    
}

function ShowArray(array,name,Class) {

    const alert = document.createElement('div')
    alert.classList.add('alert',`alert-${Class}`, 'col-12')
    alert.innerText = `Array ${name} = `
    for (let i = 0; i < array.length; i++) {
        alert.innerText += ` [${array[i]}] `
    }
    Print.appendChild(alert)
    
}

function calc(e){
    let Op = ''
    let arrayC = [] 
    if(A.length==0)return
    else if (e.target.id == 'calcSuma') {
        Op = 'C(suma)'
        count ++
        for (let i = 0; i < A.length; i++) {
            arrayC.push(A[i]+B[i])
        }
    }
    else if (e.target.id == 'calcResta') {
        Op = 'C(resta)'
        count ++
        for (let i = 0; i < A.length; i++) {
            arrayC.push(B[i] - A[i])
        }
    }
    else if (e.target.id == 'calcMult') {
        Op = 'C(mult)'
        count ++
        for (let i = 0; i < A.length; i++) {
            arrayC.push(A[i]*B[i])
        }
    }else return
    
    ShowArray(arrayC, Op, 'success')
    clear(count)
}

function clear(count){
    console.log(count);
    
    if (count >=3) {
        A =[]
        B =[]   
    }
}