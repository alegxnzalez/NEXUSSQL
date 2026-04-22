// JUNCTION_CODE.js

window.JUNCTION_CODE = {
  "tables": {
    "JUNCTION_CODE": {
      "description": "The Junction Code is a code used for a junction on a location.",
      "columns": {
        "JUNCTION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique Junction Code."
},
        "JUNCTION_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The Junction Code."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The Description of the Junction Code."
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
        "LOCATION",
        "ROUTE_CODE_COMBINATION_D",
        "ROUTE_CODE_D"
]
    }
  }
};