let elList = document.querySelector('.list');
let elForm = document.querySelector('.form');
let elBtn = document.querySelector('.btn');
let elInp = document.querySelector('.inp');

let arrData = [
    {
        num: 1,
        img: 'https://openshop.uz/uploads/products/photos/ks82A0LxtViflGfGOz87WCbvUGQMEtuh.jpg',
        model: 'redmi Note7',
        color: 'white',
        marka: 'Xiaomi'

    },
    {
        num: 2,
        img: 'https://openshop.uz/uploads/products/photos/xE05aEvLRYmDcpPIBWeCR0MwqCzg4n8X.jpg',
        model: 'redmi Note8',
        color: 'white',
        marka: 'Xiaomi'

    },
    {
        num: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokXPNikY-Hn4ovr4sQYioWyDs9uhwo102IAu0vwP8slEzPyLY1LOFyJJjoN9lm9OT-eQ&usqp=CAU',
        model: 'redmi Note9',
        color: 'white',
        marka: 'Xiaomi'

    },
    {
        num: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmp1otihAFN09LYSvZ-PT0O9-8hnVQm9Xu-g&usqp=CAU',
        model: 'redmi Note10',
        color: 'white',
        marka: 'Xiaomi'

    },
    {
        num: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQni_b2eDi7gG5bxqLT2QE10SMXLXj-lx_82Q&usqp=CAU',
        model: 'a50',
        color: 'white',
        marka: 'Samsung'

    },
    {
        num: 6,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4ETMw8uiJ0ysehsFqTTEPnW5dw6S177jokaGb-U6Qg5dHvjv_Ps6VNBbLKzQjXQso8c&usqp=CAU',
        model: 'a51',
        color: 'white',
        marka: 'Samsung'

    },
    {
        num: 7,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTlQgstDtLpjaTaNpiUb5C5YFjsE6TWxW9A&usqp=CAU',
        model: 'Legion',
        color: 'white',
        marka: 'Lenovo'

    },
    {
        num: 8,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMDXmkZOyKRBLL7PObw0HD-BJ0ZuXwVXF_A&usqp=CAU',
        model: '9 RT',
        color: 'white',
        marka: '1+'

    },
    {
        num: 9,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrKS65qjhSt6X7j5BPRzut-ns8YkLuvjk-9vCU0LGgokDYXr-g1JGpgWSJv7KJ40NcpY&usqp=CAU',
        model: 'Mi 12 T',
        color: 'white',
        marka: 'Xiaomi'

    }

]



elForm.addEventListener('submit', (i)=>{
    let elVal = elInp.value
    elList.innerHTML = ''
    arrData.forEach((e)=>{
        if (e.marka.toLocaleUpperCase().includes(elVal.toLocaleUpperCase()) || e.model.toLocaleLowerCase().includes(elVal.toLocaleLowerCase())){
            let newLi = document.createElement('li')
            newLi.innerHTML = 
            `<div class="card">
            <img src="${e.img}" alt="">
            <h3 class="marka">Marka: ${e.marka}</h3>
            <h5 class="model">Model:  ${e.model}</h5>
            <h5 class="color">Color:  ${e.color}</h5>
            </div>`
            elList.appendChild(newLi)
            elList.classList.add('list_open')
        }
        elInp.value = ''
    })

})
