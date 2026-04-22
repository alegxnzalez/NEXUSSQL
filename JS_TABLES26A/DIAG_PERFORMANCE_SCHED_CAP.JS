// DIAG_PERFORMANCE_SCHED_CAP.js

window.DIAG_PERFORMANCE_SCHED_CAP = {
  "tables": {
    "DIAG_PERFORMANCE_SCHED_CAP": {
      "description": "List of performance data types to capture in a particular schedule",
      "columns": {
        "DIAG_PERFORMANCE_SCHEDULE_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DIAG_PERFORMANCE_SCHEDULE"
},
        "DIAG_PERFORMANCE_CAPTURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DIAG_PERFORMANCE_CAPTURE"
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