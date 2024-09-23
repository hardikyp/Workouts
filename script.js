document.getElementById('workoutForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const exercise = document.getElementById('exercise').value;
  const sets = document.getElementById('sets').value;
  const reps = document.getElementById('reps').value;
  const weight = document.getElementById('weight').value;

  const workoutLog = JSON.parse(localStorage.getItem('workoutLog')) || [];

  workoutLog.push({ exercise, sets, reps, weight });
  localStorage.setItem('workoutLog', JSON.stringify(workoutLog));

  displayLog();
  this.reset();
});

function displayLog() {
  const log = document.getElementById('log');
  const workoutLog = JSON.parse(localStorage.getItem('workoutLog')) || [];

  log.innerHTML = '';
  workoutLog.forEach((logItem, index) => {
    const li = document.createElement('li');
    li.textContent = `${logItem.exercise}: ${logItem.sets} sets, ${logItem.reps} reps, ${logItem.weight} kg`;
    log.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', displayLog);
