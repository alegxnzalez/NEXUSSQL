// ORDER_RELEASE_BOV.js

window.ORDER_RELEASE_BOV = {
  "tables": {
    "ORDER_RELEASE_BOV": {
      "columns": {
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "ORDER_RELEASE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "ORDER_RELEASE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "ORDER_RELEASE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "EARLY_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "LATE_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "EARLY_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "LATE_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "FIXED_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ASSIGNED_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "FIXED_SELL_ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "PLAN_FROM_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        }
      },
      "fk_tables": []
    }
  }
};
