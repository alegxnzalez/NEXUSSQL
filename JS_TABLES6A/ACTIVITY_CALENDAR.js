// ACTIVITY_CALENDAR.js

window.ACTIVITY_CALENDAR = {
  "tables": {
    "ACTIVITY_CALENDAR": {
      "columns": {
        "ACTIVITY_CALENDAR_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "ACTIVITY_CALENDAR_ID is the system-generated unique ID for ACTIVITY_CALENDAR. (IDs are internal system indexes; therefore, they are usually not recognizable to users.) "
        },
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CALENDAR",
          "info": "CALENDAR_GID is the unique identifier for a calendar. A calendar entry defines when certain activities can occur. "
        },
        "ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ACTIVITY",
          "info": "ACTIVITY_GID is the unique identifier of an activity. This entry defines an activity with the time(s) when that activity can occur. "
        },
        "IS_WORK_ON": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "IS_WORK_ON is a flag describing whether a specific activity calendar is active. (Valid values are Y for yes (the calendar is active) or N for no (the calendar is not active). "
        },
        "BEGIN": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "BEGIN contains the time when an activity can start. "
        },
        "DURATION": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "DURATION contains the length of time an activity can take place. "
        },
        "ACTIVITY_TIME_FACTOR": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Acitivity factor provides a multiplication factor for the activity."
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
        "LOCATION_CAPACITY_OVERRIDE"
      ]
    }
  }
};
