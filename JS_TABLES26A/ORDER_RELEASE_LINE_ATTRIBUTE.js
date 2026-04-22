// ORDER_RELEASE_LINE_ATTRIBUTE.js

window.ORDER_RELEASE_LINE_ATTRIBUTE = {
  "tables": {
    "ORDER_RELEASE_LINE_ATTRIBUTE": {
      "columns": {
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "The GID for the order release line."
},
        "ITEM_FEATURE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM_FEATURE_QUAL",
          "info": "The item feature qualifier GID defining what type of feature with which this value is associated."
},
        "ITEM_FEATURE_VALUE": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "key_value": true,
          "info": "The item feature value for the order release line. This allows for future structural definition of an item such as size and color."
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
}
      },
      "fk_tables": []
    }
  }
};