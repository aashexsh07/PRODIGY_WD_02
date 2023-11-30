let startTime;
    let elapsedTime = 0;
    let timerInterval;
    let running = false;
    let lapCount = 1;

    function startStopwatch() {
      if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10); // Updates every 10 milliseconds
      }
    }

    function lap() {
      if (running) {
        const lapTime = elapsedTime;
        const formattedLapTime = formatTime(lapTime);
        const lapsList = document.getElementById('laps');
        const newLapItem = document.createElement('li');
        newLapItem.textContent = `Lap ${lapCount}: ${formattedLapTime}`;
        lapsList.appendChild(newLapItem);
        lapCount++;
      }
    }

    function stopStopwatch() {
      if (running) {
        running = false;
        clearInterval(timerInterval);
      }
    }

    function resetStopwatch() {
      running = false;
      clearInterval(timerInterval);
      elapsedTime = 0;
      lapCount = 1;
      updateDisplay();
      document.getElementById('laps').innerHTML = '';
    }

    

    function updateDisplay() {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      const formattedTime = formatTime(elapsedTime);
      document.getElementById('display').textContent = formattedTime;
      
    }

    function formatTime(milliseconds) {
      const hours = Math.floor(milliseconds / 3600000);
      const minutes = Math.floor((milliseconds % 3600000) / 60000);
      const seconds = Math.floor((milliseconds % 60000) / 1000);
      const millis = milliseconds % 1000;

      return (
        pad(hours) + ':' +
        pad(minutes) + ':' +
        pad(seconds) + '.' +
        padMillis(millis)
      );
    }

    function pad(number) {
      return (number < 10 ? '0' : '') + number;
    }

    function padMillis(number) {
      if (number < 10) {
        return '00' + number;
      } else if (number < 100) {
        return '0' + number;
      } else {
        return number;
      }
    }