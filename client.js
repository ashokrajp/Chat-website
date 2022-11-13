const socket= io('http://localhost:3000');

const form = document.getElementById('send-container')
const messageInput= document.getElementById('messageInp')
const messageConttainer  = document.querySelector(".container")

const append=(message,position)=>{
    const messageElement =  document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageConttainer.append(messageElement);
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.Value;
    append(`you:${message}`,'right')
    socket.emit('send',message)
    messageInput.Value=''
})

//const name = prompt("enter your name to join");
//socket.emit('new-user-joined',name)


socket.on('user-joined',name =>{
    append(`${name} join the chat`,'left')

})

socket.on('receive',data =>{
    append(`${data.name}: ${data.message}`,'left')
    
    })