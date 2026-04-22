// GTM_CONSOL_CRITERIA.js

window.GTM_CONSOL_CRITERIA = {
  "tables": {
    "GTM_CONSOL_CRITERIA": {
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
        "GTM_CONSOL_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_CONSOL_CRITERIA_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "GTM_QUAN_VAL_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_QUAN_VAL_CONFIG"
        }
      },
      "fk_tables": [
        "GTM_CONSOL_CRITERIA_DETAIL",
        "GTM_TRANSACTION"
      ]
    }
  }
};
