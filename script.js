const projects = [
  {
    name: "Counter App",
    link: "counter/index.html",
    image: "counter/Counter.png",
    description: "DOM Manipulation, Events Handling",
    youtube: "https://youtu.be/IfHdXb3Gxe0",
    github: "https://github.com/DzmitryUr/js-html-css-apps/tree/main/counter",
  },
  {
    name: "Image Gallery",
    link: "image-gallery/index.html",
    image: "image-gallery/Image-Gallery-JavaScript.png",
    description: "DOM Manipulation, Events Handling",
    youtube: "https://youtu.be/pAc1hW3eKr0",
    github:
      "https://github.com/DzmitryUr/js-html-css-apps/tree/main/image-gallery",
  },
  {
    name: "Facts App",
    link: "facts-api/index.html",
    image: "facts-api/Facts-API.png",
    description: "Fetch API, Promises",
    youtube: "https://youtu.be/ZrOqRrcpsEs",
    github: "https://github.com/DzmitryUr/js-html-css-apps/tree/main/facts-api",
  },
  {
    name: "Jokes App",
    link: "jokes-app/index.html",
    image: "jokes-app/Jokes-APP.png",
    description: "Fetch API, Async, Await",
    youtube: "https://youtu.be/b7Cgpu541lQ",
    github: "https://github.com/DzmitryUr/js-html-css-apps/tree/main/jokes-app",
  },
  {
    name: "Accordion",
    link: "accordion/index.html",
    image: "accordion/Accordion Component JS.png",
    description: "DOM Manipulation, Events Handling",
    youtube: "https://youtu.be/81q_kEgbNPA",
    github:
      "https://github.com/DzmitryUr/js-html-css-apps/tree/main/image-gallery",
  },
  {
    name: "Native Popups",
    link: "native-popups/index.html",
    image: "native-popups/Native-PopUps.png",
    description: "Alert, Confirm, Prompt Popups",
    youtube: "https://youtu.be/mqYTk7XoRBs",
    github:
      "https://github.com/DzmitryUr/js-html-css-apps/tree/main/native-popups",
  },
  {
    name: "Timer App",
    link: "timer/index.html",
    image: "timer/Timer.png",
    description: "Date object, setInterval, clearInterval",
    youtube: "https://youtu.be/9nMLgtFKfNc",
    github: "https://github.com/DzmitryUr/js-html-css-apps/tree/main/timer",
  },
  {
    name: "Contact Us Form",
    link: "form-contact-us/index.html",
    image: "form-contact-us/Contact-Us-Form.png",
    description: "Form, Input, Textarea, Validation",
    youtube: "https://youtu.be/x2ItMNJI-rc",
    github:
      "https://github.com/DzmitryUr/js-html-css-apps/tree/main/form-contact-us",
  },
  {
    name: "Memory Words Game",
    link: "memory-words-game/index.html",
    image: "memory-words-game/MemoryWordsGameJS.png",
    description: "CSS Flexbox Layout, Rem Measurement",
    youtube: "https://youtu.be/oZpgtx6T6MY",
    github:
      "https://github.com/DzmitryUr/js-html-css-apps/tree/main/memory-words-game",
  },
];

const cardsContainer = document.querySelector(".cards-container");

function createCard({ name, link, image, description, youtube, github }) {
  const card = createElement("div", "card");
  card.appendChild(createHeader(name));
  const imageLink = createLink(link, "_blank");
  imageLink.appendChild(createImage(image, `Image ${name}`));
  card.appendChild(imageLink);
  card.appendChild(createParagraph(description));
  const linksContainer = createElement("div", "links-container");
  linksContainer.appendChild(createGithHubLink(github));
  linksContainer.appendChild(createYoutubeLink(youtube));
  linksContainer.appendChild(createAppLink(link, name));
  card.appendChild(linksContainer);
  return card;
}

function createElement(tagName, className) {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function createHeader(name) {
  const cardHeader = createElement("div", "card-header");
  cardHeader.textContent = name;
  return cardHeader;
}

function createProjects() {
  projects.forEach((project) => {
    const card = createCard(project);
    cardsContainer.appendChild(card);
  });
}

function createLink(href, target) {
  const link = createElement("a");
  link.href = href;
  link.target = target;
  return link;
}

function createImage(src, alt) {
  const image = createElement("img");
  image.src = src;
  image.alt = alt;
  return image;
}

function createParagraph(text) {
  const paragraph = createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function createGithHubLink(link) {
  const linkElement = createLink(link, "_blank");
  linkElement.appendChild(
    createImage("images/github.svg", "Link to GitHub source code")
  );
  return linkElement;
}

function createYoutubeLink(link) {
  const linkElement = createLink(link, "_blank");
  linkElement.appendChild(
    createImage("images/youtube.svg", "Link to YouTube video")
  );
  return linkElement;
}

function createAppLink(link, name) {
  const linkElement = createLink(link, "_blank");
  linkElement.appendChild(createImage("images/website.svg", `Link to ${name}`));
  return linkElement;
}

createProjects();
