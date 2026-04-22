// P_CRT_CONFIG_D.js

window.P_CRT_CONFIG_D = {
  "tables": {
    "P_CRT_CONFIG_D": {
      "columns": {
        "P_CRT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "P_CRT_CONFIG"
        },
        "IS_HIDDEN": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_LOCKED": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "COLOR": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "DATA_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true
        },
        "DATA_VALIDATION_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "DATA_VALIDATION_VALUE": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "DATA_FORMAT": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "FONT": {
          "type": "VARCHAR2(25)",
          "nullable": true
        },
        "FONT_STYLE": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "FONT_SIZE": {
          "type": "NUMBER()",
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
        },
        "SEQUENCE_NUMBER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Column to save the Sequence number for a CRT configuration"
        },
        "IS_SELECTED": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_INCLUDED_IN_COMPUTED_COST": {
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
        "RATE_LOAD_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_LOAD_FIELD"
        },
        "IS_BIDDABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "RATE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
