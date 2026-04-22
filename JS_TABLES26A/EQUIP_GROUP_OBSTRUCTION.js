// EQUIP_GROUP_OBSTRUCTION.js

window.EQUIP_GROUP_OBSTRUCTION = {
  "tables": {
    "EQUIP_GROUP_OBSTRUCTION": {
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
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The GID for the equipment group that equipment group obstruction is being defined for. Obstructions allow you to configure equipment groups that do not have a uniform rectangular cross-section. For example, there may be support pillars and other vertical objects going from floor to ceiling, or refrigeration units that are boxes on a wall, or tire wells. Obstructions can be specified for the entire equipment (compartment 0) or for individual compartments."
},
        "COMPARTMENT_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The equipment compartment number for which the obstruction is being defined."
},
        "OBSTRUCTION_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Number identifier for the obstruction."
},
        "OBSTRUCTION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name given to obstruction."
},
        "START_LENGTH_POSITION": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The start length position coordinate for the obstruction. The starting coordinate is from the forward left corner of the truck."
},
        "START_LENGTH_POSITION_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The start length position in the base unit of measure."
},
        "START_WIDTH_POSITION": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The start width position coordinate for the obstruction. The starting coordinate is from the forward left corner of the truck."
},
        "START_WIDTH_POSITION_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The start width position in the base unit of measure."
},
        "START_HEIGHT_POSITION": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The start height position coordinate for the obstruction. The starting coordinate is from the forward left corner of the truck."
},
        "START_HEIGHT_POSITION_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The start height position in the base unit of measure."
},
        "OBSTR_LENGTH": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The length of the obstruction."
},
        "OBSTR_LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The length in the base unit of measure."
},
        "OBSTR_WIDTH": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The width of the obstruction."
},
        "OBSTR_WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The width in the base unit of measure."
},
        "OBSTR_HEIGHT": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The height coordinate for the obstruction."
},
        "OBSTR_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The height in the base unit of measure."
},
        "START_LENGTH_POSITION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The start length position unit of measure."
},
        "START_WIDTH_POSITION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The start width position unit of measure."
},
        "START_HEIGHT_POSITION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The start height position unit of measure."
},
        "OBSTR_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The obstruction length unit of measure."
},
        "OBSTR_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The obstruction width unit of measure."
},
        "OBSTR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The obstruction height unit of measure."
}
      },
      "fk_tables": []
    }
  }
};