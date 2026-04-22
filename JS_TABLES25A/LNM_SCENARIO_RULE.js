// LNM_SCENARIO_RULE.js

window.LNM_SCENARIO_RULE = {
  "tables": {
    "LNM_SCENARIO_RULE": {
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
        "SCENARIO_RULE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence of rule within the scenario. "
        },
        "DATARULE_INSTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_DATARULE_INSTANCE",
          "info": "Data rule instance to associate with the scenario. "
        },
        "ROWS_SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Saved query to filter out rows impacted by the rule. If not specified, all rows are impacted."
        }
      },
      "fk_tables": []
    }
  }
};
