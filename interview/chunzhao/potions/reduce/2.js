function Button(label) {
  this.label = label;
  this.onClick = function () {
    console.log('Button clicked with params:', this.label);
    
  }
}
function emitClick(callback) {
  callback();   
    
}
const button = new Button('myButton');
emitClick(button.onClick);