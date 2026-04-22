// DRIVER_CALENDAR_TIME.js

window.DRIVER_CALENDAR_TIME = {
  "tables": {
    "DRIVER_CALENDAR_TIME": {
      "columns": {
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "SHIFT_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "The driver shift date."
},
        "SHIFT_DURATION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The maximum duration the driver can work on a particular date(calendar_shift_date)."
},
        "IS_WORK_ON": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": true
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "CALENDAR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
}
      },
      "fk_tables": []
    }
  }
};