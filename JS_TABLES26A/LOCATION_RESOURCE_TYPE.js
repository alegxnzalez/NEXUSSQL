// LOCATION_RESOURCE_TYPE.js

window.LOCATION_RESOURCE_TYPE = {
  "tables": {
    "LOCATION_RESOURCE_TYPE": {
      "description": "The resource type defined for the location",
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "The location GID."
},
        "RESOURCE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RESOURCE_TYPE",
          "info": "Resource Type GID for the location."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "The description of the location resource type."
},
        "CONSTRAINT_APPOINTMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Whether the location resource type constraints scheduling appointments."
},
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "The calendar GID that applies to the location resource type."
},
        "AUTO_SCHEDULE_APPOINTMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicate whether appointment should be automatically scheduled for the resource type."
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
        "LOCATION_RESOURCE"
]
    }
  }
};