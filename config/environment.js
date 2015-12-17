var _ = require('lodash');

var localEnvVars = {
  TITLE:      'project_4',
  SAFE_TITLE: 'project_4'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
