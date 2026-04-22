// MATCH_VALIDATION_RULE.js

window.MATCH_VALIDATION_RULE = {
  "tables": {
    "MATCH_VALIDATION_RULE": {
      "description": "Header level information for a match validation rule which is used to validate an invoice-shipment match",
      "columns": {
        "MATCH_VALIDATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Id for the validation rule"
},
        "MATCH_VALIDATION_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Description for the validation rule"
},
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE",
          "info": "If this field is null, or the service provider on the invoice fits this profile, this validation rule should be tested."
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
        "MATCH_VALIDATION_RULE_ORDER",
        "MATCH_VALIDATION_RULE_SHIPMENT",
        "MATCH_VALID_RULE_PROFILE_D",
        "MATCH_VAL_RULE_INVOICE_REFNUM"
]
    }
  }
};