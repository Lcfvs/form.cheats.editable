void function(global) {
    'use strict';
    
    // onSubmit middleware
    
    var
    cheats,
    forEach,
    onSubmit,
    onFieldset;
    
    cheats = global['form.cheats'];
    forEach = Function.bind.bind(Function.call)(Array.prototype.forEach);
    
    onSubmit = function(event) {
        var
        form;
        
        form = this;
        
        if (form.classList.contains('editable')) {
            form.classList.toggle('enabled');
            forEach(form.querySelectorAll('fieldset'), onFieldset);
        }
        
        event.preventDefault();
        
        return false;
    };
    
    onFieldset = function(fieldset) {
        if (fieldset.disabled) {
            return fieldset.removeAttribute('disabled');
        }
        
        fieldset.setAttribute('disabled', 'disabled');
    };
    
    cheats.use(global['form.cheats.editable']);
    
    cheats.use(function(form, next) {
        form.addEventListener('submit', onSubmit);
        
        next();
    });
    
	cheats.observe(global.document);
}(this);