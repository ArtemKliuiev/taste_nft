export function countdown(hours, timer) {
  timer.value = `${timer.value < 10 ? '0' + timer.value : timer.value}h 00m 00s`

  if (hours < 1 || hours > 24) {
    return
  }

  let totalSeconds = hours * 3600

  let interval = setInterval(function () {
    let hoursLeft = Math.floor(totalSeconds / 3600)
    let minutesLeft = Math.floor((totalSeconds % 3600) / 60)
    let secondsLeft = totalSeconds % 60

    timer.value =
      (hoursLeft < 10 ? '0' : '') +
      hoursLeft +
      'h ' +
      (minutesLeft < 10 ? '0' : '') +
      minutesLeft +
      'm ' +
      (secondsLeft < 10 ? '0' : '') +
      secondsLeft +
      's'

    if (totalSeconds === 0) {
      clearInterval(interval)
    } else {
      totalSeconds--
    }
  }, 1000)
}
