// MESSAGE_CODE_MAP.js

window.MESSAGE_CODE_MAP = {
  "tables": {
    "MESSAGE_CODE_MAP": {
      "columns": {
        "MESSAGE_CODE_MAP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "MESSAGE_CODE_MAP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
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
        "MESSAGE_CODE_MAP_D",
        "STYLESHEET_PROFILE_SET_FIELD"
]
    }
  }
};