// GTM_TRADE_PREFERENCE.js

window.GTM_TRADE_PREFERENCE = {
  "tables": {
    "GTM_TRADE_PREFERENCE": {
      "columns": {
        "GTM_TRADE_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid "
        },
        "GTM_TRADE_PREFERENCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Trade Preference ID "
        },
        "GTM_TRADE_PREFERENCE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Trade Preference Code "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Trade Preference Description "
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
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "Product Classification Type GID"
        }
      },
      "fk_tables": [
        "GTM_TARIFF_CODE",
        "GTM_TRANSACTION",
        "GTM_TRANSACTION_LINE"
      ]
    }
  }
};
