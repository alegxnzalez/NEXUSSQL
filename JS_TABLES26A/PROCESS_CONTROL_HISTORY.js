// PROCESS_CONTROL_HISTORY.js

window.PROCESS_CONTROL_HISTORY = {
  "tables": {
    "PROCESS_CONTROL_HISTORY": {
      "description": "Contains an entry for each iteration of a workflow run that was kicked off from a process control request.  If a process is run only once, then there is one record in the process_control_request table and the PROCESS_CONTROL_HISTORY table.  However, if a process is set up to run 5 cycles, then the instructions would show up once in the PROCESS_CONTROL_REQUEST table, but 5 records would exist in the PROCESS_CONTROL_HISTORY table.",
      "columns": {
        "PROCESS_CONTROL_HISTORY_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "PROCESS_CONTROL_REQUEST_ID": {
          "type": "NUMBER",
          "nullable": false
},
        "PROCESS_TIME": {
          "type": "DATE",
          "nullable": false
},
        "LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true
},
        "TOPIC_CLASS_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Added for identifying History of a Process Control Request for Report."
},
        "TOPIC_PARAMETERS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Added for identifying History of a Process Request."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
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
},
        "APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_SERVER"
},
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE"
},
        "USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "LOG_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};