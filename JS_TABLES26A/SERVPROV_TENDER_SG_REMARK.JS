// SERVPROV_TENDER_SG_REMARK.js

window.SERVPROV_TENDER_SG_REMARK = {
  "tables": {
    "SERVPROV_TENDER_SG_REMARK": {
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
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SG_SERVPROV",
          "info": "To identify the servprov who entered the comment."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "SERVPROV_SHIPPER_QUAL": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL"
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true
},
        "SHIP_GROUP_TENDER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TENDER_COLLAB_SG_SERVPROV",
          "info": "A unique identifier to identify the ship group tender."
}
      },
      "fk_tables": []
    }
  }
};