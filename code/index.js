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

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        console.log('Button clicked!');
    });
});
$(document).ready(function () {
    $(".up").hide()
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100)
            $(".up").show()
        else
            $(".up").hide()
    })
    $(".up").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    })
})

$(document).ready(function () {
    $(".product").slice(0, 4).fadeIn()
});
$(document).ready(function () {
    $('.viewall').click(function () {
        // Navigate to the all-products page
        window.location.href = 'product.html';
    });
});
$(document).ready(function () {
    $(".heart2").hide()
    $(".heart1").click(function () {
        $(".heart1").hide()
        $(".heart2").show()
    })
    $(".heart2").click(function () {
        $(".heart2").hide()
        $(".heart1").show()
    })
})


$(document).ready(function () {
    $(".preview").hide();
    $(".product").click(function () {
        $(".preview").hide();
        var productIndex = $(this).attr('class').match(/\d+/)[0];
        $(".preview" + productIndex).show();
    });
    $(".del").click(function () {
        $(".preview").hide()
    })
});


$(document).ready(function() {
    $('.thumbnail').click(function() {
        // Find the closest parent .product-detail and then find the .mainImage within that context
        var newSrc = $(this).attr('src');
        $(this).closest('.preview').find('.mainImage').attr('src', newSrc);
    });
});
$(document).ready(function () {
    $(".success").hide();
    $(".submit").click(function () {
        $(".success").show()
    })
})