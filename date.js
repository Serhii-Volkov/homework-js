//Напишите startTimer(durationSeconds):
//• каждые 1 секунду выводит: Elapsed: X seconds
//• когда пройдёт durationSeconds секунд:
//• останавливает интервал
//• выводит: "Timer finished"
//• Плюс сделайте stopTimer():
//• останавливает таймер вручную
//• выводит: "Timer stopped"
//Ограничение: время считать через Date.now(), а не x++.


let timerId = null
let startTime = null
let duration = null

function startTimer(durationSeconds) {
  if (timerId) return

  startTime = Date.now()
  duration = durationSeconds * 1000

  timerId = setInterval(() => {
    const elapsed = Date.now() - startTime
    const elapsedSeconds = Math.floor(elapsed / 1000)

    if (elapsed >= duration) {
      clearInterval(timerId)
      timerId = null
      console.log('Timer finished')
      return
    }

    console.log(`Elapsed: ${elapsedSeconds} seconds`)
  }, 1000)
}

function stopTimer() {
  if (!timerId) return

  clearInterval(timerId)
  timerId = null
  console.log('Timer stopped')
}


startTimer(5)


//setTimeout(() => {
//  stopTimer()
//}, 3000)
