// STYLESHEET_CONTENT.js

window.STYLESHEET_CONTENT = {
  "tables": {
    "STYLESHEET_CONTENT": {
      "columns": {
        "STYLESHEET_CONTENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "STYLESHEET_CONTENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "CLOB_CONTENT": {
          "type": "CLOB",
          "nullable": true
        },
        "USED_FOR_VIEW": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "USED_FOR_EDIT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Release ID - full release string "
        },
        "MEDIA_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "info": "Used to identify the contents of the stylesheet. The default value is application/xslt+xml."
        }
      },
      "fk_tables": [
        "STYLESHEET_PROFILE",
        "STYLESHEET_PROFILE_LOCALE"
      ]
    }
  }
};
