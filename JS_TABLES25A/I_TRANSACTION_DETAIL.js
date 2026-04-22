// I_TRANSACTION_DETAIL.js

window.I_TRANSACTION_DETAIL = {
  "tables": {
    "I_TRANSACTION_DETAIL": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Transaction Number. "
        },
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number. "
        },
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Specifies the status of the transaction for the object gid. "
        },
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Specifies the Gid of the Object that was affected by the Transaction. "
        },
        "NEW_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If the processing of the object required obtaining a new i_transaction_no, this field provides a reference to the number.  Note: An i_transaction record may not exist for this new transaction. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false
        },
        "OBJECT_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Specifies the sequence number for the primary key for the object."
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
