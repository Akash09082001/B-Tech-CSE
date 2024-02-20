

// swiper.js 

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var modal = document.getElementById("myModal");

var btn = document.getElementsByTagName("button")[0];
var span = document.getElementsByClassName("close")[0];

function openModal(btnId) {
  modal.style.display = "block";
  modal.setAttribute("ref", btnId);
}
function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};


// Ref FORM Submission
var form = document.getElementById("myForm");
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var nameError = document.getElementById("nameError");
var phoneError = document.getElementById("phoneError");

var generateCodeBtn = document.getElementById("enqBtn");
var copyCodeBtn = document.getElementById("refBtn");

var share1Btn = document.getElementById("share1");
var share2Btn = document.getElementById("share2");
var downloadFlyerBtn = document.getElementById("downloadFlyer");
var downloadBrochureBtn = document.getElementById("downloadBrochure");



form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Reset error messages
  nameError.textContent = "";
  phoneError.textContent = "";

  // Validate name field
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    return;
  }

  // Validate phone field
  if (phoneInput.value.trim() === "") {
    phoneError.textContent = "Phone number is required";
    return;
  } else if (!isValidPhoneNumber(phoneInput.value.trim())) {
    phoneError.textContent = "Invalid ! Enter 10 Digit Mobile Number";
    return;
  }

  // Send form data to API
  var formData = new FormData();
  formData.append("name", nameInput.value.trim());
  formData.append("phone", phoneInput.value.trim());

  // console.log("name", nameInput.value.trim());
  // console.log("phone", '+91 ' + phoneInput.value.trim());
  // localStorage.setItem('r', '+91 ' + phoneInput.value.trim());
 
  var apiUrl = "https://service.letsupgrade.in/v2/itm/isu/ref";


  

  fetch(apiUrl, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:
      JSON.stringify({
        "name": nameInput.value.trim(),
        "phoneNumber": phoneInput.value.trim()
      })

  })
  .then(res => res.json())
  .then(function (response) {
      // Hide the "Generate Code" button and display the "Copy Your Code" button
  generateCodeBtn.style.display = "none";
  copyCodeBtn.style.display = "block";
  localStorage.setItem('r', response.results.campaignid);
  closeModal();
  form.reset();

    if(modal.getAttribute('ref') && modal.getAttribute('ref') != 'undefined'){
      let tempBtn = document.getElementById(modal.getAttribute('ref'));
      tempBtn.click();
    }
    // console.log(modal.getAttribute('ref'))
  
 


    // console.log(response.results.campaignid)
      // if (response.ok) {
      //   console.log(response)
      //  
      //   alert("Form submitted successfully!");
      //   form.reset();
      // } else {
      //   throw new Error("Form submission failed.");
      // }
    })
    .catch(function (error) {
      console.log(error);
      alert("An error occurred. Please try again.");
    });
});

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Mobile-specific code for handling virtual keyboards
if (/Mobi|Android/i.test(navigator.userAgent)) {
  var inputs = document.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", function () {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    });
  }
}

function isValidEmail(email) {
  // Basic email validation using regular expression
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
  // Phone number validation using regular expression
  var phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}




function shareContentHero() {
  var refCode = localStorage.getItem('r');
  if (refCode) {


      // Display the modal
      var modal1 = document.getElementById('myModal1');
      var modalTitle1 = document.getElementById('modalTitle');
      var modalContent1 = document.getElementById('modalContent');
      var closeModal1 = document.getElementById('closeModal');

    modal1.style.display = 'block';
    modalTitle1.innerText = 'Share your referral link';
    let content = "🚀 Exciting news! ITM Skills University introduces India’s Best B.Tech CSE Program, crafted by industry-leading Unicorn experts. Get ready for 100% job guarantee with a minimum salary of 8LPA and a year-long paid internship at top-notch companies. Don't miss this incredible opportunity!" 
    modalContent1.innerHTML = '<p>' + content + '</p><a href="' + getRefLink() + '"> </br>' + getRefLink() + '</a>';
    let target = document.getElementById("shareBtn");
    target.innerHTML = 
    `<div style="display:flex;  ">
    <button class="btn p-1" style="margin-right: 4px; padding: 10px 30px;"  id="downloadShare" onclick='copyToClipboard()'>
    Copy Message</button> <button class="btn"   id="downloadShare" onclick="shareWithNavigator()">
    Share This</button> </div>`;

    
    // Close the modal when the close button is clicked
    closeModal1.onclick = function () {
      modal1.style.display = 'none';
    };
    
    // alert("Referral code copied to clipboard!");
  }
}

// Share 1 and Share 2 BTN Function
function shareToSocialMedia(btnId) {

  // Check if campign Id present in local storage
  if(checkCampignId()){ 

    let imgUrl = document.getElementById(`${btnId}-img`).getAttribute('src') // Get Image URL for cllicked Share Button
    let tempContent = document.getElementById(`${btnId}-data`).getAttribute('data') // Get content for cllicked Share Button
    let hashtags = '\n#ITMSkillsUniversity #BTechCSE #UnicornLeaders #JobGuarantee #PaidInternship #IndiasBestBTechCSE'
    let content = tempContent + hashtags // Content and Hashtags
    
    // Generate Blob from image url to pass navigator
    fetch(imgUrl).then(function(response) { 
      return response.blob()
    })
    .then(function(blob) {
      var file = new File([blob], "picture.jpg", {type: 'image/jpeg'});
      var filesArray = [file]; 
      let shareData = {
        text: content ,
          files: filesArray,
          title: 'Refer India’s Best B.Tech CSE & Earn',
          url: getRefLink()
      }
       // Navigaotr Share invoke
       if(navigator.canShare(shareData)) {
        navigator.share(shareData);
      }
      
    });
  } else {

    // If campaign Id not found in local storage open form modal 
    openModal(btnId)
  }
}




function downloadPDFAndPopTextURL(btnId) {
  if(checkCampignId()){

    let contentElement = document.getElementById(`${btnId}-data`)
    let fileUrl = contentElement.getAttribute('data-file');
    let fileName = contentElement.getAttribute('data-fileName');
    let title = contentElement.getAttribute('data-title');
    let content = contentElement.getAttribute('data-content');

    var link = document.createElement('a');
  
    link.download = fileName;
    link.href = fileUrl;
    link.click();
  
    // Display the modal
    var modal1 = document.getElementById('myModal1');
    var modalTitle1 = document.getElementById('modalTitle');
    var modalContent1 = document.getElementById('modalContent');
    var closeModal1 = document.getElementById('closeModal');

  
    modal1.style.display = 'block';
    modalTitle1.innerText = title;
    modalContent1.innerHTML = '<p>' + content + '</p><a href="' + getRefLink() + '">' + getRefLink() + '</a>';
    let target = document.getElementById("shareBtn");
    target.innerHTML = `<button class="btn1" id="downloadShare" onclick="shareToSocialMediaFiles(${btnId})">Share This <ion-icon name="share-social" ></ion-icon></button>`;
    
  
    // Close the modal when the close button is clicked
    closeModal1.onclick = function () {
      modal1.style.display = 'none';
    };
  } else {
    openModal(btnId)
  }
}

function shareToSocialMediaFiles(btnId) {

  // Check if campign Id present in local storage
  if(checkCampignId()){ 


    
    let targetElement = document.getElementById(`${btnId.getAttribute('id')}-data`)
    let fileUrl = targetElement.getAttribute('data-file');
    let fileName = targetElement.getAttribute('data-fileName');
    let title = targetElement.getAttribute('data-title');
    let content = targetElement.getAttribute('data-content');

    let shareData = {
      text: content ,
      title: title,
      url: getRefLink()
    }
    // Navigaotr Share invoke
    if(navigator.canShare(shareData)) {
      navigator.share(shareData);
    }

  } else {

    // If campaign Id not found in local storage open form modal 
    openModal(btnId)
  }
}


function checkCampignId (){
  let refCode = localStorage.getItem('r');

  if (refCode) {
    const enqBtn = document.getElementById('enqBtn')
    enqBtn.style.display = 'none';
    copyCodeBtn.style.display = 'block';

    return true
  } else {
    const refBtn = document.getElementById('refBtn')
    refBtn.style.display = 'none';
    return false
  }
  
}

function getRefLink(){
  var campaignId = localStorage.getItem('r'); // Get campignId form Local Storage
  if (campaignId) {
    let refLink = `https://isu.ac.in/B-Tech-CSE?utm_campaignid=${campaignId}` // Create Ref Link with campgin Id
  return refLink
  }
}




function copyToClipboard(){
  let refCode = localStorage.getItem('r');
  let contentT = `🚀 Exciting news! ITM Skills University introduces India’s Best B.Tech CSE Program, crafted by industry-leading Unicorn experts. Get ready for 100% job guarantee with a minimum salary of 8LPA and a year-long paid internship at top-notch companies. Don't miss this incredible opportunity! \n\n
  
  ${getRefLink()}`

  var tempInput = document.createElement("input");
  tempInput.value = contentT;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert('Link has been copied!')
}

function shareWithNavigator(){
  let content = `🚀 Exciting news! ITM Skills University introduces India’s Best B.Tech CSE Program, crafted by industry-leading Unicorn experts. Get ready for 100% job guarantee with a minimum salary of 8LPA and a year-long paid internship at top-notch companies. Don't miss this incredible opportunity!`

  let shareData = {
    text: content ,
      title: 'Refer India’s Best B.Tech CSE & Earn',
      url: getRefLink()
  }
   // Navigaotr Share invoke
   if(navigator.canShare(shareData)) {
    navigator.share(shareData);
  }
}



checkCampignId()