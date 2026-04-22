// GTM_TRANS_LINE_REFERENCE.js

window.GTM_TRANS_LINE_REFERENCE = {
  "tables": {
    "GTM_TRANS_LINE_REFERENCE": {
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
        "QUANTITY_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Defines the quantity value of transaction line that is aggregated to the declaration line. "
        },
        "QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Defines the unit of measure for the value that is aggregated to the declaration line. "
        },
        "GTM_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_QUANTITY_TYPE",
          "info": "The GID used for the trade transaction line quantity qualifier. It is the quantity qualifier of the transaction line aggregated to the declaration line. "
        },
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line that is aggregated to the declaration line. "
        },
        "TRANS_LINE_REF_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the GTM trade transaction line that is aggregated to the declaration line. "
        },
        "IS_PRIMARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies the primary transaction among multiple transactions listed. The values are Y/N. "
        },
        "TRANSACTION_REF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for the GTM trade transaction related to the GTM trade transaction line that is aggregated to the declaration line."
        }
      },
      "fk_tables": []
    }
  }
};
