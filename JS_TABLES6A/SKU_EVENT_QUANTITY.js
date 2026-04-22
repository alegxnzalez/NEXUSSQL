// SKU_EVENT_QUANTITY.js

window.SKU_EVENT_QUANTITY = {
  "tables": {
    "SKU_EVENT_QUANTITY": {
      "columns": {
        "SKU_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_EVENT",
          "info": "SKU event id. "
        },
        "SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SKU_QUANTITY_TYPE",
          "info": "SKU quantity type id. "
        },
        "SKU_QUANTITY_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "SKU quantity update amount. "
        },
        "QUANTITY_UPDATE_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
            "REPLACE",
            "INCREMENT",
            "DECREMENT"
          ],
          "info": "SKU quantity update type. Valid values are 'REPLACEMENT', 'INCREMENT', 'DECREMENT'."
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
      "fk_tables": []
    }
  }
};
