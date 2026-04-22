// GTM_TRANS_TYPE_PROFILE_D.js

window.GTM_TRANS_TYPE_PROFILE_D = {
  "tables": {
    "GTM_TRANS_TYPE_PROFILE_D": {
      "columns": {
        "GTM_TRANS_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_TYPE_PROFILE",
          "info": "Transaction Type Profile GID "
        },
        "GTM_TRANSACTION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION_TYPE",
          "info": "Transaction Type GID"
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
