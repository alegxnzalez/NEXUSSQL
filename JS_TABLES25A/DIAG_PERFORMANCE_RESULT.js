// DIAG_PERFORMANCE_RESULT.js

window.DIAG_PERFORMANCE_RESULT = {
  "tables": {
    "DIAG_PERFORMANCE_RESULT": {
      "columns": {
        "DIAG_PERFORMANCE_RESULT_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Unique ID for the performance collection result. "
        },
        "DIAG_PERFORMANCE_SCHEDULE_ID": {
          "type": "NUMBER()",
          "nullable": true,
          "foreign_key": "DIAG_PERFORMANCE_SCHEDULE",
          "info": "If generated from a scheduled performance collection, the ID of the scheduled collection. "
        },
        "FILENAME": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "info": "The filename holding performance collection results. "
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE",
          "info": "Server holding the results file. "
        },
        "MIME_TYPE": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "info": "MIME type of the results file. "
        },
        "REQUEST_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Request time of the performance collection result."
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
        "PERFM_THRESHOLD_RESULT"
      ]
    }
  }
};
