// CR_LV_AGGREGATE.js

window.CR_LV_AGGREGATE = {
  "tables": {
    "CR_LV_AGGREGATE": {
      "description": "Individual aggregation of lane volume by date/shift.",
      "columns": {
        "CR_LV_AGGREGATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CR_LV_AGGREGATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CR_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_PROJECT"
},
        "CR_FORECAST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CR_FORECAST",
          "info": "The LV Forecast to which this aggregate contributes.  This link exists even if the aggregate is an outlier."
},
        "CR_AGGREGATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CR_AGGREGATION",
          "info": "The ID of the aggregation in which this aggregate was created.  Null for user-created data."
},
        "SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REGION"
},
        "DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REGION"
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
},
        "START_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Start date for shipments in the aggregate."
},
        "START_DOW": {
          "type": "NUMBER(1)",
          "nullable": true,
          "info": "Start day of week (1 = Sunday)"
},
        "START_DAY": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "Start day within cycle."
},
        "START_SHIFT": {
          "type": "NUMBER(3)",
          "nullable": false
},
        "AVG_START_TIME": {
          "type": "NUMBER(5)",
          "nullable": false,
          "info": "Number of seconds from midnight"
},
        "END_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "End date for shipments in the aggregate."
},
        "END_DOW": {
          "type": "NUMBER(1)",
          "nullable": true,
          "info": "End day-of-week (1 = Sunday)"
},
        "END_DAY": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "End day within cycle."
},
        "END_SHIFT": {
          "type": "NUMBER(3)",
          "nullable": false
},
        "AVG_END_TIME": {
          "type": "NUMBER(5)",
          "nullable": false,
          "info": "Number of seconds from midnight"
},
        "TOTAL_VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Total number of shipments for this aggregate."
},
        "AVG_TRANSIT_TIME": {
          "type": "NUMBER",
          "nullable": false
},
        "AVG_TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "AVG_TRANSIT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "AVG_MARKET_COST": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_MARKET_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "AVG_MARKET_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
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
        "IS_USER_EDITED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether this aggregate has been edited/created by the user."
},
        "IS_OUTLIER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether this aggregate is excluded as an outlier."
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
      "fk_tables": [
        "CR_LV_AGGREGATE_CATEGORY",
        "CR_LV_AGGREGATE_P_SHIPMENT"
]
    }
  }
};