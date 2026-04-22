// PKG_ITEM_EQUIP_REF_UNIT_JOIN.js

window.PKG_ITEM_EQUIP_REF_UNIT_JOIN = {
  "tables": {
    "PKG_ITEM_EQUIP_REF_UNIT_JOIN": {
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
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The GID for the packaged item related to the equipment reference unit information being added, updated, or removed."
},
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "ERU for the packaged item"
},
        "NUM_REFERENCE_UNITS": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The number of reference units per package for ERU."
}
      },
      "fk_tables": []
    }
  }
};