const photo = document.querySelectorAll('.Control')

let current = 0

const items = document.querySelectorAll('.item')
const itemLength = items.length


photo.forEach(Control => {


    Control.addEventListener('click', ()=>{
        let isLeft = Control.classList.contains('L')
        if(isLeft){
        current -= 1
        } else{
        current += 1

        }
        if (current>=itemLength) {
            current = 0
        } 
        
        if(current<0){
            current = itemLength - 1
        }


        items.forEach(item => {
            item.classList.remove('current-item')

            items[current].scrollIntoView({
                inline: "center",
                behavior: "smooth",
            })

            items[current].classList.add('current-item')
        })


        console.log(`${isLeft} ${current}`)})

})