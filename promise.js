//async function requestWithRetry(fn, attempts) {
//  try {
//    return await fn();
//  } catch (err) {
//    if (attempts <= 1) {
//      throw err;
//    }
//    return requestWithRetry(fn, attempts - 1);
//  }
//}
//
//const fn = async () => {
//  const random = Math.floor(Math.random() * 10);
//  if (random > 0.5) {
//    return "success";
//  } else {
//    throw new Error("error");
//  }
//};
//
//requestWithRetry(fn, 3)
//    .then((result) => {
//        console.log("Result:", result);
//    })
//    .catch((error) => {
//        console.log("Final Error:", error.message);
//    });
//

/*🧩 ЗАДАЧА 1 — Работа с Promise.all и Promise.allSettled
Написать программу, которая загружает данные нескольких пользователей по их id.
1. Есть массив id пользователей, например:
const ids = [1, 2, 3, 4, 5];

2. Для каждого id вызывается функция fetchUser(id), которая возвращает промис:
• промис случайно:
• успешно выполняется (возвращает объект с данными пользователя),
• отклоняется (имитирует ошибку сервера).
3. Необходимо реализовать две функции:
🔹 loadUsersAll(ids) — режим строгой загрузки
• использовать Promise.all
• если все запросы успешные — вывести массив пользователей
• если хотя бы один запрос завершился ошибкой — вывести сообщение об ошибке

🔹 loadUsersSafe(ids) — режим мягкой загрузки
• использовать Promise.allSettled
• собрать все результаты, даже если часть запросов упала
• вывести:
• список успешно загруженных пользователей,
• список ошибок */

//const ids = [1, 2, 3, 4, 5];
//
//function fetchUser(id) {
//  return new Promise((resolve, reject) => {
//    const random = Math.random();
//    if (random > 0.3) {
//      resolve({ id, name: `User ${id}` });
//    } else {
//      reject(new Error(`Failed to fetch user ${id}`));
//    }
//  });
//}
//
//async function loadUsersAll(ids) {
//  try {
//    const users = await Promise.all(ids.map((id) => fetchUser(id)));
//    console.log(users);
//  } catch (error) {
//    console.log(error.message);
//  }
//}
//
//async function loadUsersSafe(ids) {
//  const results = await Promise.allSettled(ids.map((id) => fetchUser(id)));
//  const users = results
//    .filter((result) => result.status === "fulfilled")
//    .map((result) => result.value);
//  const errors = results
//    .filter((result) => result.status === "rejected")
//    .map((result) => result.reason.message);
//  console.log("Users:", users);
//  console.log("Errors:", errors);
//}
//
//loadUsersAll(ids);
//loadUsersSafe(ids);

/*✅ A task

Нужно реализовать функцию, которая выполняет несколько шагов по очереди:

1️⃣ Подготовка данных — 1–2 сек
2️⃣ Обработка — 0.5–1.5 сек
3️⃣ Сохранение — 1–2.5 сек

Требования:
• каждый шаг — асинхронная функция, возвращающая промис с задержкой
• задержка реализуется через setTimeout
• шаги должны выполняться строго последовательно
• все шаги оборачиваются в try...catch
• при ошибке выполнение должно оборваться

Вывести:
• "Шаг 1 завершён"
• "Шаг 2 завершён"
• "Шаг 3 завершён"
• "Все шаги успешно выполнены"
• либо "Ошибка выполнения процесса" при сбое */

//function delay(ms) {
//  return new Promise(resolve => setTimeout(resolve, ms))
//}
//
//async function step1() {
//  const time = 1000 + Math.random() * 1000 
//  await delay(time)
//  console.log("Шаг 1 завершён")
//}
//
//async function step2() {
//  const time = 500 + Math.random() * 1000 
//  await delay(time)
//  console.log("Шаг 2 завершён")
//}
//
//async function step3() {
//  const time = 1000 + Math.random() * 1500 
//  await delay(time)
//  console.log("Шаг 3 завершён")
//}
//
//async function runProcess() {
//  try {
//    await step1()
//    await step2()
//    await step3()
//
//    console.log("Все шаги успешно выполнены")
//  } catch (error) {
//    console.error("Ошибка выполнения процесса")
//  }
//}
//runProcess()


//Сделать мини-приложение:
//1. На странице есть:
//
//• поле ввода Post ID (число 1–100)
//• кнопка Load
//• блок статуса
//• контейнер для поста
//• контейнер для комментариев
//
//2. По клику на Load:
//
//• прочитать postId из input
//• если input пустой или не число/вне диапазона → показать ошибку в статусе и остановиться
//• показать статус "Loading..." и очистить старый контент
//
//3. Сделать 2 GET-запроса:
//
//• https://jsonplaceholder.typicode.com/posts/{postId}
//• https://jsonplaceholder.typicode.com/posts/{postId}/comments
//
//4. Использовать async/await и try...catch:
//
//• если пост не найден (например, статус не ok) → вывести "Post not found" и не грузить комментарии
//• если комментарии не загрузились → показать пост, а вместо комментариев вывести сообщение "Failed to load comments"
//
//5. Отрисовка в DOM:
//
//• карточка поста: title, body
//• список комментариев: name, email, body

const postIdInput = document.getElementById("postIdInput");
const loadButton = document.getElementById("loadButton");
const statusBlock = document.getElementById("statusBlock");
const postContainer = document.getElementById("postContainer");
const commentsContainer = document.getElementById("commentsContainer");

loadButton.addEventListener("click", async () => {
    const postId = postIdInput.value;

    if (!postId || postId < 1 || postId > 100) {
        statusBlock.textContent = "Error: Enter ID 1-100";
        return;
    }

    statusBlock.textContent = "Loading...";
    postContainer.innerHTML = "";
    commentsContainer.innerHTML = "";

    try {
        const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = postRes.data;

        postContainer.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;

        try {
            const commRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const comments = commRes.data;

            commentsContainer.innerHTML = comments.map(c => `
                <div>
                    <h4>${c.name} (${c.email})</h4>
                    <p>${c.body}</p>
                </div>
            `).join("");

            statusBlock.textContent = "Success";
        } catch (e) {
            commentsContainer.innerHTML = "Failed to load comments";
        }

    } catch (e) {
        statusBlock.textContent = "Post not found";
    }
});



//ТЗ
//1. На странице есть список постов и кнопка Load more.
//2. При первом клике загружается page=1 (_limit=6).
//3. При каждом следующем клике загружается следующая страница (page увеличивается).
//4. Посты добавляются в конец списка (не перезаписываются).
//5. Над списком показывай текст: Page: X и Loaded: Y posts.


//iv class="wrap"> 
//  <h2>Posts</h2> <div class="info"> 
//    <span id="pageInfo">Page: 0</span> 
//    <span id="countInfo">Loaded: 0 posts</span>
//</div> 
//
//<ul id="postsList" class="list"></ul>
//<button id="loadMoreBtn" class="btn">Load more</button>


//const postsList = document.getElementById("postsList");
//const loadMoreBtn = document.getElementById("loadMoreBtn");
//const pageInfo = document.getElementById("pageInfo");
//const countInfo = document.getElementById("countInfo");
//
//
//let page = 0;
//const limit = 6;
//let totalLoaded = 0;
//const url = "https://jsonplaceholder.typicode.com/posts";
//
//function loadeMorePosts() {
// return page += 1;
//}
//
//async function fethPosts(page) {
//  const res = await axios.get(url, {
//    params: {
//      _page: page,
//      _limit: limit
//    }});
//  const data = res.data;
//  return data;
//}
//
//function renderPosts(posts) {
//  posts.forEach(post => {
//    const li = document.createElement("li");
//    li.classList.add("list-item");
//    li.innerHTML = `
//      <h3>${post.title}</h3>
//      <p>${post.body}</p>
//    `;
//    postsList.appendChild(li);
//  });
//  totalLoaded += posts.length;
//  pageInfo.textContent = `Page: ${page}`;
//  countInfo.textContent = `Loaded: ${totalLoaded} posts`;
//}
//
//loadMoreBtn.addEventListener("click", async () => {
//  loadeMorePosts();
//  const posts = await fethPosts(page);
//  renderPosts(posts);
//});



