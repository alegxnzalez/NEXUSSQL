// LNM_SCENARIO.js

window.LNM_SCENARIO = {
  "tables": {
    "LNM_SCENARIO": {
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
          "info": "Column to capture the Logistics Network Modeling Scenario Gid. This is the primary key for this table. "
        },
        "SCENARIO_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Column to capture the Logistics Network Modeling Scenario Xid. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Captures the description of the Logistics Network Modeling Scenario description. "
        },
        "SCENARIO_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Captures the scenario name. "
        },
        "ORDER_SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "Captures the Saved Query Gid which fetches the order releases that are to be used by this scenario. "
        },
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LNM_PROJECT",
          "info": "Captures the Project Gid that this scenario is associated with. "
        },
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PLANNING_PARAMETER_SET",
          "info": "Captures the planning parameter set gid that this scenario uses. "
        },
        "ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "Captures the Itinerary Gid that the scenario runs with. "
        },
        "ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY_PROFILE",
          "info": "Captures the Itinerary Profile Gid that the scenario runs with."
        },
        "SAVED_QUERY_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "PARAMETER_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PARAMETER_OVERRIDE"
        }
      },
      "fk_tables": [
        "LNM_SCENARIO_BULKPLAN",
        "LNM_SCENARIO_BULKPLAN_SPEC",
        "LNM_SCENARIO_CHANGE",
        "LNM_SCENARIO_CHANGES",
        "LNM_SCENARIO_RULE",
        "LNM_S_EQUIPMENT",
        "LNM_S_SHIP_UNIT"
      ]
    }
  }
};
