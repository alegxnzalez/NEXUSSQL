// PROP_INSTRUCTION_SET.js

window.PROP_INSTRUCTION_SET = {
  "tables": {
    "PROP_INSTRUCTION_SET": {
      "description": "Set of property instructions. The set can be invoked from a property file via the !includeSet directive, or from another set via the Include instruction.",
      "columns": {
        "PROP_INSTRUCTION_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Property Set GID"
},
        "PROP_INSTRUCTION_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Property Set ID"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "General description of the property set"
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
      "fk_tables": [
        "PROP_INSTRUCTION",
        "PROP_INSTRUCTION_SET_LOG"
]
    }
  }
};