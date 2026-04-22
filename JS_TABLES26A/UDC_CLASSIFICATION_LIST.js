// UDC_CLASSIFICATION_LIST.js

window.UDC_CLASSIFICATION_LIST = {
  "tables": {
    "UDC_CLASSIFICATION_LIST": {
      "description": "List of user defined commodities.   This can be attached to an item, so the item can be classified in multiple ways.",
      "columns": {
        "UDC_CLASSIFICATION_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique ID for name of list."
},
        "UDC_CLASSIFICATION_LIST_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "ID for name of list."
},
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
}
      },
      "fk_tables": [
        "ITEM",
        "QUOTE_SHIP_UNIT",
        "UDC_CLASSIFICATION_LIST_D"
]
    }
  }
};