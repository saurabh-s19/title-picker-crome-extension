var nameElement = document.querySelector(".text-heading-xlarge ").innerHTML;

var profileData = {
    name: nameElement ? nameElement : "",

};

backendapi(profileData);
chrome.runtime.sendMessage({ action: "profileData", data: profileData });

function backendapi(data) {
    const extractedData = data;
    sendToBackend(extractedData);
    displayData(data);
}


function sendToBackend(data) {
    fetch('http://localhost:3000/profile/postprofile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => console.log('Data sent to backend:', result))
    .catch(error => console.error('Error sending data to backend:', error));
}

function displayData(data) {
    const profileDataElement = document.getElementById("profileData");
    profileDataElement.innerHTML += "completed successfully";
}