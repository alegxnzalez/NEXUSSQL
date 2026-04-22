// I_TRANSACTION_REFNUM.js

window.I_TRANSACTION_REFNUM = {
  "tables": {
    "I_TRANSACTION_REFNUM": {
      "columns": {
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Transaction number uniquely defines the Transaction. "
        },
        "I_TRANSACTION_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "I_TRANSACTION_REFNUM_QUAL",
          "info": "Transaction reference number qualifier. "
        },
        "REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "Reference number value. "
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
