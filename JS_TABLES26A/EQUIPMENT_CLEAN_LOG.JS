// EQUIPMENT_CLEAN_LOG.js

window.EQUIPMENT_CLEAN_LOG = {
  "tables": {
    "EQUIPMENT_CLEAN_LOG": {
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
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT",
          "info": "ID of the Equipment that was cleaned."
},
        "CLEAN_TIME": {
          "type": "DATE",
          "nullable": false,
          "key_value": true,
          "info": "Time at which the equipment was cleaned"
},
        "COMP_NUM_CLEANED": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The Compartment number of the equipment that was cleaned."
}
      },
      "fk_tables": []
    }
  }
};