// GTM_CONTROL_CATEGORY.js

window.GTM_CONTROL_CATEGORY = {
  "tables": {
    "GTM_CONTROL_CATEGORY": {
      "columns": {
        "GTM_CONTROL_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_CONTROL_CATEGORY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GTM_CONTROL_CATEGORY_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
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
        "GTM_CONTROL_TYPE",
        "GTM_CRULE_ACTION_DEF",
        "GTM_TR_CONTROL_SCREEN"
      ]
    }
  }
};
