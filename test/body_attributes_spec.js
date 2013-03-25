var Attributes = require('body-attributes');
var Emitter = require('component-emitter');

describe('body-class', function(){

	beforeEach(function(){
		var emitter = new Emitter();
		this.classes = new Attributes(emitter, {
			'attr': 'data-breakpoint',
			'el': document.createElement('div')
		});
		this.classes.bind();
	});

	it('should get the current body class based on a breakpoint', function(){
		this.classes.emitter.emit('change', 'foo', 'bar');
		expect(this.classes.el.getAttribute('data-breakpoint')).to.equal('foo');
	});
});