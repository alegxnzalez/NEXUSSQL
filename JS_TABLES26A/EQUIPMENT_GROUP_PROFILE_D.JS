// EQUIPMENT_GROUP_PROFILE_D.js

window.EQUIPMENT_GROUP_PROFILE_D = {
  "tables": {
    "EQUIPMENT_GROUP_PROFILE_D": {
      "description": "This table combines the various equipment groups into equipment profiles. For example 28Ft. Dry Vans, 40Ft. Dry Vans and 42Ft. Dry Vans can be grouped under 'Dry Vans' profile. The profiles are used by the Equipment_Group_Profile table to identify the compatibility between equipment groups.",
      "columns": {
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "EQUIPMENT_GROUP_PROFILE_GID is the unique identifier for the equipment group profile."
},
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "EQUIPMENT_GROUP_GID is the unique identifier for the equipment group."
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