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
showReview(currentReview);

// $(document).ready(function () {
//     $(".product").slice(0, 4).fadeIn()
// });
// $(document).ready(function () {
//     $('.viewall').click(function () {
//         // Navigate to the all-products page
//         window.location.href = 'product.html';
//     });
// });
// $(document).ready(function () {
//     $(".heart2").hide()
//     $(".heart1").click(function () {
//         $(".heart1").hide()
//         $(".heart2").show()
//     })
//     $(".heart2").click(function () {
//         $(".heart2").hide()
//         $(".heart1").show()
//     })
// })


// $(document).ready(function () {
//     $(".preview").hide();
//     $(".product").click(function () {
//         $(".preview").hide();
//         var productIndex = $(this).attr('class').match(/\d+/)[0];
//         $(".preview" + productIndex).show();
//     });
//     $(".del").click(function () {
//         $(".preview").hide()
//     })
// });


// $(document).ready(function() {
//     $('.thumbnail').click(function() {
//         // Find the closest parent .product-detail and then find the .mainImage within that context
//         var newSrc = $(this).attr('src');
//         $(this).closest('.preview').find('.mainImage').attr('src', newSrc);
//     });
// });
// $(document).ready(function () {
//     $(".success").hide();
//     $(".submit").click(function () {
//         $(".success").show()
//     })
// })