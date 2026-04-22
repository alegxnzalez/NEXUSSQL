// FLEET_BULK_PLAN_COST.js

window.FLEET_BULK_PLAN_COST = {
  "tables": {
    "FLEET_BULK_PLAN_COST": {
      "description": "cost details of bulkplan assignment",
      "columns": {
        "FLEET_BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FLEET_BULK_PLAN"
},
        "COST_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COST_CATEGORY",
          "info": "Cost category"
},
        "PRE_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total cost for this category before assignment. Retrieved from the shipment_cost_detail table"
},
        "PRE_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "PRE_COST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "AFTER_COST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Total cost for this category after assignment."
},
        "AFTER_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY"
},
        "AFTER_COST_BASE": {
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