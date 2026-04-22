// SOLVER_MILESTONE.js

window.SOLVER_MILESTONE = {
  "tables": {
    "SOLVER_MILESTONE": {
      "columns": {
        "SOLVER_MILESTONE_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true
},
        "STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "STARTED",
                    "RUNNING",
                    "COMPLETED",
                    "FAILED",
                    "INTERRUPTED",
                    "TERMINATED"
          ]
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