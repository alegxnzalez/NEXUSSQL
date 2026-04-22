// WORK_QUEUE_ASSIGNMENT.js

window.WORK_QUEUE_ASSIGNMENT = {
  "tables": {
    "WORK_QUEUE_ASSIGNMENT": {
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
        "WORK_QUEUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "WORK_QUEUE"
},
        "OBJECT_ID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GL_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "foreign_key": "GL_USER"
},
        "ASSIGNMENT_TIMEOUT": {
          "type": "DATE",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};