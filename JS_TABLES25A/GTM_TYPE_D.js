// GTM_TYPE_D.js

window.GTM_TYPE_D = {
  "tables": {
    "GTM_TYPE_D": {
      "columns": {
        "GTM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE"
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "TRADE_TRANSACTION",
            "TRADE_ITEM_STRUCTURE",
            "CONTACT",
            "BOND"
          ],
          "key_value": true
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
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
