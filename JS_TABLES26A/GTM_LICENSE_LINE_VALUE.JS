// GTM_LICENSE_LINE_VALUE.js

window.GTM_LICENSE_LINE_VALUE = {
  "tables": {
    "GTM_LICENSE_LINE_VALUE": {
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
        "LICENSE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_LICENSE_LINE",
          "info": "The GID for the GTM license line."
},
        "IS_BALANCE_CALC": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates if the balance has been calculated. Values are Y/N."
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_QUALIFIER",
          "info": "The GID for the value qualifier on the license line."
},
        "CURRENCY_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The currency value of the license line."
},
        "CURRENCY_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The currency value in base units."
},
        "CURRENCY_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the value currency on the license line."
}
      },
      "fk_tables": []
    }
  }
};