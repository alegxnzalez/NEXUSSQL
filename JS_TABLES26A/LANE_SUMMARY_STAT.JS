// LANE_SUMMARY_STAT.js

window.LANE_SUMMARY_STAT = {
  "tables": {
    "LANE_SUMMARY_STAT": {
      "description": "Statistics on time periods for each lane in a lane summary",
      "columns": {
        "LANE_SUMMARY_STAT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LANE_SUMMARY_STAT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "LANE_SUMMARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LANE_SUMMARY"
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE"
},
        "TOTAL_SHIPMENTS": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "Total number of shipments across all time periods in this lane summary"
},
        "AVG_SHIPMENTS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Average number of shipments across all time periods in this lane summary"
},
        "MIN_SHIPMENTS": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "Min number of shipments across all time periods in this lane summary"
},
        "MAX_SHIPMENTS": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "Max number of shipments across all time periods in this lane summary"
},
        "MEDIAN_SHIPMENTS": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "Median number of shipments across all time periods in this lane summary"
},
        "STD_DEV": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Standard deviation across all time periods in this lane summary"
},
        "MASTER_X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE"
},
        "AVG_DISTANCE": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "AVG_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "IS_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP"
},
        "SOURCE_ARB_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE"
},
        "DEST_ARB_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE"
},
        "SRC_ARB_LOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "P_LOCATION_GROUP"
},
        "DEST_ARB_LOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "P_LOCATION_GROUP"
},
        "SOURCE_SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION"
},
        "SOURCE_DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION"
},
        "DEST_DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DEST_SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
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
},
        "NMFC_CLASS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NMFC_CLASS",
          "info": "Standard NMFC class id."
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
        "AVG_WEIGHT": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "AVG_ACTIVITY_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_ACTIVITY_TIME_UOM": {
          "type": "VARCHAR2(22)",
          "nullable": true
},
        "AVG_ACTIVITY_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_TOTAL_STOPS": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_PICKUP_STOPS": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_DELIVERY_STOPS": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_SHIPUNIT_COUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_EQUIP_GROUP_COUNT": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_OUT_OF_ROUTE_DISTANCE": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_OUT_OF_ROUTE_DISTANCE_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "AVG_OUT_OF_ROUTE_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The equipment reference unit GID is assosiated with the equipment reference unit utilization of the shipments in the lane  summary."
},
        "AVG_NUM_REFERENCE_UNITS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The number of equipment reference  units accross all the time periods in this lane summary"
}
      },
      "fk_tables": [
        "LANE_SUMMARY_CELL"
]
    }
  }
};