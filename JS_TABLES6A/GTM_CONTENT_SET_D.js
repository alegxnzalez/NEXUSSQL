// GTM_CONTENT_SET_D.js

window.GTM_CONTENT_SET_D = {
  "tables": {
    "GTM_CONTENT_SET_D": {
      "columns": {
        "GTM_CONTENT_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTENT_SET"
        },
        "CONTENT_SET_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTENT_SET"
        },
        "CONTENT_SET_DETAIL_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "IS_UPDATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "PARENT_SET_DETAIL_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "AVAILABLE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "SOURCE_DATA_TYPE": {
          "type": "VARCHAR2(40)",
          "nullable": true
        },
        "SOURCE_COUNTRY_ID": {
          "type": "VARCHAR2(3)",
          "nullable": true
        },
        "GTM_CONTENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTENT_TYPE"
        },
        "URL": {
          "type": "VARCHAR2(1024)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "DATA_FILE": {
          "type": "VARCHAR2(255)",
          "nullable": true
        },
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "GTM_DATA_LOAD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_DATA_LOAD"
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
        "GTM_CONTENT_SET_D_ATTR"
      ]
    }
  }
};
