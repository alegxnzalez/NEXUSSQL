// BOL_HEADER_BOV.js

window.BOL_HEADER_BOV = {
  "tables": {
    "BOL_HEADER_BOV": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "DATE_OF_EXPORT": {
          "type": "DATE",
          "nullable": false
        },
        "CARRIER_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CARRIER_SCAC": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PRO_NUMBER": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "WAYBILL": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "FREIGHT_CHARGE_TERMS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BOL_SUFFIX": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPPER_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CONSIGNEE_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "BILL_TO_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CARE_OF_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SPECIAL_INSTRUCTIONS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "ROUTE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
