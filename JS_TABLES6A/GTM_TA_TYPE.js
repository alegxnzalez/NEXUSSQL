// GTM_TA_TYPE.js

window.GTM_TA_TYPE = {
  "tables": {
    "GTM_TA_TYPE": {
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
        "GTM_TA_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Specifies the unique identifier across all domains for GTM Trade Agreement Type. "
        },
        "GTM_TA_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Specifies the unique identifier in a particular domain for GTM Trade Agreement Type. "
        },
        "TA_TYPE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Name of the Trade Agreement Type. "
        },
        "TA_TYPE_SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Short name for the Trade Agreement Type. "
        },
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "External code for the Trade Agreement Type."
        }
      },
      "fk_tables": [
        "GTM_TRADE_AGREEMENT"
      ]
    }
  }
};
