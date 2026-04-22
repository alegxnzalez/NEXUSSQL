// DRIVER_HOS_RULE_STATE.js

window.DRIVER_HOS_RULE_STATE = {
  "tables": {
    "DRIVER_HOS_RULE_STATE": {
      "columns": {
        "DRIVER_ASSIGNMENT_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DRIVER_ASSIGNMENT"
        },
        "HOS_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "HOS_RULE"
        },
        "ACTIVITY_TIME_UTILIZED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Amount of time that has be used against the HOS Rule since the last rest duration. "
        },
        "ACTIVITY_TIME_UTILIZE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ACTIVITY_TIME_UTILIZE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "RULE_BEGIN_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "ACTIVITY_TIME_REMAIN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Amount of time that can be used against the HOS Rule before the next rest duration."
        },
        "ACTIVITY_TIME_REMAIN_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ACTIVITY_TIME_REMAIN_BASE": {
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
        }
      },
      "fk_tables": []
    }
  }
};
