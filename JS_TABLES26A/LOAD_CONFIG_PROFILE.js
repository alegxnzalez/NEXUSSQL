// LOAD_CONFIG_PROFILE.js

window.LOAD_CONFIG_PROFILE = {
  "tables": {
    "LOAD_CONFIG_PROFILE": {
      "columns": {
        "LOAD_CONFIG_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LOAD_CONFIG_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LOAD_CONFIG_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
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
      "fk_tables": [
        "LOAD_CONFIG_PROFILE_D",
        "LOAD_CONFIG_SETUP"
]
    }
  }
};