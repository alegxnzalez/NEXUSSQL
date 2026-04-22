// STYLESHEET_PROFILE_SET_FIELD.js

window.STYLESHEET_PROFILE_SET_FIELD = {
  "tables": {
    "STYLESHEET_PROFILE_SET_FIELD": {
      "description": "Used to specify the fields on the message table that should be set from the message format.",
      "columns": {
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STYLESHEET_PROFILE"
},
        "FIELD_NAME": {
          "type": "VARCHAR2(65)",
          "nullable": false,
          "key_value": true
},
        "ARG_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": true
},
        "ASSIGN_TYPE": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "values": [
                    "ARG",
                    "MAP"
          ]
},
        "MESSAGE_CODE_MAP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MESSAGE_CODE_MAP"
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