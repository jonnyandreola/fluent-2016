var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/root.js',
  out: 'public',
  clearBeforeBuild: '!(images|static)',
  serverCustomHtmlInDev: false,
  html: function (context) {
  	return {
  		'index.html': context.defaultTemplate(),
  		'200.html': context.defaultTemplate(),
  	}
  }
})
