// IATA_SCR_CODE.js

window.IATA_SCR_CODE = {
  "tables": {
    "IATA_SCR_CODE": {
      "columns": {
        "IATA_SCR_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "IATA_SCR_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "IATA_SCR_CODE_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
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
        "FLEX_COMMODITY_PROFILE_D",
        "ITEM",
        "QUOTE_SHIP_UNIT"
]
    }
  }
};