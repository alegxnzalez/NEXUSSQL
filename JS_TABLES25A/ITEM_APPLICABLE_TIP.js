// ITEM_APPLICABLE_TIP.js

window.ITEM_APPLICABLE_TIP = {
  "tables": {
    "ITEM_APPLICABLE_TIP": {
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
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM",
          "info": "Item ID "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number "
        },
        "GTM_TRADE_INCENTIVE_PGM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRADE_INCENTIVE_PROGRAM",
          "info": "Trade Incentive Program ID "
        },
        "PRIORITY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Priority "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Effective Date "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiration Date"
        }
      },
      "fk_tables": []
    }
  }
};
