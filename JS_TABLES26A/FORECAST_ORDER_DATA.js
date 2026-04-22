// FORECAST_ORDER_DATA.js

window.FORECAST_ORDER_DATA = {
  "tables": {
    "FORECAST_ORDER_DATA": {
      "description": "This table stores the results of the forecast pull orders.",
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
          "info": "The GID of forecast order data."
},
        "FORECAST_ORDER_DATA_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of forecast order data."
},
        "FORECAST_ORDER_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "FORECAST_ORDER_TYPE",
          "info": "The Forecast Order Type GID."
},
        "EXTERNAL_SYSTEM_TYPE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "foreign_key": "FORECAST_ORDER_TYPE",
          "info": "Specifies the type of external system the orders are being pulled from."
},
        "PLAN_NAME": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The plan name of the forecast order."
},
        "PLAN_ID": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The Plan ID of the forecast order."
},
        "STATUS": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "values": [
                    "LOADED",
                    "PARTIALLY LOADED",
                    "FAILED",
                    "LOADING",
                    "NOT STARTED",
                    "INTERRUPTED",
                    "TERMINATED"
          ],
          "info": "The status of the order pull. Options include Not Started, Loaded, Loading, Partially Loaded, Failed, Interrupted, or Terminated."
},
        "START_DATE": {
          "type": "DATE",
          "nullable": true
},
        "END_DATE": {
          "type": "DATE",
          "nullable": false
},
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "The external system GID."
},
        "TOTAL_ORDERS_CREATED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of orders pulled and created."
},
        "TOTAL_ORDERS_FAILED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of orders failed to be created."
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The start time of the pull of orders."
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The end time of the pull of orders."
},
        "TERMINATION_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The time when the pull of orders was terminated or timed out."
},
        "TERMINATION_USER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_USER",
          "info": "The user who terminated the pull of orders."
},
        "TERMINATION_REASON": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The reason the pull of orders was terminated."
}
      },
      "fk_tables": [
        "FORECAST_ORDER_DATA_D"
]
    }
  }
};