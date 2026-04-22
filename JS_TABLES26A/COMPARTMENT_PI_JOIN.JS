// COMPARTMENT_PI_JOIN.js

window.COMPARTMENT_PI_JOIN = {
  "tables": {
    "COMPARTMENT_PI_JOIN": {
      "description": "This table associates the equipment compartments with the packaged items. In GC3 users have the flexibility of defining the compatible Packaged items for a compartment.",
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
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP_COMPARTMENT",
          "info": "The equipment group ID for the compartment to which the packaged item is linked."
},
        "COMPARTMENT_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP_COMPARTMENT",
          "info": "Compartment number for the compartment to which the packaged item."
},
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The packaged item that is linked to the compartment."
}
      },
      "fk_tables": []
    }
  }
};