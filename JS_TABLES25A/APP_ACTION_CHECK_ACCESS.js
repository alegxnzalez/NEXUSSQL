// APP_ACTION_CHECK_ACCESS.js

window.APP_ACTION_CHECK_ACCESS = {
  "tables": {
    "APP_ACTION_CHECK_ACCESS": {
      "columns": {
        "USER_ACTION_CHECK_ACCESS_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "USER_ACCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "USER_ACCESS"
        },
        "APP_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "APP_ACTION"
        },
        "IS_POST_CHECK": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "ALLOW_SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION"
        },
        "ALLOW_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JAVA_PLUGIN"
        },
        "ALLOW_CAUSE_MSG_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION"
        },
        "ALLOW_SOLUTION_MSG_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION"
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
