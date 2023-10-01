var nameElement = document.querySelector(".text-heading-xlarge ").innerHTML;

var profileData = {
    name: nameElement ? nameElement : "",

};

sendToBackend(profileData);
chrome.runtime.sendMessage({ action: "profileData", data: profileData });



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

