console.log('I am linked to the html')
let form = document.getElementById('top')

form.addEventListener('click',(e)=> { 

     e.preventDefault()
console.log('working')
    console.log(e)


 })

 let body = document.getElementById('body')
body.addEventListener('click',(e)=> { 
 
     e.preventDefault()
     let body = document.getElementById('body')
console.log('body',body)
console.log('e',  e)
     if(body.classList.contains('light')) {
         body.classList.remove('light')
         body.classList.add('dark')
     }else {
        body.classList.remove('dark')
        body.classList.add('light')
     }
 })

 