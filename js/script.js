

/**
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

var rnd = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var capitalize = function(str) {
  var ret = "";
  for (var i = 0; i < str.length; i++) {
    ret += str.charAt(i).toUpperCase() + ".";
  }
  return ret;
}

function Generator() {

    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];
}

Generator.prototype.validate = function(name) {
  return name.match(/[A-Z][a-z]*/);
}

Generator.prototype.generate = function(name) {
  var formats =  [
    function(name) { return rnd(this.first_names) + " " + name; },
    function(name) { return capitalize(name) + " " + rnd(this.last_names); },
    function(name) { return rnd(this.first_names) + " " + name + " " + rnd(this.last_names); },
    function(name) { return name + " " + rnd(this.last_names); },
    function(name) { return rnd(this.first_names) + " " + name.charAt(0).toUpperCase(); }
  ];
  var formatter = rnd(formats).bind(this);
  return formatter(name);
}

$(document).ready(function() {

    var engine = new Generator;

    $('#enter').click(function() {
      var name = $('#user-input').val();
      if (engine.validate(name)) {
        $('.response').text(engine.generate(name));
        console.log($('.response').text());
        $('.response').css('display', 'inline');
      } else {
        $('.error').css('display', 'inline');
      }
    });

});
