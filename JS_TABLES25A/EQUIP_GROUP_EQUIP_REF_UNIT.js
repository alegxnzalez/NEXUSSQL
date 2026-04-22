// EQUIP_GROUP_EQUIP_REF_UNIT.js

window.EQUIP_GROUP_EQUIP_REF_UNIT = {
  "tables": {
    "EQUIP_GROUP_EQUIP_REF_UNIT": {
      "columns": {
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The GID for the equipment group that equipment reference units are being defined for. "
        },
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The GID for the equipment group reference unit being defined. "
        },
        "NUM_REFERENCE_UNITS": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The maximum number of ERUs that can be held in the compartment. "
        },
        "LIMIT_NUM_REFERENCE_UNITS": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Limit for the number of ERUs. The limit allows you to set an artificial limit to allow the placement of up to a certain number of ERUs and then allows the equipment to be filled with other ERUs. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "COMPARTMENT_NUM": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The equipment compartment number for which the ERU capacity is being defined."
        }
      },
      "fk_tables": []
    }
  }
};
