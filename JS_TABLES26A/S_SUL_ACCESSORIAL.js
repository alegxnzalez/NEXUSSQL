// S_SUL_ACCESSORIAL.js

window.S_SUL_ACCESSORIAL = {
  "tables": {
    "S_SUL_ACCESSORIAL": {
      "columns": {
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT_LINE",
          "info": "The GID for the ship unit associated with the shipment"
},
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT_LINE",
          "info": "The unique sequence within the ship unit to define the individual line items."
},
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "The accessorial code GID."
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
        "S_SUL_ACCESSORIAL_REMARK"
]
    }
  }
};