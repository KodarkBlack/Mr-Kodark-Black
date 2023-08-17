function animateValue(obj, start, end, duration){
    let startTimestamp = null;
    const step = (timestamp) => {
        if(!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
        if(progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    // We put this in a requestAnimationFrame to make sure that the value is updated before tween
    // starts its animation. Otherwise it would jump from the final value to the initial one.
    window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 0, 50, 5700);

function animateValue(obk, start, end, duration){
    let startTimestamp = null;
    const step = (timestamp) => {
        if(!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obk.innerHTML = Math.floor(progress * (end - start) + start) + "% OFF";
        if(progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    // We put this in a requestAnimationFrame to make sure that the value is updated before tween
    // starts its animation. Otherwise it would jump from the final value to the initial one.
    window.requestAnimationFrame(step);
}

const obk = document.getElementById("value-second");
animateValue(obk, 0, 50, 5800);


const subform = document.getElementById("subform");
subform.addEventListener("submit", formSubmit);

function formSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/7af0e2fa-abb4-47f8-b53c-448fea6f9c49", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(`An error occcured: ${response.statusText}`);
        }
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
}