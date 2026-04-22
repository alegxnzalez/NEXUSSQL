// GTM_VALUE_TYPE.js

window.GTM_VALUE_TYPE = {
  "tables": {
    "GTM_VALUE_TYPE": {
      "description": "To define a value type so that the value qualifiers can be grouped under different types for better value analysis.",
      "columns": {
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
        "GTM_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Value Type ID"
},
        "GTM_VALUE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Value Type ID"
},
        "GTM_VALUE_TYPE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Value Type Name"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Value Type Description"
},
        "GTM_VALUE_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_VALUE_CATEGORY",
          "info": "Value Category ID"
}
      },
      "fk_tables": [
        "GTM_VALUE_QUALIFIER"
]
    }
  }
};