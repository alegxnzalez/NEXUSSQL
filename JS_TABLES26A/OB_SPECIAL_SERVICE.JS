// OB_SPECIAL_SERVICE.js

window.OB_SPECIAL_SERVICE = {
  "tables": {
    "OB_SPECIAL_SERVICE": {
      "description": "This table links to the special services required for the base order. The special services differ from the accessories in that the customer does not pay for special services.",
      "columns": {
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The GID for the order base."
},
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SPECIAL_SERVICE",
          "info": "The special service code identifier defining the service required."
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