// SS_EVENT.js

window.SS_EVENT = {
  "tables": {
    "SS_EVENT": {
      "description": "Processing fields for tracking event",
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for this status event."
},
        "PROCESSING_STATUS": {
          "type": "VARCHAR2(32)",
          "nullable": true,
          "values": [
                    "FRESH",
                    "PROCESSED MATCHED",
                    "PROCESSED NO MATCH",
                    "REDO",
                    "PROCESSING ERROR",
                    "MARKED AS ERROR"
          ],
          "info": "The processing status associated with the transaction. For example: fresh, processed matched, processed no match, error."
},
        "BS_EVENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_EVENT_GROUP",
          "info": "The business event group identifier ties together the status codes and reason codes that are valid. This is associated with the tracking event entered."
},
        "RELATED_EVENT_NO": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The identifier to the related event."
},
        "PROCESSING_ERROR_CODE_GID": {
          "type": "VARCHAR2(2001)",
          "nullable": true,
          "foreign_key": "DIAG_PROCESS_FAILURE_REASON",
          "info": "The translation key for the event processing error."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};