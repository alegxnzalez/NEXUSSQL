// ASSET_PARENT_LOCATION.js

window.ASSET_PARENT_LOCATION = {
  "tables": {
    "ASSET_PARENT_LOCATION": {
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION"
},
        "PARENT_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION"
},
        "ASSET_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "values": [
                    "EQUIPMENT",
                    "POWER UNIT",
                    "DRIVER"
          ]
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