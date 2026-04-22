// DAMAGE_NOTIFY_POINT.js

window.DAMAGE_NOTIFY_POINT = {
  "tables": {
    "DAMAGE_NOTIFY_POINT": {
      "description": "User defined codes for damage notification point such as Port of Load or In Vessel",
      "columns": {
        "DAMAGE_NOTIFY_POINT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Code for damage notification point"
},
        "DAMAGE_NOTIFY_POINT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Description for damage notify point code"
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
        "CLAIM"
]
    }
  }
};