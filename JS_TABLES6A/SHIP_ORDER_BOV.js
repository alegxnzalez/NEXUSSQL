// SHIP_ORDER_BOV.js

window.SHIP_ORDER_BOV = {
  "tables": {
    "SHIP_ORDER_BOV": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "ORDER_RELEASE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "LATE_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "LATE_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "CONSIGNEE_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_LOCATION_GID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_CORPORATION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PURCHASE_ORDER_NUMBER": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CARRIER_NUMBER": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PERSPECTIVE": {
          "type": "CHAR(1)",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
