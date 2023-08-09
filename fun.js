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
animateValue(obj, 0, 50, 5000);

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
animateValue(obk, 0, 50, 5000);