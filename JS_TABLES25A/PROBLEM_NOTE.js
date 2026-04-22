// PROBLEM_NOTE.js

window.PROBLEM_NOTE = {
  "tables": {
    "PROBLEM_NOTE": {
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
        "PROBLEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PROBLEM"
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GL_USER"
        },
        "PROBLEM_NOTE": {
          "type": "CLOB",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
