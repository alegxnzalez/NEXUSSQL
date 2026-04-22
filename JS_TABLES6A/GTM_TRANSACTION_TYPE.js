// GTM_TRANSACTION_TYPE.js

window.GTM_TRANSACTION_TYPE = {
  "tables": {
    "GTM_TRANSACTION_TYPE": {
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
        "GTM_TRANSACTION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique Gid. "
        },
        "GTM_TRANSACTION_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Specifies Purchase order, Sales order or somethingelse. "
        },
        "GTM_TRANS_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Name of the transaction order type. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the transaction order type."
        }
      },
      "fk_tables": [
        "GTM_COMPLIANCE_RULE",
        "GTM_LICENSE_CODE_OPTION",
        "GTM_TRANSACTION",
        "GTM_TRANS_TYPE_PROFILE_D"
      ]
    }
  }
};
