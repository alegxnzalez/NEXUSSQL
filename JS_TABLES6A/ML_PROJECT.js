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
        }
      },
      "fk_tables": [
        "ML_PROJECT_D",
        "ML_PROJECT_DATA_PUSH_RESULT",
        "ML_SCENARIO"
      ]
    }
  }
};
