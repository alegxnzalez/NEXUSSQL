// ACCESSORIAL_CODE_PROFILE.js

window.ACCESSORIAL_CODE_PROFILE = {
  "tables": {
    "ACCESSORIAL_CODE_PROFILE": {
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
        "ACCESSORIAL_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ACCESSORIAL_CODE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
}
      },
      "fk_tables": [
        "ACCESSORIAL_CODE_PROFILE_D",
        "SC_RULE_CONTRACT"
]
    }
  }
};