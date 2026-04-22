// GTM_LICENSE_LINE_USAGE.js

window.GTM_LICENSE_LINE_USAGE = {
  "tables": {
    "GTM_LICENSE_LINE_USAGE": {
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
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "GTM_LICENSE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "License Line Gid "
        },
        "BALANCE_TYPE": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
            "A",
            "R"
          ],
          "info": "Possible values are \"Reservation\", \"Assignment\". It indicates if License Reservation or Assignment needs to be performed. "
        },
        "D_DOCUMENT_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This holds the Transaction ID the license is reserved or assigned to "
        },
        "D_DOCUMENT_LINE_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This holds the Transaction Line ID "
        },
        "S_DOCUMENT_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This holds the Transaction ID or License ID (Parent ID) "
        },
        "S_DOCUMENT_LINE_ID": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "This holds the Transaction Line ID (Parent Line ID) "
        },
        "QUANTITY_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Quantity "
        },
        "QUANTITY_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "This field holds the 'Unit of Measure' for Quantity. "
        },
        "CURRENCY_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Currency Value "
        },
        "CURRENCY_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Base Currency for value. "
        },
        "REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE",
          "info": "Reason Code "
        },
        "COMMENTS": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Comments "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Exchange Rate "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Exchange Rate Date "
        },
        "BAL_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Quantity assigned or reserved of the request object "
        },
        "BAL_QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "This field holds the 'Unit of Measure' for balance quatity. "
        },
        "BAL_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Value assigned or reserved of the request object "
        },
        "BAL_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "This field holds the type of currency for the Balance Value. eg Rupees or AED. "
        },
        "BAL_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Base currency for balance value. "
        },
        "CURRENCY_VALUE_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "This field holds the type of currency for the quantiyt Value. eg Rupees or AED. "
        },
        "D_DOCUMENT_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Possible value is Transaction Line. "
        },
        "S_DOCUMENT_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Possible value is Transaction Line (Parent Document Type). Supply Document indicates how the demand be it license reservation or assignment request was fulfilled. "
        },
        "ASSIGNED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "This field represents the assigned date. "
        },
        "USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "This field represents the user. "
        },
        "PRECEDING_LL_USAGE_SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "This column contains the sequence number of the preceding license line usage.In a preceding transaction line case,the current license line usage derives its value or quantity from the balance value or quantity of the preceding license line usage. "
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
