// PKG_ITEM_ACCESSORIAL_REMARK.js

window.PKG_ITEM_ACCESSORIAL_REMARK = {
  "tables": {
    "PKG_ITEM_ACCESSORIAL_REMARK": {
      "columns": {
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PKG_ITEM_ACCESSORIAL",
          "info": "The GID for the packaged item."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PKG_ITEM_ACCESSORIAL",
          "info": "The accessorial code GID."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The remark sequence associated with the packaged item"
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "The remark qualifier identifier defining the remark code."
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "The text associated to the remark code."
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