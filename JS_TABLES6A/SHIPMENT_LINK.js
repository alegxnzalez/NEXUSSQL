// SHIPMENT_LINK.js

window.SHIPMENT_LINK = {
  "tables": {
    "SHIPMENT_LINK": {
      "columns": {
        "PREV_OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PREV_OBJECT_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "S",
            "O"
          ],
          "key_value": true,
          "info": "indicate whether the PREV_OBJECT_GID is shipment or order movement "
        },
        "NEXT_OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "NEXT_OBJECT_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "S",
            "O"
          ],
          "key_value": true,
          "info": "indicate whether the NEXT_OBJECT_GID is shipment or order movement "
        },
        "PREV_SHIPMENT_STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "This field defines the stop number within the shipment. Stop Num = 1 is the Pickup stop, and the max (Stop Num) for a shipment is the delivery stop. "
        },
        "NEXT_SHIPMENT_STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "This field defines the stop number within the shipment. Stop Num = 1 is the Pickup stop, and the max (Stop Num) for a shipment is the delivery stop."
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
