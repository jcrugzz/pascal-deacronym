var test = require('tape');
var deacronym = require('./');

test('it should de-acronym properly', function (t) {
  var cases = {
    'InPascal': 'InPascal', // InPascal
    'PREFix': 'PreFix',   // PreFix
    'FixPOST': 'FixPost',  // FixPost
    'AndINFix': 'AndInFix', // AndInFix
    'PREAndINAndPostFIX': 'PreAndInAndPostFix' // PreAndInAndPostFix
  };

  Object.keys(cases).forEach(function (test) {
    t.equals(deacronym(test), cases[test]);
  });
  t.end();
});
