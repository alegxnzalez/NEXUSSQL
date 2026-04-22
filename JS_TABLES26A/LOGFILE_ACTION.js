// LOGFILE_ACTION.js

window.LOGFILE_ACTION = {
  "tables": {
    "LOGFILE_ACTION": {
      "description": "The action log details.",
      "columns": {
        "LOGFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOGFILE",
          "info": "The corresponding action log file."
},
        "ACTION_STATE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "RUNNING",
                    "FAILED",
                    "COMPLETED",
                    "TRUNCATED"
          ],
          "info": "The state of the action log: RUNNING = the action is running and logging is being collected; FAILED = the action failed and logging has completed; COMPLETED = the action succeeded and logging is complete."
},
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "APP_MACHINE",
          "info": "The machine holding the physical action log file."
},
        "LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The log ID captured by this action log. Note that log IDs are only unique in a two day timeframe."
},
        "ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTION",
          "info": "The user action that triggered this action log."
},
        "DQT_DML": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "I",
                    "U",
                    "D"
          ],
          "info": "The type of DML that triggered this action log."
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "The data query type creation, modification or deletion that triggered this action log."
},
        "TOPIC_ALIAS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TOPIC_ALIAS",
          "info": "The process control action that triggered this action log."
},
        "TOPIC_CLASS_NAME": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The Java class of the process control action that triggered this action log."
},
        "LOG_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOG_PROFILE",
          "info": "The log profile selected when this action log was triggered."
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
        "HAS_METRICS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y, if metrics are being collected for the action run."
}
      },
      "fk_tables": []
    }
  }
};