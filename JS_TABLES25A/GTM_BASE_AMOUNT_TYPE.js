// GTM_BASE_AMOUNT_TYPE.js

window.GTM_BASE_AMOUNT_TYPE = {
  "tables": {
    "GTM_BASE_AMOUNT_TYPE": {
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
        "GTM_BASE_AMOUNT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_BASE_AMOUNT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true
        },
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_VALUE_QUALIFIER"
        }
      },
      "fk_tables": [
        "GTM_BASE_AMOUNT_TYPE_DETAIL",
        "GTM_RULE_RESTRICTION",
        "GTM_TR_BASE_AMOUNT"
      ]
    }
  }
};
