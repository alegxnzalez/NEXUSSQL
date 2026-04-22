// DRIVER_CALENDAR_EVENT.js

window.DRIVER_CALENDAR_EVENT = {
  "tables": {
    "DRIVER_CALENDAR_EVENT": {
      "description": "The table captures all the Calendar events (excluding shipment assignments) for a Driver",
      "columns": {
        "DRIVER_CAL_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The driver calendar event GID."
},
        "DRIVER_CAL_EVENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The XID for the driver calendar event."
},
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DRIVER",
          "info": "The driver GID."
},
        "EVENT_START_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The Start time of the activity for this particular driver and event."
},
        "EVENT_END_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The end time of the activity for this particular driver and event."
},
        "EVENT_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The location where this calendar event is scheduled."
},
        "CAL_EVENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CALENDAR_EVENT_TYPE",
          "info": "The type of the calendar event."
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
        "IE_SHIPMENTSTATUS"
]
    }
  }
};