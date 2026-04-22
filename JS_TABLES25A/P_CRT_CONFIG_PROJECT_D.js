// P_CRT_CONFIG_PROJECT_D.js

window.P_CRT_CONFIG_PROJECT_D = {
  "tables": {
    "P_CRT_CONFIG_PROJECT_D": {
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
        "P_CRT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_CRT_CONFIG"
        },
        "P_CRT_PROJECT_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "P_CRT_PROJECT_FIELD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "COLOR": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "FONT": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "FONT_STYLE": {
          "type": "VARCHAR2(25)",
          "nullable": true
        },
        "SEQUENCE_NUMBER": {
          "type": "NUMBER()",
          "nullable": false
        },
        "IS_SELECTED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_HIDDEN": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_LOCKED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "DEFAULT_DISPLAY_NAME": {
          "type": "VARCHAR2(300)",
          "nullable": true
        },
        "DISPLAY_NAME": {
          "type": "VARCHAR2(300)",
          "nullable": true
        },
        "IS_BIDDABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        }
      },
      "fk_tables": []
    }
  }
};
