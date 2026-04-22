// BULK_PLAN_BY_MODE.js

window.BULK_PLAN_BY_MODE = {
  "tables": {
    "BULK_PLAN_BY_MODE": {
      "columns": {
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BULK_PLAN"
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TRANSPORT_MODE"
        },
        "NUM_ORDERS_PLANNED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "number of orders planned on this transport mode "
        },
        "NUM_ORDER_MOVEMENTS_PLANNED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "number if order movements planned on this transport mode "
        },
        "NUM_SHIPMENTS_BUILT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "number of shipments built on this transport mode "
        },
        "TOTAL_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "total cost of all shipments built on this transport mode "
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
        "TOTAL_NUM_STOPS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "average number of stops of all shipments built on this transport mode "
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
          "info": "Sum of all shipment volume capacities (based on equipment used)"
        },
        "TOTAL_VOLUME_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TOTAL_VOLUME_CAPACITY_BASE": {
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
        }
      },
      "fk_tables": []
    }
  }
};
