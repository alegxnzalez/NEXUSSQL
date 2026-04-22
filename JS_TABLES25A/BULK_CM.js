// BULK_CM.js

window.BULK_CM = {
  "tables": {
    "BULK_CM": {
      "columns": {
        "BULK_CM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier for the bulk continuous move process. "
        },
        "BULK_CM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier for the bulk continuous move process. "
        },
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Bulk continuous move input parameter. "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Start time of the bulk continuous move. "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "End time of the bulk continuous move. "
        },
        "NUM_OF_SHIPMENTS_SELECTED": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Number of shipments selected for the bulk continuous move. "
        },
        "NUM_OF_SHIPMENTS_LINKED": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Number of shipments successfully linked by the bulk continuous move. "
        },
        "LOG_PROCESS_ID": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The log id for the bulk continuous move process. "
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE",
          "info": "Application machine id the process is running on, in order to get the log from the correct machine. "
        },
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BULK_PLAN",
          "info": "If CM was initiated from a bulkplan, the bulk plan ID "
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
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "NUM_SHIPMENTS_CONSIDERED": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Some selected shipments might be excluded because they are on CM. This number shows the shipments that actually go into the algorithm. "
        },
        "NUM_OF_CM_CREATED": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Number of continuous moves created though the bulk cm process. "
        },
        "TOTAL_COST_BEFORE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_COST_BEFORE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_COST_BEFORE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "TOTAL_COST_AFTER": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_COST_AFTER_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_COST_AFTER_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "TOTAL_EMPTY_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Sum of All Empty Distances in a CM added over all CMs. "
        },
        "TOTAL_EMPTY_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_EMPTY_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_LOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_LOADED_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_LOADED_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_DISTANCE_BEFORE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_DISTANCE_BEFORE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_DISTANCE_BEFORE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_DISTANCE_AFTER": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_DISTANCE_AFTER_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_DISTANCE_AFTER_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "CM_WITH_TWO_SHIPMENTS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of continous move creates with 2 shipments each. "
        },
        "CM_WITH_THREE_SHIPMENTS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of continous move creates with 3 shipments each. "
        },
        "CM_WITH_FOUR_SHIPMENTS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of continous move creates with 4 shipments each. "
        },
        "CM_WITH_FIVE_SHIPMENTS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of continous move creates with 5 shipments each. "
        },
        "CM_WITH_SIX_OR_MORE_SHIPMENTS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of continous move creates with 6 or more shipments each. "
        },
        "STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "SUBMITTED",
            "RUNNING",
            "COMPLETED"
          ],
          "info": "Execution state of the bulk continous move. SUBMITTED/RUNNING/COMPLETED. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "A description of the bulkcm used to identify a set of performance or quality conditions. Used to summarize the bulkcm assumptions when comparing multiple plans."
        },
        "TOTAL_TIME_FOR_ALL_CM": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_TIME_FOR_ALL_CM_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_TIME_FOR_ALL_CM_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        }
      },
      "fk_tables": [
        "SHIPMENT"
      ]
    }
  }
};
