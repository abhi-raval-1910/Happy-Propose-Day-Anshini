const febHolidays = [
    "Dear Chosen One, please feel it",
    "Your smile makes my whole day brighter.",
    "I can never get tired of talking to you. 😊",
    "You are my biggest happiness. 🥰",
    "I love the way you understand me. 💕",
    "You make even my bad days better. 🌸",
    "Your voice is my favorite sound. 🎶",
    "You're my everything ✔",
    "I can never be upset with you.💕",
    "Every time I see your name pop up(NOTIFICATION), I smile. 😊",
    "I can’t imagine my life without you.",
    "I will always be there for you",
    "I will always support You",
    "You are the most beautiful girl in the world fr",
    "I love every little thing about you.",
    "You are my forever favorite.  🤞✍",
    "No matter what happens, I’ll always choose you.",
    "You are my forever favorite. 🥰",
    "I love watching you achieve your dreams",
    "I feel lucky to have you in my life.🥺",
    "I’ll always support you in everything. 🤞✔",
    "Always Means Always",
    "You are the most special person in my life🥰",
    "I don't want to lose you Never",
    "And trust me I dont want anyone else 🥰",
    "There's no one better than you❤️",
    "You're the best Yaar!! 💖",
    "You Are Perfect",
    "I can’t stop thinking about you.",
    "You are the reason I smile every day.",
    "I promise to always stand by your side.💓",
    "I feel peace whenever I talk to you. ",
    "I want to make all your dreams come true. 🥰",
    "You are my one and only. 💖",
    "I love the way you laugh.",
    "You’re the queen of my heart. 👑❤️",
    "Btw I’ll always be there for you.",
    "I love making you smile. 😊❤",
    "That’s why sometimes I roast you",
    "I love you more than words can ever say. 💕",
    "You are the most precious part of my life. 😊",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  