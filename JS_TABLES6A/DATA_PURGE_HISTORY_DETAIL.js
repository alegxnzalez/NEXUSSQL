// DATA_PURGE_HISTORY_DETAIL.js

window.DATA_PURGE_HISTORY_DETAIL = {
  "tables": {
    "DATA_PURGE_HISTORY_DETAIL": {
      "columns": {
        "DATA_PURGE_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_PURGE_HISTORY",
          "info": "Data purge sequence number "
        },
        "PURGE_DETAIL_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number for each business type "
        },
        "BUSINESS_OBJECT": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "Business type, which is the table name of top business table "
        },
        "PARENT_TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Parent table name for each purge node "
        },
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Child table name for each node "
        },
        "ACTION_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "DML type, for example, stage, bulk delete and delete by row "
        },
        "TOTAL_ROW_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The row count for the action_type "
        },
        "ERROR_MESSAGE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Error message "
        },
        "DURATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total elapse  time in second for the action "
        },
        "DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Duration UOM "
        },
        "DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Duration base "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain Name"
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
