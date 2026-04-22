// SS_DM_TRANSACTION.js

window.SS_DM_TRANSACTION = {
  "tables": {
    "SS_DM_TRANSACTION": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "DM_TRANSACTION_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DM_TRANSACTION",
          "info": "Contains the unique identifier for the demurrage transaction. "
        },
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier linked to the demurrage transaction. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages. "
        },
        "I_REC_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A unique identifier of equipment children on a tracking event."
        }
      },
      "fk_tables": []
    }
  }
};
