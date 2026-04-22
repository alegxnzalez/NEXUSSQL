// SHIP_STOP_BOV.js

window.SHIP_STOP_BOV = {
  "tables": {
    "SHIP_STOP_BOV": {
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
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_ACTUAL_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_ACTUAL_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_WEIGHTED_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_WEIGHTED_COST_BASE": {
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
        "LOADED_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "LOADED_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNLOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNLOADED_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "UNLOADED_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SHIP_START_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "SHIP_END_TIME": {
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
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SERVPROV_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SERVPROV_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SCAC": {
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
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        },
        "CURRENT_STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": true
        },
        "SHIPMENT_AS_WORK": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "CHECK_TIME_CONSTRAINT": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "CHECK_COST_CONSTRAINT": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "CHECK_CAPACITY_CONSTRAINT": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "CM_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "CM_SEQUENCE_NUM": {
          "type": "NUMBER(5)",
          "nullable": true
        },
        "CM_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CM_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "CM_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CM_EMPTY_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CM_EMPTY_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "CM_EMPTY_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "HAZMAT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "HAZMAT_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "WEIGH_CODE": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "RULE_7": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "SHIPMENT_RELEASED": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": false
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "STOP_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "STOP_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "STOP_LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "STOP_PLANNED_ARRIVAL": {
          "type": "DATE",
          "nullable": true
        },
        "STOP_IS_FIXED_ARRIVAL": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "STOP_ESTIMATED_ARRIVAL": {
          "type": "DATE",
          "nullable": true
        },
        "STOP_ACTUAL_ARRIVAL": {
          "type": "DATE",
          "nullable": true
        },
        "STOP_PLANNED_DEPARTURE": {
          "type": "DATE",
          "nullable": true
        },
        "STOP_IS_FIXED_DEPARTURE": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "STOP_ESTIMATED_DEPARTURE": {
          "type": "DATE",
          "nullable": true
        },
        "STOP_ACTUAL_DEPARTURE": {
          "type": "DATE",
          "nullable": true
        },
        "STOP_WAIT_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "STOP_WAIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "STOP_WAIT_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "STOP_REST_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "STOP_REST_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "STOP_REST_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "STOP_DRIVE_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "STOP_DRIVE_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "STOP_DRIVE_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DIST_FROM_PREV_STOP": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DIST_FROM_PREV_STOP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DIST_FROM_PREV_STOP_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "STOP_ACTIVITY_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "STOP_ACTIVITY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "STOP_ACTIVITY_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "WEIGHT_BASE_UOM": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "VOLUME_BASE_UOM": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
