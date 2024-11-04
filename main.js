//Task 1: html
//Task 2: Fetch Tickets Using Async/Await and Handle Errors
async function fetchTickets() { // get from html where tickets and error message wil be displayed
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // fetch data from API
        if (!response.ok) { //check if fetch worked
            throw new Error('Response not ok') //if not = error message
        }
        const tickets = await response.json(); // convert to json
        if (tickets.length === 0) { //check if data is empty
            throw new Error('No utickets available'); // error if no tickets are found
        }
        displayDetails(tickets); //call function to display detais
    }
} catch (error) { // display error if fetch doesnt work and/or no tickets are found
    errorMessage.style.display = 'block';
    errorMessage.textContent = `Error: ${error.message}`;
}
fetchTickets(); //call function 