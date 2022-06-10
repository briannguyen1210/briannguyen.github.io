// js/projectbutton.js

const div = document.getElementById("project-page");
const counter = document.getElementById("counter");

var i = 0; // current project
var project1 =
  "<div>" +
  "<h3>Guess My Drawing - AWS DeepLens with Alexa Echo Device</h3>" +
  '<span class="image main">' +
  '<img src="images/deeplens.png" alt="AWS DeepLens Camera With a White Paper" />' +
  "</span>" +
  "<p> Guess My Drawing is an interactive drawing game between players " +
  'and an Alexa Echo device. An Amazon AWS deep-learning camera called <a href="https://aws.amazon.com/deeplens/" target="_blank" rel="noopener noreferrer"> DeepLens </a>' +
  "will capture what a player draws on a whiteboard or a white paper and inference the drawing to the most relevant object. This game " +
  "is a great way for developers who are interested in deep-learning applications with DeepLens and exploring AWS services and how to " +
  "connect DeepLens with Alexa Skills. </p>" +
  "<p> I led this project with 4 other teammates and reported to a " +
  "Software Engineer and a Product Manager from Amazon. I was in " +
  "charge of designing and implementing the entire Alexa voice " +
  "interface and supporting my team with imaging algorithms for " +
  "pre-processing the input data (the drawings captured by DeepLens) " +
  "to match the input data of the deep-learning model. After 6 months " +
  "of hard work, our team was able to deliver a comprehensive and " +
  "thorough project, and the project was published in the AWS " +
  "Deeplens community (link below). </p>" +
  '<a href="https://aws.amazon.com/blogs/machine-learning/building-a-pictionary-style-game-with-aws-deeplens-and-amazon-alexa/"' +
  'target="_blank"' +
  'rel="noopener noreferrer">Learn More</a>' +
  "</div>";

var project2 =
  "<div>" +
  "<h3>Yelp Review Upvote Prediction</h3>" +
  '<span class="image main">' +
  '<img src="images/yelp-review.png" alt="Yelp Review From a Ramen Noodle Restaurant" />' +
  "</span>" +
  "<p> Yelp Review Upvote Prediction project is about finding the features from the data from Yelp to determine the number of upvotes " +
  "for a review. The data consists of features for the business, users, check-ins, and reviews. " +
  "For each group of data, we can access to the features such as review texts, the star ratings, business information, etc. " +
  "Therefore, we can use these features to predict what will contribute the most to the review upvote. </p>" +
  "<p> I narrowed down 7 features that could potentially affect the review upvotes. Those are: Star Ratings, Review Length, " +
  "Number of Key Words (e.g: awesome, great, nice, love, awful, etc), Average Votes per Review by Users, Number of Reviews on a Business," +
  " Is the Business Open?, and Number of Yelp Check-in of a Business. " +
  "A Neural-Network model is used as a training machine-learning model. After testing on each combination (of 2, 3, 4, or 5 out of 7), " +
  "the 3 features that are likely to be important for the number of upvotes for a review are StarRating, ReviewLength, and UserAvgVotePerReview with the model accuracy of 57.4%. </p>" +
  '<a href="https://www.kaggle.com/c/yelp-recruiting/data"' +
  'target="_blank"' +
  'rel="noopener noreferrer">Learn More</a>' +
  "</div>";

var projects = [project1, project2];
const leftButton = document.querySelector(".arrow-left");

function prev() {
  if (i > 0) {
    i--;
  }

  if (i == -1) {
    i++;
    leftButton.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
  div.innerHTML = projects[i];
  counter.innerHTML = i + 1 + " / " + 2;
}

function next() {
  if (i < projects.length) {
    i++;
  }

  if (i == projects.length) {
    i--;
  }
  div.innerHTML = projects[i];
  counter.innerHTML = i + 1 + " / " + 2;
}
