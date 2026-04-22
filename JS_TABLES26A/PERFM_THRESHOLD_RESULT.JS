// PERFM_THRESHOLD_RESULT.js

window.PERFM_THRESHOLD_RESULT = {
  "tables": {
    "PERFM_THRESHOLD_RESULT": {
      "description": "Persisted result of a set of metric threshold events.",
      "columns": {
        "PERFM_THRESHOLD_RESULT_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique ID for the set of metric threshold events."
},
        "DIAG_PERFORMANCE_RESULT_ID": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "DIAG_PERFORMANCE_RESULT",
          "info": "Performance diagnostic result if requested in the notification for the metric threshold events."
},
        "THRESHOLD_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Time threshold was triggered."
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
        "PERFM_THRESH_RESULT_EVENT"
]
    }
  }
};