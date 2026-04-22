// EXPLANATION.js

window.EXPLANATION = {
  "tables": {
    "EXPLANATION": {
      "columns": {
        "EXPLANATION_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "EXPL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GL_USER"
        },
        "EXPL_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "EXPL_PROCESS_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "EXPL_SEVERITY_GID": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "foreign_key": "EXPL_SEVERITY"
        },
        "PARENT_EXPL_ID": {
          "type": "NUMBER(12)",
          "nullable": true
        },
        "SEQ_IN_PARENT_EXPL": {
          "type": "NUMBER(4)",
          "nullable": true
        },
        "SEQ_IN_PARENT_ISSUE": {
          "type": "NUMBER(4)",
          "nullable": true
        },
        "SEQ_IN_PARENT_CAUSE": {
          "type": "NUMBER(4)",
          "nullable": true
        },
        "LOG_PROCESS_ID": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PROCESS_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE"
        },
        "EXPLANATION_CLOB": {
          "type": "CLOB",
          "nullable": true
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
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
      "fk_tables": []
    }
  }
};
