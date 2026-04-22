// DM_TRANSACTION_REFNUM.js

window.DM_TRANSACTION_REFNUM = {
  "tables": {
    "DM_TRANSACTION_REFNUM": {
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
        "DM_TRANSACTION_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DM_TRANSACTION_REFNUM_QUAL",
          "info": "DM_TRANSACTION_REFNUM_QUAL_GID contains the unique identifier for the reference number (ORDERNUMBER, RESERVATIONNUMBER etc). "
        },
        "DM_TRANSACTION_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "Optional demurrage transaction refnum value"
        }
      },
      "fk_tables": []
    }
  }
};
