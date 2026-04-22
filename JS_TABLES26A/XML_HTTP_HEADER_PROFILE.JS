// XML_HTTP_HEADER_PROFILE.js

window.XML_HTTP_HEADER_PROFILE = {
  "tables": {
    "XML_HTTP_HEADER_PROFILE": {
      "description": "Maps XML Elements to a HTTP header profile in an external system.",
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
        "HTTP_HEADER_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "HTTP_HEADER_PROFILE"
},
        "XML_ELEMENT": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "key_value": true
},
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXTERNAL_SYSTEM"
}
      },
      "fk_tables": []
    }
  }
};