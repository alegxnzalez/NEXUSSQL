// LNM_WORK_ASSIGNMENT_STATUS.js

window.LNM_WORK_ASSIGNMENT_STATUS = {
  "tables": {
    "LNM_WORK_ASSIGNMENT_STATUS": {
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
        "WORK_ASSIGNMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};