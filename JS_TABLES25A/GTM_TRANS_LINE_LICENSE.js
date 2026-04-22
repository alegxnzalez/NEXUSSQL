// GTM_TRANS_LINE_LICENSE.js

window.GTM_TRANS_LINE_LICENSE = {
  "tables": {
    "GTM_TRANS_LINE_LICENSE": {
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
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line. "
        },
        "LICENSE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_LICENSE_LINE",
          "info": "The GID for the GTM license line. "
        },
        "GTM_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_QUANTITY_TYPE",
          "info": "The GID for the GTM quantity qualifier. "
        },
        "QUANTITY_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The value of the license line quantity allocated to the trade transaction line. "
        },
        "QUANTITY_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure of the license line quantity allocated to the trade transaction line. "
        },
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The GID for the GTM value qualifier. "
        },
        "LICENSE_EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The expiration date of the license assigned to the trade transaction line. "
        },
        "USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for GTM user which assigned the license to the trade transaction line. "
        },
        "ASSIGNED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date that the license is assigned to the trade transaction line. "
        },
        "COMMENTS": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Comments. "
        },
        "CURRENCY_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The currency value of the license line assigned to the trade transaction. "
        },
        "CURRENCY_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The currency value in base units of the license line assigned to the trade transaction. "
        },
        "CURRENCY_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the value currency. "
        },
        "GTM_TRANS_LINE_LICENSE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number for the license line assigned to the trade transaction. "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "The Exchange Rate ID used for value conversion between the license and the trade transaction. It is foreign key reference to EXCHANGE_RATE table. "
        },
        "RATE_EXCHANGE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The Exchange Rate date used for value conversion between the license and the trade transaction. "
        },
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The control type being released by the license line assigned to the trade transaction. "
        },
        "CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The control code being released by the license line assigned to the trade transaction. "
        },
        "GTM_LL_USAGE_SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The sequence number of the license line usage. "
        },
        "TRANSACTION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Transaction date is set on performing license assignment based on the date qualifier configured on license code option."
        }
      },
      "fk_tables": []
    }
  }
};
