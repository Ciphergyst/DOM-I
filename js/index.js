const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Adding navigation menu
const naviMenu = document.querySelectorAll('a');
// returns Nodelist
naviMenu[0].innerHtml = "Services";
naviMenu(1).innerHtml = "Products";
naviMenu(2).innerHtml = "Vision";
naviMenu(3).innerHtml = "Features";
naviMenu(4).innerHtml = "About";
naviMenu(5).innerHtml = "Contact";



// Add new h1 element
const mainHeading = document.querySelector('h1');
mainHeading.innerHtml = "Dom Is Awesome";
// Need to format h1 into column
mainHeading.

// Add header image
const codeImageTop = document.getElementById('cta-img');
codeImageTop.src = "img/header-img.png";

// Add Button text
const headerButton = document.querySelector('button');
headerButton.innerHtml = "Get Started";

// add All h4 Titles
const contentTitles = document.querySelectorAll('h4');
contentTitles[0].innerHTML = "Features";
contentTitles[1].innerHTML ="About";
contentTitles[2].innerHTML ="Services";
contentTitles[3].innerHTML ="Product";
contentTitles[4].innerHTML ="Vision";

// Add text content
// lets grab all of the p tags under the text-content class
const textContent =document.querySelectorAll('.text-content p');
textContent[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textContent[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textContent[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textContent[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textContent[4].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";




// Add middle image
const middleCodeImage = document.getElementById('middle-img');
middleCodeImage.src = "img/mid=page-accent.jpg";

// Add contact section
// this is the 6th node in the previously declared list
contentTitles[5].textContent = "Contact";

// lets grab all of the p tags in the contact class
const contactDetails = documentquerySelectorAll('.contact p');
contactDetails[0].textContent = "123 Way 456 Street, somewhere, USA";
contactDetails[1].textContent = "1 (888) 888-8888";
contactDetails[2].textContent = "sales@greatidea.io";