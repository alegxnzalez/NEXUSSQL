// LOCATION_OVERRIDE.js

window.LOCATION_OVERRIDE = {
  "tables": {
    "LOCATION_OVERRIDE": {
      "columns": {
        "LOCATION_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LOCATION_OVERRIDE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION"
},
        "OVERRIDE_LOCATION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "OVERRIDE_CITY": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "OVERRIDE_PROVINCE": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "OVERRIDE_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "OVERRIDE_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "OVERRIDE_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
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
        "LOCATION_OVERRIDE_ADDRESS",
        "ORDER_RELEASE",
        "SHIPMENT",
        "SHIPMENT_STOP"
]
    }
  }
};