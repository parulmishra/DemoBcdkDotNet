"use strict";
const options = require("pipeline-cli").Util.parseArguments();
const changeId = options.pr; //aka pull-request
const version = "1.0.0";
const name = "demobcdkdotnet";

const phases = {
  build: {
    namespace: "ifttgq-tools",
    name: `${name}`,
    phase: "build",
    changeId: changeId,
    suffix: `-build-${changeId}`,
    instance: `${name}-build-${changeId}`,
    version: `${version}-${changeId}`,
    tag: `build-${version}-${changeId}`,
    aspdotnetenvironment: "Development"
  },
  dev: {
    namespace: "ifttgq-dev",
    name: `${name}`,
    phase: "dev",
    changeId: changeId,
    suffix: `-dev-${changeId}`,
    instance: `${name}-dev-${changeId}`,
    version: `${version}-${changeId}`,
    tag: `dev-${version}-${changeId}`,
    aspdotnetenvironment: "Development"
  },
  test: {
    namespace: "ifttgq-test",
    name: `${name}`,
    phase: "test",
    changeId: changeId,
    suffix: `-test`,
    instance: `${name}-test`,
    version: `${version}`,
    tag: `test-${version}`,
    aspdotnetenvironment: "Staging"
  },
  prod: {
    namespace: "ifttgq-prod",
    name: `${name}`,
    phase: "prod",
    changeId: changeId,
    suffix: `-prod`,
    instance: `${name}-prod`,
    version: `${version}`,
    tag: `prod-${version}`,
    aspdotnetenvironment: "Production"
  }
};

// This callback forces the node process to exit as failure.
process.on("unhandledRejection", reason => {
  console.log(reason);
  process.exit(1);
});

module.exports = exports = { phases, options };
