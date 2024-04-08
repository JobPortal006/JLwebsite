// // function hoverEffect(element) {
// //     element.querySelector('.webapp_section_2_box_text').style.marginTop = '50px';
// //     element.querySelector('.webapp_section_2_box_para').style.display = 'block';
// //   }
  
// //   function removeHoverEffect(element) {
// //     element.querySelector('.webapp_section_2_box_text').style.marginTop = '136px';
// //     element.querySelector('.webapp_section_2_box_para').style.display = 'none';
// //   }
  

// document.querySelector('.arrow-left').addEventListener('click', function() {
//     const cardsContainer = document.querySelector('.webapp_section_2_cards');
//     cardsContainer.scrollLeft -= 300; // Adjust scroll distance as needed
//   });
  
//   document.querySelector('.arrow-right').addEventListener('click', function() {
//     const cardsContainer = document.querySelector('.webapp_section_2_cards');
//     cardsContainer.scrollLeft += 300; // Adjust scroll distance as needed
//   });
  
// document.addEventListener('DOMContentLoaded', function () {
//     const box = document.querySelector('.webapp_section_3_blackbox');
//     const ellipse = document.querySelector('.ellipse');

//     box.addEventListener('mousemove', function (e) {
//         const boxRect = box.getBoundingClientRect();
//         const x = e.clientX - boxRect.left - ellipse.offsetWidth / 2;
//         const y = e.clientY - boxRect.top - ellipse.offsetHeight / 2;

//         ellipse.style.transform = `translate(${x}px, ${y}px)`;
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const box = document.querySelector('.webapp_section_3_blackbox');
    const ellipse = document.querySelector('.ellipse');

    box.addEventListener('mouseenter', function () {
        ellipse.style.display = 'block';
    });

    box.addEventListener('mouseleave', function () {
        ellipse.style.display = 'none';
    });

    document.addEventListener('mousemove', function (e) {
        const boxRect = box.getBoundingClientRect();
        const mouseX = e.clientX - boxRect.left;
        const mouseY = e.clientY - boxRect.top;

        // Move the ellipse to the background of the mouse cursor
        ellipse.style.left = mouseX - ellipse.offsetWidth / 2 + 'px';
        ellipse.style.top = mouseY - ellipse.offsetHeight / 2 + 'px';
    });
});


