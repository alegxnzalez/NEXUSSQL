// S_SHIP_UNIT_EQUIP_REF_UNIT.js

window.S_SHIP_UNIT_EQUIP_REF_UNIT = {
  "tables": {
    "S_SHIP_UNIT_EQUIP_REF_UNIT": {
      "columns": {
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT",
          "info": "The GID for the ship unit associated with the shipment."
},
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The equipment reference unit GID for the shipment ship unit."
},
        "NUM_REF_UNITS_PER_SHIP_UNIT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The number of reference units per ship unit for the equipment reference unit GID."
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