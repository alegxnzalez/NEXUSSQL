// ROUTE_CODE_COMBINATION_D.js

window.ROUTE_CODE_COMBINATION_D = {
  "tables": {
    "ROUTE_CODE_COMBINATION_D": {
      "columns": {
        "ROUTE_CODE_COMBINATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_CODE_COMBINATION"
},
        "SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ROUTE_CODE"
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
},
        "RAIL_JUNCTION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JUNCTION_CODE"
}
      },
      "fk_tables": []
    }
  }
};