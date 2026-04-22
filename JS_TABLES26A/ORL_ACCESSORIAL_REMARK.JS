// ORL_ACCESSORIAL_REMARK.js

window.ORL_ACCESSORIAL_REMARK = {
  "tables": {
    "ORL_ACCESSORIAL_REMARK": {
      "columns": {
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_LINE_ACCESSORIAL",
          "info": "A unique identifier to define the multiple order release lines per order release."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_LINE_ACCESSORIAL",
          "info": "The accessorial code GID."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The remark sequence associated with the order release line"
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