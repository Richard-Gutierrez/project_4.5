var _ = require('lodash');

var localEnvVars = {
  TITLE:      'project_4.5',
  SAFE_TITLE: 'project_4.5'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
