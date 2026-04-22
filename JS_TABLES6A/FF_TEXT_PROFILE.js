// FF_TEXT_PROFILE.js

window.FF_TEXT_PROFILE = {
  "tables": {
    "FF_TEXT_PROFILE": {
      "columns": {
        "FF_TEXT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "FF_TEXT_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "FF_TEXT_PROFILE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "FF_TEXT_PROFILE_QUAL"
        },
        "IS_COMPATIBLE": {
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
        }
      },
      "fk_tables": [
        "FF_TEXT_PROFILE_D"
      ]
    }
  }
};
