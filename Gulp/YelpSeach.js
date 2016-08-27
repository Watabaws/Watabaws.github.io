var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'TsOpjiTSWh1N04l8r9iVyA',
  consumer_secret: 'hsLu_L9i__qTLtZtFyh1MZRg9Mc',
  token: 'yYee-GGqriUEKE2hnQ-kVMHdctqtRenq',
  token_secret: 'lCBKW_nnyqu440NaKh8VS6ur4HY',
});

yelp.search({ term: 'food', location: 'Brooklyn' })
.then(function (data){
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});
