// SQL_EXECUTION.js

window.SQL_EXECUTION = {
  "tables": {
    "SQL_EXECUTION": {
      "description": "Intermediate table holding summary of customer SQL performance for lookup and analysis.",
      "columns": {
        "SQL_EXECUTION_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique ID for the SQL ID and Type."
},
        "SQL_ID": {
          "type": "VARCHAR2(13)",
          "nullable": false,
          "info": "The SQL ID for the monitored statement."
},
        "TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "APRIORI",
                    "CURSOR",
                    "AWR"
          ],
          "info": "The source of any explain plan or performance information: APRIORI - theoretical explain plans; CURSOR - the cursor cache; AWR - the automatic workload repository."
},
        "CATEGORY": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "values": [
                    "SAVED QUERY",
                    "INT SAVED QUERY",
                    "AGENT",
                    "FINDER",
                    "SQL EXEC",
                    "OTHER"
          ],
          "info": "The category of the statement."
},
        "USE_CASE": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The use case for the statement within its category. (E.g. SAVED_QUERY_GID for saved queries)."
},
        "SQL": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "SQL of the monitored statement."
},
        "SQL_FULL": {
          "type": "CLOB",
          "nullable": true,
          "info": "Full SQL of the monitored statement."
},
        "TOTAL_ELAPSED_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Elapsed time for the statement to run. For cursor cache queries, this is the cumulative time since the cursor was placed in cache; for AWR it's the cumulative elapsed time during the snapshots."
},
        "TOTAL_ROWS_PROCESSED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total number of rows processed by the statement. For cursor cache queries, this is the rows processed since the cursor was placed in the cache; for AWR, the rows processed during the snapshots."
},
        "TOTAL_EXECUTIONS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The total number of exceptions of the statement. For cursor cache queries, this is the executions since the cursor was placed in the cache; For AWR, the executions during the snapshots."
},
        "AVG_ELAPSED_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average elapsed time per statement execution. For cursor cache statements, this is the average since the cursor was placed in cache; for AWR it's the average during the snapshots."
},
        "AVG_ROWS_PROCESSED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average rows processed per statement execution for the statement to run. For cursor cache statements, this is the average since the cursor was placed in cache; for AWR it's the average during the snapshots."
},
        "LAST_EXECUTION_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "For cursor cache queries, the last execution time for the statement. For AWR queries, this is left null."
},
        "HAS_PLAN": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the SQL execution has a corresponding explain plan available."
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