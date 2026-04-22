// EQUIP_GROUP_PROFILE_SET_D.js

window.EQUIP_GROUP_PROFILE_SET_D = {
  "tables": {
    "EQUIP_GROUP_PROFILE_SET_D": {
      "columns": {
        "EQUIP_GROUP_PROFILE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIP_GROUP_PROFILE_SET",
          "info": "The GC3 global identifier of the equipment group profile set. "
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "The GC3 global identifier of the equipment group to be included in the set."
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
