// BUSINESS_PROCESS_LOG.js

window.BUSINESS_PROCESS_LOG = {
  "tables": {
    "BUSINESS_PROCESS_LOG": {
      "columns": {
        "BUSINESS_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BUSINESS_PROCESS"
},
        "SEQUENCE_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true
},
        "MESSAGE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "USER_KEY": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "DIAGNOSTICS": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "MACRO_ARGUMENTS": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "DAY_OF_WEEK": {
          "type": "NUMBER",
          "nullable": true
},
        "TIME_STAMP": {
          "type": "DATE",
          "nullable": true
},
        "STACK_TRACE": {
          "type": "CLOB",
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