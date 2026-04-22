// CR_PROJECT.js

window.CR_PROJECT = {
  "tables": {
    "CR_PROJECT": {
      "columns": {
        "CR_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CR_PROJECT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Start of date range for aggregation. "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "End of date range for aggregation. "
        },
        "CYCLE_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CYCLE_DEFINITION"
        },
        "RATE_DISTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_DISTANCE",
          "info": "Rate Distance for determining distances within this project. "
        },
        "CR_FORECAST_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_FORECAST_RULE",
          "info": "The rule indicating the basis for lane volume forecasting. "
        },
        "FORECAST_ADJUSTMENT_PERCENT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Denotes the % value by which to adjust the basis for lane volume forecasting.  Can be negative. "
        },
        "FORECAST_ADJUSTMENT_STDDEV": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Denotes the multiples of standard deviation by which to adjust the basis for lane volume forecasting.  Can be negative. "
        },
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PLANNING_PARAMETER_SET"
        },
        "SCENARIO_SOLUTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Denotes the scenario whose solution has been chosen as the solution for this project."
        },
        "CONFIDENCE_METHOD": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE"
        },
        "REGION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION_GROUP"
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
        "CR_AGGREGATION",
        "CR_FORECAST",
        "CR_LANE_COMMITMENT",
        "CR_LV_AGGREGATE",
        "CR_PROJECT_OUTLIER_RULE",
        "CR_PROJECT_P_SHIPMENT_SET",
        "CR_ROUTE",
        "CR_SCENARIO",
        "CR_SCENARIO_SUMMARY",
        "CR_SOLUTION"
      ]
    }
  }
};
