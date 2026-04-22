// PROCESS_CONTROL_REQUEST.js

window.PROCESS_CONTROL_REQUEST = {
  "tables": {
    "PROCESS_CONTROL_REQUEST": {
      "columns": {
        "PROCESS_CONTROL_REQUEST_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "TOPIC_ALIAS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TOPIC_ALIAS",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "TOPIC_CLASS_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "TOPIC_PARAMETERS": {
          "type": "VARCHAR2(2000)",
          "nullable": true
        },
        "NEXT_PROCESS_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "TIME_WINDOW_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "WORKFLOW_TIME_WINDOW",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "NUM_OF_CYCLES": {
          "type": "NUMBER(5)",
          "nullable": true
        },
        "CYCLE_DURATION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "CYCLE_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "CYCLE_DURATION in base units. "
        },
        "CYCLE_DURATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_SERVER"
        },
        "IS_TRANSIENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        },
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If 'Y', the record is staged by OTM and cannot be modified or deleted by a user. "
        },
        "USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_ROLE",
          "info": "User Role ID "
        },
        "LOG_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOG_PROFILE",
          "info": "The log profile to use for the scheduled process. This should not be used for recurring processes."
        },
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "H",
            "R"
          ]
        }
      },
      "fk_tables": []
    }
  }
};
