define(['util/Util'],
  function(Util) {
    "use strict";
    
    function GenericAttribute(attributeName, attributeLength, info) {
      this.attributeName = attributeName;
      this.attributeLength = attributeLength;
      this.info_ = info;
    }

    GenericAttribute.prototype.toString = function() {
      return "\tGeneric: " + this.attributeName;
    };

    return GenericAttribute;
  }
);