// FF_TEXT_PROFILE_QUAL.js

window.FF_TEXT_PROFILE_QUAL = {
  "tables": {
    "FF_TEXT_PROFILE_QUAL": {
      "columns": {
        "FF_TEXT_PROFILE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "FF_TEXT_PROFILE_QUAL_XID": {
          "type": "VARCHAR2(50)",
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
        "FF_TEXT_PROFILE"
]
    }
  }
};