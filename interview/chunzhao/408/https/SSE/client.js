
const eventSource = new EventSource('/events');
eventSource.onmessage = function (event) {
    console.log(event.data);
}
