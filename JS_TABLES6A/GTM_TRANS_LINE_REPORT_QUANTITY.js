// GTM_TRANS_LINE_REPORT_QUANTITY.js

window.GTM_TRANS_LINE_REPORT_QUANTITY = {
  "tables": {
    "GTM_TRANS_LINE_REPORT_QUANTITY": {
      "columns": {
        "GTLRQ_SEQ_NUM": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number of the quantity on the trade transaction line. "
        },
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction Line. "
        },
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "The GID for the product classification type for the reporting quantity. "
        },
        "GTM_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_QUANTITY_TYPE",
          "info": "The GID for the GTM quantity qualifier for the reporting quantity. "
        },
        "QUANTITY_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The value of the quantity on the trade transaction line for the reporting quantity. "
        },
        "UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The unit of measure of the quantity on the trade transaction line for the reporting quantity. "
        },
        "ATTRIBUTE_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Refers to the unit of measure selected in uom_code. For example, REPORTING UOM1. "
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
          "info": "Date and time of the most recent data update. "
        },
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_CODE",
          "info": "The GID for the product classification code for the reporting quantity."
        }
      },
      "fk_tables": []
    }
  }
};
