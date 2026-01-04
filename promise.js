async function requestWithRetry(fn, attempts) {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) {
      throw err;
    }
    return requestWithRetry(fn, attempts - 1);
  }
}

const fn = async () => {
  const random = Math.floor(Math.random() * 10);
  if (random > 0.5) {
    return "success";
  } else {
    throw new Error("error");
  }
};

requestWithRetry(fn, 3)
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log("Final Error:", error.message);
    });
