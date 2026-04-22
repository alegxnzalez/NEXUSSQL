// ITEM_TYPE.js

window.ITEM_TYPE = {
  "tables": {
    "ITEM_TYPE": {
      "description": "This table contains the different Item Types example Purchase  Item,Manufacture Item,Service Item",
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
        "ITEM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Specifies unique identifier for Item Type across all domains"
},
        "ITEM_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Specifies unique identifier for Item Type in a particular domain"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description for the Item Type"
}
      },
      "fk_tables": [
        "ITEM"
]
    }
  }
};