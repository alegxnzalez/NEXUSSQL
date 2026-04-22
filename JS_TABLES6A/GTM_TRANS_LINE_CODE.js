// GTM_TRANS_LINE_CODE.js

window.GTM_TRANS_LINE_CODE = {
  "tables": {
    "GTM_TRANS_LINE_CODE": {
      "columns": {
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line. "
        },
        "GTM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "The GID for the GTM type or user-defined type. "
        },
        "GTM_CODE": {
          "type": "VARCHAR2(150)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TYPE_CODE",
          "info": "The corresponding code for the GTM type. "
        },
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
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": []
    }
  }
};
