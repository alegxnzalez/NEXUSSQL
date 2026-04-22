// LNM_SCENARIO_BULKPLAN_SPEC.js

window.LNM_SCENARIO_BULKPLAN_SPEC = {
  "tables": {
    "LNM_SCENARIO_BULKPLAN_SPEC": {
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
          "key_value": true,
          "foreign_key": "LNM_SCENARIO"
        },
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_BULKPLAN_SPEC"
        },
        "ORDER_SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PARAMETER_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ORDER_TIME_WINDOW_TYPE": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "values": [
            "EPD",
            "LPD",
            "EDD",
            "LDD"
          ]
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "TIMEZONE": {
          "type": "VARCHAR2(70)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
