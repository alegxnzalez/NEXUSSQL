// QUOTE_COST_OPTION_EQUIPMENT.js

window.QUOTE_COST_OPTION_EQUIPMENT = {
  "tables": {
    "QUOTE_COST_OPTION_EQUIPMENT": {
      "description": "Equipment cost options for quote",
      "columns": {
        "QUOTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE_COST_OPTION",
          "info": "The GID for the quote."
},
        "COST_OPTION_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QUOTE_COST_OPTION",
          "info": "Option Number: Each possible cost option is assigned an Option Number."
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The GID for the equipment group for this option."
},
        "EQUIPMENT_GROUP_COUNT": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "Count for the equipment group assigned to the cost option."
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