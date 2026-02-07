let kgBtn = document.getElementById('kg')
let poundBtn = document.getElementById('pound')

kgBtn.addEventListener('click',()=>{
    let input = document.getElementById('input').value
    console.log(input);
    document.getElementById('output').value=input/2.205+'Kg'
})
poundBtn.addEventListener('click',()=>{
    let input = document.getElementById('input').value
    document.getElementById('output').value=input*2.205+'Pound'
})
