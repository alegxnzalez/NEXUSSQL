// GTM_COMPLIANCE_TEMPLATE.js

window.GTM_COMPLIANCE_TEMPLATE = {
  "tables": {
    "GTM_COMPLIANCE_TEMPLATE": {
      "columns": {
        "GTM_COMPLIANCE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_COMPLIANCE_TEMPLATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "COMPLIANCE_TEMPLATE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
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
        "GTM_COMPLIANCE_TEMPLATE_D",
        "GTM_CRULE_POLICY_RESTRICTION",
        "GTM_TRANSACTION_POLICY"
]
    }
  }
};