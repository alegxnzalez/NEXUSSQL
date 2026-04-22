// GTM_COMPLIANCE_INPUT_FIELD.js

window.GTM_COMPLIANCE_INPUT_FIELD = {
  "tables": {
    "GTM_COMPLIANCE_INPUT_FIELD": {
      "columns": {
        "GTM_COMPLIANCE_INPUT_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_COMPLIANCE_INPUT_FIELD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "GTM_COMPLIANCE_VALIDATION"
]
    }
  }
};