// WORK_QUEUE.js

window.WORK_QUEUE = {
  "tables": {
    "WORK_QUEUE": {
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
        "WORK_QUEUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "WORK_QUEUE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SAVED_QUERY"
        },
        "ASSIGNMENT_DURATION": {
          "type": "NUMBER()",
          "nullable": false
        },
        "ASSIGNMENT_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "ASSIGNMENT_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "FILTER_LIMIT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "This field specifies a filter limit to control the number of records to be assigned per user, for WorkQueues in Workbench designer."
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "WORK_QUEUE_ASSIGNMENT"
      ]
    }
  }
};
