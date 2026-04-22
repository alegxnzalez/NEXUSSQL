// GTM_SERVICE_PREF.js

window.GTM_SERVICE_PREF = {
  "tables": {
    "GTM_SERVICE_PREF": {
      "columns": {
        "GTM_SERVICE_PREF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_SERVICE_PREF_XID": {
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
        "GTM_COMPLIANCE_TEMPLATE_D",
        "GTM_PARTY_LAST_SCREENING",
        "GTM_PARTY_SCREENING",
        "GTM_SERVICE_PREF_D"
      ]
    }
  }
};
