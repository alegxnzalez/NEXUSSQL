// CONSOL_EQUIP_GROUP_D.js

window.CONSOL_EQUIP_GROUP_D = {
  "tables": {
    "CONSOL_EQUIP_GROUP_D": {
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
        "CONSOL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONSOL",
          "info": "The GID for the consol."
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The equipment group ID for the container being requested on the consol type - booking."
},
        "EQUIPMENT_GROUP_QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The number of equipment desired for the group specified."
}
      },
      "fk_tables": []
    }
  }
};