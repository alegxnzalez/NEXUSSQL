// LOCATION_CAPACITY_GROUP_D.js

window.LOCATION_CAPACITY_GROUP_D = {
  "tables": {
    "LOCATION_CAPACITY_GROUP_D": {
      "columns": {
        "LOCATION_CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_CAPACITY_GROUP"
},
        "LOCATION_CAPACITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_CAPACITY"
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "B",
                    "S"
          ]
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE"
},
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE"
},
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE"
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