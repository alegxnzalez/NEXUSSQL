// ACTION_DEF_ARG.js

window.ACTION_DEF_ARG = {
  "tables": {
    "ACTION_DEF_ARG": {
      "columns": {
        "ACTION_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACTION_DEF"
        },
        "ARG_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION"
        },
        "ARG_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "P",
            "T",
            "D",
            "F",
            "B"
          ]
        },
        "IS_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "QUERY_TABLE"
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
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
