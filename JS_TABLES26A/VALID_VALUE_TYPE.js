// VALID_VALUE_TYPE.js

window.VALID_VALUE_TYPE = {
  "tables": {
    "VALID_VALUE_TYPE": {
      "description": "Centralized place to store hardcoded values when having a foreign key is uneccessary.",
      "columns": {
        "VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Type of value such as COST_TYPE"
},
        "VALID_VALUE_TYPE_XID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "foreign_key": "TRANSLATION",
          "info": "Translation id for the type to display to the user such as label.cost_type"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Meaningful description of what the value type represents"
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AUTO_ASSIGN_CRITERIA",
        "AUTO_ASSIGN_TYPE",
        "DERIVED_FIELD_PARAM_DISPLAY",
        "FLEX_FIELD_DEF",
        "GTM_CONSTRAINT_TYPE",
        "LOGIC_PARAMETER_QUALIFIER",
        "PLANNING_PARAMETER_QUALIFIER",
        "VALID_VALUE"
]
    }
  }
};