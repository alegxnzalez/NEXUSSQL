// GTM_DATE_QUALIFIER.js

window.GTM_DATE_QUALIFIER = {
  "tables": {
    "GTM_DATE_QUALIFIER": {
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
        "DATE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DATE_QUALIFIER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": [
        "GTM_COMPLIANCE_RULE",
        "GTM_CRULE_ITEM_STR_RESTRICTION",
        "GTM_LICENSE_CODE_OPTION",
        "GTM_LICENSE_DATE",
        "GTM_REGISTRATION_DATE",
        "GTM_TRANSACTION_DATE",
        "GTM_TRANS_LINE_DATE"
      ]
    }
  }
};
