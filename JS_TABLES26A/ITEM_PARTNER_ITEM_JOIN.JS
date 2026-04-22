// ITEM_PARTNER_ITEM_JOIN.js

window.ITEM_PARTNER_ITEM_JOIN = {
  "tables": {
    "ITEM_PARTNER_ITEM_JOIN": {
      "description": "This table holds the association bewtween Item and Partner Item",
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
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ITEM",
          "info": "The GID for the item associated with the partner item."
},
        "PARTNER_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PARTNER_ITEM",
          "info": "The GID for the partner item."
}
      },
      "fk_tables": []
    }
  }
};