// I_LOG.js

window.I_LOG = {
  "tables": {
    "I_LOG": {
      "description": "This table contains the audit trail information about the XML transmissions and the transactions within them. The status of the transmission and transactions received, processed or in error is stored per record. The status is stored as I-Information, W-Warning, E-Errors. In other words: The I_LOG table store integration log messages, which include errors, warnings, and informational messages.",
      "columns": {
        "I_LOG_SEQNO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The I_LOG_SEQNO column uniquely identifies each row in the I_LOG table."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The I_TRANSACTION_NO column specifies the transaction to which this log message pertains."
},
        "I_TRANSMISSION_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The I_TRANSMISSION_NO column specifies the transmission to which this log message pertains."
},
        "WRITTEN_BY": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The WRITTEN_BY column specifies the application that wrote this log message."
},
        "I_MESSAGE_CLASS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "I",
                    "E",
                    "W"
          ],
          "info": "The I_MESSAGE_CLASS column indicates if the message is an error (E), warning (W) or informational (I) in nature."
},
        "I_MESSAGE_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "The I_MESSAGE_CODE column is a textual message code. An example is INVALID_DATE_FORMAT."
},
        "I_MESSAGE_TEXT": {
          "type": "CLOB",
          "nullable": true,
          "info": "The I_MESSAGE_TEXT column contains the full text of the message."
},
        "TIME_STAMP": {
          "type": "DATE",
          "nullable": false,
          "info": "The TIME_STAMP column indicates the date and time for when the log message was written."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted.  The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly).  Valid values are 1-4."
},
        "I_MESSAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "PROCESSING_ERROR_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIAG_PROCESS_FAILURE_REASON"
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
        "LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Process ID of process which inserted the log records"
}
      },
      "fk_tables": []
    }
  }
};