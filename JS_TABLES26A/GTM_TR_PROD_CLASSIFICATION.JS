// GTM_TR_PROD_CLASSIFICATION.js

window.GTM_TR_PROD_CLASSIFICATION = {
  "tables": {
    "GTM_TR_PROD_CLASSIFICATION": {
      "columns": {
        "GTM_TR_PROD_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the product classification assigned to the GTM trade transaction line."
},
        "GTM_TR_PROD_CLASSIFICATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the product classification assigned to the GTM trade transaction line."
},
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_CODE",
          "info": "The GID for the product classification code assigned to the GTM trade transaction line."
},
        "IS_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Used to indicate if the assigned product classification code is fixed and should not be changed."
},
        "TRADE_DIRECTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "I",
                    "E"
          ],
          "info": "Trade Direction of the product classification. This field is deprecated and should not be used."
},
        "GTM_PRODUCT_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE",
          "info": "The GID for the product classification type assigned to the GTM trade transaction line."
},
        "BINDING_RULING_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "BINDING_RULING_EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "BINDING_RULING_EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates expiration date of binding ruling."
},
        "GTM_PROD_CLASS_PURPOSE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_PURPOSE",
          "info": "The GID of product classification purpose added to GTM Trade Transaction Line."
},
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Classification code for an item."
}
      },
      "fk_tables": []
    }
  }
};