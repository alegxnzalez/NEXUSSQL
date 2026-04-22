// ML_PROJECT.js

window.ML_PROJECT = {
  "tables": {
    "ML_PROJECT": {
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
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PROJECT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PROJECT_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "PROBLEM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ML_PROBLEM_TYPE"
        },
        "LAST_ML_SENT_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "WORKFLOW_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "LOGIC_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOGIC_CONFIG",
          "info": "Unique global identifier for a set of logic configuration parameters. "
        },
        "STATUS": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Status value for the Machine learning Project "
        },
        "OBJECTIVE_MODEL_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "P",
            "PE",
            "OR"
          ],
          "info": "The Objective Model Type value for the machine learning Project Objective. P = Planned ETA Prediction, PE = Planned and Event Prediction and OR = Order Route Prediction."
        }
      },
      "fk_tables": [
        "ML_PERFORM_PREDICTION_RESULT",
        "ML_PERFORM_SCORING_RESULT",
        "ML_PROJECT_D",
        "ML_PROJECT_DATA_PUSH_RESULT",
        "ML_SCENARIO",
        "ML_SCENARIO_COLUMN_INCLUSION",
        "ML_SCENARIO_WORKFLOW"
      ]
    }
  }
};
