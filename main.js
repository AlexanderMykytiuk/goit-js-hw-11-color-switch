const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let intervalId = 0; 

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function cheangColor() {
  let color = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.bgColor = colors[color];
};

function startHendler() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(cheangColor, 1000);
};

function stopHendler () {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
};

refs.startBtn.addEventListener('click', startHendler);
refs.stopBtn.addEventListener('click', stopHendler);
























const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let intervalId = 0; 

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function cheangColor() {
  let color = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.bgColor = colors[color];
};

function startHendler() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(cheangColor, 1000);
};

function stopHendler () {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
};

refs.startBtn.addEventListener('click', startHendler);
refs.stopBtn.addEventListener('click', stopHendler);