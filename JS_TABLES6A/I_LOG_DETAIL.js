// I_LOG_DETAIL.js

window.I_LOG_DETAIL = {
  "tables": {
    "I_LOG_DETAIL": {
      "columns": {
        "I_LOG_DETAIL_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "I_LOG_DETAIL_SEQNO provides a sequence number for a transaction. "
        },
        "I_LOG_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "A pointer back to the log sequence number from I_Log table. "
        },
        "I_LOG_DETAIL_QUAL": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "I_LOG_DETAIL_QUAL provides the application name, transaction code and transaction number for an XML transaction. "
        },
        "I_LOG_DETAIL_VALUE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The actual value for log detail. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted.  The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly).  Valid values are 1-4."
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
