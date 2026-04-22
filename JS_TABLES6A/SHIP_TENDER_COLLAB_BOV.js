// SHIP_TENDER_COLLAB_BOV.js

window.SHIP_TENDER_COLLAB_BOV = {
  "tables": {
    "SHIP_TENDER_COLLAB_BOV": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SHIPMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SHIPMENT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_ACTUAL_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_WEIGHTED_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "T_ACTUAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "T_WEIGHTED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNLOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "FREIGHT_TERMS": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "PARENT_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SHIPMENT_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SHIPMENT_SERVPROV_XID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SHIPMENT_SERVPROV_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "TENDER_SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "TENDER_SERVPROV_XID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "TENDER_SERVPROV_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SUBSEQUENT_SERVPROV_XID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "IS_AUTO_MERGE_CONSOLIDATE": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "PERSPECTIVE": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "FLIGHT_INSTANCE_ID": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        },
        "TENDER_TRANSACTION_NO": {
          "type": "NUMBER(10)",
          "nullable": false
        },
        "TENDER_TRANSACTION_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "TENDER_SHIPMENT_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "TENDER_EXPECTED_RESPONSE": {
          "type": "DATE",
          "nullable": true
        },
        "TENDER_ORIGIN_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "TENDER_ORIGIN_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "TENDER_DESTINATION_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "TENDER_DESTINATION_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "TENDER_PICKUP_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "TENDER_DELIVERY_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "TENDER_ACCEPTANCE_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "TENDER_RESPONSE_METHOD": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TENDER_RESPONDING_GLUSER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "TENDER_DECLINE_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TENDER_ORIGINAL_PICKUP_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "STATUS_VALUE_XID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
