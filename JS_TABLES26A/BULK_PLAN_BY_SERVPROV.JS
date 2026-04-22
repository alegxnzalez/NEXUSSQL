// BULK_PLAN_BY_SERVPROV.js

window.BULK_PLAN_BY_SERVPROV = {
  "tables": {
    "BULK_PLAN_BY_SERVPROV": {
      "columns": {
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BULK_PLAN",
          "info": "Bulk plan ID"
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SERVPROV",
          "info": "Service provider ID"
},
        "NUM_ORDERS_PLANNED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of orders planned for this service provider"
},
        "NUM_ORDER_MOVEMENTS_PLANNED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of order movements planned for this service provider"
},
        "NUM_SHIPMENTS_BUILT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of shipments built for this service provider"
},
        "TOTAL_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total cost of all shipments built"
},
        "TOTAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "TOTAL_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total weight of all shipments built"
},
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total volume of all shipments built"
},
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total distance traveled for all shipments built"
},
        "TOTAL_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TOTAL_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_NUM_STOPS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total number of stops for all shipments built"
},
        "TOTAL_SHIPMENT_TIME_SECS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Sum of all shipments times (end-start) in seconds"
},
        "TOTAL_WEIGHT_CAPACITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Sum of all shipment weight capacities (based on equipment used)"
},
        "TOTAL_WEIGHT_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TOTAL_WEIGHT_CAPACITY_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TOTAL_VOLUME_CAPACITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Sum of all shipment volume capacities (based on equipment used)"
},
        "TOTAL_VOLUME_CAPACITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TOTAL_VOLUME_CAPACITY_BASE": {
          "type": "NUMBER",
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