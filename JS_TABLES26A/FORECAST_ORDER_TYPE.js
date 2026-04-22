// FORECAST_ORDER_TYPE.js

window.FORECAST_ORDER_TYPE = {
  "tables": {
    "FORECAST_ORDER_TYPE": {
      "description": "This table stores the different types of forecast orders from external systems.",
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
        "EXTERNAL_SYSTEM_TYPE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "The external system from which the orders are pulled into OTM. An example is Supply Chain Planning."
},
        "FORECAST_ORDER_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID describing the type of the forecast order. For example, Planned Purchase Orders, Existing Purchase Orders, etc."
},
        "FORECAST_ORDER_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of the forecast order type."
},
        "FORECAST_ORDER_TYPE_VALUE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "Type of the order such as BUY/MAKE/OUTBOUND."
}
      },
      "fk_tables": [
        "FORECAST_ORDER_DATA"
]
    }
  }
};