// WORK_ASSIGNMENT_BULK_PLAN.js

window.WORK_ASSIGNMENT_BULK_PLAN = {
  "tables": {
    "WORK_ASSIGNMENT_BULK_PLAN": {
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
        "WORK_ASSIGNMENT_BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Global identifier generated for each call to the work assignment bulk plan process. "
        },
        "WORK_ASSIGNMENT_BULK_PLAN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier that is generated for each call to the work assignment bulk plan process. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Used to summarize the work assignment bulk plan assumptions. "
        },
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Work Assignment bulk plan input parameter. "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Start time of the work assignment bulk plan. "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "End time of the work assignment bulk plan. "
        },
        "SINCE": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of last state change. "
        },
        "LOG_PROCESS_ID": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "It is used to store the log ID with the work assignment bulk plan. "
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE",
          "info": "APP_MACHINE_GID is used to store the application server running the bulkplan . "
        },
        "NUM_OF_SHIPMENTS_SELECTED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipments selected by the user for the work assignments bulk plan. "
        },
        "NUM_OF_SHIPMENTS_ASSIGNABLE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipments in assignable states for the assignment process. "
        },
        "NUM_OF_SHIPMENTS_ASSIGNED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipments assigned in the process. "
        },
        "NUM_OF_RSI_BUILT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of resource schedule instances built in the process. "
        },
        "NUM_OF_RSI_PULLED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of resource schedule instances pulled from the database. "
        },
        "NUM_OF_WA_BUILT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of work assignments created in work assignment bulk plan process. "
        },
        "MIN_NUM_OF_SHIPMENTS_IN_WA": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipments in the newly created work assignment with the least shipments. "
        },
        "MAX_NUM_OF_SHIPMENTS_IN_WA": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipments in the newly created work assignment with the most shipments. "
        },
        "TOT_WEIGHTED_COST_BEFORE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weighted cost of shipments assigned in the assignment process before assignment. "
        },
        "TOT_WEIGHTED_COST_BEFORE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOT_WEIGHTED_COST_BEF_CUR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_WEIGHTED_COST_AFTER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total weighted cost of shipments assigned in the assignment process after assignment. "
        },
        "TOTAL_WEIGHTED_COST_AFTER_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOT_WEIGHTED_COST_AFT_CUR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_ACTUAL_COST_BEFORE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total actual cost of shipments assigned in the assignment process before assignment. "
        },
        "TOTAL_ACTUAL_COST_BEFORE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOT_ACTUAL_COST_BEF_CUR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_ACTUAL_COST_AFTER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total actual cost of shipments assigned in the assignment process after assignment. "
        },
        "TOTAL_ACTUAL_COST_AFTER_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOT_ACTUAL_COST_AFT_CUR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_SLACK_DURATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total slack duration for all work assignments created in this process. "
        },
        "TOTAL_SLACK_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_SLACK_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TOTAL_REST_DURATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total rest duration for all work assignments created in this process. "
        },
        "TOTAL_REST_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_REST_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TOTAL_TRANSIT_DURATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total transit duration for all work assignments created in this process. "
        },
        "TOTAL_TRANSIT_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOT_TRANSIT_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TOTAL_TRANSIT_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total transit distance during the work assignment bulk plan process. "
        },
        "TOTAL_TRANSIT_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOT_TRANSIT_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Input parameter from which we can pull the resource schedule information. "
        },
        "STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "SUBMITTED",
            "RUNNING",
            "COMPLETED",
            "INTERRUPTED",
            "TERMINATED"
          ],
          "info": "Execution state of the WA bulk plan. INTERRUPTED when a user has requested termination but the bulk plan is still running. TERMINATED when the bulk plan completes termination. "
        },
        "TERMINATION_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time when the bulkplan was terminated or timed out. "
        },
        "TERMINATION_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "GL_USER",
          "info": "User who terminated the bulkplan. "
        },
        "TERMINATION_REASON": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Reason the bulkplan was terminated. "
        },
        "IS_STANDALONE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "AVG_RESOURCE_UTILIZATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Specifies the average resource utilization during work assignment planning "
        },
        "TOTAL_RESOURCE_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Specifies the total resouce count available during the work assignment planning"
        }
      },
      "fk_tables": [
        "BULK_PLAN",
        "SHIPMENT",
        "WA_BULKPLAN_MILESTONE",
        "WORK_ASSIGNMENT"
      ]
    }
  }
};
