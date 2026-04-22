// HTTP_PROFILE_DETAIL.js

window.HTTP_PROFILE_DETAIL = {
  "tables": {
    "HTTP_PROFILE_DETAIL": {
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
        "HTTP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "HTTP_PROFILE"
},
        "PROP_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "PROP_VALUE": {
          "type": "VARCHAR2(250)",
          "nullable": true
},
        "IS_XML": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
}
      },
      "fk_tables": []
    }
  }
};