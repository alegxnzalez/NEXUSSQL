// DATA_SOURCE_PROFILE.js

window.DATA_SOURCE_PROFILE = {
  "tables": {
    "DATA_SOURCE_PROFILE": {
      "columns": {
        "DATA_SOURCE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "DATA_SOURCE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "R",
                    "H"
          ]
}
      },
      "fk_tables": [
        "DATA_SOURCE_PROFILE_D",
        "DATA_SOURCE_PROFILE_UR",
        "USER_ROLE"
]
    }
  }
};