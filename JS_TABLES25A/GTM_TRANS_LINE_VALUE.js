// GTM_TRANS_LINE_VALUE.js

window.GTM_TRANS_LINE_VALUE = {
  "tables": {
    "GTM_TRANS_LINE_VALUE": {
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
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line. "
        },
        "CURRENCY_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The currency value of the trade transaction line. "
        },
        "CURRENCY_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The currency value in base units. "
        },
        "CURRENCY_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the value currency on the trade transaction line. "
        },
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The GID for the value qualifier on the trade transaction line. "
        },
        "GTM_FORMULA_EXPRESSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_FORMULA_EXPRESSION",
          "info": "Formula(If any) associated with the value qualifier. "
        },
        "VALUE_NOTE": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "A note that shows how the value qualifier is calculated. "
        },
        "METHOD_OF_CALCULATION": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
            "M",
            "F",
            "EC"
          ],
          "info": "Shows how the currency value should be calculated either manually or by using a formula. "
        },
        "IS_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If this is set to false, the currency values can be overridden with the values calculated from formula or any other process. "
        },
        "VALUE_SET_COMP_RULE_GRP_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "Compliance rule group ID used to assign value set to the transaction line. "
        },
        "VALUE_FORMULA_COMP_RULE_GRP_ID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "Compliance rule group ID used to assign formula to the value qualifiers on the transaction line. "
        },
        "XML_CLOB": {
          "type": "CLOB",
          "nullable": true,
          "info": "N/A "
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The payment method. It is a foreign key to PAYMENT_METHOD_CODE table. "
        },
        "RC_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The reporting currency value. "
        },
        "RC_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The reporting currency. It is a foreign key to CURRENCY table."
        }
      },
      "fk_tables": [
        "GTM_TRANS_LINE_VALUE_D",
        "GTM_TRANS_LINE_VALUE_DETAIL"
      ]
    }
  }
};
