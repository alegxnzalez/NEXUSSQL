// EQUIP_GROUP_PROFILE_SET.js

window.EQUIP_GROUP_PROFILE_SET = {
  "tables": {
    "EQUIP_GROUP_PROFILE_SET": {
      "columns": {
        "EQUIP_GROUP_PROFILE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 global identifier ofr the entity.  Is created by concatenating Domain Name, '.' and XID."
},
        "EQUIP_GROUP_PROFILE_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external id of the equipment group profile set."
},
        "EQUIP_GROUP_PROFILE_SET_DESC": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A description of the equipment group profile set."
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
      "fk_tables": [
        "CR_FLEET",
        "EQUIP_GROUP_PROFILE_SET_D",
        "LEG"
]
    }
  }
};