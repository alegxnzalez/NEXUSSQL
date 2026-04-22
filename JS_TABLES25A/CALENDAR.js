// CALENDAR.js

window.CALENDAR = {
  "tables": {
    "CALENDAR": {
      "columns": {
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "CALENDAR_GID is the unique identifier for a calendar. "
        },
        "CALENDAR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "CALENDAR_XID is the unique external identifier for a calendar. "
        },
        "CALENDAR_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "CALENDAR_NAME is text that describes the purpose of the calendar. Examples include: office hours, summer calendar, pickup, etc. "
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "START_DATE contains the effective date of the calendar. "
        },
        "DAYS_IN_CYCLE": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "DAYS_IN_CYLCE specifies the number of days for which this calendar is in effect. "
        },
        "HOLIDAY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HOLIDAY_PROFILE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "NOTES": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "NOTES contains text that describes additional information about the calendar. Examples include: \"ALL THE TIME,\" \"CAL_ANNUAL,\" \"OFFICE HOURS - 8AM TO 6PM,\" etc."
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
        "ACTIVITY_CALENDAR",
        "ACTIVITY_CALENDAR_OVERRIDE",
        "CALENDAR_PARENT",
        "CONTACT_COM_METHOD",
        "DM_RULE_D",
        "DRIVER_CALENDAR",
        "DRIVER_POWER_UNIT_JOIN",
        "DRIVER_TYPE_CALENDAR",
        "ITINERARY",
        "LANE_CALENDAR",
        "LANE_TENDER_INFO",
        "LOCATION_CAPACITY",
        "LOCATION_RESOURCE",
        "LOCATION_RESOURCE_TYPE",
        "LOCATION_ROLE_PROFILE",
        "LOCATION_ROLE_PROFILE_CAL",
        "LRG_LOCATION_JOIN",
        "RATE_GEO_COST",
        "RATE_SERVICE",
        "REPETITION_SCHEDULE",
        "RESOURCE_SCHEDULE",
        "RUSH_HOUR"
      ]
    }
  }
};
