// GTM_REGULATION_REFERENCE.js

window.GTM_REGULATION_REFERENCE = {
  "tables": {
    "GTM_REGULATION_REFERENCE": {
      "columns": {
        "GTM_REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_REGULATION_REFERENCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "REGULATION_NOTES": {
          "type": "VARCHAR2(4000)",
          "nullable": false
        },
        "URL": {
          "type": "VARCHAR2(200)",
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
        "GTM_COMPLIANCE_RULE",
        "GTM_CONTACT_ST_SCREEN",
        "GTM_CONTROL_CODE",
        "GTM_CONTROL_TYPE",
        "GTM_PRODUCT_GROUP",
        "GTM_REGIME",
        "GTM_TR_CONTROL_SCREEN",
        "GTM_TYPE",
        "GTM_TYPE_CODE"
      ]
    }
  }
};
