// MESSAGE_CODE_MAP_D.js

window.MESSAGE_CODE_MAP_D = {
  "tables": {
    "MESSAGE_CODE_MAP_D": {
      "columns": {
        "MESSAGE_CODE_MAP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MESSAGE_CODE_MAP"
},
        "SOURCE": {
          "type": "VARCHAR2(65)",
          "nullable": false,
          "key_value": true
},
        "VALUE": {
          "type": "VARCHAR2(255)",
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
}
      },
      "fk_tables": []
    }
  }
};