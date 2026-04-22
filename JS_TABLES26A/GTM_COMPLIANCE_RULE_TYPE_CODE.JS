// GTM_COMPLIANCE_RULE_TYPE_CODE.js

window.GTM_COMPLIANCE_RULE_TYPE_CODE = {
  "tables": {
    "GTM_COMPLIANCE_RULE_TYPE_CODE": {
      "columns": {
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_RULE"
},
        "GTM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE"
},
        "GTM_CODE": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE"
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