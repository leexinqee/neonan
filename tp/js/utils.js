var UIElement = ( function() {
	'use strict';
    
    function addToProto(prop, value)
    {
        Window.prototype[prop]   = value;
        Document.prototype[prop] = value;
        Element.prototype[prop]  = value;
    }

    function uiElementPreInit()
    {
        return false;
    }

    addToProto('trigger', uiElementPreInit);
    addToProto('hasEvent', uiElementPreInit);
    addToProto('detach', uiElementPreInit);
    addToProto('events', false);
	
	function removeEvent(name) {
        var ev, type, handler, useCapture;
        ev = this.events[name];
        useCapture = ev.useCapture;
        type = ev.type;
        handler = ev.handler;
        this.removeEventListener(type, handler, useCapture);
        delete this.eventsList[name];
    }
	
	function detachEvent(name) {
		var i;

		//detach all events if no event specified
		if (name === undefined || name === '') {
			
			for(i in this.eventsList) {
				removeEvent.call(this, i);
			}
			this.eventsList = {};

		//check for and detach if event is attached
		} else if (this.hasEvent(name)) {
			removeEvent.call(this, name);
		}

		//if proper condition is not met
		return this.eventsList;
	}
	
	function hasEvent(name) {
		return typeof this.eventsList[name] === 'object' ? this.eventsList[name] : false;
	}
	
	function triggerEvent(name) {
		var evt = this.hasEvent(name);
		if ( typeof evt.handler === 'function') {
			return evt.handler();
		}
		return false;
	}
	
	function UIElement(config) {
		if (!config) {
			return false;
		}

		// Self-Invoking Constructor
		// Make sure that a constructor function always behaves like one even
		// if called without `new`.
		if ((this instanceof UIElement) === false) {
			return new UIElement(config);
		}

		// Apply configuration
		this.htmlRef = config.htmlRef;

		this.eventConfig = {
			name : config.name,
			type : config.type,
			handler : config.handler === undefined ? false : config.handler,
			useCapture : config.useCapture === undefined ? false : config.useCapture,
			context : config.context || false
		};

		this.init();
	}

	//main function
	UIElement.prototype.init = function() {
		//if HTML element is not UI element
		if (this.htmlRef.eventsList === undefined) {

			//extend model for this element with 'events'
			Object.defineProperties(this.htmlRef, {

				//add array to store events
				'eventsList' : {
					writable : true,
					enumerable : false,
					configurable : false,
					value : {}
				},

				//short-cut to add new or get all events
				'events' : {
					enumerable : false,
					configurable : false,

					//if no value passed return all values stored
					get : function() {
						return this.eventsList;
					},

					//if value is passed, push into the array
					set : function(e) {
						return this.eventsList[e.name] = e;
					}
				},

				//trigger event by name
				'trigger' : {
					writable : false,
					enumerable : false,
					configurable : false,
					value : triggerEvent
				},

				//enables us to check if a specific event is attached by name
				//if the event exist it returns the event, if not - false
				'hasEvent' : {
					writable : false,
					enumerable : false,
					configurable : false,
					value : hasEvent
				},

				//enables us to detach specific or all events
				'detach' : {
					writable : false,
					enumerable : false,
					configurable : false,
					value : detachEvent
				}
			});
		}
		//if this is initialized event ... do nothing
		else if (this.htmlRef.hasEvent(this.eventConfig.name)) {
			return false;
		}

		//pass scope, apply event, save configuration for future uses
		this.eventConfig.handler = this.eventConfig.handler.bind(this.eventConfig.context || this);
		this.htmlRef.addEventListener(this.eventConfig.type, this.eventConfig.handler, this.eventConfig.useCapture);
		this.htmlRef.events = this.eventConfig;
	};


	Object.defineProperties(UIElement.prototype, {

		//detach event method called from the event object stored in a variable
		//you can also detach one event from within a handler of another event
		'detach': {
			writable: false,
			enumerable: false,
			configurable: false,
			value: function(name){
				return detachEvent.call(this.htmlRef, name);
			}
		},

		//trigger self
		'trigger': {
			writable: false,
			enumerable: false,
			configurable: false,
			value: function(name) {
				return triggerEvent.call(this.htmlRef, name || this.eventConfig.name);
			}
		}

	});

	return UIElement;
}());