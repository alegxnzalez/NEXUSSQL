// DRIVER_CALENDAR.js

window.DRIVER_CALENDAR = {
  "tables": {
    "DRIVER_CALENDAR": {
      "columns": {
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DRIVER",
          "info": "The driver GID. "
        },
        "HOME_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION",
          "info": "The home location of the driver defined for this work profile. "
        },
        "ACTIVITY_CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CALENDAR",
          "info": "The activity calendar of the driver defined for this work profile. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "The effective date for this driver work profile. "
        },
        "EXPIRY_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The expiry date for this driver work profile. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "IS_SHIFT_BASED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Allows you to select whether the work profile for the driver is Shift Based or not. If you set this to Yes, then the work profile is evaluated when you try and get the driver home. The driver will be sent home at the end of each shift, and they will start from their home location for their next assignment."
        }
      },
      "fk_tables": []
    }
  }
};
