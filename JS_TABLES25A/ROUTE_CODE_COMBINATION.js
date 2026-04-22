// ROUTE_CODE_COMBINATION.js

window.ROUTE_CODE_COMBINATION = {
  "tables": {
    "ROUTE_CODE_COMBINATION": {
      "columns": {
        "ROUTE_CODE_COMBINATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_CODE",
          "info": "This is the route_code of the rule_11 combination."
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
        "ROUTE_CODE_COMBINATION_D",
        "SHIPMENT"
      ]
    }
  }
};
