// LRG_LOCATION_JOIN.js

window.LRG_LOCATION_JOIN = {
  "tables": {
    "LRG_LOCATION_JOIN": {
      "description": "This table will be used as a join between location resource group and location.",
      "columns": {
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
},
        "LOCATION_RESOURCE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_RESOURCE_GROUP",
          "info": "The GID for the location resource group. Option here is to link a calendar and preference level for a location resource group."
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "The GID for the location. Option here is to link a calendar and preference level for a location resource group for this location."
},
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "The calendar GID that will be applied to the location of the location resource group."
},
        "PREFERENCE_LEVEL": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Used to get preference level of location resource group for Appointment scheduling"
}
      },
      "fk_tables": []
    }
  }
};