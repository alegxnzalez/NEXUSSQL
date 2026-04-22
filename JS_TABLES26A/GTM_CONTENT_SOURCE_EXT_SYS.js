// GTM_CONTENT_SOURCE_EXT_SYS.js

window.GTM_CONTENT_SOURCE_EXT_SYS = {
  "tables": {
    "GTM_CONTENT_SOURCE_EXT_SYS": {
      "description": "Specifies additional configuration options for retrieving the source from a content provider.",
      "columns": {
        "GTM_CONTENT_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTENT_SOURCE_CONFIG",
          "info": "Specifies the unique identifier for the GTM Content Source."
},
        "SOURCE_CONFIG_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTENT_SOURCE_CONFIG",
          "info": "Specifies the Id given for the source configuration."
},
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "Specifies the unique identifier for an external system."
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