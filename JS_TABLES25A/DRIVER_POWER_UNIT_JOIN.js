// DRIVER_POWER_UNIT_JOIN.js

window.DRIVER_POWER_UNIT_JOIN = {
  "tables": {
    "DRIVER_POWER_UNIT_JOIN": {
      "columns": {
        "SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Primary key of the table. "
        },
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DRIVER",
          "info": "The driver assigned to the power unit. "
        },
        "POWER_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "POWER_UNIT",
          "info": "The power unit assigned to the driver. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The effective date for this Driver and Power Unit union. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date for this Driver and Power Unit union. "
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
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CALENDAR",
          "info": "The GID for the calendar that determines the day and times when the power unit can be used with the driver. For example, if you select a calendar for Monday through Friday, 8 a.m.-8 p.m., that power unit would be used with that driver Monday through Friday, 8 a.m.-8 p.m.. On a different driver you could then select a time of Monday through Friday, 8 p.m. -8 a.m., as well as on any time on Saturday and Sunday, and assign the same power unit to a different driver. Only calendars with an activity of Driver Work will be considered for overlap when other drivers share the same power unit. Validation checks against other calendars for duplicate assignments when you save. By establishing power unit availability to multiple drivers through the use of a calendar, you are defining \"slip seating\"."
        }
      },
      "fk_tables": []
    }
  }
};
