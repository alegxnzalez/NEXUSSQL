// TIME_WINDOW_WEEKLY_D.js

window.TIME_WINDOW_WEEKLY_D = {
  "tables": {
    "TIME_WINDOW_WEEKLY_D": {
      "columns": {
        "TIME_WINDOW_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TIME_WINDOW"
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "DAY_OF_WEEK": {
          "type": "VARCHAR2(3)",
          "nullable": false,
          "values": [
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT",
            "SUN"
          ]
        },
        "START_TIME": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Time point start time in seconds, starting from 00:00 midnight. "
        },
        "END_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "End time in seconds, starting from 00:00 midnight."
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
