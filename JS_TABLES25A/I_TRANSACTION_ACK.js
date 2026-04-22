// I_TRANSACTION_ACK.js

window.I_TRANSACTION_ACK = {
  "tables": {
    "I_TRANSACTION_ACK": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The Transaction numer referring to the Transaction for the Ack. "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number to uniquely identify the Transaction Ack for the Transaction. "
        },
        "ACK_STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Specifies the status provided in the Transaction Ack. "
        },
        "ACK_REASON": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Specifies the reason for the status provided within the Transaction Ack. "
        },
        "REF_TRANSACTION_ID": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Represents a Transaction ID assigned for the Transaction from the external system. "
        },
        "REF_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Represents the Transaction record containing the xml for this Transaction Ack. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted. The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly). Valid values are 1-4."
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
