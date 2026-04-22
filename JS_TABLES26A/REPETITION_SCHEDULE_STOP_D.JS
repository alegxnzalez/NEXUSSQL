// REPETITION_SCHEDULE_STOP_D.js

window.REPETITION_SCHEDULE_STOP_D = {
  "tables": {
    "REPETITION_SCHEDULE_STOP_D": {
      "columns": {
        "REPETITION_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPETITION_SCHEDULE_STOP"
},
        "SEQUENCE": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPETITION_SCHEDULE_STOP"
},
        "REP_SCHED_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REP_SCHED_ACTIVITY"
},
        "DAY_ADJUSTMENT": {
          "type": "NUMBER(2)",
          "nullable": true
},
        "HOUR_ADJUSTMENT": {
          "type": "NUMBER(2)",
          "nullable": true
},
        "MINUTE_ADJUSTMENT": {
          "type": "NUMBER(2)",
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