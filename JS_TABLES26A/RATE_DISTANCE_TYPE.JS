// RATE_DISTANCE_TYPE.js

window.RATE_DISTANCE_TYPE = {
  "tables": {
    "RATE_DISTANCE_TYPE": {
      "description": "Indicates the list of valid values for distance types. Examples:  estimate, actual",
      "columns": {
        "RATE_DISTANCE_TY": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
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
        "RATE_DISTANCE"
]
    }
  }
};