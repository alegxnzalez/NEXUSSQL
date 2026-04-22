// DIAG_LOG_FILE.js

window.DIAG_LOG_FILE = {
  "tables": {
    "DIAG_LOG_FILE": {
      "description": "Persist the diagnostic log file information.",
      "columns": {
        "DIAG_LOG_FILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "DIAG_LOG_FILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Diagnostic Log File GID"
},
        "ROOT_DIAG_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DIAG_PROCESS",
          "info": "Diagnostic  Log File XID"
},
        "LOG_PROCESS_ID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Action Diag_process_gid"
},
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "App server machine where Diagnostic log file resides"
},
        "USER_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "User ID who initiated the process"
},
        "FILE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "File name where we store the Diagnostic Log information"
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Diagnostic Log Start Time"
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Diagnostic Log End Time"
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