// COST_CATEGORY.js

window.COST_CATEGORY = {
  "tables": {
    "COST_CATEGORY": {
      "columns": {
        "COST_CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "COST_CATEGORY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "COST_CATEGORY_DESC": {
          "type": "VARCHAR2(250)",
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
      "fk_tables": [
        "ACCESSORIAL_COST",
        "COST_CATEGORY_SET_D",
        "FLEET_BULK_PLAN_COST",
        "RATE_GEO_COST",
        "SHIPMENT_COST"
]
    }
  }
};