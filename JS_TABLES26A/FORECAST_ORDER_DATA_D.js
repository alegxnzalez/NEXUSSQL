// FORECAST_ORDER_DATA_D.js

window.FORECAST_ORDER_DATA_D = {
  "tables": {
    "FORECAST_ORDER_DATA_D": {
      "description": "This table stores the details of orders created and failed.",
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
        "FORECAST_ORDER_DATA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FORECAST_ORDER_DATA",
          "info": "The GID of the forecast order data."
},
        "EXTERNAL_ORDER_ID": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The Order ID from the external system."
},
        "FAILURE_REASON": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "Reason behind the failure to create orders."
},
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The GID of the order release."
}
      },
      "fk_tables": []
    }
  }
};