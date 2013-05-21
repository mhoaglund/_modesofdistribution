
/*
 * GET twitter page.
 */

exports.index = function(req, res){
  res.render('twitter', { title: 'Express' });
};