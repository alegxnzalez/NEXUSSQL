// USER_ACCESS.js

window.USER_ACCESS = {
  "tables": {
    "USER_ACCESS": {
      "columns": {
        "USER_ACCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "USER_ACCESS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_USER"
        },
        "IS_LOCKDOWN": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "IS_OVERRIDE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "ACCESS_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GL_LEVEL": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_ROLE"
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
        "APP_ACTION_CHECK_ACCESS",
        "APP_ACTION_MORG_ACCESS",
        "APP_ACTION_REASON_ACCESS",
        "APP_POWER_ACTION_ACCESS",
        "ASK_OTM_SAVED_QUERY_ACCESS",
        "BUSINESS_MONITOR_ACCESS",
        "DEFAULT_FINDER_SET_ACCESS",
        "FINDER_SET_ACCESS",
        "GLOBAL_SEARCH_ACCESS",
        "MOBILE_ACTION_ACCESS",
        "SAVED_QUERY_ACCESS",
        "SETTING_ACTION_ACCESS",
        "USER_MENU_ACCESS",
        "USER_PREFERENCE_ACCESS",
        "USER_WS_REPORT_ACCESS",
        "WORKBENCH_ACCESS"
      ]
    }
  }
};
