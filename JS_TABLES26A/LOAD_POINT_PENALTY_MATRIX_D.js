// LOAD_POINT_PENALTY_MATRIX_D.js

window.LOAD_POINT_PENALTY_MATRIX_D = {
  "tables": {
    "LOAD_POINT_PENALTY_MATRIX_D": {
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
        "LOAD_POINT_PENALTY_MATRIX_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOAD_POINT_PENALTY_MATRIX",
          "info": "The GID for load point penalty matrix."
},
        "LOAD_POINT1": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "Loading point."
},
        "LOAD_POINT2": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "Loading point."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The GID for the location."
},
        "PENALTY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Penalty from load point1 to load point2."
}
      },
      "fk_tables": []
    }
  }
};