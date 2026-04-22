// ML_SCENARIO.js

window.ML_SCENARIO = {
  "tables": {
    "ML_SCENARIO": {
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
          "info": "The GID of machine learning scenario. The scenario provides the ability to filter data used in training. "
        },
        "SCENARIO_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of the machine learning scenario. "
        },
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ML_PROJECT",
          "info": "The GID of the machine learning project. "
        },
        "SCENARIO_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The name for the machine learning scenario. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "The description for the machine learning scenario. "
        },
        "WORKFLOW_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The workflow ID that is used to establish connection with machine learning services."
        }
      },
      "fk_tables": [
        "ML_SCENARIO_COLUMN_EXCLUDE",
        "ML_SCENARIO_FILTER",
        "ML_SCENARIO_LEARNING_RESULT"
      ]
    }
  }
};
