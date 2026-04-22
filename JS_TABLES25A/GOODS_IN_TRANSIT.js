// GOODS_IN_TRANSIT.js

window.GOODS_IN_TRANSIT = {
  "tables": {
    "GOODS_IN_TRANSIT": {
      "columns": {
        "SOURCE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DEST": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PACKAGED_ITEM_COUNT": {
          "type": "NUMBER()",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
