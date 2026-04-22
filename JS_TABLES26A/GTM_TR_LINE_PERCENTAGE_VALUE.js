// GTM_TR_LINE_PERCENTAGE_VALUE.js

window.GTM_TR_LINE_PERCENTAGE_VALUE = {
  "tables": {
    "GTM_TR_LINE_PERCENTAGE_VALUE": {
      "description": "A generic key/value representation to capture all possible percentage information.",
      "columns": {
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
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line."
},
        "GTM_PERCENTAGE_VALUE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PERCENTAGE_VALUE_QUAL",
          "info": "The GID for the percentage value qualifier associated with the GTM trade transaction line."
},
        "PERCENTAGE_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The percentage value associated with the GTM trade transaction line."
}
      },
      "fk_tables": []
    }
  }
};