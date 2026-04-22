// OPT_FEATURE_PROPERTY.js

window.OPT_FEATURE_PROPERTY = {
  "tables": {
    "OPT_FEATURE_PROPERTY": {
      "description": "A property instruction associated with an Optional Feature.",
      "columns": {
        "OPT_FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OPT_FEATURE",
          "info": "Optional Feature ID"
},
        "PROP_SEQUENCE_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence number for property instruction within the feature property set."
},
        "PROPERTY_INSTRUCTION": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "SET",
                    "REMOVE",
                    "INCLUDE"
          ],
          "info": "Type of property instruction"
},
        "PROPERTY_NAME": {
          "type": "VARCHAR2(300)",
          "nullable": false,
          "info": "If instruction is SET or REMOVE, this represents the property key. If instruction is INCLUDE, this represents the Property Set to include. I.e., feature properties can be staged in a full property set reserved for the feature."
},
        "PROPERTY_VALUE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "If instruction is SET, this represents the value of the property. If INCLUDE, this should either be blank or set to  'sibling'. Values in a sibling property set will have the same precedence as if they were declared in the including set."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};