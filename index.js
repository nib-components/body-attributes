function EmitterAttribute(emitter, options) {
	this.emitter = emitter;
	this.attr = options.attr || 'class';
	this._onChange = this._onChange.bind(this);
	this.el = options.el || document.body;
}

EmitterAttribute.prototype.bind = function() {
	this.emitter.on('change', this._onChange);
};

EmitterAttribute.prototype._onChange = function(val) {
	this.el.setAttribute(this.attr, val);
};

EmitterAttribute.prototype.unbind = function() {
	this.emitter.off('change', this._onChange);
};

EmitterAttribute.create = function(emitter, options){
	var attributes = new this(emitter, options);
	attributes.bind();
	return attributes;
};

module.exports = EmitterAttribute;