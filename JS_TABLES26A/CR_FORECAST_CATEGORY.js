// CR_FORECAST_CATEGORY.js

window.CR_FORECAST_CATEGORY = {
  "tables": {
    "CR_FORECAST_CATEGORY": {
      "description": "Table linking LV Forecasts with shipment categories.",
      "columns": {
        "CR_FORECAST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_FORECAST"
},
        "SHIPMENT_CATEGORY": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "PERCENT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The percent of shipments that went into making this forecast that were from this category."
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