const envVars = {  
  API_KEYS: {
    GOOGLE_MAP: JSON.stringify('AIzaSyAfMX_sxB_xnXBXMlP1JcLcgNzKOkr2_9g'),
  }
}

const devSpecific = {};

const prodSpecific = {};

module.exports = {
  dev: Object.assign(envVars, devSpecific),
  prod: Object.assign(envVars, prodSpecific)
}
