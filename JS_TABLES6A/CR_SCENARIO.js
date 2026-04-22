// CR_SCENARIO.js

window.CR_SCENARIO = {
  "tables": {
    "CR_SCENARIO": {
      "columns": {
        "CR_SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CR_SCENARIO_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "CR_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_PROJECT"
        },
        "MAX_RUN_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Max duration for a CR Solver run. "
        },
        "MAX_RUN_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MAX_RUN_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IMPROVEMENT_CUTOFF": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percent improvement cutoff for CR solver (run time control). "
        },
        "MIN_INTRAREGION_DIST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Min distance for deadhead legs within the same region. "
        },
        "MIN_INTRAREGION_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_INTRAREGION_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CR_CONSTRAINTS_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CR_CONSTRAINTS_DEF",
          "info": "Default constraints for fleets in this scenario."
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
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
      "fk_tables": [
        "CR_LANE_COMMITMENT",
        "CR_ROUTE",
        "CR_SCENARIO_FLEET",
        "CR_SCENARIO_SUMMARY",
        "CR_SOLUTION"
      ]
    }
  }
};
