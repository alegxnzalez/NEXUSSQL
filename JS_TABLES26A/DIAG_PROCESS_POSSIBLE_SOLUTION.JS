// DIAG_PROCESS_POSSIBLE_SOLUTION.js

window.DIAG_PROCESS_POSSIBLE_SOLUTION = {
  "tables": {
    "DIAG_PROCESS_POSSIBLE_SOLUTION": {
      "description": "an encounterd list of all the possible solutions for the failure in an OTM/Process.",
      "columns": {
        "REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DIAG_PROCESS_FAILURE_REASON",
          "info": "Failure Reason XID refrences Diag_process_failure_reason table"
},
        "SOLUTION_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Solution code"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "info": "Solution Description"
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