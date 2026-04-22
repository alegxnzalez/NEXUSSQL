// ACTIVITY_CALENDAR_OVERRIDE.js

window.ACTIVITY_CALENDAR_OVERRIDE = {
  "tables": {
    "ACTIVITY_CALENDAR_OVERRIDE": {
      "columns": {
        "ACTIVITY_CALENDAR_OVERRIDE_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "ACTIVITY_CALENDAR_OVERRIDE_ID is a system-generated unique ID associated with an override of a calendar. For example, if a location is open on Wednesdays but during a particular week a holiday falls on Wednesday, a calendar override will define the location as \"closed\" for all activities on that day. "
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
        "START_DATETIME": {
          "type": "DATE",
          "nullable": false,
          "info": "START_DATETIME contains the starting point for a calendar override; the date and time the override becomes effective. "
        },
        "END_DATETIME": {
          "type": "DATE",
          "nullable": false,
          "info": "END_DATETIME contains the endpoint for a calendar override; the date and time the override is no longer in effect. "
        },
        "OVERRIDE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "OVERRIDE_NAME contains text to identify the calendar override. Examples include: Christmas, delivery, lunch, winter, etc. "
        },
        "IS_WORK_ON": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "IS_WORK_ON is a flag describing whether a specific activity override calendar is active. (Valid values are Y for yes (the override calendar is active) or N for no (the override calendar is not active)."
        },
        "ACTIVITY_TIME_FACTOR": {
          "type": "NUMBER()",
          "nullable": true
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
      "fk_tables": []
    }
  }
};
