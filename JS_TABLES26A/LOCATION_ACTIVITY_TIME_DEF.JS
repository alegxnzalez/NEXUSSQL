// LOCATION_ACTIVITY_TIME_DEF.js

window.LOCATION_ACTIVITY_TIME_DEF = {
  "tables": {
    "LOCATION_ACTIVITY_TIME_DEF": {
      "description": "Location activity time definition table",
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location."
},
        "LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_ROLE_PROFILE",
          "info": "The GID for the location role related to the activity time definition for this location role combination."
},
        "ACTIVITY_TIME_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACTIVITY_TIME_DEF",
          "info": "The GID for the activity time definition for this location and location role combination."
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
      "fk_tables": []
    }
  }
};