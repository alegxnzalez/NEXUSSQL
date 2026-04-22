// ML_SCENARIO_WORKFLOW.js

window.ML_SCENARIO_WORKFLOW = {
  "tables": {
    "ML_SCENARIO_WORKFLOW": {
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
          "key_value": true,
          "foreign_key": "ML_SCENARIO",
          "info": "This is the project_gid for which the workflow is being triggered."
},
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ML_SCENARIO",
          "info": "The GID of the machine learning scenario."
},
        "PROBLEM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ML_PROBLEM_TYPE",
          "info": "The GID of the problem_type."
},
        "OBJECTIVE_MODEL_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "values": [
                    "P",
                    "E"
          ],
          "info": "The objective model type of the scenario for which this workflow is obtained."
},
        "WORKFLOW_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The workflow request ID used by the machine learning scenario."
}
      },
      "fk_tables": []
    }
  }
};