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
naviMenu[0].textContent = "Services";
naviMenu[1].textContent = "Products";
naviMenu[2].textContent = "Vision";
naviMenu[3].textContent = "Features";
naviMenu[4].textContent = "About";
naviMenu[5].textContent = "Contact";

// nav items need to be green
naviMenu.forEach((element) => {
  element.style.color = "green";
}) 

// Lets create some new nav link items
const newNavMenuItem1 = document.createElement('a');
newNavMenuItem1.textContent = "Ideas";
const newNavigationElements = document.querySelector('nav');

const newNavMenuItem2 = document.createElement('a');
newNavMenuItem2.textContent = "Videos";

newNavigationElements.appendChild(newNavMenuItem1);
newNavMenuItem1.style.color = "green";

newNavigationElements.prepend(newNavMenuItem2);
newNavMenuItem2.style.color = "green";


// Add new h1 element
const mainHeading = document.querySelector('h1');
mainHeading.textContent = "Dom Is Awesome";
// Need to format h1 into column
mainHeading.style.flexwrap = "wrap";

// Add header image
const codeImageTop = document.getElementById('cta-img');
codeImageTop.src = "img/header-img.png";

// Add Button text
const headerButton = document.querySelector('button');
headerButton.textContent = "Get Started";

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
middleCodeImage.src = "img/mid-page-accent.jpg";

// Add contact section
// this is the 6th node in the previously declared list
contentTitles[5].textContent = "Contact";

// lets grab all of the p tags in the contact class
const contactDetails = document.querySelectorAll('.contact p');
contactDetails[0].textContent = "123 Way 456 Street, somewhere, USA";
contactDetails[1].textContent = "1 (888) 888-8888";
contactDetails[2].textContent = "sales@greatidea.io";

// Add copyright footer
const newFooter = document.createElement('footer');

newFooter.textContent = "Copyright Great Idea! 2018";

const body = document.querySelector('body');

body.append(newFooter);