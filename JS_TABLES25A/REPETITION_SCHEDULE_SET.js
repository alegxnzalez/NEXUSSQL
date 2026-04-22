// REPETITION_SCHEDULE_SET.js

window.REPETITION_SCHEDULE_SET = {
  "tables": {
    "REPETITION_SCHEDULE_SET": {
      "columns": {
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
        },
        "REPETITION_SCHEDULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "REPETITION_SCHEDULE_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "REPETITION_SCHEDULE_SET_DESC": {
          "type": "VARCHAR2(128)",
          "nullable": true
        }
      },
      "fk_tables": [
        "REPETITION_SCHEDULE_SET_D"
      ]
    }
  }
};
