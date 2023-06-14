const slideContainer = document.getElementById("slide-container");
const slide = document.querySelector(".under-slide");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
});



// Navigatoins COlor change on scroll

$(document).scroll(function () {
    if ($(this).scrollTop() > 1105) {
        $('.navigatoinm').css("background-color", "#164b47");
        $('.navigatoinm').css("transition", "500ms");
        $('.logo-text').css("color", "#ece7d6");
        $('.int').css("color", "#ece7d6");
        $('.link').css("color", "#ece7d6");
        // navigation link hover 
        $('.link').hover(function () {
            $(this).css({
                'border-width': '0 0 3px',
                'border-style': 'solid',
                'border-color': '#ece7d6',
                'margin-bottom': '-2px',
                'transition': '100ms'
            });
        },
            function () {
                $(this).css('border', 'none');
            });
        $('.contact-btn').css({ 'color': '#ece7d6', 'border-color': '#ece7d6' });
        // navigation button hover
        $('.contact-btn').hover(function () {
            $(this).css({
                'background-color': '#ece7d6',
                'color': '#164b47',
                ' -webkit-transition':
                    'background-color 500ms linear',
                '-ms-transition': 'background-color 500ms linear',
                'transition': 'background-color 500ms linear'
            });
        },
            function () {
                $(this).css({ 'background-color': '#164b47', 'color': '#ece7d6' });
            });
    } else {
        $('.navigatoinm').css("background-color", "#ece7d6");
        $('.navigatoinm').css("transition", "500ms");
        $('.logo-text').css("color", "#164b47");
        $('.int').css("color", "#164b47");
        $('.link').css("color", "#164b47");
        // navigation link hover 
        $('.link').hover(function () {
            $(this).css({
                'border-width': '0 0 3px',
                'border-style': 'solid',
                'border-color': '#164b47',
                'margin-bottom': '-2px',
                'transition': '100ms'
            });
        },
            function () {
                $(this).css('border', 'none');
            });
        $('.contact-btn').css({ 'color': '#ece7d6', 'border-color': '#164b47' });
    }
});
// About Us carousel

const slider_cont = document.querySelector(".slider-cont");
const slie = document.querySelector(".slie");
let slieWidth = slie.clientWidth;

let i = 5;

function forward() {

        slider_cont.scrollLeft += slieWidth;
        if (slider_cont.scrollLeft + slider_cont.offsetWidth === slider_cont.scrollWidth) {
            console.log("fuck")
            function backward() {
                slider_cont.scrollLeft -= slieWidth;
            }; setInterval(backward, 3500);
        }

}; 
setInterval(forward, 3500);










// function backward() {
//     const slieWidth = slie.clientWidth;
//     slider_cont.scrollLeft -= slieWidth;
// };
// setInterval(backward, 2000);