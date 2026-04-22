// AGENT_ACTION_STATS.js

window.AGENT_ACTION_STATS = {
  "tables": {
    "AGENT_ACTION_STATS": {
      "columns": {
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AGENT_ACTION_DETAILS",
          "info": "The agent holding the action whose statistics are being collected."
},
        "ACTION_FLOW": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AGENT_ACTION_DETAILS",
          "values": [
                    "Norm",
                    "Err"
          ],
          "info": "The agent block holding the action whose statistics are being collected."
},
        "ACTION_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AGENT_ACTION_DETAILS",
          "info": "The action sequence number of the action whose statistics are being collected. Note that (AGENT_GID, ACTION_FLOW, ACTION_SEQUENCE) define a distinct action in AGENT_ACTION_DETAILS to track."
},
        "AGENT_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AGENT_ACTION",
          "info": "The agent action being tracked. Note this is for search purposes and does not uniquely define the action within its agent."
},
        "NUM_WAITS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total number of times the action was published."
},
        "TOTAL_WAIT_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total time (in seconds) the action waited in the mediator or an event queue."
},
        "AVG_WAIT_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average time (in seconds) the action waited in the mediator or an event queue."
},
        "MAX_WAIT_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum time (in seconds) the action waited in the mediator or an event queue."
},
        "NUM_EXECS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total number of times the action was executed."
},
        "TOTAL_EXEC_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total execution time (in seconds) for the action. This is measured from the time the action begins execution to the time it terminates on that thread. I.e., it does not include time for child processes to complete."
},
        "AVG_EXEC_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average execution time (in seconds) for the action. This is measured from the time the action begins execution to the time it terminates on that thread. I.e., it does not include time for child processes to complete."
},
        "MAX_EXEC_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum execution time (in seconds) for the action. This is measured from the time the action begins execution to the time it terminates on that thread. I.e., it does not include time for child processes to complete."
},
        "NUM_RUNS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total number of times the action was completed."
},
        "TOTAL_RUN_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total run time of the action. This is measured from when the action is published to the time it's process is completed. It includes the time to process any work triggered by the action."
},
        "AVG_RUN_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average run time of the action. This is measured from when the action is published to the time it's process is completed. It includes the time to process any work triggered by the action."
},
        "MAX_RUN_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum run time of the action. This is measured from when the action is published to the time it's process is completed. It includes the time to process any work triggered by the action."
},
        "SINCE": {
          "type": "DATE",
          "nullable": true,
          "info": "The last reset time for statistics collection. Note that all statistics are reset any time the action's agent is modified."
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