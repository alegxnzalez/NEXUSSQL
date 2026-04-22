// REPETITION_SCHEDULE_SET_D.js

window.REPETITION_SCHEDULE_SET_D = {
  "tables": {
    "REPETITION_SCHEDULE_SET_D": {
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
          "key_value": true,
          "foreign_key": "REPETITION_SCHEDULE_SET"
},
        "REPETITION_SCHEDULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPETITION_SCHEDULE"
}
      },
      "fk_tables": []
    }
  }
};