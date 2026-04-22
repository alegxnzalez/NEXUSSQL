// AGENT_ACTION_LOG.js

window.AGENT_ACTION_LOG = {
  "tables": {
    "AGENT_ACTION_LOG": {
      "columns": {
        "LOG_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence number for agent action log records."
},
        "ACTION_RUN_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "A sequence number unique to a single execution of the action."
},
        "AGENT_RUN_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "A sequence number unique to the execution of the agent triggering the action. This can be used to query corresponding records in AGENT_LOG."
},
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The agent holding the action."
},
        "ACTION_FLOW": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
                    "Norm",
                    "Err"
          ],
          "info": "The agent block (i.e. workflow or error) holding the action."
},
        "ACTION_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The sequence of the action within the agent block. Note that (AGENT_GID, ACTION_FLOW, ACTION_SEQUENCE) uniquely identify the action and match the PK of the AGENT_ACTION_DETAILS table."
},
        "STATE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "STARTED",
                    "COMPLETED",
                    "ERROR"
          ],
          "info": "The action state denoted by the log entry. Every action run will have a STARTED entry when the action is published, and a COMPLETED entry when the action process is completed (i.e. all activity associated with the action completes). If an agent action raises an error, an ERROR entry is written as well."
},
        "TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "UTC Time of the agent action activity"
},
        "LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Log Process ID mapping the action execution to the OTM log files. Note that this ID is only guaranteed unique within a 24 hour period."
},
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The server running the agent action."
},
        "AGENT_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The data query type of the event that triggered the agent running the action."
},
        "AGENT_BUSINESS_OBJECT": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The business object of the event that triggered the agent running the action."
},
        "AGENT_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The agent action being run. Note that this doesn't uniquely specify the action within the agent since the same action may be run multiple times within one agent."
},
        "ACTION_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The data query type of the action's business object. This may differ from the agent's data query type if run in a DTA or FOR loop."
},
        "ACTION_BUSINESS_OBJECT": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The action's business object. This may differ from the agent's data query type if run in a DTA or FOR loop."
},
        "RUN_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For a COMPLETED record, the time (in seconds) between publication of the action of completion of the action process."
},
        "ERROR_MSG": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "For an ERROR record, the exception message causing the error."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "AGENT_ACTION_LOG must be partitioned for easy data management. A year's worth of data is stored, dropping the oldest week or quarter."
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