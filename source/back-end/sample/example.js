const Sample = require("./models/sample.schema");

async function sample_schema(){
    console.log('here');
  console.log(await Sample.find({}));

}

module.exports = sample_schema;