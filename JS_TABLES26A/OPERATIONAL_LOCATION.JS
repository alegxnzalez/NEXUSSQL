// OPERATIONAL_LOCATION.js

window.OPERATIONAL_LOCATION = {
  "tables": {
    "OPERATIONAL_LOCATION": {
      "description": "Sub locations, such as terminals at a port",
      "columns": {
        "OPERATIONAL_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "Sub location belonging to a main location. Sub location may only belong to one location."
},
        "MAIN_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "Main location to which the operational location belongs."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": [
        "OPERATIONAL_LOCATION_D"
]
    }
  }
};