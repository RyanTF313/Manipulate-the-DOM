let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  document.getElementById("main-title").innerText = "Welcome to my home";

  // Part 2
  document.querySelector("body").style.backgroundColor = "silver";

  // Part 3
  const favs = Array.from(document.querySelectorAll("#favorite-things li"));
  favs.pop();
  favs.forEach((fav) =>
    document.querySelector("#favorite-things").appendChild(fav)
  );

  // Part 4
  Array.from(document.getElementsByClassName("special-title")).map(
    (title) => (title.style.fontSize = "2rem")
  );

  // Part 5
  const pastRaces = Array.from(document.querySelectorAll("#past-races li"));
  document.querySelector("#past-races").innerHTML = "";
  pastRaces
    .filter((race) => race.innerText !== "Chicago")
    .forEach((race) => document.querySelector("#past-races").appendChild(race));

  // Part 6
  const detroit = "Detroit";
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(detroit));
  document.querySelector("#past-races").appendChild(li);

  // Part 7
  let wrapper = document.createElement("div");
  wrapper.innerHTML = `<div class="blog-post purple"><h1>${detroit.toUpperCase()}</h1><p>${"I drove over the frozen Detroit River!".toUpperCase()}</p></div>`;
  const blogPost = wrapper.firstChild;
  document.querySelector(".main").childNodes[9].before(blogPost);

  // Part 8
  document.querySelector("#quote-title").addEventListener("click", randomQuote);

  // Part 9
  document.querySelectorAll(".blog-post").forEach((blogPost) => {
    blogPost.addEventListener("mouseout", (e) => {
      if (e.target.nodeName == "DIV") {
        e.target.classList.toggle("purple");
      }
    });
    blogPost.addEventListener("mouseenter", (e) => {
      if (e.target.nodeName == "DIV") {
        e.target.classList.toggle("red");
      }
    });
  });
});
