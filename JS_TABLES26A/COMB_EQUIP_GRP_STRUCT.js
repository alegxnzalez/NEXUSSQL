// COMB_EQUIP_GRP_STRUCT.js

window.COMB_EQUIP_GRP_STRUCT = {
  "tables": {
    "COMB_EQUIP_GRP_STRUCT": {
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
        "COMB_EQUIP_GRP_STRUCT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Combination equipment group structure sequence number."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(400)",
          "nullable": false,
          "info": "Description of the combination equipment group."
}
      },
      "fk_tables": [
        "COMB_EQUIP_GRP_STRUCT_D",
        "EQUIPMENT_GROUP"
]
    }
  }
};