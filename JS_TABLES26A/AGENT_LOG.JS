// AGENT_LOG.js

window.AGENT_LOG = {
  "tables": {
    "AGENT_LOG": {
      "columns": {
        "LOG_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence number for agent log records."
},
        "AGENT_RUN_SEQUENCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "A sequence number unique to the execution of a particular agent. A single execution will have at least two AGENT_LOG records and may have many more, depending on errors and LOG actions. This can be used to query corresponding records in AGENT_ACTION_LOG."
},
        "PARENT_AGENT_RUN_SEQUENCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The execution sequence number of the agent that triggered the current agent to run. Null, if this is a top-level agent."
},
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The running Agent ID"
},
        "STATE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "STARTED",
                    "COMPLETED",
                    "WARNING",
                    "ERROR",
                    "NOTE"
          ],
          "info": "The agent state denoted by the log entry. Every agent will have a STARTED entry when execution begins, and a COMPLETED entry when the agent process is completed (i.e. all activity associated with agent completes). If an agent action raises an error, an ERROR entry is written. If a LOG action specifies writing a record to the agent log, a NOTE, WARNING or ERROR record will be written, depending on the LOG action specification."
},
        "TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "UTC Time of the agent activity"
},
        "LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Log Process ID mapping the agent execution to the OTM log files. Note that this ID is only guaranteed unique within a 24 hour period."
},
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "The server running the agent."
},
        "LIFETIME_EVENT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The lifetime event (i.e. AGENT_EVENT_GID) that triggered the agent."
},
        "AGENT_DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The data query type of the event that triggered the agent."
},
        "AGENT_BUSINESS_OBJECT": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The business object PK of the object that triggered the agent."
},
        "RUN_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For a COMPLETED record, the time (in seconds) the agent took to run to completion."
},
        "NOTES": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "For records output by a LOG action, user-specified notes to include in the log. Any agent variable macros specified in the LOG action will be evaluated before writing them to the log."
},
        "ERROR_AGENT_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The agent action, if any, that triggered the Agent Error handler (typically via an exception)."
},
        "ERROR_CAUSE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The cause of the error triggering the Agent Error handler."
},
        "ERROR_OBJECT": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The business object PK that triggered the Agent Error handler. This may differ from the agent's business object if in a DTA or FOR loop."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "AGENT_LOG must be partitioned for easy data management. A year's worth of data is stored, dropping the oldest week or quarter."
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