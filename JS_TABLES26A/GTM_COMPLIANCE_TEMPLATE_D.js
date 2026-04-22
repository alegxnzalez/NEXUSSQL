// GTM_COMPLIANCE_TEMPLATE_D.js

window.GTM_COMPLIANCE_TEMPLATE_D = {
  "tables": {
    "GTM_COMPLIANCE_TEMPLATE_D": {
      "columns": {
        "GTM_COMPLIANCE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_TEMPLATE"
},
        "SERVICE_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "GTM_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_SERVICE"
},
        "GTM_SERVICE_PREF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_SERVICE_PREF"
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