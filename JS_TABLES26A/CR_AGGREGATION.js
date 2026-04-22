// CR_AGGREGATION.js

window.CR_AGGREGATION = {
  "tables": {
    "CR_AGGREGATION": {
      "description": "Summary for a Cooperative Routing aggregation run for a CR Project.",
      "columns": {
        "CR_AGGREGATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CR_AGGREGATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CR_PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_PROJECT"
},
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Time that the aggregation process started."
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time that the aggregation process ended."
},
        "NUM_SHIPMENTS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of shipments brought into the aggregation."
},
        "NUM_AGGREGATES": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of Lane Volume Aggregates created during the aggregation."
},
        "NUM_OUTLIERS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of Lane Volume Aggregates that were identified as outliers during the aggregation."
},
        "NUM_FORECASTS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Nuimber of Lane Volume Forecasts created during the aggregation."
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
        "CR_FORECAST",
        "CR_LV_AGGREGATE"
]
    }
  }
};