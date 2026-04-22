// DRIVER_PROFILE.js

window.DRIVER_PROFILE = {
  "tables": {
    "DRIVER_PROFILE": {
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
        "DRIVER_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "DRIVER_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DRIVER_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
}
      },
      "fk_tables": [
        "DRIVER_PROFILE_D"
]
    }
  }
};