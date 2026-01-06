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

const ids = [1, 2, 3, 4, 5];

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.3) {
      resolve({ id, name: `User ${id}` });
    } else {
      reject(new Error(`Failed to fetch user ${id}`));
    }
  });
}

async function loadUsersAll(ids) {
  try {
    const users = await Promise.all(ids.map((id) => fetchUser(id)));
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
}

async function loadUsersSafe(ids) {
  const results = await Promise.allSettled(ids.map((id) => fetchUser(id)));
  const users = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);
  const errors = results
    .filter((result) => result.status === "rejected")
    .map((result) => result.reason.message);
  console.log("Users:", users);
  console.log("Errors:", errors);
}

loadUsersAll(ids);
loadUsersSafe(ids);

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

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function step1() {
  const time = 1000 + Math.random() * 1000 
  await delay(time)
  console.log("Шаг 1 завершён")
}

async function step2() {
  const time = 500 + Math.random() * 1000 
  await delay(time)
  console.log("Шаг 2 завершён")
}

async function step3() {
  const time = 1000 + Math.random() * 1500 
  await delay(time)
  console.log("Шаг 3 завершён")
}

async function runProcess() {
  try {
    await step1()
    await step2()
    await step3()

    console.log("Все шаги успешно выполнены")
  } catch (error) {
    console.error("Ошибка выполнения процесса")
  }
}
runProcess()
