// GTM_TRANS_LINE_QUANTITY.js

window.GTM_TRANS_LINE_QUANTITY = {
  "tables": {
    "GTM_TRANS_LINE_QUANTITY": {
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
        "GTM_TRANS_LINE_QTY_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number of the quantity on the trade transaction line. "
        },
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line. "
        },
        "UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The unit of measure of the quantity on the trade transaction line. "
        },
        "QUANTITY_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The value of the quantity on the trade transaction line. "
        },
        "GTM_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_QUANTITY_TYPE",
          "info": "The GID for the GTM quantity qualifier."
        }
      },
      "fk_tables": []
    }
  }
};
