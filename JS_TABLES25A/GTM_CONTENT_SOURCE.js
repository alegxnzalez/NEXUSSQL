// GTM_CONTENT_SOURCE.js

window.GTM_CONTENT_SOURCE = {
  "tables": {
    "GTM_CONTENT_SOURCE": {
      "columns": {
        "GTM_CONTENT_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "GTM_CONTENT_SOURCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SOURCE_NAME": {
          "type": "VARCHAR2(128)",
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
        }
      },
      "fk_tables": [
        "GTM_CONTENT_SET",
        "GTM_CONTENT_SOURCE_CONFIG",
        "GTM_CONTENT_SOURCE_DATA_TYPE",
        "GTM_DATA_LOAD_TYPE",
        "GTM_DATA_VERSION"
      ]
    }
  }
};
