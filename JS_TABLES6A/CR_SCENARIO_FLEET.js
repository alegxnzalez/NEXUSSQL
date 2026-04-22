// CR_SCENARIO_FLEET.js

window.CR_SCENARIO_FLEET = {
  "tables": {
    "CR_SCENARIO_FLEET": {
      "columns": {
        "CR_SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_SCENARIO"
        },
        "CR_FLEET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_FLEET"
        },
        "NUM_RESOURCES": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Number of resources available for this scenario. "
        },
        "NUM_RESOURCES_USED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of resources used on CR Routes for this scenario. "
        },
        "NUM_RESOURCES_COMMITTED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of resources used on committed CR Routes for this scenario. "
        },
        "AVAILABLE_START_DAY": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Indicates which day begins the period during which the fleet is available. "
        },
        "AVAILABLE_TIME": {
          "type": "NUMBER(5)",
          "nullable": true,
          "info": "Indicates the start time-of-day for the available start day (number of seconds from midnight). "
        },
        "AVAILABLE_DURATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the period during which the fleet is available. "
        },
        "AVAILABLE_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "AVAILABLE_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DAILY_START_TIME": {
          "type": "NUMBER(5)",
          "nullable": true,
          "info": "The daily start time-of-day (number of seconds from midnight) "
        },
        "DAILY_END_TIME": {
          "type": "NUMBER(5)",
          "nullable": true,
          "info": "The daily end time-of-day (number of seconds from midnight) "
        },
        "DEPOT_RETURN_INTV": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Depot Return Interval: Duration after which the fleet resource needs to revisit the start depot. "
        },
        "DEPOT_RETURN_INTV_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DEPOT_RETURN_INTV_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEPOT_TURN_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Depot Turnaround Time: Duration that the fleet resource needs to wait after revisiting the start depot."
        },
        "DEPOT_TURN_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DEPOT_TURN_TIME_BASE": {
          "type": "NUMBER()",
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
        }
      },
      "fk_tables": []
    }
  }
};
