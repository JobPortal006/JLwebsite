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


function toggleAdditionalBoxes() {
  var initialBoxes = document.querySelectorAll('.webapp_section_2_box:not(.additional-boxes .webapp_section_2_box)');
  var additionalBoxes = document.querySelectorAll('.additional-boxes .webapp_section_2_box');

  // Hide initial boxes
  initialBoxes.forEach(function(box) {
    box.style.display = 'none';
  });

  // Show additional boxes
  additionalBoxes.forEach(function(box) {
    box.style.display = 'flex';
  });
}




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


// var cardImage = document.querySelector('.card_image');

// // Add click event listener
// cardImage.addEventListener('click', function() {
//   // Rotate the image
//   this.style.transform = 'rotate(180deg)';
//   // Hide the background image
  
// });

// document.addEventListener('DOMContentLoaded', function() {
//     // Get the card image element
//     // var cardImage = document.querySelector('.card_image');
//     // Get the content elements
//     var contentPara = document.querySelector('.webapp_section_6_card1contentpara');
//     var cardLine = document.querySelector('.cardline');
//     var moreAboutAgile = document.querySelector('.webapp_section_6_moreaboutagile');
//       // Get the card image and heading elements
//   var cardImage = document.querySelector('.card_image');
//   var cardHeading = document.querySelector('.card_heading');
  
//     // Add click event listener
//     cardImage.addEventListener('click', function() {
//       // Rotate the image
//       this.style.transform = 'rotate(180deg)';
//       this.style.backgroundColor  = 'green';
//     // Change heading color to black
//     cardHeading.style.color = 'black';
//       var card = document.querySelector('.webapp_section_6_card1');
//   card.style.backgroundImage = 'none';
//   // Change background color to white
//   card.style.backgroundColor = 'white';
//       // Show the hidden content
//       contentPara.style.opacity = '1';
//       contentPara.style.visibility = 'visible';
//       cardLine.style.opacity = '1';
//       cardLine.style.visibility = 'visible';
//       moreAboutAgile.style.opacity = '1';
//       moreAboutAgile.style.visibility = 'visible';
//       // Add box shadow
//     var card = document.querySelector('.webapp_section_6_card1');
//     card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
//     });
//   })
  

//  document.addEventListener('DOMContentLoaded', function() {
  // Get the card and image elements
//   var card = document.querySelector('.webapp_section_6_card1 .webapp_section_6_card2  .webapp_section_6_card3');
//   var cardImage = document.querySelector('.card_image');
//   var cardHeading = document.querySelector('.card_heading');
//   var contentPara = document.querySelector('.webapp_section_6_card1contentpara');
//   var cardLine = document.querySelector('.cardline');
//   var moreAboutAgile = document.querySelector('.webapp_section_6_moreaboutagile');

//   // Set initial visibility state
//   var isVisible = false;

//   // Add click event listener to the image
//   cardImage.addEventListener('click', function() {
//     // Toggle visibility
//     isVisible = !isVisible;

//     // Rotate the image
//     if (isVisible) {
//       this.style.transform = 'rotate(180deg)';
//     } else {
//       this.style.transform = 'rotate(360deg)';
//     }

//     // Change image color to green when visible, otherwise revert to default
//     if (isVisible) {
//       this.style.backgroundColor = 'green';
//     } else {
//       this.style.backgroundColor = ''; // Revert to default background color
//     }

//     // Change heading color to black when visible, otherwise revert to default
//     if (isVisible) {
//       cardHeading.style.color = 'black';
//     } else {
//       cardHeading.style.color = ''; // Revert to default heading color
//     }

//     // Get the card element
//     var card = document.querySelector('.webapp_section_6_card1');

//     // Toggle background image and color
//     if (isVisible) {
//       card.style.backgroundImage = 'none';
//       card.style.backgroundColor = 'white';
//     } else {
//       card.style.backgroundImage = ''; // Revert to default background image
//       card.style.backgroundColor = ''; // Revert to default background color
//     }

//     // Toggle visibility of hidden elements
//     if (isVisible) {
//       contentPara.style.opacity = '1';
//       contentPara.style.visibility = 'visible';
//       cardLine.style.opacity = '1';
//       cardLine.style.visibility = 'visible';
//       moreAboutAgile.style.opacity = '1';
//       moreAboutAgile.style.visibility = 'visible';
//       // Add box shadow when visible
//       card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
//     } else {
//       contentPara.style.opacity = '0';
//       contentPara.style.visibility = 'hidden';
//       cardLine.style.opacity = '0';
//       cardLine.style.visibility = 'hidden';
//       moreAboutAgile.style.opacity = '0';
//       moreAboutAgile.style.visibility = 'hidden';
//       // Remove box shadow when hidden
//       card.style.boxShadow = 'none';
//     }
//   });


document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle visibility and style of elements
    function toggleVisibility(card, cardImage, cardHeading, contentPara, cardLine, moreAboutAgile) {
      // Toggle visibility
      isVisible = !isVisible;
  
      // Rotate the image
      if (isVisible) {
        cardImage.style.transform = 'rotate(180deg)';
      } else {
        cardImage.style.transform = 'rotate(360deg)';
      }
  
      // Change image color to green when visible, otherwise revert to default
      if (isVisible) {
        cardImage.style.backgroundColor = 'green';
      } else {
        cardImage.style.backgroundColor = '';
      }
  
      // Change heading color to black when visible, otherwise revert to default
      if (isVisible) {
        cardHeading.style.color = 'black';
      } else {
        cardHeading.style.color = '';
      }
  
      // Toggle background image and color of the card
      if (isVisible) {
        card.style.backgroundImage = 'none';
        card.style.backgroundColor = 'white';
      } else {
        card.style.backgroundImage = '';
        card.style.backgroundColor = '';
      }
  
      // Toggle visibility of hidden elements
      if (isVisible) {
        contentPara.style.opacity = '1';
        contentPara.style.visibility = 'visible';
        cardLine.style.opacity = '1';
        cardLine.style.visibility = 'visible';
        moreAboutAgile.style.opacity = '1';
        moreAboutAgile.style.visibility = 'visible';
        // Add box shadow when visible
        card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
      } else {
        contentPara.style.opacity = '0';
        contentPara.style.visibility = 'hidden';
        cardLine.style.opacity = '0';
        cardLine.style.visibility = 'hidden';
        moreAboutAgile.style.opacity = '0';
        moreAboutAgile.style.visibility = 'hidden';
        // Remove box shadow when hidden
        card.style.boxShadow = 'none';
      }
    }
  
    // Get elements for the first card
    var card1 = document.querySelector('.webapp_section_6_card1');
    var cardImage1 = document.querySelector('.webapp_section_6_card1 .card_image');
    var cardHeading1 = document.querySelector('.webapp_section_6_card1 .card_heading');
    var contentPara1 = document.querySelector('.webapp_section_6_card1contentpara');
    var cardLine1 = document.querySelector('.webapp_section_6_card1 .cardline');
    var moreAboutAgile1 = document.querySelector('.webapp_section_6_card1 .webapp_section_6_moreaboutagile');
  
    // Set initial visibility state for the first card
    var isVisible = false;
  
    // Add click event listener to the image of the first card
    cardImage1.addEventListener('click', function() {
      toggleVisibility(card1, cardImage1, cardHeading1, contentPara1, cardLine1, moreAboutAgile1);
    });
  
    // Get elements for the second card
    var card2 = document.querySelector('.webapp_section_6_card2');
    var cardImage2 = document.querySelector('.webapp_section_6_card2 .card_image');
    var cardHeading2 = document.querySelector('.webapp_section_6_card2 .card_heading');
    var contentPara2 = document.querySelector('.webapp_section_6_card2 .webapp_section_6_card1contentpara');
    var cardLine2 = document.querySelector('.webapp_section_6_card2 .cardline');
    var moreAboutAgile2 = document.querySelector('.webapp_section_6_card2 .webapp_section_6_moreaboutagile');
  
    // Set initial visibility state for the second card
    isVisible = false;
  
    // Add click event listener to the image of the second card
    cardImage2.addEventListener('click', function() {
      toggleVisibility(card2, cardImage2, cardHeading2, contentPara2, cardLine2, moreAboutAgile2);
    });

    var card3 = document.querySelector('.webapp_section_6_card3');
    var cardImage3 = document.querySelector('.webapp_section_6_card3 .card_image');
    var cardHeading3 = document.querySelector('.webapp_section_6_card3 .card_heading');
    var contentPara3 = document.querySelector('.webapp_section_6_card3 .webapp_section_6_card1contentpara');
    var cardLine3 = document.querySelector('.webapp_section_6_card3 .cardline');
    var moreAboutAgile3 = document.querySelector('.webapp_section_6_card3 .webapp_section_6_moreaboutagile');
  
    // Set initial visibility state for the third card
    var isVisible = false;
  
    // Add click event listener to the image of the third card
    cardImage3.addEventListener('click', function() {
      toggleVisibility(card3, cardImage3, cardHeading3, contentPara3, cardLine3, moreAboutAgile3);
    });
  });
  
  
  // document.addEventListener("DOMContentLoaded", function() {
  //   const frontForm = document.querySelector('.webapp_section_10_testimonialfrontform');
  //   const backForm = document.querySelector('.webapp_section_10_testimonialbackform');
  //   const carousels = document.querySelectorAll('.webapp_section_10_testimonialcarosuel div');
  
  //   // Initially activate the first carousel item
  //   carousels[0].classList.add('active');
  
  //   // Click event listener for each carousel item
  //   carousels.forEach((carousel, index) => {
  //     carousel.addEventListener('click', function() {
  //       // Remove 'active' class from all carousel items
  //       carousels.forEach((c) => c.classList.remove('active'));
        
  //       // Add 'active' class to clicked carousel item
  //       carousel.classList.add('active');
        
  //       // Toggle visibility of front and back forms based on the index of clicked carousel item
  //       if (index === 0) {
  //         // If first carousel item is clicked, show front form and hide back form
  //         frontForm.style.opacity = 1;
  //         backForm.style.opacity = 0;
  //       } else {
  //         // If any other carousel item is clicked, hide front form and show back form
  //         frontForm.style.opacity = 0;
  //         backForm.style.opacity = 1;
  //       }
  //     });
  //   });
  // });

  
  
  document.addEventListener("DOMContentLoaded", function() {
    const frontForm = document.querySelector('.webapp_section_10_testimonialfrontform');
    const backForm = document.querySelector('.webapp_section_10_testimonialbackform');
    const backForm3 = document.querySelector('.webapp_section_10_testimonialbackform3');
    const backForm4 = document.querySelector('.webapp_section_10_testimonialbackform4');
    const carousels = document.querySelectorAll('.webapp_section_10_testimonialcarosuel div');

    // Initially activate the first carousel item
    carousels[0].classList.add('active');

    // Click event listener for each carousel item
    carousels.forEach((carousel, index) => {
        carousel.addEventListener('click', function() {
            // Remove 'active' class from all carousel items
            carousels.forEach((c) => c.classList.remove('active'));
            
            // Add 'active' class to clicked carousel item
            carousel.classList.add('active');
            
            // Toggle visibility of front and back forms based on the index of clicked carousel item
            if (index === 0) {
                // If first carousel item is clicked, show front form and hide back forms
                frontForm.style.opacity = 1;
                backForm.style.opacity = 0;
                backForm3.style.opacity = 0;
                backForm4.style.opacity = 0;
            } else if (index === 1) {
                // If second carousel item is clicked, hide front form and show first back form
                frontForm.style.opacity = 0;
                backForm.style.opacity = 1;
                backForm3.style.opacity = 0;
                backForm4.style.opacity = 0;
            } else if (index === 2) {
                // If third carousel item is clicked, hide front form and show second back form
                frontForm.style.opacity = 0;
                backForm.style.opacity = 0;
                backForm3.style.opacity = 1;
                backForm4.style.opacity = 0;
            } else if (index === 3) {
                // If fourth carousel item is clicked, hide front form and show third back form
                frontForm.style.opacity = 0;
                backForm.style.opacity = 0;
                backForm3.style.opacity = 0;
                backForm4.style.opacity = 1;
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
  const caseStudiesCenters = document.querySelectorAll('.webapp_section_11_casestudiescenter');
  const caseLeftButton = document.querySelector('.webapp_section_11_caseleftbutton');
  const caseRightButton = document.querySelector('.webapp_section_11_caserightbutton');
  let currentIndex = 0;

  function updateButtonState() {
      if (currentIndex === 0) {
          caseLeftButton.classList.add('disabled');
      } else {
          caseLeftButton.classList.remove('disabled');
      }

      if (currentIndex === caseStudiesCenters.length - 1) {
          caseRightButton.classList.add('disabled');
      } else {
          caseRightButton.classList.remove('disabled');
      }
  }

  updateButtonState();

  caseRightButton.addEventListener('click', function() {
      currentIndex++;
      caseStudiesCenters[currentIndex - 1].style.display = 'none';
      caseStudiesCenters[currentIndex].style.display = 'block';
      updateButtonState();

      if (currentIndex === caseStudiesCenters.length - 1) {
          caseRightButton.classList.add('disabled');
      }
  });

  caseLeftButton.addEventListener('click', function() {
      currentIndex--;
      caseStudiesCenters[currentIndex + 1].style.display = 'none';
      caseStudiesCenters[currentIndex].style.display = 'block';
      updateButtonState();

      if (currentIndex === 0) {
          caseLeftButton.classList.add('disabled');
      }
  });
});





