/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { diamond } from "./assets/img/icons8-diamonds-100.png";
import { club } from "./assets/img/icons8-club-100.png";
import { heart } from "./assets/img/icons8-heart-100.png";
import { spade } from "./assets/img/icons8-spades-100.png";

function deckBuilder() {
  const values = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];
  const suits = ["diamonds", "spades", "heart", "club"];
  const cards = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      let value = values[j];
      let suit = suits[i];
      cards.push({ value, suit });
    }
  }
  return cards;
}
function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  let cardValue = cards[random].value;
  let cardSuit = cards[random].suit;
  if (cardSuit === "Diamonds") {
    cardSuit = { diamond };
  } else if (cardSuit === "Hearts") {
    cardSuit = { heart };
  } else if (cardSuit === "Spades") {
    cardSuit = { spade };
  } else if (cardSuit === "Clubs") {
    cardSuit = { club };
  }
  const card = document.createElement("div");
  card.classList.add("card", cardSuit);
  card.innerHTML =
    "<span class= card-value-suit-top> " +
    `<img src=icons8-${cardSuit}-100.png/>` +
    "</span>" +
    `<span class = card-suit>` +
    cardValue +
    "</span>" +
    "<span class= card-value-suit-bot>" +
    `<img src=icons8-${cardSuit}-100.png/>` +
    "</span>";
  document.body.appendChild(card);
}
// let randomButton = document.getElementById("rando");

// randomButton.addEventListener("click", randomCard(cards));

const cards = deckBuilder();
randomCard(cards);
// console.log(deckBuilder());
