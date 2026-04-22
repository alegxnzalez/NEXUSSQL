// S_EQUIPMENT_ATTRIBUTE.js

window.S_EQUIPMENT_ATTRIBUTE = {
  "tables": {
    "S_EQUIPMENT_ATTRIBUTE": {
      "columns": {
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_EQUIPMENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "EQUIPMENT_ATTRIBUTE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_ATTRIBUTE_QUAL",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "EQUIPMENT_ATTRIBUTE_VALUE": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true,
          "info": "Value associated with this S_EQUIPMENT for the given Equipment Attribute Qualifier."
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
      "fk_tables": []
    }
  }
};