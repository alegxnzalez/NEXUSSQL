// LNM_ORDER_MOVEMENT.js

window.LNM_ORDER_MOVEMENT = {
  "tables": {
    "LNM_ORDER_MOVEMENT": {
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
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ORDER_MOVEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ORDER_MOVEMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_TEMPORARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "CREATION_PROCESS_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "CONVERSION GENERATED",
                    "USER ENTERED",
                    "SYSTEM-ACTIONS",
                    "SYSTEM-ITINERARY"
          ]
},
        "SEQ_NO": {
          "type": "NUMBER",
          "nullable": true
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_FIXED_SRC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_FIXED_DEST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "EARLY_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true
},
        "OPERATION_EARLY_PICKUP_DATE": {
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
        "OPERATION_LATE_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true
},
        "REUSE_EQUIPMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "PARENT_SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "PARENT_DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "ORIGINAL_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "ORIGINAL_LEG_POSITION": {
          "type": "NUMBER",
          "nullable": true
},
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "ORIGINAL_SELL_OM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TOTAL_SHIP_UNIT_COUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_WEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TOTAL_VOLUME": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SHIP_UNIT_WIDTH": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_UNIT_WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_UNIT_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SHIP_UNIT_LENGTH": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_UNIT_LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_UNIT_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SHIP_UNIT_HEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_UNIT_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_UNIT_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SHIP_UNIT_DIAMETER": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_UNIT_DIAMETER_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "SHIP_UNIT_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "PICKUP_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DROPOFF_ROUTING_SEQUENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "PRIORITY": {
          "type": "NUMBER",
          "nullable": false
},
        "SOURCE_TAG": {
          "type": "VARCHAR2(22)",
          "nullable": true
},
        "DEST_TAG": {
          "type": "VARCHAR2(15)",
          "nullable": true
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "CALCULATE_SERVICE_TIME": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "CALCULATE_CONTRACTED_RATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "EXPECTED_TRANSIT_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "EXPECTED_TRANSIT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "EXPECTED_TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "EXPECTED_COST": {
          "type": "NUMBER",
          "nullable": true
},
        "EXPECTED_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "EXPECTED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
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
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "RATE_SERVICE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SHIP_WITH_GROUP": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "LEG_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LEG_CONSOLIDATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_NETWORK_ROUTABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "ROUTING_CONSTRAINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_ROUTING_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "LOADING_SPLIT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "ORIGINAL_BUY_OM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "BULK_PLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};