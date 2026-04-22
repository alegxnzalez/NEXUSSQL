// REP_SCHED_ACTIVITY.js

window.REP_SCHED_ACTIVITY = {
  "tables": {
    "REP_SCHED_ACTIVITY": {
      "columns": {
        "REP_SCHED_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "REP_SCHED_ACTIVITY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "REPETITION_SCHEDULE_STOP_D"
      ]
    }
  }
};
