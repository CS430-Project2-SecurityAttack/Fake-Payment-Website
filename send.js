document.getElementById("continueButton").addEventListener("click", function() {
// Get the input field values
const holderName = document.getElementById('bank-account-holder-name').value;
const routingNumber = document.getElementById('bank-account-routing-number').value;
const accountNumber = document.getElementById('bank-account-number').value;

// // Create the URL for the GET request
// const url = `http://localhost:8080?holderName=${encodeURIComponent(holderName)}&routingNumber=${encodeURIComponent(routingNumber)}&accountNumber=${encodeURIComponent(accountNumber)}`;

// // Send the GET request
// fetch(url)
//     .then(response => {
//         if (response.ok) {
//             // Request was successful
//             console.log('GET request sent successfully');
//         } else {
//             // Request failed
//             console.error('Error sending GET request');
//         }
//     })
//     .catch(error => {
//         console.error('Error sending GET request:', error);
//     });
// Create the request body
const requestBody = {
    routing_number: routingNumber,
    account_holder: holderName,
    account_number: accountNumber
};

// var xhr = new XMLHttpRequest();
//   xhr.open("POST", "http://127.0.0.1:8000/bank_accounts/", true); // Replace "server-script.php" with the actual URL of your server script
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // Handle the response from the server if needed
//       console.log(xhr.responseText);
//     }
//   };
// xhr.send(JSON.stringify(requestBody));

// Send the POST request
fetch('http://127.0.0.1:8000/bank_accounts/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(requestBody)
})
    .then(response => {
        if (response.ok) {
            // Request was successful
            console.log('POST request sent successfully');
        } else {
            // Request failed
            console.error('Error sending POST request');
        }
    })
    .catch(error => {
        console.error('Error sending POST request:', error);
    });
console.log(holderName, routingNumber, accountNumber) 
});