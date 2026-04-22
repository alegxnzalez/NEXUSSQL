// PLANNING_TASK.js

window.PLANNING_TASK = {
  "tables": {
    "PLANNING_TASK": {
      "description": "Scalability information for planning algorithms",
      "columns": {
        "PLANNING_TASK_ID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "Planning algorithm name - matches to code specification"
},
        "APP_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_FUNCTION",
          "info": "Scalability application function"
},
        "SOLVER_TIMEOUT": {
          "type": "NUMBER",
          "nullable": true
},
        "SOLVER_TIMEOUT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "SOLVER_TIMEOUT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "SOLVER_MAX_SIZE": {
          "type": "NUMBER",
          "nullable": true
},
        "SOLVER_PERCENT_OPTIMAL": {
          "type": "NUMBER",
          "nullable": true
},
        "SOLVER_BRANCH_BOUND_GAP": {
          "type": "NUMBER",
          "nullable": true
},
        "SOLVER_MODEL_FILENAME": {
          "type": "VARCHAR2(128)",
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