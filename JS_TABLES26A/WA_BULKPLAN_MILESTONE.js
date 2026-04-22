// WA_BULKPLAN_MILESTONE.js

window.WA_BULKPLAN_MILESTONE = {
  "tables": {
    "WA_BULKPLAN_MILESTONE": {
      "columns": {
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
        "WA_BULKPLAN_MILESTONE_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A globally unique ID for this work assignment bulk plan milestone"
},
        "WORK_ASSIGNMENT_BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "WORK_ASSIGNMENT_BULK_PLAN",
          "info": "work assignment bulk plan ID."
},
        "PLANNING_MILESTONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PLANNING_MILESTONE",
          "info": "Planning milestone type (e.g. Work Assignment)."
},
        "PARENT_MILESTONE_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "WA_BULKPLAN_MILESTONE",
          "info": "Parent milestone (if any)."
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Start time of milestone."
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "End time of milestone."
},
        "STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "SUBMITTED",
                    "RUNNING",
                    "COMPLETED",
                    "FAILED",
                    "INTERRUPTED",
                    "TERMINATED"
          ],
          "info": "Execution state."
},
        "SINCE": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of last state change."
},
        "ALGORITHM": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "Algorithmic choice ."
},
        "NUM_THREADS": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "For multi-threaded milestones, the # of threads allocated to the milestone."
},
        "PROGRESS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Milestone-dependent progress amount (e.g. iterations completed, bytes processed)."
},
        "MAX_PROGRESS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Milestone-dependent problem size (e.g. total # of iterations to complete, total # of bytes to process)"
},
        "PROGRESS_DESCRIPTION": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "A text description to place after ''xx of yy''. E.g. ''work assignments created''"
},
        "LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Log process ID"
}
      },
      "fk_tables": [
        "WA_BULKPLAN_MILESTONE",
        "WA_BULKPLAN_MILESTONE_ERR"
]
    }
  }
};