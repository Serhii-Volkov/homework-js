//Задача 1. Переключатель темы (light/dark mode)
//
//<button id="theme-btn">Toggle Theme</button>
//<div id="box" class="light-box"> Content here </div>
//Сделать так, чтобы по клику:
//1. класс light-box заменялся на dark-box, и наоборот
//2. у dark-box ставился стиль:
//• backgroundColor = "black"
//• color = "white"
//3. у light-box стиль был:
//• backgroundColor = "white"
//• color = "black"
//const button = document.getElementById('theme-btn')
//const box = document.getElementById('box')
//
//button.addEventListener('click', () => {
//    box.classList.toggle('dark-box')
//    if(box.classList.contains('dark-box')){
//        box.style.backgroundColor = 'black',
//        box.style.color = 'white'
//    } else {
//        box.style.backgroundColor = "white"
//        box.style.color = "black"
//    }
//})

//Задача 2. Активный элемент в списке
//
//<ul id="tabs"> <li class="tab">Home</li> <li class="tab">About</li> <li class="tab">Contacts</li> </ul>
//Сделать так:
//1. При клике на любой <li>:
//• удалить класс active у всех
//• добавить active только тому, по которому кликнули
//2. У активного элемента задать стили:
//• color = "white"
//• backgroundColor = "blue"
//3. У неактивных элементов убрать эти стили (поставить пустую строку)

//const tabs = document.querySelectorAll('.tab')
//
//
//tabs.forEach(tab => {
//    tab.addEventListener('click', () => {
//
//        tabs.forEach(t => {
//            t.classList.remove('active')
//            t.style.color = '',
//            t.style.backgroundColor = ''
//        })
//
//        tab.classList.add('active')
//        tab.style.color = 'white',
//        tab.style.backgroundColor = 'blue'
//    })
//})





//ЗАДАЧА 1 — Система лайков
//🎯 ТЗ:
//Сделать систему лайков как в Instagram:
//1. У каждой карточки есть кнопка ❤️ с data-liked=“false”.
//2. При клике:
//• если ещё не лайкнуто →
//• ставится класс .active
//• счётчик увеличивается
//• меняется data-liked на true
//• если лайкнуто →
//• убирать класс .active
//• уменьшать счётчик
//• data-liked → false
//3. Цвет красный только если есть класс .active.

//const button = document.querySelector('.like-btn');
//const count = document.querySelector('.likes-count');
//
//button.addEventListener('click', () => {
//    // переключаем data-active
//    button.dataset.active = button.dataset.active === 'true' ? 'false' : 'true';
//
//    // получаем текущее количество лайков
//    let current = Number(count.textContent);
//
//    if (button.dataset.active === 'true') {
//        button.classList.add('active');
//        count.textContent = current + 1;
//    } else {
//         button.classList.remove('active');
//        count.textContent = current - 1;
//    }
//
//    console.log("active:", button.dataset.active);
//    console.log("likes:", count.textContent);
//});



// NEW


//ЗАДАЧА 1.1 — Табы (вкладки), как на сайте компании
//🎯 ТЗ:
//Сделать компонент табов:
//1. Есть три кнопки с data-tab.
//2. Есть три блока контента с data-content.
//3. При клике на кнопку:
//• у всех кнопок убрать класс active
//• текущей кнопке добавить active
//• скрыть все блоки контента
//• показать только нужный (по совпадению data-tab = data-content)


//const buttons = document.querySelectorAll('.tab-btn')
//const blocks = document.querySelectorAll('.tab-content')
//
//blocks.forEach(b => {})
//
//buttons.forEach(btn => {
//    btn.addEventListener('click', () => {
//        buttons.forEach(b => b.classList.remove('active'))
//
//        btn.classList.add('active')
//        console.log(btn)
//
//        blocks.forEach(b => {
//            b.style.display = 'none'
//
//            if(b.dataset.content === btn.dataset.tab){
//                b.style.display = 'block'
//            }
//        })
//    }) 
//})




//Задача 1.2 — “Выбор всех чекбоксов в таблице”
//ТЗ
//Сделать таблицу с чекбоксами.
//При клике на “Select all” должны отмечаться все чекбоксы.
//При снятии — все снимаются.
//В консоли выводить массив выбранных ID.


//const all = document.getElementById('all')
//const checkboxs = document.querySelectorAll('.checkbox')
//
//all.addEventListener('change', () => {
//    checkboxs.forEach(c => c.checked = all.checked)
//    logSelected() 
//})
//
//
//
//checkboxs.forEach(box => {
//    box.addEventListener('change', () => {
//         console.log(box.checked)
//         logSelected() 
//    })
//    
//})
//
//function logSelected() {
//    const selectedIds = []  
//    checkboxs.forEach(box => {
//        if(box.checked) {
//            selectedIds.push(box.dataset.id)
//        }
//    })
//    console.log(selectedIds)
//}



//Задача 2 — “Добавление комментариев через insertAdjacentHTML
//ТЗ
//По клику на кнопку:
//1. Взять текст из input
//2. Добавить новый комментарий в конец списка <ul>
//3. Если поле пустое — ничего не делать
//4. В консоли показывать количество комментариев


//const input = document.getElementById('comment-input')
//const btn = document.getElementById('add-comment')
//const coments = document.getElementById('comments')
//const comentsList = []
//
//btn.addEventListener('click', () => {
//    const text = input.value
//    if(text.trim() <= 0){
//        return alert('Поле не может быть пустым')
//    }
//
//    coments.insertAdjacentHTML('beforeend', `<li>${text}</li>`)
//
//    comentsList.push(text)
//    console.log(`количество комментариев ${comentsList.length}`)
//    
//})


//Задача 3. Удаление товара через кнопку
//ТЗ
//Список товаров. В каждом — кнопка Delete.
//При клике удаляется весь блок <li> товара.
//Использовать parentElement и делегирование.

//const productsList = document.getElementById('products')
//
//productsList.addEventListener('click', (e) => {
//    // Проверяем, что клик был именно по кнопке 
//     if (e.target.classList.contains('delete-btn')) {
//        //Удаление блока
//        const li = e.target.parentElement
//        li.remove()
//    }
//})




//Задача 1. Живое превью + лог change
//ТЗ:
//1. Есть input и параграф под ним.
//2. При вводе текста (событие input) параграф должен показывать текущий текст.
//3. При событии change (когда поле теряет фокус после изменения) в консоль выводить:
//• "Value finalized: <значение>".

//const input = document.getElementById('input')
//const text = document.getElementById('text')
//
//input.addEventListener('change', (event) => {
//    text.textContent = event.target.value
//    console.log(`Value finalized: ${event.target.value}`)
//})

//Задача 2. Форма логина с валидацией и двумя событиями
//ТЗ:
//1. Форма с полями login и password + кнопка submit.
//2. При submit:
//• отменить поведение по умолчанию (preventDefault).
//• если что-то пустое → вывести в консоль "Fill all fields".
//• если пароль короче 6 символов → "Password too short".
//• если всё ок → "Logged in: <login>", очистить форму.
//3. Дополнительно:
//• при input в поле password, если длина меньше 6 → красная рамка, иначе обычная.

//const form = document.getElementById('login-form')
//
//form.addEventListener('submit', (e) => {
//    e.preventDefault()
//
//    const login = form.elements.login.value
//    const password = form.elements.password.value
//    const passwordElement = form.elements.password
//     
//
//    if(!login || !password){
//        console.log("Fill all fields")
//        return
//    }
//    
//    if(password.length < 6){
//        console.log("Password too short")
//        passwordElement.style.borderColor = "red"
//        return
//    }
//    
//    console.log(`Logged in: ${login}`)
//    form.reset()
//    form.elements.password.style.borderColor = ""
//
//})



//New

//Задача 1 — Переключатель темы (click)
//
//ТЗ
//1. Есть кнопка «Сменить тему».
//2. При клике фон страницы становится чёрным, текст — белым.
//3. При повторном клике возвращается обратно.
//4. В консоли писать "Dark mode ON" или "Dark mode OFF".

const btn = document.getElementById('btn')
const body = document.getElementById('body')


btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode')

    if(body.classList.contains('dark-mode')){
        btn.classList.add('dark-mode')
        console.log("Dark mode ON")

    } else {
        console.log("Dark mode OFF")
        btn.classList.remove('dark-mode')
    }
    
})


//Задача 2.
//
//Автозаполнение подсказок при фокусе (focusin) и выбор варианта (click)
//
//ТЗ
//1. Есть <input> для города.
//2. Когда поле получает фокус — появляется список подсказок (3 города).
//3. Когда пользователь уходит из поля (focusout) — подсказки исчезают.
//4. При клике на подсказку — она подставляется в инпут.
//5. Всё делается через делегирование на контейнере.

const box = document.getElementById('city-wrapper');
const cityInput = document.getElementById('city');
const suggestionsList = document.getElementById('suggestions');

function createCityList() {
    const cities = ['New York', 'Los Angeles', 'Chicago'];
    suggestionsList.insertAdjacentHTML('beforeend', cities.map(city => `<li class="city-item">${city}</li>`));
}

box.addEventListener('focusin', () => {
    createCityList();
    console.log('Pole in focus');
})

box.addEventListener('focusout', () => {
    setTimeout(() => {
        suggestionsList.innerHTML = '';
    }, 100); // Задержка для обработки клика по подсказке
    console.log('Pole out of focus');
});

box.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('city-item')) {
        cityInput.value = target.textContent;
        suggestionsList.innerHTML = '';
        console.log(`Выбран город: ${target.textContent}`);
    }
})