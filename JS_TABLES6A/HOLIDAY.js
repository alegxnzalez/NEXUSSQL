// HOLIDAY.js

window.HOLIDAY = {
  "tables": {
    "HOLIDAY": {
      "columns": {
        "HOLIDAY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "HOLIDAY_GID is the unique identifier for a holiday. "
        },
        "HOLIDAY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "HOLIDAY_XID is the unique external identifier for a holiday. "
        },
        "HOLIDAY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "HOLIDAY_NAME contains text to describe the name of the holiday. "
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "START_DATE contains the effective date for the holiday. "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "END_DATE contains the ending date of the holiday."
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
        "HOLIDAY_PROFILE_DETAIL"
      ]
    }
  }
};
