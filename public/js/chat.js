const input = document.getElementById('chatinput');

const message_div = document.getElementsByClassName('message');
const socket = io();
socket.on('receive', (arg) => {
  let new_message = message_div.item(0).cloneNode();
  new_message.textContent = arg.message;
  message_div.item(0).append(new_message);
});

input.addEventListener('submit', (e) => {
  socket.emit('send', { message: e.currentTarget.input.value });
  e.preventDefault();

  let new_message = message_div.item(0).cloneNode();
  new_message.textContent = e.currentTarget.input.value;
  message_div.item(0).append(new_message);

  e.currentTarget.input.value = '';
});
