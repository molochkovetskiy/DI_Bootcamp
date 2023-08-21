// Timeout

// function testTimeout() {
//     alert("After 7 seconds");
// }

// setTimeout(() => {
//     alert("After 2 seconds");
// }, 2000);

// const timeOutId = setTimeout(function () {
//     alert("After 5 seconds");
// }, 5000);

// setTimeout(testTimeout, 7000);

// clearTimeout(timeOutId);


// Exercise

function showBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'block';
}

setTimeout(showBanner, 5000);