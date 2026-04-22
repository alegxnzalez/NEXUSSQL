// CR_FORECAST.js

window.CR_FORECAST = {
  "tables": {
    "CR_FORECAST": {
      "description": "Forecasted volume for a lane and day/shift.",
      "columns": {
        "CR_FORECAST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CR_FORECAST_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CR_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_PROJECT"
},
        "CR_AGGREGATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CR_AGGREGATION",
          "info": "The aggregation in which this forecast was created.  (Null for user-created forecast)"
},
        "VOLUME": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The forecasted volume (in number of shipments)"
},
        "CONFIDENCE_FACTOR": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "Percent representing confidence in the forecasted volume."
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
        "START_DAY": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "Start day in cycle."
},
        "START_SHIFT": {
          "type": "NUMBER(3)",
          "nullable": false
},
        "START_DOW": {
          "type": "NUMBER(1)",
          "nullable": true,
          "info": "Start day-of-week (Sunday=1)"
},
        "START_TIME": {
          "type": "NUMBER(5)",
          "nullable": false,
          "info": "Number of seconds from midnight"
},
        "END_DAY": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "End day in cycle."
},
        "END_SHIFT": {
          "type": "NUMBER(3)",
          "nullable": false
},
        "END_DOW": {
          "type": "NUMBER(1)",
          "nullable": true,
          "info": "End day-of-week (Sunday = 1)"
},
        "END_TIME": {
          "type": "NUMBER(5)",
          "nullable": false,
          "info": "Number of seconds from midnight"
},
        "AVG_TRANSIT_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "AVG_TRANSIT_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "AVG_TRANSIT_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
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
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "Profile for equipments that can service shipments from this forecast."
},
        "MEAN_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average volume among the non-outlier aggregates for this forecast."
},
        "MEDIAN_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Median volume among the non-outlier aggregates for this forecast."
},
        "MAX_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Max volume among the non-outlier aggregates for this forecast."
},
        "MIN_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Min volume among the non-outlier aggregates for this forecast."
},
        "STANDARD_DEVIATION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Standard deviation for the non-outlier aggregates for this forecast."
},
        "IS_USER_EDITED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the forecast has been edited/created by the user."
},
        "IS_ACTIVE_FOR_CR_SOLVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether this forecast should be brought into the CR solve."
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
        "CR_FORECAST_CATEGORY",
        "CR_FORECAST_REFNUM",
        "CR_FORECAST_REMARK",
        "CR_LANE_COMMITMENT",
        "CR_LV_AGGREGATE",
        "CR_ROUTE_LEG"
]
    }
  }
};