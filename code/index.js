function menuToggle() {
    var list = document.getElementById("list");
    var listElements = list.childElementCount;
    var height = 1.5 * listElements;
    var x = document.getElementById("burgerMenu");
    if (x.style.height === "0rem") {
        x.style.height = height + "rem";
    } else {
        x.style.height = "0rem";
    }
}

// Add interactivity (e.g., clicking the button)
// const buttons = document.querySelectorAll('.button');
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         // Your custom logic here
//         console.log('Button clicked!');
//     });
// });

let currentReview = 1;
const totalReviews = 3;

document.getElementById('next').addEventListener('click', function () {
    showReview(currentReview + 1);
});

document.getElementById('prev').addEventListener('click', function () {
    showReview(currentReview - 1);
});

function showReview(index) {
    if (index > totalReviews) {
        currentReview = 1;
    } else if (index < 1) {
        currentReview = totalReviews;
    } else {
        currentReview = index;
    }

    for (let i = 1; i <= totalReviews; i++) {
        document.getElementById('review-' + i).style.display = 'none';
    }

    document.getElementById('review-' + currentReview).style.display = 'flex';
}
