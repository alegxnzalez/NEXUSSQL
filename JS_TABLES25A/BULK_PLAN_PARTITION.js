// BULK_PLAN_PARTITION.js

window.BULK_PLAN_PARTITION = {
  "tables": {
    "BULK_PLAN_PARTITION": {
      "columns": {
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BULK_PLAN"
        },
        "PARTITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PLAN_PARTITION"
        },
        "SUBMIT_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "NUM_OF_ORDERS_SELECTED": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "NUM_OF_ORDERS_UNASSIGNED": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "NUM_OF_ORDERS_PLANNED": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "NUM_OF_SHIPMENTS_BUILT": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "NUM_ORDERS_PLANNED_FAILED": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "LOG_PROCESS_ID": {
          "type": "NUMBER()",
          "nullable": true
        },
        "NUM_ORDER_MOVEMENTS_SELECTED": {
          "type": "NUMBER(8)",
          "nullable": true
        },
        "NUM_ORDER_MOVEMENTS_UNASSIGNED": {
          "type": "NUMBER(8)",
          "nullable": true
        },
        "NUM_ORDER_MOVEMENTS_PLANNED": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "NUM_ORDER_MOVEMENTS_FAILED": {
          "type": "NUMBER(8)",
          "nullable": false
        },
        "TOTAL_NUM_STOPS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "average # of stops of all shipments in this partition "
        },
        "TOTAL_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "total cost of all shipments built in this partition "
        },
        "TOTAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "TOTAL_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TOTAL_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
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
          "info": "Execution state of the bulkplan partition. INTERRUPTED when a user has requested termination but the partition is still running. TERMINATED when the partition completes termination. "
        },
        "SINCE": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of last state change "
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE",
          "info": "If scaled, the application machine running the partition "
        },
        "TOTAL_SHIPMENT_TIME_SECS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Sum of all shipments times (end-start) in seconds "
        },
        "TOTAL_WEIGHT_CAPACITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Sum of all shipment weight capacities (based on equipment used) "
        },
        "TOTAL_WEIGHT_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TOTAL_WEIGHT_CAPACITY_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_VOLUME_CAPACITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Sum of all shipment volume capacities (based on equipment used) "
        },
        "TOTAL_VOLUME_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TOTAL_VOLUME_CAPACITY_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "NUM_OF_ORDERS_THRU_POOL": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of orders that went through a pool point "
        },
        "NUM_OF_ORDERS_THRU_XDOCK": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of orders that went through a crossdock "
        },
        "TOTAL_BEST_DIRECT_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total best direct cost of planned orders "
        },
        "TOTAL_BEST_DIRECT_COST_CUR": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "TOTAL_BEST_DIRECT_COST_BASE": {
          "type": "NUMBER()",
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
        "NUM_OF_WA_CREATED": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Number of Work assignments created during the Bulk plan partition process. "
        },
        "NUM_ORDER_MOVEMENTS_CREATED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of order movements created."
        }
      },
      "fk_tables": [
        "BULK_PLAN_PARTITION_BY_MODE",
        "BULK_PLAN_PARTITION_SERVPROV"
      ]
    }
  }
};
