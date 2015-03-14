var styles = ['arta', 'ascetic', 'dark', 'default', 'far', 'github', 'googlecode', 'idea', 'ir_black', 'magula',
	'monokai', 'rainbow', 'solarized_dark', 'solarized_light', 'sunburst', 'tomorrow', 'tomorrow-night-blue',
	'tomorrow-night-bright', 'tomorrow-night', 'tomorrow-night-eighties', 'vs', 'zenburn'
]


// light 5 15
// dark 14 8 12 17

var i = 14;
var slideshow = remark.create({
	sourceUrl: './readme.md',
	ratio: '16:9',
	// navigation: {
	// 	scroll: false
	// },
	highlightStyle: styles[i]
});
