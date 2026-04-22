// FLEET_BULK_PLAN.js

window.FLEET_BULK_PLAN = {
  "tables": {
    "FLEET_BULK_PLAN": {
      "columns": {
        "FLEET_BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "FLEET_BULK_PLAN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SHIPMENT_QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "RESOURCE_QUERY_NAME": {
          "type": "VARCHAR2(120)",
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
        "NUM_OF_SHIPMENTS_SELECTED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipments for the bulk fleet assignments "
        },
        "RESOURCE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "DRIVER",
            "EQUIPMENT INSTANCE"
          ],
          "info": "The type of resource assigned, driver or equipment instance for now "
        },
        "NUM_OF_RESOURCES_SELECTED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of resources passed to the assignment process. In equipment instance case, this will be null "
        },
        "NUM_OF_SHIPMENTS_ASSIGNABLE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipments in assignable states for the assignment process "
        },
        "NUM_OF_RESOURCES_ASSIGNABLE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of resources in assignable states for the assignment process "
        },
        "NUM_RESRC_WITH_MULTI_ASSIGN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of resources that have multiple shipments assigned to it during this bulkplan "
        },
        "NUM_OF_SHIPMENTS_ASSIGNED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipments that have resources assigned in the process "
        },
        "NUM_OF_RESOURCES_ASSIGNED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of resourced assigned during the assignment process "
        },
        "PRE_SHIP_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "the total cost of  shipments assigned in the assignment process before assignment process "
        },
        "PRE_SHIP_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "PRE_SHIP_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AFTER_SHIP_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "rthe total cost of assigned shipments in the assignment process after assignment process "
        },
        "AFTER_SHIP_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
        },
        "AFTER_SHIP_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "BOBTAIL_DIST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total bobtail disancet from all the shipments "
        },
        "BOBTAIL_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "BOBTAIL_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LOADED_DIST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total loaded distance from all the shipments "
        },
        "LOADED_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "LOADED_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DEADHEAD_DIST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total deadhead distance from all the shipments "
        },
        "DEADHEAD_DIST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DEADHEAD_DIST_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PLANNING_PARAMETER_SET"
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
          ]
        },
        "LOG_PROCESS_ID": {
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
        "NUM_OF_SHIPMENTS_FAILED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipments that didn't have resources assigned in the process"
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE"
        },
        "TERMINATION_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "TERMINATION_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "GL_USER"
        },
        "TERMINATION_REASON": {
          "type": "VARCHAR2(2000)",
          "nullable": true
        }
      },
      "fk_tables": [
        "FLEET_BULK_PLAN_COST",
        "SHIPMENT"
      ]
    }
  }
};
