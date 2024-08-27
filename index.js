
/*let button =  document.querySelector('button');

button.addEventListener('click', function(event){
    console.log(event)
    event.target.style.backgroundColor = "yellow";
   // event.target.parentElement.style.backgroundColor = "teal";
    
   let colors = ['red', 'teal','orange','green','purple'];
   let randomIndex = Math.floor(Math.random()*5);
   let parentElement = event.target.parentElement;
   parentElement.style.backgroundColor = colors[randomIndex];

})  */

   /*let button = document.querySelector('button');

   button.addEventListener('click', function(event) {
       console.log(event); // Log the event object
   
       // Change the background color of the button to yellow
       event.target.style.backgroundColor = "yellow";
   
       // Array of colors to choose from
       let colors = ['red', 'teal', 'orange', 'green', 'purple'];
   
       // Generate a random index to pick a color
       let randomIndex = Math.floor(Math.random() * colors.length);
   
       // Get the parent element of the button
       let parentElement = event.target.parentElement;
   
       // Change the background color of the parent element to a random color
       parentElement.style.backgroundColor = colors[randomIndex];
   });
   */

   let element = document.querySelector('p');
console.log(element); // Logs the first element with the class 'myClass'


element.innerHTML = '<p>New Content</p>';


let newDiv = document.createElement('div');  // Create a new <div> element
newDiv.innerHTML = 'hello David';  // Set the content of the <div>

// Now append the new <div> to an existing element in the DOM
document.body.appendChild(newDiv);  // This adds the new <div> to the end of the <body>


// Select an element
let button = document.querySelector('button');

// Define the function to be executed when the event occurs
function handleClick(event) {
    console.log('Button was clicked!');
    alert("You clicked a button!");
}

// Attach the event listener to the element
button.addEventListener('click', handleClick);
