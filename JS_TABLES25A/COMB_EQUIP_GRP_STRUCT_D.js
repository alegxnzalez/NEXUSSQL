// COMB_EQUIP_GRP_STRUCT_D.js

window.COMB_EQUIP_GRP_STRUCT_D = {
  "tables": {
    "COMB_EQUIP_GRP_STRUCT_D": {
      "columns": {
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
        "COMB_EQUIP_GRP_STRUCT_D_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Combination equipment group structure detailed sequence number. "
        },
        "COMB_EQUIP_GRP_STRUCT_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "foreign_key": "COMB_EQUIP_GRP_STRUCT",
          "info": "Combination equipment group structure sequence number. "
        },
        "CHILD_EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "Child equipment group assigned to the combination equipment group. "
        },
        "CHILD_EQUIP_GRP_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Child equipment group sequence number."
        }
      },
      "fk_tables": []
    }
  }
};
