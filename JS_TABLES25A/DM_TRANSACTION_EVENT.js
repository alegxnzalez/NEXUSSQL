// DM_TRANSACTION_EVENT.js

window.DM_TRANSACTION_EVENT = {
  "tables": {
    "DM_TRANSACTION_EVENT": {
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
        "DM_TRANSACTION_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DM_TRANSACTION",
          "info": "DM_TRANSACTION_SEQ_NO contains the unique identifier for the demurrage transaction. "
        },
        "BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "An external event ID. Within OTM external events are referred by status_code_gid. "
        },
        "EVENT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and Time of the event."
        }
      },
      "fk_tables": []
    }
  }
};
