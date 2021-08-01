const ghpages = require("gh-pages");
const path = require("path");

const options = {
  branch: "master",
  repo: "TODO",
};

ghpages.publish(
  path.join(__dirname, "../storybook-static"),
  options,
  function (err) {
    console.error(err);
  }
);
