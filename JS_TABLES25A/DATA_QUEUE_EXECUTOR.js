// DATA_QUEUE_EXECUTOR.js

window.DATA_QUEUE_EXECUTOR = {
  "tables": {
    "DATA_QUEUE_EXECUTOR": {
      "columns": {
        "DATA_QUEUE_EXECUTOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Global ID for the data queue executor "
        },
        "DATA_QUEUE_EXECUTOR_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Data queue executor ID "
        },
        "JAVA_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "JAVA_PLUGIN",
          "info": "JAVA_PLUGIN must have a PLUGIN_USE_TYPE of 'DATA QUEUE EXECUTOR' "
        },
        "REDO_ACTIVE_EVENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, ACTIVE events should automatically be set to QUEUED on server restart "
        },
        "REDO_FAILED_EVENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, FAILED events should automatically be set to QUEUED on server restart"
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
        }
      },
      "fk_tables": [
        "DATA_QUEUE_DEF"
      ]
    }
  }
};
