// GTM_VALUE_SET.js

window.GTM_VALUE_SET = {
  "tables": {
    "GTM_VALUE_SET": {
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
        "GTM_VALUE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Value Set ID "
        },
        "GTM_VALUE_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Value Set ID "
        },
        "GTM_VALUE_SET_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Value Set Name "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Value Set Description"
        }
      },
      "fk_tables": [
        "GTM_RULE_RESTRICTION",
        "GTM_VALUE_SET_D"
      ]
    }
  }
};
