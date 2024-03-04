import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

// Nav links scrolling

function scrollToElement(selector, offset) {
  const element = document.querySelector(selector);
  if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
  }
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', event => {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('href');
      scrollToElement(target, 100);
  });
});

// Hamburger menu
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('mobile-nav-toggle');

  function changeIcon(icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
  }

  function toggleSidebar() {
    const primaryNav = document.querySelector('.navbar-top');
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
      primaryNav.setAttribute('data-visible', "true");
      navToggle.setAttribute('aria-expanded', "true");
      changeIcon(navToggle);
    } else if (visibility === "true") {
      primaryNav.setAttribute('data-visible', "false");
      navToggle.setAttribute('aria-expanded', "false");
      changeIcon(navToggle);
    }
  }

  navToggle.addEventListener('click', toggleSidebar);

  // Function to handle menu link clicks
  function handleMenuLinkClick() {
    toggleSidebar();
  }

  const menuLinks = document.querySelectorAll('.navbar-top a');

  menuLinks.forEach(function(link) {
    link.addEventListener('click', handleMenuLinkClick);
  });
});

// Dark theme switch

const toggleSwitch = document.getElementById('mode-toggle');

function switchTheme() {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme);

// Arrow down

document.addEventListener('DOMContentLoaded', function() {
  const scrollIcon = document.getElementById('arrow-down');
  const aboutSection = document.getElementById('about-me');

  // Scroll to the next section
  scrollIcon.addEventListener('click', function() {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typewriter function

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["a full stack developer", "from Sweden", "a coder", "Sydney-based"];
const el = document.getElementById('typewriter');

let sleepTime = 80;

let curPhraseIndex = 0;

const typeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);

    }
    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};
typeLoop();
