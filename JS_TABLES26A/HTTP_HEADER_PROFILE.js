// HTTP_HEADER_PROFILE.js

window.HTTP_HEADER_PROFILE = {
  "tables": {
    "HTTP_HEADER_PROFILE": {
      "description": "This table holds a list of custom HTTP header parameters.",
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
          "key_value": true,
          "info": "The GID for the http_header_profile."
},
        "HTTP_HEADER_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the http_header_profile."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "EXTERNAL_SYSTEM",
        "HTTP_HEADER",
        "REST_HTTP_HEADER_PROFILE",
        "XML_HTTP_HEADER_PROFILE"
]
    }
  }
};