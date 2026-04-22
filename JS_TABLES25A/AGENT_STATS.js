// AGENT_STATS.js

window.AGENT_STATS = {
  "tables": {
    "AGENT_STATS": {
      "columns": {
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AGENT",
          "info": "The Agent ID for the statistics. "
        },
        "NUM_RUNS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total number of times the agent was run since the last reset date/time. "
        },
        "TOTAL_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total time (in seconds) spent executing the agent since the last reset date/time. "
        },
        "AVG_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Average time (in seconds) spent executing the agent since the last reset date/time. "
        },
        "MAX_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum time (in seconds) spent executing the agent since the last reset date/time. "
        },
        "SINCE": {
          "type": "DATE",
          "nullable": true,
          "info": "The last reset time for statistics collection. Note that all statistics are reset any time the agent is modified."
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
